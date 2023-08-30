import Cover from '@/components/Cover';
import ScrollAnimation from '@/components/ScrollAnimation';
import CardSection from '@/components/sections/CardSection';
import {
    projectCard
}
    from '@/components/utils/Data';

export default function Projects() {
    return (
        <>
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10">
                <div>
                    <ScrollAnimation>
                        <CardSection title="Projects" animation='animate-fade-in-top' data={projectCard} />
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
