<template>
	<form @submit.prevent="handleSubmit">
		<label> Email:</label>
		<input type="email" required placeholder="Email" v-model="email" />

		<label> Password:</label>
		<input type="password" required placeholder="Password" v-model="password" />

		<button>Log In</button>
	</form>
</template>

<script>
import { ref } from "vue";
export default {
	name: "LoginForm",
	setup(props) {
		// Refs binded to form input fields
		const email = ref("");
		const password = ref("");

		// Function to handle form submissions
		const handleSubmit = () => {
			console.log({
				Email: email.value,
				PS: password.value,
			});
		};
		return { email, password, handleSubmit };
	},
};
</script>

<style></style>
