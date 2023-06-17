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
      <main className=' px-4 bg-white dark:bg-black scroll-m-1 scroll-smooth'>

      <section className=' lg:px-40'>

        <section className=''>

          <section className=' fixed inset-x-0 top-0'>

            <center>
            <nav className=' mx-8 sm:mx-24 lg:mx-64 pb-1 pt-2 sm:py-3 backdrop-blur-2xl bg-slate-600 bg-opacity-20 mt-10 m-auto p-4 border border-gray-900 flex justify-between rounded-2xl'>

              <div className=' block sm:flex sm:justify-between sm:gap-24'>
                <div className=' flex gap-4'>
                  <img src="/portrait.jpg" alt="web dp" className='h-8 rounded-full' />
                  <div className=' text-sm text-left font-bold tracking-widest leading-tight dark:text-white font-sans animate-pulse'>
                    <p>Yemi</p>
                    <p>Oladele</p>
                  </div> 
                </div>

                <ul className=' flex gap-x-8 sm:bg-white sm:bg-opacity-40 sm:rounded-full text-xs py-1 px-1 sm:px-3 mt-2 sm:mt-0 dark:text-white items-center'>

                  <li><a href="#" className='underline sm:underline-offset-4 decoration-gray-400 decoration-dotted hover:bg-gray-400'>Portfolio</a></li>
                  <li><a href="#" className='underline sm:underline-offset-4 decoration-gray-400 decoration-dotted hover:bg-gray-400'>Resume</a></li>
                  <li><a href="#" className='underline sm:underline-offset-4 decoration-gray-400 decoration-dotted hover:bg-gray-400'>About</a></li>
              
                </ul>
              </div>
              <ul>

                <li className=' mt-2 cursor-pointer'>
                <TbSunMoon className=' text-lg dark:text-white transition ease-in-out delay-150 hover:animate-pulse hover:-translate-y-0 hover:scale-110'/>
                </li>

              </ul>
            </nav>
            </center>
            
          </section>

          <section className='flex items-center p-1 pt-32 sm:pt-44 pb-11'>
            <div className=''>
              <p className=' text-7xl sm:text-8xl lg:text-9xl dark:text-white font-bold'>I turn ideas into <br /> real life <span className=' bg-gradient-to-r bg-clip-text  text-transparent from-teal-500 via-purple-500 to-indigo-500 animate-text'>products</span></p>

              

            </div>

          </section>

          <div className=' flex justify-between'>

            <div className='flex mb-4 ml-3 text-lg lg:text-xl dark:text-white'>
            <a href='#works' className='hover:-rotate-12 hover:text-purple-700 hover:delay-200 hover:duration-1000'><span className='underline underline-offset-4'>Featured W</span>orks</a>
            
            </div>

            <div className=' mt-2 lg:mt-4 mb-4 text-md lg:text-md dark:text-white text-right'>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128163;GH  </a>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128038;TW  </a>
              <a href="" className='hover:underline decoration-yellow-400 underline-offset-2'>&#128188;LD</a>
            </div>

          </div>
      
        </section>

 
        <section className='sm:px-40'>
          <p className=' pt-32'><span className=' font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-teal-600 to-pink-500'>Frontend Engineer </span><span className='text-white'>&#128170;</span><br /><br /></p>

          <p className=' dark:text-white font-bold'>Developing novel and meaningful solutions with a user first approach <br /><br /><br /></p>

          <p className=' dark:text-white font-bold'>This website is a showcase of my design portfolio, my work experience and some information about me.</p>
        </section>
        

        <section id='works' className='mt-28 pt-24 lg:flex lg:justify-between'>
          <h1 className='text-6xl lg:text-8xl dark:text-white font-bold'>Featured<br></br>Work</h1>
          <p className=' pt-32'><span className=' font-bold text-xl bg-gradient-to-r bg-clip-text text-transparent from-teal-600 to-pink-500'>every project is unique </span><span className='text-white'>👌</span></p>
        </section>

        <section className=' pt-14'>

            <div className=' lg:flex lg:justify-between my-11 h-auto border-2 border-grey-800 dark:border-2'>

              <div className='h-auto pl-7'>

                <div className="  mt-8">
                  <h1 className='text-3xl dark:text-white font-bold'>Fountain Holdings Limited</h1>
                  <p className=' dark:text-white'>The investment arm of the Ekiti State Government</p>
                </div>

                <div className=' mt-8'>
                  <p className=' '>
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
                <img src="/FHL.jpg" alt="project one" className='' />
              </div>

            </div>          

        </section>

        <section className=''>
          <h1 id='exp' className=' text-6xl pt-24 lg:text-8xl dark:text-white text-center font-bold mt-52 mb-14'>Professional <br />Experience</h1>
        </section>

        <section className=' pb-14'>

          <div className=' h-20 sm:mx-28 bg-gradient-to-r from-violet-800 to-violet-900 mb-3 rounded-lg'>

          </div>

          <div className=' h-20 sm:mx-28 bg-gradient-to-r from-violet-800 to-violet-900 mb-3 rounded-lg'>
            
          </div>

          <div className=' h-20 sm:mx-28 bg-gradient-to-r from-violet-800 to-violet-900 mb-3 rounded-lg'>
            
          </div>

        </section>

      </section>

      </main>
    </>
  )
}