const AWS = require('aws-sdk')

const getTasks = async (event) =>{
    try{
        const dynamodb = new AWS.DynamoDB.DocumentClient()
        const result = await dynamodb.scan({
            TableName:"TaskTable"
        }).promise()
        const tasks = result.Items
        console.log(tasks)
        return {
            status:200,
            body: {
                tasks
            }
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    getTasks
}
