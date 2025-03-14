import React, { useMemo } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import "./app.scss";
import AppRoutes from "./routes";

const App: React.FC = () => {
  const googleClientId = useMemo(
    () =>
      "961266011690-rnbeo8r9od4mmitjhq5k709qoeja3snf.apps.googleusercontent.com",
    []
  );

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
