<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>
        No account yet? <span @click="showLogin = false">Signup Instead</span>
      </p>
    </div>
    <div v-else>
      <SignupForm @signup="enterChat" />
      <p>
        Already have an account?
        <span @click="showLogin = true">Login Instead</span>
      </p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
export default {
  name: "Welcome",
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);

    // Init router for redirecting user to the chatroom page after a successful login or signup
    const router = useRouter();

    // Function that redirects a user to the chatroom page after they login or signup
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };
    return {
      showLogin,
      enterChat,
    };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.welcome button {
  margin: 20px auto;
}
</style>
