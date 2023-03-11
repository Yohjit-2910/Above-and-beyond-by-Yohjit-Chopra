const { SerialPort } = require('serialport')
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: '/dev/cu.usbmodem101', baudRate: 9600 }, false)
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = `/2110994798/command`;
const express = require('express');
const app = express();
const port1 = 5010;
const mongoose = require('mongoose');
const Device = require('./models/device');
mongoose.connect('mongodb+srv://Yohjit:2110994798@cluster0.7o5yej8.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true });//Username and Password
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.listen(port1, () => {
  console.log(`listening on port ${port1}`);
});
client.on('connect', () => {
  client.subscribe(topic);
  console.log('MQTT Successfully Connected To Id = ' + topic);
});
parser.on('data', data => {
  client.publish(topic, data, () => {
  });
});

// Function 1 = Creating Database 
client.on('message', function (topic, message) {
  let message2 = message.toString();
  const myArray = message2.split(" ");
  id = myArray[0];
  pirdata = myArray[1];
id == id;
data = pirdata;
const newDevice = new Device({
  id,
  data
});
newDevice.save(err => {
  return err
    ? console.log("Error " + error)
    : console.log("Device Saved");
});

});



// Function 2 = based on the ID the message is Passed 
client.on('message', function (topic, message) {
  let message2 = message.toString();
  const myArray = message2.split(" ");
  id = myArray[0];
  pirdata = myArray[1];

  Device.findOne({ "id": id }, (err, device) => {
    if (err) {
      console.log(err)
    }
    const { data } = device;
    data.push({ pirdata });
    device.data = data;
    device.save(err => {
      if (err) {
        console.log(err)
      }
      else
      {
        console.log("Message Send To Id " + id);
      }
    });
  });
});

