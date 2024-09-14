const express = require('express');
var YTRouter = require('./routes/youtubeRouter.js');
// var FSRouter  = require('./routes/fsRouter.js');
var TWTRouter = require('./routes/twiterRouter.js');
var TTRouter = require('./routes/tiktokRouter.js');
var InstagramRouter = require('./routes/Instagram.js')
var FaceBookRouter = require('./routes/faceBook.js')
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index')
});

app.use('/download/tiktok',TTRouter);
app.use('/download/youtube', YTRouter);
app.use('/download/twitter',TWTRouter);
app.use('/download/instagram',InstagramRouter);
app.use('/download/facebook',FaceBookRouter)
//   // https://youtube.com/shorts/El5tSoMeRDw?si=rIN7qFy-6dV5exy1


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



