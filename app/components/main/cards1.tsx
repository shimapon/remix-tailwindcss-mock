export default function Card() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className=" px-4 md:px-8 mx-auto">
        <h1 className="text-gray-800 text-2xl sm:text-3xl font-bold text-center mb-4 md:mb-6">
          Various Cards
        </h1>
        <div className="flex flex-wrap gap-2">
          <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 h-min mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                Mar 10, 2019
              </span>
              <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
                Design
              </a>
            </div>

            <div className="mt-2">
              <a
                href="#"
                className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
              >
                Accessibility tools for designers and developers
              </a>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempora expedita dicta totam aspernatur doloremque. Excepturi
                iste iusto eos enim reprehenderit nisi, accusamus delectus nihil
                quis facere in modi ratione libero!
              </p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <a
                href="#"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Read more
              </a>

              <div className="flex items-center">
                <img
                  className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                  src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                  alt="avatar"
                />
                <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                  Khatab wedaa
                </a>
              </div>
            </div>
          </div>

          <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md dark:bg-gray-800 h-min mx-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm font-light text-gray-800 dark:text-gray-400">
                Courses and MOOCs
              </span>
              <span className="px-3 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full dark:bg-blue-300 dark:text-blue-900">
                psychology
              </span>
            </div>

            <div>
              <h1 className="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
                AP® Psychology - Course 5: Health and Behavior
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                eligendi similique exercitationem optio libero vitae accusamus
                cupiditate laborum eos.
              </p>
            </div>

            <div>
              <div className="flex items-center mt-2 text-gray-700 dark:text-gray-200">
                <span>Visit on:</span>
                <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">
                  edx.org
                </a>
                <span>or</span>
                <a className="mx-2 text-blue-600 cursor-pointer dark:text-blue-400 hover:underline">
                  classcentral.com
                </a>
              </div>

              <div className="flex items-center justify-center mt-4">
                <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                  </svg>
                </a>

                <a className="mr-2 text-gray-800 cursor-pointer dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.8283 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.5089 3.3668 14.9762 3.3668 13.4141 4.9289L10.5857 7.75732L11.9999 9.17154L14.8283 6.34311C15.6094 5.56206 16.8757 5.56206 17.6568 6.34311C18.4378 7.12416 18.4378 8.39049 17.6568 9.17154L14.8283 12Z" />
                    <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02365 20.6332 6.49099 20.6332 4.9289 19.0711C3.3668 17.509 3.3668 14.9764 4.9289 13.4143L7.75732 10.5858L9.17154 12L6.34311 14.8285C5.56206 15.6095 5.56206 16.8758 6.34311 17.6569C7.12416 18.4379 8.39049 18.4379 9.17154 17.6569L12 14.8285Z" />
                    <path d="M14.8284 10.5857C15.2189 10.1952 15.2189 9.56199 14.8284 9.17147C14.4379 8.78094 13.8047 8.78094 13.4142 9.17147L9.17154 13.4141C8.78101 13.8046 8.78101 14.4378 9.17154 14.8283C9.56206 15.2188 10.1952 15.2188 10.5857 14.8283L14.8284 10.5857Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
            <img
              className="object-cover w-full h-64"
              src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="Article"
            />

            <div className="p-6">
              <div>
                <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
                  Product
                </span>
                <a
                  href="#"
                  className="block mt-2 text-2xl font-semibold text-gray-800 transition-colors duration-200 transform dark:text-white hover:text-gray-600 hover:underline"
                >
                  I Built A Successful Blog In One Year
                </a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Molestie parturient et sem ipsum volutpat vel. Natoque sem et
                  aliquam mauris egestas quam volutpat viverra. In pretium nec
                  senectus erat. Et malesuada lobortis.
                </p>
              </div>

              <div className="mt-4">
                <div className="flex items-center">
                  <div className="flex items-center">
                    <img
                      className="object-cover h-10 rounded-full"
                      src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                      alt="Avatar"
                    />
                    <a
                      href="#"
                      className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                    >
                      Jone Doe
                    </a>
                  </div>
                  <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                    21 SEP 2015
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm mx-auto h-min">
            <div
              className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
              }}
            ></div>

            <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                Nike Revolt
              </h3>

              <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">
                  $129
                </span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto h-min">
            <img
              className="object-cover w-full h-56"
              src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="avatar"
            />

            <div className="py-5 text-center">
              <a
                href="#"
                className="block text-2xl font-bold text-gray-800 dark:text-white"
              >
                John Doe
              </a>
              <span className="text-sm text-gray-700 dark:text-gray-200">
                Software Engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
