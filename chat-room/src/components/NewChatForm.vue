<template>
  <form>
    <textarea
      placeholder="Type A Message & Click Enter to Submit It"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="error" class="error">{{ error }} blah</div>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
import { timestamp } from "../firebase/config";
export default {
  name: "NewChatForm",
  setup() {
    // Ref for message input value
    const message = ref("");

    // Pull out user from getUser function
    const { user } = getUser();

    // Pull out error and addDoc function from getUser function
    const { addDoc, error } = useCollection("messages");

    // Function to handle submission of form
    const handleSubmit = async () => {
      // Chat object
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      try {
        await addDoc(chat);
        if (!error.value) {
          message.value = "";
        }
      } catch (err) {
        error.value = err.message;
      }
    };
    return {
      message,
      handleSubmit,
      error,
    };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>
