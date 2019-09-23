# AWSLambdaDemo
lambda function demo

# GetRandomMessage
    - Integrate with API GW
    - Transform string response to JSON using mapping template of integration response in API GW.
    - Later use this lambda function to demo VPC lambda.

# GreetMe
    - This lambda function uses pathparameters and querystring parameters.
    - Request Validator - Query string validator to make lang query string mandatory from API GW.

# Calculator
    -Request :
        Custom lambda Request
            {
                'operation' : 'add',
                'input':{
                    'operand1': 3,
                    'operand2 : 5
                }
            }
        API GW Request
            Pathparameter: operation
            Body:
            {
                num1: 5,
                num2: 2
            }
    -Response:
        Lambda Response:
            {
                "statusCode": 200,
                "body": "8"
            }
        API GW Response:
           "result": "8"

    - This lambda is to showcase working with custom event. Where API GW will send the operation as path parameter and only the operands as body of the event object.
    - Request Body Mapping
        . This will be done from Integration Request -> mappping template of API GW.
        . We will use Apache Velocity template here to map the API GW event to lambda custom event.
        . apache velocity template documentation - https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
    - Response Mapping
        . Like Request mapping we can do response mapping as well from Integration Response section of API GW.
        . Handle CORS
            - by adding new header "Access-Control-Allow-Origin" from Method Response section of API GW.
            - by adding '*' as value of the newly added header from Integration Response section of API GW.
    - Request Validation by using API GW Models and JSON schema.
        . We will create a JSON schema model and attach with the http method from Method Request section of API GW.
    - Request Body Mapping using API GW Models and JSON schema
        . We will create a JSON schema model and selecting the model to the http method from the Integration Request -> Mapping Template section of API GW.
        . We will modify the apache velocity template to use the newly added model.





