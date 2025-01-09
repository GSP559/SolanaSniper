const express = require('express');
const path = require('path');
const crypto = require('crypto');
const router = express.Router();

// In-memory storage for download tokens (consider using a database for production)
const downloadTokens = new Map();

router.post('/api/download/:version', (req, res) => {
  const { version } = req.params;
  const { downloadToken } = req.body;
  const referer = req.get('Referer');

  // Check if the request is coming from the Investor's Boardroom page
  if (!referer || !referer.includes('/546865496E766573746F7273426F617264726F6F6D')) {
    return res.status(403).json({ error: 'Access denied' });
  }

  // Validate the version
  const validVersions = ['windows', 'macos', 'linux'];
  if (!validVersions.includes(version)) {
    return res.status(400).json({ error: 'Invalid version' });
  }

  // Generate a unique download URL
  const downloadId = crypto.randomBytes(16).toString('hex');
  const downloadUrl = `/download/${downloadId}`;

  // Store the download token and associated file
  downloadTokens.set(downloadId, {
    file: `HandsomeSniper_${version}.zip`,
    token: downloadToken,
    createdAt: Date.now()
  });

  // Return the download URL to the client
  res.json({ downloadUrl });
});

router.get('/download/:downloadId', (req, res) => {
  const { downloadId } = req.params;
  const downloadInfo = downloadTokens.get(downloadId);

  // Check if the download ID is valid
  if (!downloadInfo) {
    return res.status(404).send('Download not found');
  }

  // Check if the download token has expired (e.g., after 5 minutes)
  if (Date.now() - downloadInfo.createdAt > 5 * 60 * 1000) {
    downloadTokens.delete(downloadId);
    return res.status(410).send('Download link expired');
  }

  // Serve the file
  const filePath = path.join(__dirname, 'downloads', downloadInfo.file);
  res.download(filePath, downloadInfo.file, (err) => {
    if (err) {
      console.error('Download error:', err);
      res.status(500).send('Error during file download');
    }
    // Remove the used download token
    downloadTokens.delete(downloadId);
  });
});

module.exports = router;