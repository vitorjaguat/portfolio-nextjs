import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Skills() {
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <div id='skills' className='w-full p-2 py-20'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-primary'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Can be refactored into a new component: */}
          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/html.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/css.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/javascript.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/react.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/tailwind.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref1}
            style={{
              transform: inView1 ? 'none' : 'translateX(-20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/firebase.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/github1.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div
            ref={ref2}
            style={{
              transform: inView1 ? 'none' : 'translateX(20%)',
              opacity: inView1 ? 1 : 0,
            }}
            className='p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300'
          >
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  alt='my skills'
                  src='/../public/assets/skills/shopify.png'
                  width={64}
                  height={64}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Shopify</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
