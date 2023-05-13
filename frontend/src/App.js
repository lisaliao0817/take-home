import './App.css';

function App() {
	return (
		<div class="container">
			<h2>User Registration</h2>
			<form id="registrationForm" action="#" method="post">
				<div class="form-group">
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" required />
				</div>
				<div class="form-group">
					<label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
				</div>
				<div class="form-group">
					<button type="submit" class="btn">Register</button>
				</div>
			</form>
			<h2>User Login</h2>
			<form id="loginForm" action="#" method="post">
				<div class="form-group">
					<label for="loginUsername">Username:</label>
					<input type="text" id="loginUsername" name="loginUsername" required />
				</div>
				<div class="form-group">
					<label for="loginPassword">Password:</label>
					<input type="password" id="loginPassword" name="loginPassword" required />
				</div>
				<div class="form-group">
					<button type="submit" class="btn">Login</button>
				</div>
			</form>
		</div>
	);
}

export default App;
