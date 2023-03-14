import { Navigate } from "react-router-dom";

export default function LoginPrivateRoute({children}) {
  return (
        localStorage.getItem("email") ? children : Navigate({to: "/login"})
  )
}
