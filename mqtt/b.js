var mqtt = require('mqtt');
var options = {
    port: 10769,
    host: 'mqtt://m12.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'aaabhffz',
    password: 'EqeHDNIXN',
    keepalive: 60,
    reconnectPeriod: 1000,
    protocolId: 'MQIsdp',
    protocolVersion: 3,
    clean: true,
    encoding: 'utf8'
};
var client = mqtt.connect('mqtt://m12.cloudmqtt.com', options);

client.on('connect', function() {
    console.log('Client B connected')
    // client subcribe topic /client-b/sub
    client.subscribe('/client-b/sub')
    // publish gói tin 'Hello from client B' đến topic /client-a/sub
    client.publish('/client-a/sub', 'Hello from client B')
})

client.on('message', function(topic, message) {
    // in ra màn hình console 1 message ở định dạng string
    console.log(message.toString())
    // đóng kết nối của client
    client.end()
})
console.log('Client B started')