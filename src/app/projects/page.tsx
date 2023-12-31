import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
    projectCard
}
    from '@/components/utils/Data';

export default function Projects() {
    return (
        <>
            <div className="flex flex-col mt-10 gap-10 lg:px-10 overflow-hidden">
                <div>
                    <ProjectCardSection title="Projects" animation='animate-fade-in-top' data={projectCard} />
                </div>
            </div>
        </>
    );
}
