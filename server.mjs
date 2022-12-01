import express from 'express';
import path from "path";
const app = express()
const port = process.env.PORT || 5001;
const appName = "apiintegrationwithserver";

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.get('/weather',(userRequest,adminRespond)=>{
  let karachiWeather = {
    cityName : "karachi",
    temperature : "29",
    humidity : "24%",
    min : "28",
    max : "30"
  }
  // console.log(`${userRequest} is asking for weather`)
  console.log(userRequest)
  adminRespond.send(karachiWeather)
})


const _dirname = path.resolve();
app.get('/', express.static(path.join(_dirname, '/web')));
app.use('/', express.static(path.join(_dirname, "/web")))

// app.get("/water/food", (userRequest, adminRespond)=>{

//   console.log(`${userRequest.ip} want some water and food`)
//   adminRespond.send(`Here are some water and food for you`)
// })

app.listen(port, () => {
  console.log(`${appName} app listening on port ${port}`)
})