import express  from 'express';
var router = express.Router();
import pkg from 'nayan-media-downloader';
const { twitterdown }  = pkg;
// import { twitterdown } from "nayan-media-downloader";

router.post('/',async (req,res)=>{
  try {
    let URL = await twitterdown(req.body.url)
  res.status(200).json(URL)
  } catch (error) {
    res.status(500).json({mes:'something went wrong...'})
  }
})

export default  router;

