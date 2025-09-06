import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TaskManager')

def lambda_handler(event, context):
    user_id = event['pathParameters']['userId']
    task_id = event['pathParameters']['taskId']

    try:
        response = table.get_item(
            Key={
                'UserId': user_id,
                'TaskId': task_id
            }
        )
        item = response.get('Item')
        if not item:
            return {
                'statusCode': 404,
                'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
                'body': json.dumps({'message': 'Task not found'})
            }
        return {
            'statusCode': 200,
          'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
            'body': json.dumps(item)
        }
    except Exception as e:
        return {
            'statusCode': 500,
       'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
            'body': json.dumps({'error': str(e)})
        }
