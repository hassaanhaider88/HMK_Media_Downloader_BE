var express = require('express');
var router = express.Router();
const { likee} = require("nayan-media-downloader");
const { igdl } = require('btch-downloader')

router.post('/',async (req,res)=>{
try {
  const url = req.body.url;
  const data = await igdl(url)
  res.status(200).jsonp(data)
} catch (error) {
  res.status(500).json({mes:'someThing went worng...'})
}
})

module.exports = router;

