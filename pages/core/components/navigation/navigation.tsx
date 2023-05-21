
import Link from "next/link";
import { useState } from "react";

interface InavigationType {
  type: string;
}
const Navigation = ({ type }: InavigationType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLight, setIsOpenLight] = useState(false);
  const [bgHeader, setBgHeader] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (type == "mobile") {
    return (
      <>
        <style jsx>{`
                header {
                  background: #fff};
                }
                ul {
                  list-style:none !important;
                  padding:0  !important;
                  margin:0  !important;
                }
              `}</style>

        <nav className="nav flex justify-start ">
          <ul className="flex  flex-col items-center list-none">
            <li className="m-6">
              <Link
                href="/"
                className="px-6 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
                onClick={() => {
                  setBgHeader(false);
                }}
              >
                Home
              </Link>
            </li>
            <li className="m-6">
              <Link
                href="/blog"
                className="px-6 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
                onClick={() => {
                  setBgHeader(true);
                }}
              >
                Blog
              </Link>
            </li>
            <li className="m-6">
              <Link
                href="/contact"
                className="px-6 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
              >
                Contact
              </Link>
            </li>
            <li className="m-6">
              <Link
                href="/login"
                className="rounded-full bg-indigo-600  ml-4 mr-4 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </Link>
            </li>
            <button
              aria-label="switch theme"
              className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex"
              onClick={() => {
                localStorage.setItem("isLight", JSON.stringify(!isOpenLight));
                setIsOpenLight(!isOpenLight);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transistion relative m-auto ${
                  !isOpenLight ? "hidden" : "block"
                } h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transistion relative ${
                  isOpenLight ? "hidden" : "block"
                } m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
              </svg>
            </button>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <>
      <style jsx>{`
        header {
          background: ${bgHeader ? "rgba(255, 255, 255, 0.8)" : "transparent"};
        }
        ul {
          list-style: none !important;
          padding: 0 !important;
          margin: 0 !important;
        }
      `}</style>

      <nav className="hidden lg:block">
        <ul className="flex items-center list-none">
          <li>
            <Link
              href="/"
              className="px-3.5 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
              onClick={() => {
                setBgHeader(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="px-3.5 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
              onClick={() => {
                setBgHeader(true);
              }}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-3.5 py-2.5 transition duration-300 ease-in-out text-base rounded-full flex items-center justify-center hover:text-primary hover:bg-gray-100"
            >
              Contact
            </Link>
          </li>
          <li >
            <Link
              href="/login"
              className="rounded-full bg-indigo-600  ml-4 mr-4 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </Link>
          </li>
          <button
            aria-label="switch theme"
            className="switcher group relative hidden h-9 w-9 rounded-full before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-50 before:bg-gradient-to-b before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 lg:flex"
            onClick={() => {
              localStorage.setItem("isLight", JSON.stringify(!isOpenLight));
              setIsOpenLight(!isOpenLight);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`transistion relative m-auto ${
                !isOpenLight ? "hidden" : "block"
              } h-5 w-5 fill-gray-500 duration-300 group-hover:rotate-180 group-hover:fill-yellow-400 dark:block dark:fill-gray-300`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`transistion relative ${
                isOpenLight ? "hidden" : "block"
              } m-auto h-5 w-5 fill-gray-500 duration-300 group-hover:-rotate-90 group-hover:fill-blue-900 dark:hidden`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
