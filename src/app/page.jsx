import Image from "next/image";

export default function Home() {
  return (
      <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
          <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
              <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                  <div className="flex items-center justify-between">
                              <Image
                                  src="/BMITracker.svg"
                                  alt="imc app Logo"
                                  width={180}
                                  height={50}
                                  priority
                              />

                      <div className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                          <a
                              href="login"
                              title=""
                              className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-normal
                            leading-7
                            transition-all
                            duration-200
                            border-2
                            rounded-full
                            text-white
                            border-primary
                            focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary
                            hover:bg-white hover:text-black
                            focus:ring-offset-secondary
                        "
                          >
                              Sign In
                          </a>
                      </div>
                  </div>
              </div>
          </header>

          <div className="absolute inset-0">
              <img className="object-cover w-full h-screen"
                   src="/health.jpeg" alt=""/>
          </div>

          <div className="relative">
              <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                  <div className="w-full lg:w-2/3 xl:w-1/2">
                      <h1 className="font-sans text-base font-normal tracking-tight text-white text-opacity-70">Keep track of your health</h1>
                      <p className="mt-6 tracking-tighter text-white">
                          <span className="font-sans font-normal text-7xl">The road to the</span><br/>
                          <span className="font-serif italic font-normal text-8xl">perfect life</span>
                      </p>
                      <p className="mt-12 font-sans text-base font-normal leading-7 text-white text-opacity-70">This is minimal application that helps you keep track of your BMI.</p>
                      <p className="mt-12 font-sans text-base font-bold leading-7 text-white text-opacity-70">If you&apos;d like to create an account or log in to your existing account press the Sign in button.</p>
                      <p className="font-sans text-base font-bold leading-7 text-white text-opacity-70">If you prefer to use the application without an account press the button below.</p>

                      <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
                          <a
                              href="bmi"
                              title=""
                              className="
                            inline-flex
                            items-center
                            justify-center
                            px-5
                            py-2
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            rounded-full
                            sm:leading-8
                            bg-white
                            sm:text-lg
                            text-black
                            hover:bg-opacity-90
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                              role="button"
                          >
                              Get started
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  )
}
