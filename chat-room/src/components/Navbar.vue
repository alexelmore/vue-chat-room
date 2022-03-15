<template>
  <nav>
    <div v-if="user">
      <p>
        Hey there <strong>{{ user.displayName }}</strong
        >!
      </p>
      <p class="email">
        You are currently logged in under <u>{{ user.email }}</u>
      </p>
    </div>
    <button @click="handleLogout">Logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
export default {
  name: "Navbar",
  setup(props, context) {
    // Pull out error and logout function from useLogout composable
    const { error, logout } = useLogout();

    // Pull out user from getUser function
    const { user } = getUser();

    // Asyn function to handle logging out the user
    const handleLogout = async () => {
      // Await the logout function
      await logout();
      // Check if there is not a value for error, if no error, emit a custom event, notifiying the parent component that a user has logged out
      if (!error.value) {
        context.emit("logout");
      }
    };
    return {
      handleLogout,
      user,
    };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>
