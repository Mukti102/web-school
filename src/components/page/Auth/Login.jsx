import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthStore from "../../../store/AuthStore";
import PopupError from "../../../hooks/usePopupError";
import SpinLoading from "../../ui/SpinLoading";
import AppStore from "../../../store/AppStore";
import Cookies from "universal-cookie";

export default function Login() {
  const cookies = new Cookies();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsAdmin, isAdmin } = AppStore((state) => state);
  const [errorValidate, setErrorValidate] = useState(null);
  const { login } = AuthStore((state) => state);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      navigate("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await login(email, password);
      if (res) {
        setIsAdmin(res?.data?.user?.role_id === 1);
        navigate("/dashboard");
      }
    } catch (err) {
      setIsLoading(false);
      setErrorValidate(err?.response?.data?.message);
    }
  };

  return (
    <div classNameName="z-[10000] w-full h-screen">
      {/* popup */}
      <div className="absolute top-20 w-[90%] sm:w-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto">
        {errorValidate && (
          <PopupError
            erorValidate={errorValidate}
            setErorValidate={setErrorValidate}
          />
        )}
      </div>
      <section className="bg-gray-50 h-screen dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-2 sm:px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            {/* <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            /> */}
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-4 space-y-5 md:space-y-6 sm:p-8">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form
                onSubmit={handleSubmit}
                className="space-y-4 md:space-y-6"
                action="#"
              >
                <div>
                  <label
                    for="email"
                    className="block mb-2  text-lg sm:text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:text-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2  text-lg sm:text-lg font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 sm:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:text-base text-lg sm:placeholder:tet-base placeholder:text-lg dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3  text-sm sm:text-sm">
                      <label
                        for="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white flex justify-center dark:text-black font-bold bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg  text-lg sm:text-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? <SpinLoading /> : "Sing In"}
                </button>
                <p className=" text-sm sm:text-sm font-light text-gray-500 dark:text-gray-300">
                  Don’t have an account yet?{" "}
                  <a
                    href="/register"
                    className="font-medium text-primary-600 hover:underline dark:text-primary"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
