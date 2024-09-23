let express  = require('express');
var router = express.Router();

const { ytdown } = require('nayan-media-downloader');

router.post('/' ,async (req,res)=>{
  try {
    let URL = await ytdown(req.body.url);
      res.status(200).json(URL)
  } catch (error) {
res.status(500).json({mes:'something went wrong...'})    
  }

})

module.exports = router;
