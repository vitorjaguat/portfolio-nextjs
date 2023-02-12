import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useParallax } from 'react-scroll-parallax';

export default function Main() {
  const bgParallax = useParallax({ easing: 'easeIn', speed: 10 });

  return (
    <>
      <div
        ref={bgParallax.ref}
        className='z-[-1] w-full h-screen bg-[url("https://images.unsplash.com/photo-1476108621677-3c620901b5e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80")]'
      ></div>
      <div
        id='home'
        className='z-1 absolute top-0 left-0 w-full h-screen text-center'
      >
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              LET'S BUILD SOMETHING TOGETHER
            </p>
            <h1 className='py-4 text-gray-700 text-5xl'>
              Hi, I'm <span className='text-primary'>Hugh</span>
            </h1>
            <h1 className='py-2 text-gray-700 text-4xl'>
              A Front-End Web Developer
            </h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
              I'm a front-end web-developer specializing in building (and also
              designing) exceptional digital experiences. Currently, I'm focused
              on building responsive front-end web-applications while learning
              back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <FaLinkedinIn />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <FaGithub />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <AiOutlineMail />
              </div>
              <div className='rounded-full shadow-lg p-6 cursor-pointer hover:scale-110 ease-in duration-500'>
                <BsFillPersonFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
