const moment = require('moment');

var greetings = {
    'en' : 'Hello',
    'fr' : 'Bonjour',
    'hi' : 'Namaste',
    'es' : 'Hola',
    'pt' : 'ola',
    'it' : 'Ciao',
    'de' : 'Hallo'
};

exports.handler = async (event) => {
    let name = event.pathParameters.name;
    let {lang, ...info} = event.queryStringParameters;

    let message = `${greetings[lang] ? greetings[lang] : greetings['en']} ${name}`;

    let response = {
        message: message,
        info: info,
        timestamp: moment().unix()
    };
    return {
        statusCode: 200,
        // headers :{
        //     "Access-Control-Allow-Origin": "*"
        // },
        body: JSON.stringify(response)
    };
};