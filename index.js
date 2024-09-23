let dotenv = require('dotenv');
let express  = require('express');
let serverless = require('serverless-http');
let YTRouter  = require('./routes/youtubeRouter.js');
let TWTRouter  = require('./routes/twiterRouter.js');
let TTRouter  = require('./routes/tiktokRouter.js');
let InstagramRouter  = require('./routes/Instagram.js');
let FaceBookRouter  = require('./routes/faceBook.js');

let cors  = require('cors');
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
app.listen(Port, () => {
    console.log(`Server is running on http://localhost:${Port}`);
  });
module.exports = serverless(app);




// let dotenv = require("dotenv");
// let express = require("express");
// let serverless = require("serverless-http");
// let cors = require("cors");

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// let { ttdl } = require("btch-downloader");
// let { twitterdown } = require("nayan-media-downloader");
// let { fbdown } = require("btch-downloader");
// const { ytdown } = require("nayan-media-downloader");

// app.get("/", (req, res) => {
//   res.send("Your APIs are working. Happy Coding!");
// });

// app.post("/tiktok", async (req, res) => {
//   try {
//     const url = req.body.url;
//     const data = await ttdl(url);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ mes: "someThing went worng..." });
//   }
// });

// app.post("/twitter", async (req, res) => {
//   try {
//     let URL = await twitterdown(req.body.url);
//     res.status(200).json(URL);
//   } catch (error) {
//     res.status(500).json({ mes: "something went wrong..." });
//   }
// });

// app.post("/youtube", async (req, res) => {
//   try {
//     let URL = await ytdown(req.body.url);
//     res.status(200).json(URL);
//   } catch (error) {
//     res.status(500).json({ mes: "something went wrong..." });
//   }
// });

// app.post("/facebook", async (req, res) => {
//   console.log(req.body.url);
//   try {
//     const url = req.body.url;
//     const data = await fbdown(url);
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ mes: "someThing went worng..." });
//   }
// });

// app.listen(3000, () => {
//   console.log("server is running");
// });
// module.exports = app;



