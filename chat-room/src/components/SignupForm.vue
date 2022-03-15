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
import useSignup from "../composables/useSignup";
import { useRouter } from "vue-router";
export default {
  name: "SignupForm",
  setup() {
    // Pull out error and signup function from useSignup
    const { error, signup } = useSignup();

    // Init router for redirecting user to the home page after a successful signup
    const router = useRouter();

    // Refs binded to form input fields
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    // Function to handle form submissions
    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      // Redirect user to home page after successful signup
      router.push("/");
    };
    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
