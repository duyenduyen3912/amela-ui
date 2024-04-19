import Facebook from "pages/Facebook";
import Instagram from "pages/Instagram";
import ReactQuery from "pages/ReactQuery";
import Tasks from "pages/Tasks";
import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthWrapper from "wrappers/AuthWrapper";
import styles from "./styles.module.scss"
const Login = lazy(() => import("pages/Login"));
const SignUp = lazy(() => import("pages/SignUp"));

export default function AppWrapper() {
  return (
    <div className="root-wrapper">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/react-query" element={<ReactQuery/>} />
        <Route path="/" element={<AuthWrapper />}>
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </div>
  );
}
