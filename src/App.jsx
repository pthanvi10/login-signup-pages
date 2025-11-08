
import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import "./components/AuthForm.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-box">
        {isLogin ? <Login /> : <Signup />}
        <p className="toggle-text">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <button onClick={() => setIsLogin(false)} className="toggle-btn">
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button onClick={() => setIsLogin(true)} className="toggle-btn">
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default App;
