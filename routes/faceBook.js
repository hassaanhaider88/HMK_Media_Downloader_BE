import express  from 'express';
var router = express.Router();
import { fbdown } from 'btch-downloader';

router.post('/',async (req,res)=>{
  console.log(req.body.url)
  try {
    const url = req.body.url;
    const data = await fbdown(url)
    res.status(200).json(data)
  } catch (error) {
  res.status(500).json({mes:'someThing went worng...'})
  }
})

export default  router;
// module.exports = router;