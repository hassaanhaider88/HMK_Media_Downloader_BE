import express  from 'express';
var router = express.Router();
import { ttdl } from 'btch-downloader';

router.post('/',async (req,res)=>{
  try {
const url = req.body.url;
const data = await ttdl(url)
res.status(200).json(data)
  } catch (error) {
  res.status(500).json({mes:'someThing went worng...'})
  }
})

export default  router;
