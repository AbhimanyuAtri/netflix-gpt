import React, { useState } from "react";
import Header from "./Header";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div>
      <div className="background absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-image"
        />
      </div>
      <div className="">
        <form
          action=""
          className="w-3/12 absolute p-12 my-36 mx-auto right-0 left-0 content-center text-white bg-black bg-opacity-80"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-2xl py-4">
            {isSignIn ? "Sign in" : "Sign up"}
          </h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-3 w-full bg-gray-700"
          />
          {isSignIn && (
            <input
              type="text"
              placeholder="Full name"
              className="p-4 my-3 bg-gray-700 w-full"
            />
          )}
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-3 bg-gray-700 w-full"
          />
          <button className="bg-red-600 rounded-md p-4 my-4 w-full">
            {!isSignIn ? "Sign in" : "Sign up"}
          </button>
          <p className="py-4 text-xl">
            {isSignIn ? "New to Netflix?" : "Alredy a user?"}
            <span
              className="font-bold cursor-pointer"
              onClick={() => {
                setIsSignIn(!isSignIn);
              }}
            >
              {" "}
              {isSignIn ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
