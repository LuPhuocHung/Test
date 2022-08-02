const  mqtt = require('mqtt');
const  settings = {
    mqttServerUrl : "localhost", 
    port : 18833,
    topic : "myTopic"
    }
const  client  = mqtt.connect('mqtt://' + settings.mqttServerUrl + ":" + settings.port);
client.on('connect', function () {
setInterval(function() {
const  message = "Hello mqtt";
client.publish(settings.topic, message);
console.log('Sent ' + message + " to " + settings.topic);
}, 1000);
});