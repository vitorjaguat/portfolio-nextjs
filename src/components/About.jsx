import Link from 'next/link';
import { useParallax } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';

export default function About() {
  // const imgParallax = useParallax({
  //   translateX: [40, 0],
  //   opacity: [0.5, 1],
  //   // endScroll: 50,
  //   // easing: 'easeOut',
  //   rootMargin: {
  //     top: 400,
  //     right: 0,
  //     bottom: -800,
  //     left: 0,
  //   },
  //   shouldAlwaysCompleteAnimation: true,

  // });

  const { ref, inView, entry } = useInView({});

  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-20'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-5 gap-8'>
        <div className='col-span-3'>
          <p className='uppercase text-xl tracking-widest text-primary'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            // I am not your normal developer
          </p>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href='/#projects' scroll={false}>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div
          ref={ref}
          style={{
            transform: inView ? 'none' : 'translateX(100%)',
            backgroundColor: inView ? 'red' : 'blue',
            transition: 'all 1s',
          }}
          className='col-span-2 w-full h-auto m-auto shadow-md shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-100'
        >
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt='studio'
          />
        </div>
      </div>
    </div>
  );
}
