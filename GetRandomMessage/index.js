var mesagesArr = [
    "Hello World!!",
    "Hello Serverless!!",
    "Hello Lambda!!",
    "Hello API Gateway!!",
    "Hello DynamoDB!!",
    "Hello S3!!",
    "Hello SQS!!",
    "Hello SNS!!",
    "Hello Cognito!!",
    "Hello Kinesis!!"
];

exports.handler = async (event) => {
    let message = mesagesArr[Math.floor(Math.random()*10)];
    const response = {
        statusCode: 200,
        body: message,
    };
    return response;
};