<template>
  <form @submit.prevent="handleSubmit">
    <label> User Name:</label>
    <input type="text" required placeholder="User Name" v-model="displayName" />

    <label> Email:</label>
    <input type="email" required placeholder="Email" v-model="email" />

    <label> Password:</label>
    <input type="password" required placeholder="Password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "../composables/useSignup";

export default {
  name: "SignupForm",
  setup(props, context) {
    // Pull out error and signup function from useSignup
    const { error, signup } = useSignup();

    // Refs binded to form input fields
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    // Asyn function to handle form submissions and to signup the user
    const handleSubmit = async () => {
      // Await the signup function
      await signup(email.value, password.value, displayName.value);
      // Check if there is not a value for error, if no error, emit a custom event, notifiying the parent component that a user has signed up
      if (!error.value) {
        context.emit("signup");
      }
    };
    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
