const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();

const YTRouter = require('./routes/youtubeRouter.js');
const TWTRouter = require('./routes/twiterRouter.js');
const TTRouter = require('./routes/tiktokRouter.js');
const InstagramRouter = require('./routes/Instagram.js');
const FaceBookRouter = require('./routes/faceBook.js');

const app = express();
const Port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('your APIs are working  Happy Coding ......');
});

app.use('/api/tiktok', TTRouter);
app.use('/api/youtube', YTRouter);
app.use('/api/twitter', TWTRouter);
app.use('/api/instagram', InstagramRouter);
app.use('/api/facebook', FaceBookRouter);

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
});
