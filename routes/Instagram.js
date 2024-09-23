let express  = require('express');
var router = express.Router();
// import pkg from 'nayan-media-downloader';
const { likee }  = require("nayan-media-downloader");
// import from ;

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

module.exports = router;

