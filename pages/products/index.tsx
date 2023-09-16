import Layout from "../core/layout/layout";
import Meta from "../core/components/meta/meta";

const Products = () => {
  return (
    <Layout>
      <Meta
        title="Product - page"
        description="Product"
        ogImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
        ogDescription="Lenodev - Product"
        ogTitle="Product - page"
        keywords="Product with Lenodev"
        twitterTitle="Lenodev - Product"
        twitterDescription="Product "
        twitterImage="https://cdn.dribbble.com/userupload/3772457/file/original-aba22003bdf9b02fa070c8e123c7a8c2.jpg?compress=1&resize=1024x768"
      />
      <div className="container">
        <div className="isolate bg-white px-6 py-2 sm:py-3 lg:px-8">
          <div
            className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div
              className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl text-center"></div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <a>
                <img
                  className="rounded-t-lg"
                  src="https://cdn.dribbble.com/userupload/5947680/file/original-f1196e3f845640379931db7a83a67333.png?resize=1024x768"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a>
                  <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Soul
                  </h5>
                </a>
                <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                  Music applications help insomniacs fall asleep faster because
                  the melodies have frequencies with the brain. This app is
                  still in the development stage and will be available on the
                  app store soon.You can download the beta version below
                </p>
                <a
                  href="https://expo.dev/artifacts/eas/bWExHUfWhkAKLHRA8hWCFM.apk"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 icon-tabler-arrow-bar-to-down "
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#fff"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 20l16 0" />
                    <path d="M12 14l0 -10" />
                    <path d="M12 14l4 -4" />
                    <path d="M12 14l-4 -4" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
