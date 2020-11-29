import * as AWS from "aws-sdk";
import { PutItemInput } from "aws-sdk/clients/dynamodb";

AWS.config.update({region: 'ap-southeast-2'});

const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

const params: PutItemInput = {
    TableName: 'Customer',
    Item: {
        'CUSTOMER_ID' : {N: '001'},
        'CUSTOMER_NAME' : {S: 'Richard Roe'}
      }
};

exports.createCustomerHandler = (event: any, context: any, callback: Function) : void => {
    ddb.putItem(params, function(err, data) {
        if (err) {
          console.log("Error", err);
          callback(null, {
            statusCode: '500',
            body: err
        });
        } else {
          console.log("Success", data);
          callback(null, {
            statusCode: '200',
            body: "Success " + data
        })
        }
      });
  }