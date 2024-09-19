import express  from 'express';
var router = express.Router();
import pkg from 'nayan-media-downloader';
const { ytdown } = pkg;

router.post('/' ,async (req,res)=>{
  try {
    let URL = await ytdown(req.body.url);
      res.status(200).json(URL)
  } catch (error) {
res.status(500).json({mes:'something went wrong...'})    
  }

})

export default  router;
