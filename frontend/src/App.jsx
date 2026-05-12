import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Articles from "./pages/Articles";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function Strategy() {
  return <h1 style={{ padding: 100 }}>Strategy Page</h1>;
}
export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
        {/* <Route path="Dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
  );
}
