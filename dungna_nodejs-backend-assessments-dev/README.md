### Bnk Solutions's NodeJs backend Assessments
__Technologies__
- [NodeJs](https://nodejs.org/) Runtime environments version 12+
- [NestJS](https://nestjs.com/) Typescript framework to create rest service
- [Typeorm](https://typeorm.io/) ORM for typescript
- [Aedes](https://github.com/moscajs/aedes) mqtt server (artemis alternatives)
- [Mysql 5](https://dev.mysql.com/downloads/mysql/5.7.html) Database
- [MQTT client](https://github.com/mqttjs/MQTT.js) mqtt client
<hr>

#### General Information
There 3 services.

- **order-processor** service to simulate bank do transaction(you just do comssumming api)
- **client-service** Main api will create here
- **notification-service** mqtt message subscriber to simulate notify user when transaction are made

We are going to build simple services that interact each other via REST API and Via message bus (MQTT protocol).
To simulate money transference between accounts.

__Your task__
- Create apis in client service.
- Authenticate user
- Call to http://order-processor/process api to simulate the bank tranfer
- Save result into database
- push message to mqtt server for notification.
- subscribe mqtt topic to notify user.


__User stories__
|Requirements|User Story|Priority|
|---|---|---|
|User authentication|As an API consumer,  I should be able to login user with a username and password| HIGH|
||||
|Transfer Money from one account to another account|As an API consumer,  I should be able to create a transaction| HIGH|
||||
|Search for transactions for specific account|As an API consumer, I should be able to search for transaction by inputting the account id.| HIGH|
||||
|Get historical transactions data | As an API consumer, I should be able to look for transaction data from past periods| MEDIUM|
||||
|Notify User when transaction is made| As an user, I should be able to receive notification regarding to my any transaction| MEDIUM|
||||
|User logout|As an API consumer, I should be able to logout an user with with provided token| LOW|

## Requirements
* The server should be written in NodeJs/ NestJs and Typeorm. The client will consume RESTFUL APIs provided by the server.
* Follow coding best practices.
* Understanding of API Designs
* Understanding of NestJs, TypeOrm ...
* Show considerations for Speed, Efficiency, and Scalability in your APIs and Database design and coding
* Show how existing functions can be tested efficiently when introducing new feature

## Notes
* Ensure that you understand the requirements of the assignment before continuing.
* The Data submit to server have to be validated (hint: NestJs Pipes may be fit with this)
* Add in adequate comments to explain your codes. (If you need to write a documentation to explain your solution, please do so)
* Tell the consumer how to consume your API. Documentation is great, actual way to run your APIs are even greater.(hint: swagger is a popular one)
* Design and attach your .sql file when you submit your project.
* If additional setup is required, please update README.md that explains the steps to get the assignment working.
* Think about scaling your app. You do not need to implement it now.

### start order-processor service
```shell
$ cd order-processor
$ npm start
```
__check request and response__
```shell
curl --location --request POST 'localhost:6012/process' \
--header 'Content-Type: application/json' \
--data-raw '{
    "order": {
        "from": "1",
        "to": "2",
        "amount": "3000"
    }
}'
```

```json
{
    "from": "1",
    "to": "2",
    "amount": "3000",
    "orderId": "ry6363u30e",
    "isSuccess": false //status of transaction 
}
```

### start mqtt server
```shell
$ cd order-processor
$ npm run start-mqtt
```