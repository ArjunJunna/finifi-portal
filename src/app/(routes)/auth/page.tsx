'use client';

import { useState } from "react";
import SignInForm from './components/SignInForm'
import SignUpForm from "./components/SignUpForm";

const AuthPage = () => {
  const [showSignIn, setShowSignIn] = useState(true);
  return (
    <div
      className="fixed z-40 flex justify-center items-center inset-0 bg-slate-900/[0.8]"
    >
      <div
        className="flex flex-col rounded-md shadow-md bg-white dark:bg-gray-900 p-4 w-3/4 sm:w-2/3 md:1/3 lg:w-1/4"
      >
        {showSignIn ? (
          <>
            <SignInForm
              setShowSignIn={setShowSignIn}
            />
          </>
        ) : (
          <>
            <SignUpForm
              setShowSignIn={setShowSignIn}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage