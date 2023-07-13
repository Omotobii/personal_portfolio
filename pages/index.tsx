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
      <main className=' bg-white dark:bg-black scroll-m-1 scroll-smooth'>

      <section className=' '>

        {/* beginnig of major description */}

        <section className=' px-4 lg:px-11'>

          <section className=' z-40 fixed inset-x-0 top-0'>

            <center>
            <nav className=' pb-1 pt-2  sm:p-4 sm:py-3 backdrop-blur-lg m-auto flex justify-between border-b-4 border-black dark:border-white border-opacity-10 dark:border-opacity-10'>

              <div className=' block md:flex md:justify-between w-1/2'>
                <a href="#">
                  <div className=' pl-2 flex gap-4 items-center '>
                  <img src="/dp.jpg" alt="web dp" className='h-8 rounded-full' />
                  <div className=' sm:text-lg py-2 sm:py-1 text-left font-bold font-mono leading-tight dark:text-white'>
                    <p>Yemi_Oladele_</p>
                    
                  </div> 
                  </div>
                </a>
                
                
              </div>
              
              <ul className='flex flex-row-reverse justify-between sm:gap-44'>

                <li className=' mt-3 sm:mt-2 cursor-pointer pr-2'>
                  <TbSunMoon className='text-sm sm:text-lg dark:text-white transition ease-in-out delay-150 hover:animate-pulse hover:-translate-y-0 hover:scale-110'/>
                </li>

                <ul className=' flex gap-x-3 font-mono sm:gap-x-8 sm:bg-black sm:dark:bg-white sm:rounded-full text-sm py-1 pr-1 sm:px-3 items-center'>

                  <li><a href="portfolio" className=' text-xs sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black'>Portfolio</a></li>
                  <li><a href="resume" className=' text-xs sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black'>Resume</a></li>
                  <li><a href="about" className=' text-xs sm:text-sm backline-nav animate-from-bottom-nav dark:text-white sm:text-white sm:dark:text-black'>About</a></li>
              
                </ul>

              </ul>
            </nav>
            </center>
            
          </section>

          <section className='flex items-center pt-32 sm:pt-44 pb-11'>
            <div className=''>
              <p className=' font-mono tracking-tighter text-7xl sm:text-8xl lg:text-9xl dark:text-white font-bold'>I turn ideas <br />into <br />real life products</p>

              

            </div>

          </section>

          <div className=' text-right'>

            <div className=' mt-2 lg:mt-4 mb-4 text-lg lg:text-xl dark:text-white text-right'>
              <a href="https://github.com/Omotobii" className='hover:underline decoration-teal-400 underline-offset-2'>&#128163;GH  </a>
              <a href="https://twitter.com/_Omotobi" className='hover:underline decoration-teal-400 underline-offset-2'>&#128038;TW  </a>
              <a href="https://www.linkedin.com/in/omoyemi-oladele-8747a7198" className='hover:underline decoration-teal-400 underline-offset-2'>&#128188;LD</a>
            </div>

          </div>
      
        </section>

        {/* end of major description */}

        {/* beginning of breif description */}
 
        <section className=' px-4 lg:px-24 sm:px-40'>
          <p className=' pt-32'><span className=' font-extrabold font-mono text-2xl bg-gradient-to-r bg-clip-text text-transparent from-teal-500 to-purple-500'>Frontend <br />Engineer <span className='text-white'>&#128170;</span></span><br /><br /><br /></p>

          <p className=' dark:text-white text-2xl font-mono'>Developing novel and meaningful solutions with a user first approach <br /><br /><br /></p>

          <p className=' dark:text-white text-2xl font-mono'>This website is a showcase of my design portfolio, my work experience and some information about me.</p>
        </section>

        {/* end of breif description */}
        
        {/* beggining of featured project section */}

        <section id='works' className=' px-4 lg:px-24 font-mono mt-28 pt-24 flex justify-between'>
        <p className=' pt-4'><span className=' font-extrabold font-mono text-2xl bg-gradient-to-r bg-clip-text text-transparent from-teal-500 to-purple-500'>Featured <br />Work </span><br /><br /></p>
          <p className=' pt-4'><span className=' tracking-tight dark:text-white '>every project is unique </span><span className='text-white'>👌</span></p>
        </section>

        <section className=' '>
            
            <div className='px-4 lg:px-24'>
              <div className=' min-w-full h-4 sm:h-4 lg:h-24 border-l border-r'>
                
              </div>
            </div>
            <div className=' group px-4 lg:px-24 sm:flex sm:justify-between h-auto border-t border-b'>

              <div className='h-auto px-1 sm:w-full border-l border-r sm:border-l'>

                <div className="  sm:mt-11">
                  <h1 className=' font-mono text-3xl sm:text-5xl dark:text-white font-bold'>Fountain Holdings Limited</h1>
                  <p className=' font-mono sm:text-2xl dark:text-white'>The investment arm of the Ekiti State Government</p>
                </div>

                <div className=' mt-8'>
                  <p className=' pl-2 font-mono dark:text-white'>
                    2020
                  </p>
                </div>

                <div className=' flex gap-4'>
                  <p className=' font-medium text-xs dark:text-white dark bg-slate-800 bg-opacity-40 rounded-full py-1 px-2'>
                    HTML
                  </p>

                  <p className=' font-medium text-xs dark:text-white dark bg-slate-800 bg-opacity-40 rounded-full py-1 px-2'>
                    CSS
                  </p>

                  <p className=' font-medium text-xs dark:text-white dark bg-slate-800 bg-opacity-40 rounded-full py-1 px-2'>
                    JavaScript
                  </p>
                </div>


                <div className=' text-green-900 flex pt-11 pb-8 pr-7 '>
                  <div><a href='http://fholdingsltd.com/' className=' pl-2 font-mono'>Visit the Website</a></div>
                  <div className=' transition ease-in-out group-hover:translate-x-8 group-hover:duration-500 '><a href='http://fholdingsltd.com/' className=' pl-2 font-mono'>▶</a></div>
                </div>

              </div> 

              <div className=' border-l border-r border-t w-full sm:border-l-0 sm:border-t-0 sm:border-r sm:p-0'>
                <div className=' mx-auto h-full p-2 bg-slate-800'><img src="/FHL.png" alt="project one" className='  group-hover:scale-110 duration-300 mx-auto h-full' /></div>
              </div>

            </div>
            <div className='px-4 lg:px-24'>
              <div className=' min-w-full h-4 sm:h-4 lg:h-24 border-l border-r'>
                
              </div>
            </div>         

        </section>

      </section>

      {/* end of featured project section */}

      {/* beginning of contact section */}

      <section className=' font-mono bg-black dark:bg-white dark:text-black text-white mt-44 pt-8'>
        
          <div className=' text-lg font-bold px-3 sm:px-8 py-6 pb-1'>
            <h4>Available for Select freelance opportunities</h4>
          </div>

          <div className=' py-6 pt-1 px-3 sm:px-8'>
            <p>Have an exciting project you need help with? send me an email or connect me via socials</p>
          </div>

          <div className=' px-3 sm:p-8 sm:flex sm:justify-between sm:text-left bg-black dark:bg-white border-t border-b dark:border-t-black dark:border-b-black'>

            <div className=' pt-11 pb-8'>

              <h1 className=' text-3xl break-words sm:text-4xl font-bold mb-4'>
                yemi.oladele@outlook.com
              </h1>

              <a href="mailto:yemi.oladele@outlook.com" className=' backline animate-from-bottom sm:text-lg sm:font-thin'>Open mail client</a>

              <a href="mailto:@outlook.com" className=' ml-3 backline animate-from-bottom sm:text-lg sm:font-thin'>Copy email to clipboard</a>
            </div>

            <div className=' pt-11'>
              <ul className='flex gap-6 text-sm sm:text-xl'>
                <li><a href="https://github.com/Omotobii" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>GitHub</a></li>
                <li><a href="https://twitter.com/_Omotobi" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/omoyemi-oladele-8747a7198" className='underline decoration-gray-400 hover:bg-gray-400 font-bold'>LinkedIn</a></li>
              </ul>
            </div>

          </div>

          <div className=' px-3 sm:px-8 py-6 sm:flex sm:flex-row-reverse sm:justify-between'>
            
            <ul className=' px-0 flex gap-x-8 sm:bg-white sm:bg-opacity-10 sm:rounded-full sm:text-lg py-1 sm:px-3 mt-2 sm:mt-0 sm:dark:bg-neutral-200 sm:dark:text-black items-center'>
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