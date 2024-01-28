import { jwtDecode } from "jwt-decode";

export function UserRole() {
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken);
      
      // Ensure that the decoded token has the necessary role property
      if (decodedToken && decodedToken.role) {
        return decodedToken.role;
      } else {
        console.error("Token is missing role information.");
      }
    } catch (error) {
      console.error("Token decoding error:", error);
    }
  } else {
    console.error("No token found in localStorage.");
  }

  return null;
}
