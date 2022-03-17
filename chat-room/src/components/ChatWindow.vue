<template>
  <div class="chat-window">
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.is" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceTo, formatDistanceToNow } from "date-fns";
import { computed } from "vue";
export default {
  name: "ChatWindow",
  setup() {
    // Pull out documents and error properties from our getCollection composable
    const { documents, error } = getCollection("messages");
    // Computed property that returns our docs with a neatly formatted created at data
    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((doc) => {
          let time = formatDistanceToNow(doc.createdAt.toDate());
          return { ...doc, createdAt: time };
        });
      }
    });
    return {
      documents,
      error,
      formattedDocuments,
    };
  },
};
</script>

<style scoped>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
