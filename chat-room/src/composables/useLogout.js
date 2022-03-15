import { ref } from "vue";
import { projectAuth } from "@/firebase/config";
const error = ref(null);
const logout = async () => {
  // Set error value to a default of null
  error.value = null;

  // try to log user out with Firebase projectAuth service
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.message);
    error.value = "Unable to logout right now";
  }
};

const useLogout = () => {
  return { error, logout };
};
export default useLogout;
