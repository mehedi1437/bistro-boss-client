import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import router from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import {
  QueryClient,
  QueryClientProvider,
  
} from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
          <Toaster/>
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvider>
  </div>
);
