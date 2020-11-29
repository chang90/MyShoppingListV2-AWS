import { 
    APIGatewayProxyEvent, 
    APIGatewayProxyResult 
  } from "aws-lambda";

exports.lambdaRunningHandler = async (
    event: APIGatewayProxyEvent
  ): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);
    return {
      statusCode: 200,
      body: `aws-lambda API is running... Queries: ${queries}`
    }
  }