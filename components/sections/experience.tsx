import { Steps } from 'antd';
import { Separator } from '../ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faJava, faNodeJs, faPython, faReact, faTailwindCss } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase, faLink } from '@fortawesome/free-solid-svg-icons';
import { BrainCog, Cloud } from 'lucide-react';

const content = 'This is a content.';
const items = [
  {
    title: 'Finished',
    content,
  },
  {
    title: 'In Progress',
    content,
  },
  {
    title: 'Waiting',
    content,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full scroll-mt-24">
      <h2 className="text-4xl">Experience</h2>

      <Separator className='my-4' />

      <div className="flex flex-wrap text-justify justify-between gap-8">
        <div>
          <h5 className="text-md">Software Engineer</h5>

          <a target="_blank" href='https://www.sodavision.com/' className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400 underline">
            Soda Vision Pte Ltd
          </a>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">April 2025 - Present</p>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">Woodlands, Singapore</p>
        </div>

        <div className='min-w-40 max-w-3xl'>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <p className="text-sm text-muted-foreground">
                Developed and maintained web applications using React, Node.js, and MongoDB, resulting in a 20% increase in user engagement.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Collaborated with cross-functional teams to design and implement new features, improving overall user experience and satisfaction.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Optimized application performance by implementing caching strategies and code refactoring, reducing load times by 30%.
              </p>
            </li>
          </ul>

          <div className='flex'>
            <FontAwesomeIcon icon={faReact} height={20} width={20} />
            <FontAwesomeIcon icon={faPython} height={20} width={20} />
            <FontAwesomeIcon icon={faNodeJs} height={20} width={20} />
            <FontAwesomeIcon icon={faDatabase} height={20} width={20} />
            <BrainCog className='h-5 w-5' />
          </div>
        </div>
      </div>

      <Separator className='my-4' />

      <div className="flex flex-wrap text-justify justify-between gap-8">
        <div>
          <h5 className="text-md">Software Engineer</h5>

          <a target="_blank" href='https://eclinic.com.sg/' className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400 underline">Assurance Technology Pte Ltd</a>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">July 2023 - April 2025</p>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">Jurong East, Singapore</p>
        </div>

        <div className='min-w-40 max-w-3xl'>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <p className="text-sm text-muted-foreground">
                Developed and maintained web applications using React, Node.js, and MongoDB, resulting in a 20% increase in user engagement.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Collaborated with cross-functional teams to design and implement new features, improving overall user experience and satisfaction.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Optimized application performance by implementing caching strategies and code refactoring, reducing load times by 30%.
              </p>
            </li>
          </ul>

          <div className='flex'>
            <FontAwesomeIcon icon={faDatabase} height={20} width={20} />
            <FontAwesomeIcon icon={faCloud} height={20} width={20} />
          </div>
        </div>
      </div>

      <Separator className='my-4' />

      <div className="flex flex-wrap text-justify justify-between gap-8">
        <div>
          <h5 className="text-md">Software Engineer Intern</h5>

          <a target="_blank" href='https://www.ifastcapital.com.my/' className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400 underline">iFAST Capital Sdn Bhd</a>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">November 2022 - May 2023</p>
          <p className="text-sm text-muted-foreground text-zinc-500 dark:text-zinc-400">Kuala Lumpur, Malaysia</p>
        </div>

        <div className='min-w-40 max-w-3xl'>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <p className="text-sm text-muted-foreground">
                Developed and maintained web applications using React, Node.js, and MongoDB, resulting in a 20% increase in user engagement.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Collaborated with cross-functional teams to design and implement new features, improving overall user experience and satisfaction.
              </p>
            </li>
            <li>
              <p className="text-sm text-muted-foreground">
                Optimized application performance by implementing caching strategies and code refactoring, reducing load times by 30%.
              </p>
            </li>
          </ul>

          <div className='flex'>
            <FontAwesomeIcon icon={faAngular} height={20} width={20} />
            <FontAwesomeIcon icon={faTailwindCss} height={20} width={20} />
            <FontAwesomeIcon icon={faJava} height={20} width={20} />
            <FontAwesomeIcon icon={faNodeJs} height={20} width={20} />
          </div>
        </div>
      </div>
    </section>
  );
}