import React from 'react'
import bgimage from '../Compenent/bgimage.png'

export default function Registaration() {
    return (
     
    <div className="h-[100vh] items-center flex justify-center px-5 lg:px-0">
      <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
       
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className=" flex flex-col items-center">
                <div className="text-center">
                  <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                  Sign up
                  </h1>
                  <p className="text-[12px] text-gray-500">
                    Hey enter your details to create your account
                  </p>
                </div>
            
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="fname"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        id="fname"
                        name="fname"
                        type="text"
                        required
                        autoComplete="fname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>

                    <label
                      htmlFor="lname"
                      className="mt-2 block text-sm/6 font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        id="lname"
                        name="lname"
                        type="text"
                        required
                        autoComplete="lname"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>

                    <label
                      htmlFor="email"
                      className="mt-2 block text-sm/6 font-medium text-gray-900"
                    >
                      Email address
                    </label>
                    <div className="mt-2 mb-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between ">
                      <label
                        htmlFor="password"
                        className="block text-sm/6 font-medium text-gray-900"
                      >
                        Password
                      </label>
                      
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                    <label
                      htmlFor="cPassword"
                      className="mt-2 block text-sm/6 font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="cPassword"
                        name="cPassword"
                        type="text"
                        required
                        autoComplete="cPassword"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                      />
                    </div>
                  </div>
                  </div>

                

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Already member?{" "}
                <a
                  href="/"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Login
                </a>
              </p>
            </div>
            </div>
          </div>
          <div className="flex-1 bg-blue-900 text-center hidden md:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bgimage})`,
              }}  
            ></div>
          </div>
      </div>
    </div>
    )
}
 //   <div>
      //       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      //   <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      //     <img
      //       src={image}
      //       alt="Your Company"
      //       className="mx-auto h-20 w-auto"
      //     />
         
      //     <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
      //       Sign in to your account
      //     </h2>
      //   </div>

      //   <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      //     <form action="#" method="POST" className="space-y-6">
      //       <div>

      //       <label htmlFor="fname" className="block text-sm/6 font-medium text-gray-900">
      //           First name
      //         </label>
      //         <div className="mt-2">
      //           <input
      //             id="fname"
      //             name="fname"
      //             type="text"
      //             required
      //             autoComplete="fname"
      //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      //           />
      //         </div>

      //         <label htmlFor="lname" className="block text-sm/6 font-medium text-gray-900">
      //           Last name
      //         </label>
      //         <div className="mt-2">
      //           <input
      //             id="lname"
      //             name="lname"
      //             type="text"
      //             required
      //             autoComplete="lname"
      //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      //           />
      //         </div>

      //         <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
      //           Email address
      //         </label>
      //         <div className="mt-2">
      //           <input
      //             id="email"
      //             name="email"
      //             type="email"
      //             required
      //             autoComplete="email"
      //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      //           />
      //         </div>
      //       </div>

      //       <div>
      //         <div className="flex items-center justify-between">
      //           <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
      //             Password
      //           </label>
      //           <div className="text-sm">
      //             <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
      //               Forgot password?
      //             </a>
      //           </div>
      //         </div>
      //         <div className="mt-2">
      //           <input
      //             id="password"
      //             name="password"
      //             type="password"
      //             required
      //             autoComplete="current-password"
      //             className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
      //           />
      //         </div>
      //       </div>

      //       <div>
      //         <button
      //           type="submit"
      //           className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      //         >
      //           Sign in
      //         </button>
      //       </div>
      //     </form>

      //     <p className="mt-10 text-center text-sm/6 text-gray-500">
      //      Already member?{' '}
      //       <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
      //        Login
      //       </a>
      //     </p>
      //   </div>
      // </div>
         

      //   </div>