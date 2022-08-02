const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1883')
const topic = "testaedes123";
const message = "Hello World!!!!";

client.on('connect', () => {
    setInterval(() => {
        client.publish(topic, message);
        console.log('Message successfull!!!1', message);
    }, 5000)
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})