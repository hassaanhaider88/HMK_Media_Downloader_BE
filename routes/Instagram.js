import express  from 'express';
var router = express.Router();
import pkg from 'nayan-media-downloader';
const { likee }  = pkg;
// import from "nayan-media-downloader";

router.post('/',async (req,res)=>{
try {
  const url = req.body.url // past url
      likee(url).then(data => { 
   res.status(200).json(data) 
 });
} catch (error) {
  res.status(500).json({mes:'someThing went worng...'})
}
})

export default  router;

