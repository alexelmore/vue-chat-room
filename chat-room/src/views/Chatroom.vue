<template>
  <div class="container">
    <Navbar @logout="logOut" />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import { useRouter } from "vue-router";

export default {
  name: "Chatroom",
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    // Init router for redirecting user to the home page after a successful logout
    const router = useRouter();

    // Function that redirects user to the home page after they are logged out
    const logOut = () => {
      router.push({ name: "Welcome" });
    };
    return { logOut };
  },
};
</script>
