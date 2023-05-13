import styles from '../styles/globals.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<h2>User Registration</h2>
			<form id="registrationForm" action="#" method="post">
				<div className={styles.formGroup}>
					<label for="username">Username:</label>
					<input type="text" id="username" name="username" required />
				</div>
				<div className={styles.formGroup}>
					<label for="password">Password:</label>
					<input type="password" id="password" name="password" required />
				</div>
				<div className={styles.formGroup}>
					<button type="submit" className={styles.btn}>Register</button>
				</div>
			</form>
			<h2>User Login</h2>
			<form id="loginForm" action="#" method="post">
				<div className={styles.formGroup}>
					<label for="loginUsername">Username:</label>
					<input type="text" id="loginUsername" name="loginUsername" required />
				</div>
				<div className={styles.formGroup}>
					<label for="loginPassword">Password:</label>
					<input type="password" id="loginPassword" name="loginPassword" required />
				</div>
				<div className={styles.formGroup}>
					<button type="submit" className={styles.btn}>Login</button>
				</div>
			</form>
		</div>
	)
}
