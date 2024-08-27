export const configLambda = new sst.aws.Function("ConfigLambda", {
  url: true,
  handler: "apps/config-lambda/src/lambda.handler",
  runtime: aws.lambda.Runtime.NodeJS20dX,
});
