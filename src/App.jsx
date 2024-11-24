import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import {
  ConfirmAccountPage,
  FavPage,
  ForgotPasswordPage,
  Homepage,
  ResetPasswordPage,
  SignInPage,
  SignUpPage,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        {/* authroutes */}
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:id" element={<ResetPasswordPage />} />
        <Route path="/confirm-account/:id" element={<ConfirmAccountPage />} />
        {/* pages with auth routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/favorites" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
