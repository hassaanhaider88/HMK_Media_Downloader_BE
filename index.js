require('dotenv').config();
const express = require('express');
var YTRouter = require('./routes/youtubeRouter.js');
var TWTRouter = require('./routes/twiterRouter.js');
var TTRouter = require('./routes/tiktokRouter.js');
var InstagramRouter = require('./routes/Instagram.js')
var FaceBookRouter = require('./routes/faceBook.js');
const cors = require('cors');
const app = express();
const Port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('index is working ......')
});
app.use('/download/tiktok',TTRouter);
app.use('/download/youtube', YTRouter); //https://www.youtube.com/watch?v=0HuOyleXVwk
app.use('/download/twitter',TWTRouter);
app.use('/download/instagram',InstagramRouter);
app.use('/download/facebook',FaceBookRouter)
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
module.exports = app;