import { Steps } from 'antd';

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
    <section id="experience" className="min-h-screen scroll-mt-24">
      <h2 className="text-4xl">Experience</h2>

      <Steps orientation="vertical" current={1} items={items} size="small" />
    </section>
  );
}