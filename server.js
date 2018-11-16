const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const request = require('request');

const app = express();
const securePort = process.env.EXPRESS_PORT || 7070;
const port = process.env.EXPRESS_PORT || 4333;
const credentials = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
const spoofCtrl = require('./controllers/spoofCtrl.js');

//controllers
var corsOptions = {
	origin: (origin, callback) =>  {
	  callback(null, true)
	}
}

app.use(cors(corsOptions))
app.use(express.static(__dirname));

// Endpoints
app.get('/', (req, res) => {
	//path to file you're serving
    res.sendFile(path.join(__dirname + '/test-pages/pbjs_testPage.html'));
})
app.get('/demand-manager', (req, res) => {
	//path to file you're serving
    res.sendFile(path.join(__dirname + '/test-pages/managed_config_prebid.html'));
})
app.get('/prebid-video', (req, res) => {
	res.sendFile(path.join(__dirname + '/test-pages/prebid-video.html'));
})

// app.get('/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml', (req, res) => {
//   res.sendFile(path.join(__dirname + '/video_creative_spoof.xml'));
// })

app.use('/wrapper', express.static('./wrapper.js'));
app.use('/slowlane.json', spoofCtrl.slowlane)
app.use('/auction', spoofCtrl.auction)
app.use('/optimized_spoof', spoofCtrl.optimized)
app.use('/video_spoof', spoofCtrl.video_spoof)
app.use('/creative/71739d10-c5f3-4e72-aa21-4f05d6658680.xml', spoofCtrl.video_creative)

const secure = https.createServer(credentials, app);
const notSecure = http.createServer(app);

secure.listen(securePort, err => {
  if (err) return console.log(err)
    console.log('Secured localhost started on', securePort)
});

notSecure.listen(port, err => {
  if (err) return console.log(err)
    console.log('localhost started on', port)
});