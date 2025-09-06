import json
import boto3
import logging

logger = logging.getLogger()
logger.setLevel(logging.INFO)

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TaskManager')

def lambda_handler(event, context):
    try:
        user_id = event['pathParameters']['userId']
        task_id = event['pathParameters']['taskId']

        logger.info(f"Received delete request for UserId: {user_id}, TaskId: {task_id}")

        response = table.delete_item(
            Key={
                'UserId': user_id,
                'TaskId': task_id
            },
            ReturnValues="ALL_OLD"
        )

        logger.info(f"DynamoDB delete response: {response}")


        if 'Attributes' not in response:
            logger.error(f"Task not found for UserId: {user_id}, TaskId: {task_id}")
            return {
                'statusCode': 404,
                "headers": {
                    "Access-Control-Allow-Headers": "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "DELETE"
                },
                'body': json.dumps({'error': 'Task not found so cannot delete'})
            }

        return {
            'statusCode': 200,
            "headers": {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE"
            },
            'body': json.dumps({'message': 'Task deleted successfully'})
        }

    except Exception as e:
        logger.error(f"Error deleting task: {str(e)}")
        return {
            'statusCode': 500,
            "headers": {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "DELETE"
            },
            'body': json.dumps({'error': str(e)})
        }
