import Head from "next/head";
import "animate.css";
import { TbSunMoon } from "react-icons/tb";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Yemi Oladele | Resume</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-black scroll-m-1 scroll-smooth">
        {/* Navigation Bar */}
        <section className="z-40 fixed inset-x-0 top-0">
          <nav className="pb-1 pt-2 px-5 sm:p-4 sm:py-3 backdrop-blur-lg m-auto lg:px-24 sm:flex justify-between border-b-4 border-black dark:border-white border-opacity-10 dark:border-opacity-10">
            <div className="block md:flex md:justify-between w-1/2">
              <a href="../">
                <div className="flex gap-4 items-center">
                  {/* <img
                    src="/dp.jpg"
                    alt="web dp"
                    className="h-8 rounded-full"
                  /> */}
                  <div className="text-lg py-2 sm:py-1 text-left font-bold leading-tight dark:text-white">
                    <p>Yemi Oladele</p>
                  </div>
                </div>
              </a>
            </div>
            <ul className="flex sm:flex-row-reverse justify-between sm:gap-44">
              {/* <li className="mt-3 sm:mt-2 cursor-pointer pr-2">
                <TbSunMoon className="text-sm sm:text-lg dark:text-white transition ease-in-out delay-150 hover:animate-pulse hover:-translate-y-0 hover:scale-110" />
              </li> */}
              <ul className="flex gap-x-16 font-mono sm:gap-x-8 sm:bg-black sm:dark:bg-white sm:rounded-full py-1 pr-1 sm:px-3 items-center">
                <li>
                  <a
                    href="portfolio"
                    className="sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="resume"
                    className="sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a
                    href="about"
                    className="sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black"
                  >
                    About
                  </a>
                </li>
              </ul>
            </ul>
          </nav>
        </section>

        {/* Resume Content */}
        <section className="px-5 lg:px-24 pt-32">
          <div className="pb-8">
            <h2 className="font-extrabold w-max font-mono text-3xl bg-gradient-to-r bg-clip-text text-transparent from-green-500 to-black dark:to-white">
              Resume
            </h2>
          </div>

          <div className="dark:text-white">
            <h3 className="text-2xl dark:text-green-100 text-green-800 mt-8 font-bold mb-4">
              Omoyemi Oladele
            </h3>
            <p className="italic text-lg mb-4">
              (Bachelors of Technology 2024, Federal University of Technology
              Akure)
            </p>
            <p className="text-lg mb-4">
              Front-end engineer with over four years of experience building
              beautiful, performant, and user-friendly web applications. Adept
              at crafting responsive interfaces with modern frameworks and
              libraries. Passionate about creating a seamless user experience
              and staying up-to-date on the latest front-end trends.
            </p>

            <h4 className="text-xl dark:text-green-100 text-green-800 font-bold mt-8 mb-4">
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <ul className="list-disc list-inside mb-4">
                <li>Responsive design</li>
                <li>Developer tools & debugging</li>
                <li>Version control (Git)</li>
                <li>Testing and automation</li>
              </ul>
              <ul className="list-disc list-inside mb-4">
                <li>APIs and integration</li>
                <li>UI/UX design principles</li>
                <li>Cross-browser compatibility</li>
                <li>HTML, CSS, JavaScript</li>
              </ul>
            </div>

            <h4 className="text-xl dark:text-green-100 text-green-800 font-bold mt-8 mb-4">
              Tools and Frameworks
            </h4>
            <p className="mb-4">
              Vue.js, Vuetify, Pinia, Figma, Sass, LESS, TailwindCSS, Axios,
              Git, GitHub, Trello, Postman, ApexCharts, React, Next.js, Redux
            </p>

            <h4 className="text-xl dark:text-green-100 text-green-800 font-bold mt-8 mb-4">
              Work Experience
            </h4>
            <div className="mb-8">
              <h5 className="italic text-lg font-bold">
                Front-end Engineer - Teckplus Digital Solutions (Lagos), June
                2023 - Present
              </h5>
              <ul className="list-disc list-inside">
                <li>
                  Team collaboration with UI/UX designers, backend engineers and
                  frontend engineers.
                </li>
                <li>Use of version control tools (Git, GitHub).</li>
                <li>Use of job boards for task organisation.</li>
                <li>
                  Proficiency with VueJS, Pinia state manager, Axios,
                  TailwindCSS, and Vuetify.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="italic text-lg font-bold">
                Freelancer - Upwork | Fiverr | … (Remote), October 2020 - May
                2024
              </h5>
              <ul className="list-disc list-inside">
                <li>
                  Multiple portfolios, eCommerce and landing page development.
                </li>
              </ul>
            </div>
            <div className="mb-8">
              <h5 className="italic text-lg font-bold">
                Web Master - Fountain Holdings Limited (Ekiti), October 2020 -
                Present
              </h5>
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript.</li>
                <li>
                  Worked together with other departments in the organisation on
                  optimisation.
                </li>
                <li>Troubleshooting and bug fixing.</li>
                <li>
                  Used critical thinking to evaluate problems, develop
                  solutions, and make decisions.
                </li>
              </ul>
            </div>

            <h4 className="text-xl dark:text-green-100 text-green-800 font-bold mt-8 mb-4">
              Certifications
            </h4>
            <ul className="list-disc list-inside mb-4">
              <li>
                Certificate of Achievement, Applied Big Data Analytics -
                Griffith University, Australia (July 2020)
              </li>
              <li>
                Course certification, The Data Scientist Toolbox - John Hopkins
                University (January 2020)
              </li>
              <li>
                Course certification, Concrete Furniture Creation for Beginners
                - Carolina and Eduardo Collingnon (Domestika.org)
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className=" font-mono bg-green-50 text-black mt-44 pt-8">
          <div className="px-5 lg:px-24">
            <div className=" text-lg font-bold py-6 pb-1">
              <h4>Available for Select freelance opportunities</h4>
            </div>

            <div className=" py-6 pt-1">
              <p>
                Have an exciting project you need help with? send me an email or
                connect me via socials
              </p>
            </div>
          </div>

          <div className=" px-5 lg:px-24 sm:flex sm:justify-between sm:text-left bg-green-100 border-t border-b dark:border-t-black dark:border-b-black">
            <div className="pt-5 md:pt-11 pb-5 md:pb-8">
              <h1 className="text-xl break-words sm:text-4xl font-bold mb-4">
                yemi.oladele@outlook.com
              </h1>

              <a
                href="mailto:yemi.oladele@outlook.com"
                className=" backline animate-from-bottom sm:text-lg sm:font-thin"
              >
                Open mail client
              </a>

              {/* <a
                href="mailto:@outlook.com"
                className=" ml-3 backline animate-from-bottom sm:text-lg sm:font-thin"
              >
                Copy email to clipboard
              </a> */}
            </div>

            <div className="py-5 md:pt-11">
              <ul className="flex gap-6 text-sm sm:text-xl">
                <li>
                  <a
                    href="https://github.com/Omotobii"
                    className="underline decoration-gray-400 hover:text-green-700 font-bold"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/_Omotobi"
                    className="underline decoration-gray-400 hover:text-green-700 font-bold"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/omoyemi-oladele-8747a7198"
                    className="underline decoration-gray-400 hover:text-green-700 font-bold"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" px-5 lg:px-24 py-6 sm:flex sm:flex-row-reverse sm:justify-between">
            <ul className=" px-0 flex gap-x-8 sm:bg-white sm:bg-opacity-10 sm:rounded-full sm:text-lg py-1 sm:px-3 mt-2 sm:mt-0 sm:dark:bg-neutral-200 sm:dark:text-black items-center">
              <li>
                <a
                  href="portfolio"
                  className=" font-thin backline animate-from-bottom"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="resume"
                  className=" font-thin backline animate-from-bottom"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="about"
                  className=" font-thin backline animate-from-bottom"
                >
                  About
                </a>
              </li>
            </ul>

            <p className="text-sm italic sm:text-md">
              Design, content & development by Yemi Oladele @ 2024.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
