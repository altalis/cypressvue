const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(
      {
        "api": true
      }
    )
  );
});

module.exports = router;
