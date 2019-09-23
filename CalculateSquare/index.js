const AWS = require('aws-sdk');
const lambda = new AWS.Lambda();

module.exports.handler = async (event) => {
    let num = event.number;

    var payload = {
        'operation': 'multiply',
        'input': {
            'operand1': num,
            'operand2': num
        }
    };

    var params = {
        FunctionName: 'Calculator',
        InvocationType: 'RequestResponse',  //Event | RequestResponse | DryRun
        'LogType': 'Tail', //None | Tail
        'Payload': JSON.stringify(payload)
    };

    let data = await lambda.invoke(params).promise(); //returns Payload ⇒ String

    let result = JSON.parse(data.Payload); //parsing to convert the string to JSON object

    return result.body; //the result from calculator is inside body. See reamde file for more details

};