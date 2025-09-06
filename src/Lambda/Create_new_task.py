import json
import boto3
import uuid
from datetime import datetime

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TaskManager')

def lambda_handler(event, context):

    if event['httpMethod'] == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': json.dumps({'message': 'CORS preflight passed'})
        }

    try:

        user_id = event['pathParameters']['userId']


        body = json.loads(event['body'])


        required_fields = ['title', 'description', 'dueDate']
        for field in required_fields:
            if field not in body:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'POST, OPTIONS',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
                    },
                    'body': json.dumps({'error': f'Missing required field: {field}'})
                }


        task_id = str(uuid.uuid4())
        title = body['title']
        description = body['description']
        due_date = body['dueDate']


        created_at = datetime.utcnow().isoformat()


        table.put_item(
            Item={
                'UserId': user_id,
                'TaskId': task_id,
                'Title': title,
                'Description': description,
                'DueDate': due_date,
                'CreatedAt': created_at,
                'Status': 'pending'
            }
        )

        return {
            'statusCode': 201,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': json.dumps({
                'message': 'Task created successfully!',
                'task': {
                    'UserId': user_id,
                    'TaskId': task_id,
                    'Title': title,
                    'Description': description,
                    'DueDate': due_date,
                    'CreatedAt': created_at,
                    'Status': 'pending'
                }
            })
        }

    except Exception as e:

        return {
            'statusCode': 500,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            'body': json.dumps({'error': str(e)})
        }
