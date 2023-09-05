import React from "react";
import Header from "./Header";

const LoginPage = () => {
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
          className="w-3/12 absolute p-12 my-36 mx-auto right-72 left-0 content-center text-white bg-black bg-opacity-80"
        >
          <h1 className="font-bold text-2xl py-4">Sign in</h1>
          <input
            type="text"
            placeholder="Email or phone number"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 my-4 bg-gray-700 w-full"
          />
          <button className="bg-red-600 rounded-md p-4 my-4 w-full">
            Sign in
          </button>
          <p className="py-4">New to Netflix? Sign up now</p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
