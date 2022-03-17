import { createRouter, createWebHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Chatroom from "../views/Chatroom.vue";
import { projectAuth } from "../firebase/config";

// Route guard for our user authorization
const requireAuth = (to, from, next) => {
  // Init user to the current user returned back from the Firebase object, projectAuth, currentUser method.
  let user = projectAuth.currentUser;

  // If the user is null, redirect them to the welcome page
  if (!user) {
    next({ name: "Welcome" });
    return;
  }
  // If the user is not null, let them conintue to the chatroom page
  next();
  return;
};
// Route guard for users
const requireNoAuth = (to, from, next) => {
  // Init user to the current user returned back from the Firebase object, projectAuth, currentUser method.
  let user = projectAuth.currentUser;

  // If the user is not null, redirect them to the chatroom page
  if (user) {
    next({ name: "Chatroom" });
    return;
  }
  // If the user is null, let them conintue to the welcome page
  next();
  return;
};
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth,
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
