import { IoTDataPlaneClient, PublishCommand, IotDataPlanePaginationConfiguration } from "@aws-sdk/client-iot-data-plane";

export default async function handler(req, res) {
	const client = new IoTDataPlaneClient({
		region: process.env.AWS_REGION,
		credentials: {
			accessKeyId: process.env.AWS_ACCESS_KEY_ID,
			secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
		},
		endpoint: process.env.AWS_IOT_ENDPOINT
	});

	const publishCommand = new PublishCommand({
		topic: 'sdk/test/python',
		payload: JSON.stringify({ command: 'turnOn' }),
		qos: 0
	});

	try {
		await client.send(publishCommand);

		const params = {
			topic: 'sdk/test/python',
			qos: 0,
		};

		const dataStream = client.subscribe(params, {
			minSize: 0,
			maxSize: 1024,
			paginationConfig: new IotDataPlanePaginationConfiguration(),
		});

		res.status(200).json({ message: dataStream });
	} catch (error) {
		console.error("Error in AWS IoT publish: ", error);
		res.status(500).json({ error: 'Error sending command to IoT device' });
	}
}
