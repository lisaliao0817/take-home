import boto3
import json

client = boto3.client('iot-data', region_name='us-east-1', endpoint_url='https://a1r0n5id00d4c7-ats.iot.us-east-2.amazonaws.com')

response = client.publish(
    topic='sdk/test/python',
    qos=0,
    payload=json.dumps({'message': 'Hello World!'})
)

print(response)