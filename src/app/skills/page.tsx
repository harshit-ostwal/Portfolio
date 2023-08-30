import Cover from '@/components/Cover';
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
                    <CardSection title="Frontend" animation='animate-fade-in-top' data={frontendCard} />
                    <CardSection title="Backend" animation='animate-fade-in-down' data={backendCard} />
                    <CardSection title="Database" animation='animate-fade-in-top' data={databaseCard} />
                    <CardSection title="Website Builder" animation='animate-fade-in-down' data={webCard} />
                </div>
            </div>
        </>
    );
}
