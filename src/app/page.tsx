import Cover from '@/components/Cover';
import Projects from './projects/page';
import Skill from './skills/page';

export default function Home() {
  return (
    <div>
      <Cover />
      {/* <Projects/> */}
      <Skill/>
    </div>
  );
}
