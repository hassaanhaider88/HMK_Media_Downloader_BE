var express = require('express');
var router = express.Router();
const { ytdown } = require("nayan-media-downloader");

router.post('/' ,async (req,res)=>{
  try {
    let URL = await ytdown(req.body.url);
      res.status(200).json(URL)
  } catch (error) {
res.status(500).json({mes:'something went wrong...'})    
  }

})

module.exports = router;

// var express = require('express');
// var router = express.Router();
// const { ytdown } = require("nayan-media-downloader");

// router.post('/', async (req, res) => {
//   console.log('Request received:', req.body.url); // Log the incoming URL
//   try {
//     let URL = await ytdown(req.body.url);
//     console.log('Response from ytdown:', URL); // Log the response from ytdown
//     if (Array.isArray(URL) && URL.length === 0) {
//       console.warn('Warning: ytdown returned an empty array'); // Warn if it's empty
//     }
//     res.status(200).json(URL);
//   } catch (error) {
//     console.error('Error occurred:', error); // Log any errors
//     res.status(500).json({ mes: 'something went wrong...' });
//   }
// });

// module.exports = router;
