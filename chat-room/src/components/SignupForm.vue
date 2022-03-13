<template>
	<form @submit.prevent="handleSubmit">
		<label> User Name:</label>
		<input type="text" required placeholder="User Name" v-model="displayName" />

		<label> Email:</label>
		<input type="email" required placeholder="Email" v-model="email" />

		<label> Password:</label>
		<input type="password" required placeholder="Password" v-model="password" />

		<button>Sign Up</button>
	</form>
</template>

<script>
import { ref } from "vue";
export default {
	name: "SignupForm",
	setup(props) {
		// Refs binded to form input fields
		const displayName = ref("");
		const email = ref("");
		const password = ref("");

		// Function to handle form submissions
		const handleSubmit = () => {
			console.log({
				DN: displayName.value,
				Email: email.value,
				PS: password.value,
			});
		};
		return { displayName, email, password, handleSubmit };
	},
};
</script>

<style></style>
