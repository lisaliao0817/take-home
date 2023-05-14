export default function Home() {
	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white p-8 shadow-md rounded-lg">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				<form>
					<div className="mb-4">
						<label htmlFor="username" className="block text-gray-700 font-bold mb-2">
							Username:
						</label>
						<input
							type="text"
							id="username"
							name="username"
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
							required
						/>
					</div>
					<div className="mb-4">
						<label htmlFor="password" className="block text-gray-700 font-bold mb-2">
							Password:
						</label>
						<input
							type="password"
							id="password"
							name="password"
							className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500"
							required
						/>
					</div>
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	)
}
