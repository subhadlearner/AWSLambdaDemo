exports.handler = async (event, context) => {
    
    let message = event;

    //Lambda Version -1 
    message.LambdaName = context.functionName;
    message.LambdaVersion = context.functionVersion;

    //Lambda Version - 2
    message.invokedFunctionArn  = context.invokedFunctionArn;
    message.memoryLimitInMB  = context.memoryLimitInMB;

    //Lambda Version - 3
    message.awsRequestId  = context.awsRequestId;

    //Lambda Version - 4
    message.logGroupName = context.logGroupName;
    message.logStreamName = context.logStreamName;

    //Lambda Version - $Latest
    message.remainingTime = `Remaining time: ${context.getRemainingTimeInMillis()} ms`;

    return message;
};