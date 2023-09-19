import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
    projectCard
}
    from '@/components/utils/Data';

export default function Projects() {
    return (
        <>
            <div className="flex flex-col mt-20 gap-10 lg:px-10">
                <div>
                    <ProjectCardSection title="Projects" animation='animate-fade-in-top' data={projectCard} />
                </div>
            </div>
        </>
    );
}
