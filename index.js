import dotenv from 'dotenv';
import express  from 'express';
import YTRouter  from './routes/youtubeRouter.js';
import TWTRouter  from './routes/twiterRouter.js';
import TTRouter  from './routes/tiktokRouter.js';
import InstagramRouter  from './routes/Instagram.js';
import FaceBookRouter  from './routes/faceBook.js';
import cors  from 'cors';
dotenv.config()
const app = express();
const Port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send('your APIs are working  Happy Coding ......')
});
app.use('/api/tiktok',TTRouter);
app.use('/api/youtube', YTRouter); //https://www.youtube.com/watch?v=0HuOyleXVwk
app.use('/api/twitter',TWTRouter);
app.use('/api/instagram',InstagramRouter);
app.use('/api/facebook',FaceBookRouter)
// app.listen(Port, () => {
//   console.log(`Server is running on http://localhost:${Port}`);
// });
export default app;
// module.exports = app;