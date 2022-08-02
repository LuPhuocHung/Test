const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1883')
const topic = "testaedes123"

client.on('connect', function () {
  client.subscribe(topic );
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
//   client.end()
})