import { useEffect, useState } from 'react';

const Stream = () => {
    const [loading, setLoading] = useState(false);
    const [streamMessage, setStreamMessage] = useState(null);

    const handleClick = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3000/api/stream', { method: 'POST' });
            const reader = res.body.getReader();
            const decoder = new TextDecoder();

            const readStream = async () => {
                while (true) {
                    const { done, value } = await reader.read();
                    if (done) {
                        reader.releaseLock();
                        break;
                    }
                    const message = decoder.decode(value, { stream: true });
                    console.log('Received message:', message);
                    setStreamMessage(message);
                }
            };

            readStream();
        } catch (error) {
            console.error('Error sending command to IoT device', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Live Streaming</h1>
            <div className="bg-gray-200 w-full h-96 flex justify-center items-center">
                <p>{streamMessage}</p>
            </div>
            <button
                onClick={handleClick}
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >{loading ? 'Loading...' : 'Send command'}</button>
        </div>
    );
};

export default Stream;
