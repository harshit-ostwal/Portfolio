import { FC } from 'react';
import ProjectsCard from '../ui/ProjectsCard';
import { IProjectSectionCardData } from '../utils/Data';

interface ProjectCardSectionProps {
    title: string;
    animation: string;
    data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, animation, data }) => {
    return (
        <section className={animation}>
            <div className="grid gap-5 p-5 mt-5 md:p-0 overflow-hidden">
                <div className="text-xl font-bold text-highlight">{title}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-highlight lg:grid-cols-2 xl::grid-cols-3 gap-5">
                    {data.map((card) => (
                        <ProjectsCard
                            href={card.href}
                            key={card.id}
                            title={card.title}
                            Icon={card.Icon}
                            bgColor={card.bgColor}
                            techStack={card.techStack}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectCardSection;