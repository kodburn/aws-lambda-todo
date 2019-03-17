const AWS = require("aws-sdk");
const uuid = require("uuid")
const client = new AWS.DynamoDB.DocumentClient();
// hello
// dwaw
module.exports.run = async (event) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "todos",
    Item: {
      id: uuid(),
      text: data.text,
      checked: false
    }
  };

  await client.put(params).promise();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}
