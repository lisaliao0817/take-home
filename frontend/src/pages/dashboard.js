import React from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const router = useRouter();

  const connectToRobot = () => {
    router.push('/stream');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={connectToRobot}
      >
        Connect to Robot
      </button>
    </div>
  );
};

export default Dashboard;
