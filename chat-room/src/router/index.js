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
  }
  // If the user is not null, let them conintue to the chatroom page
  next();
};

// Route guard for checking if a user is logged in
const isAuthorized = (to, from, next) => {
  // Init user to the current user returned back from the Firebase object, projectAuth, currentUser method.
  let user = projectAuth.currentUser;

  // If the user is not null, redirect them to the chatroom page
  if (user) {
    next({ name: "Chatroom" });
  }
  // If the user is not null, let them conintue to the welcome page
  next();
};

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: isAuthorized,
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
