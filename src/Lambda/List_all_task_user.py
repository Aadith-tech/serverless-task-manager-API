import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('TaskManager')

def lambda_handler(event, context):
    user_id = event['pathParameters']['userId']

    try:
        response = table.query(
            KeyConditionExpression=boto3.dynamodb.conditions.Key('UserId').eq(user_id)
        )


        items = response.get('Items', [])
        if not items:
            return {
                'statusCode': 404,
                'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
                'body': json.dumps({'message': 'No tasks found for the user'})
            }

        return {
            'statusCode': 200,
            'headers': {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        },
            'body': json.dumps(items)
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
