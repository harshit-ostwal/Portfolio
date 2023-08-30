import Cover from '@/components/Cover';
import ScrollAnimation from '@/components/ScrollAnimation';
import CardSection from '@/components/sections/CardSection';
import {
    backendCard,
    databaseCard,
    frontendCard,
    webCard
} from '@/components/utils/Data';

export default function Skill() {
    return (
        <>
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10 ">
                <div>
                    <ScrollAnimation>
                        <CardSection title="Frontend" animation='animate-fade-in-top' data={frontendCard} />
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <CardSection title="Backend" animation='animate-fade-in-down' data={backendCard} />
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <CardSection title="Database" animation='animate-fade-in-top' data={databaseCard} />
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <CardSection title="Website Builder" animation='animate-fade-in-down' data={webCard} />
                    </ScrollAnimation>
                </div>
            </div>
        </>
    );
}
