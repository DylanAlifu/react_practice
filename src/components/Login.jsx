import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" className="border" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" className="border" />

        <button className="bg-blue-500 text-white p-2 rounded-lg mt-2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
