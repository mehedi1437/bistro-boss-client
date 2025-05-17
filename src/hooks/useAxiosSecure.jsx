import axios from "axios";
import useAuth from "./useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://bistro-boss-server-sooty-psi.vercel.app",
});
const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  // ? request Interceptors to add authorization headers for
  // every call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("token");
      // console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // ? response interceptor 401 403 status
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      // console.log("Error from Axios interceptor response", error);
      if (error.response?.status === 401 || error.response?.status === 403) {
        // Logout the user or redirect to login page
        await logOut();
        toast.error("Session expired. Please login again.");
        navigate("/login");
        // logoutUser();
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
