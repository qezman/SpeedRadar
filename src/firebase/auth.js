import { signInWithEmailAndPassword, signOut, updatePassword } from 'firebase/auth';
import { auth } from '.';

function handleError(error) {
	return {
		message: error.code || error.message,
	};
}

// Sign in with email and password
export function emailPasswordLogin({ email, password }) {
	return new Promise((resolve, reject) => {
		try {
			signInWithEmailAndPassword(auth, email, password)
				.then((credentials) => {
					if (credentials?.user) {
						resolve({
							displayName: credentials.user.displayName,
							email: credentials.user.email,
							id: credentials.user.uid,
							image: credentials.user.photoURL,
							phone: credentials.user.phoneNumber,
						});
					} else {
						reject({
							message: 'Unable to login with provided credentials',
						});
					}
				})
				.catch((err) => {
					const error = handleError(err);
					reject(error);
				});
		} catch (err) {
			const error = handleError(err);
			reject(error);
		}
	});
}

// A function to logout a user
export function logout() {
	return new Promise((resolve, reject) => {
		try {
			signOut(auth)
				.then(() => {
					resolve({ message: 'Signed out successfully!' });
				})
				.catch((err) => {
					const error = handleError(err);
					reject(error);
				});
		} catch (err) {
			const error = handleError(err);
			reject(error);
		}
	});
}

// Change the user password
export function changePassword(password) {
	return new Promise((resolve, reject) => {
		try {
			if (!auth.currentUser)
				throw new Error('Authentication credentials were not provided!');
			updatePassword(auth.currentUser, password)
				.then(() => {
					resolve({
						message: 'Password updated successfully!',
					});
				})
				.catch((err) => {
					const error = handleError(err);
					reject(error);
				});
		} catch (err) {
			const error = handleError(err);
			reject(error);
		}
	});
}

/*
import {
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateEmail,
	updatePassword,
	updateProfile,
} from 'firebase/auth';

import { auth } from '.';;

// Send password reset link
export function resetPassword({ email }) {
	return new Promise((resolve, reject) => {
		try {
			sendPasswordResetEmail(auth, email)
				.then(() => {
					resolve({
						message:
							'A password reset email was sent to your email address. Follow the instructions ot continue.',
					});
				})
				.catch((err) => {
					const error = handleError(err);
					reject(error);
				});
		} catch (err) {
			const error = handleError(error);
			reject(error);
		}
	});
}

*/