import Head from 'next/head'
import 'animate.css';
import { TbSunMoon } from "react-icons/tb";



export default function Home() {
  return (
    <>
      <Head>
        <title>Yemi Oladele</title>
        <meta charSet='UTF-8' />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white dark:bg-neutral-900 scroll-m-1 scroll-smooth'>

      <section className=' px-4 lg:px-40'>

        {/* beginnig of major description */}

        <section className=''>

          <section className=' fixed inset-x-0 top-0'>

            <center>
            <nav className=' pb-1 pt-2 sm:py-3 backdrop-blur-sm dark:backdrop-blur-sm bg-yellow-100 dark:bg-yellow-100 bg-opacity-30 dark:bg-opacity-30 m-auto p-4 shadow-md border-b border-neutral-500 dark:border-yellow-100 dark:border-opacity-50 flex justify-between'>

              <div className=' block md:flex md:justify-between w-1/2'>
                <div className=' pl-2 flex gap-4 items-center '>
                  <img src="/portrait.jpg" alt="web dp" className='h-8 rounded-full' />
                  <div className=' text-sm py-2 text-left font-bold tracking-widest leading-tight dark:text-white font-sans animate-pulse'>
                    <p>Yemi Oladele</p>
                    
                  </div> 
                </div>

                
                
              </div>
              
              <ul className='sm:flex sm:flex-row-reverse sm:justify-between sm:gap-44'>

                <li className=' mt-2 cursor-pointer pr-2'>
                  <TbSunMoon className=' text-lg dark:text-white transition ease-in-out delay-150 hover:animate-pulse hover:-translate-y-0 hover:scale-110'/>
                </li>

                <ul className=' flex gap-x-8 sm:bg-neutral-900 sm:rounded-full text-sm py-1 pr-1 md:px-3 mt-2 md:mt-0 dark:text-white sm:dark:bg-neutral-900 items-center'>

                  <li><a href="#" className=' text-white dark:text-yellow-100 px-2 underline sm:underline-offset-2 decoration-neutral-500 dark:decoration-yellow-50 hover:bg-neutral-500 dark:hover:bg-yellow-50 hover:text-white dark:hover:text-black  hover:px-2 hover:rounded-full'>Portfolio</a></li>
                  <li><a href="#" className=' text-white dark:text-yellow-100 px-2 underline sm:underline-offset-2 decoration-neutral-500 dark:decoration-yellow-50 hover:bg-neutral-500 dark:hover:bg-yellow-50 hover:text-white dark:hover:text-black  hover:px-2 hover:rounded-full'>Resume</a></li>
                  <li><a href="#" className=' text-white dark:text-yellow-100 px-2 underline sm:underline-offset-2 decoration-neutral-500 dark:decoration-yellow-50 hover:bg-neutral-500 dark:hover:bg-yellow-50 hover:text-white dark:hover:text-black  hover:px-2 hover:rounded-full'>About</a></li>
              
                </ul>

              </ul>
            </nav>
            </center>
            
          </section>

          <section className='flex items-center p-1 pt-32 sm:pt-44 pb-11'>
            <div className=''>
              <p className=' text-7xl sm:text-8xl lg:text-9xl dark:text-white font-bold'>I turn ideas into <br /> real life <span className=' bg-gradient-to-r bg-clip-text  text-transparent from-teal-500 via-purple-500 to-indigo-500 animate-text'>products</span></p>

              

            </div>

          </section>

          <div className=' text-right'>

            <div className=' mt-2 lg:mt-4 mb-4 text-md lg:text-md dark:text-white text-right'>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128163;GH  </a>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128038;TW  </a>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128188;LD</a>
            </div>

          </div>
      
        </section>

        {/* end of major description */}

        {/* beginning of breif description */}
 
        <section className='sm:px-40'>
          <p className=' pt-32'><span className=' font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-teal-500 to-purple-500'>Frontend Engineer </span><span className='text-white'>&#128170;</span><br /><br /></p>

          <p className=' dark:text-white font-semibold'>Developing novel and meaningful solutions with a user first approach <br /><br /><br /></p>

          <p className=' dark:text-white font-semibold'>This website is a showcase of my design portfolio, my work experience and some information about me.</p>
        </section>

        {/* end of breif description */}
        
        {/* beggining of featured project section */}

        <section id='works' className='mt-28 pt-24 lg:flex lg:justify-between'>
          <h1 className='text-6xl lg:text-8xl dark:text-white font-bold'>Featured<br></br>Work</h1>
          <p className=' pt-6 lg:pt-32'><span className=' font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-teal-600 to-pink-500'>every project is unique </span><span className='text-white'>👌</span></p>
        </section>

        <section className=' pt-14'>

            <div className=' lg:flex lg:justify-between my-11 h-auto border-t-2 border-b-2 border-gray-400'>

              <div className='h-80 pl-7'>

                <div className="  mt-8">
                  <h1 className='text-3xl dark:text-white font-bold'>Fountain Holdings Limited</h1>
                  <p className=' dark:text-white'>The investment arm of the Ekiti State Government</p>
                </div>

                <div className=' mt-8'>
                  <p className=' dark:text-white'>
                    2020
                  </p>
                </div>

                <div className=' flex gap-4'>
                  <p className=' font-medium text-xs dark:text-white bg-gray-400 bg-opacity-40 rounded-full py-1 px-2'>
                    HTML
                  </p>

                  <p className=' font-medium text-xs dark:text-white bg-gray-400 bg-opacity-40 rounded-full py-1 px-2'>
                    CSS
                  </p>

                  <p className=' font-medium text-xs dark:text-white bg-gray-400 bg-opacity-40 rounded-full py-1 px-2'>
                    JavaScript
                  </p>
                </div>


                <div className=' pr-7 mb-3'>
                  <a href='http://fholdingsltd.com/' className=' font-mono dark:text-white'>VISIT THE WEBSITE</a>
                </div>

              </div> 

              <div className=' m-2'>
                <img src="/FHL.jpg" alt="project one" className=' h-80' />
              </div>

            </div>          

        </section>

      </section>

      {/* end of featured project section */}

      {/* beginning of contact section */}

      <section className=' bg-yellow-100 mt-44 sm:px-11 pt-8'>
        
          <div className=' text-lg font-sans font-bold py-6 pb-1'>
            <h4>Available for Select freelance opportunities</h4>
          </div>

          <div className=' py-6 pt-1'>
            <p>Have an exciting project you need help with? send me an email or connect me via socials</p>
          </div>

          <div className=' sm:flex sm:justify-between text-center sm:text-left p-6 rounded-sm bg-black bg-opacity-10 drop-shadow-lg'>

            <div className=' pb-8'>

              <h1 className=' sm:text-4xl font-bold mb-2'>
                oladeleomoyemi@outlook.com
              </h1>

              <a href="mailto:oladeleomoyemi@outlook.com" className=' backline animate-from-bottom text-xs sm:text-lg sm:font-thin'>Open mail client</a>

              <a href="mailto:oladeleomoyemi@outlook.com" className=' ml-3 backline animate-from-bottom text-xs sm:text-lg sm:font-thin'>Copy email to clipboard</a>
            </div>

            <div className=' border-l-2 border-gray-400 pl-3 pt-1'>
              <ul className=' text-sm sm:text-xl'>
                <li><a href="#" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>GitHub</a></li>
                <li><a href="#" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>Twitter</a></li>
                <li><a href="#" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>LinkedIn</a></li>
              </ul>
            </div>

          </div>

          <div className=' py-6 sm:flex sm:flex-row-reverse sm:justify-between'>
            
            <ul className=' px-0 flex gap-x-8 sm:bg-white sm:bg-opacity-10 sm:rounded-full text-sm sm:text-md py-1 sm:px-3 mt-2 sm:mt-0 sm:dark:bg-black sm:dark:bg-opacity-80 dark:text-white items-center'>
              <li><a href="#" className=' font-thin backline animate-from-bottom'>Portfolio</a></li>
              <li><a href="#" className=' font-thin backline animate-from-bottom'>Resume</a></li>
              <li><a href="#" className=' font-thin backline animate-from-bottom'>About</a></li>
            </ul>

            <p className='text-sm italic sm:text-md'>Design, content & development by Yemi Oladele @ 2023.</p>

          </div>

        </section>

        {/* end of contact section */}

      </main>
    </>
  )
}