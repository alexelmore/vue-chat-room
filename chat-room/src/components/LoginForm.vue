<template>
  <form @submit.prevent="handleSubmit">
    <label> Email:</label>
    <input type="email" required placeholder="Email" v-model="email" />

    <label> Password:</label>
    <input type="password" required placeholder="Password" v-model="password" />

    <button>Log In</button>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "../composables/useLogin";

export default {
  name: "LoginForm",
  setup(props, context) {
    // Pull out error and login function from useLogin composable
    const { error, login } = useLogin();
    // Refs binded to form input fields
    const email = ref("");
    const password = ref("");

    // Async function to handle form submissions and login the user
    const handleSubmit = async () => {
      console.log({
        Email: email.value,
        PS: password.value,
      });
      // Await the login function
      await login(email.value, password.value);

      // Check if there is not a value for error, if no error, emit a custom event, notifiying the parent component that a user has logged in
      if (!error.value) {
        context.emit("login");
      }
    };
    return { email, password, handleSubmit, error };
  },
};
</script>

<style></style>
