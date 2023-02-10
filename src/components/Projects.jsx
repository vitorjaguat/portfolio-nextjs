import propertyImg from '../../public/assets/projects/property.jpeg';
import cryptoImg from '../../public/assets/projects/crypto.jpeg';
import twitchImg from '../../public/assets/projects/twitch.jpeg';
import netflixImg from '../../public/assets/projects/netflix.jpeg';

import ProjectItem from './ProjectItem';

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
          />
          <ProjectItem
            title='Twitch Clone'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
          />
          <ProjectItem
            title='Netflix Clone'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
          />
        </div>
      </div>
    </div>
  );
}
