import Link from 'next/link';

function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-x-4">
        <Link href="/login"
		className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
        </Link>
        <Link href="/register"
		className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register
        </Link>
      </div>
    </div>
  );
}

export default Home;

