import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface ProjectsCardProps {
    title: string;
    Icon: LucideIcon;
    href?: string;
    bgColor: string;
    techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
    title,
    Icon,
    href,
    bgColor,
    techStack,
}) => {
    return (
        <Link target="_blank" href={href || '/'}>
            <div className="flex gap-3 bg-cardPrimary rounded-lg overflow-ellipsis overflow-hidden p-5">
                <div
                    className="flex py-8 px-8 rounded-md overflow-hidden justify-center items-center"
                    style={{ backgroundColor: bgColor }}
                >
                    <Icon />
                </div>
                <div className="flex flex-col overflow-hidden">
                    <div className="font-bold">{title}</div>
                    <div className="text-info text-sm">{techStack}</div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectsCard;