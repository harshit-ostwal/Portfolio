import List from '@/components/ui/List';
import { Eye, History, ThumbsUp } from 'lucide-react';
import { FC } from 'react';

interface IntroProps {}

const Intro: FC<IntroProps> = ({}) => {
    return (
        <div className="flex flex-1 flex-col md:flex-row gap-5 ms-0">
            <div className="flex flex-1">
                <iframe
                    className="w-full aspect-video rounded-2xl animate-fade-in-left ms-2 sm:ms-5 sm:me-5 me-2"
                    src="https://www.youtube.com/embed/uvvbCirHCrM?si=9kvSTVif-JakCxPj"
                ></iframe>
            </div>
            <div className="flex flex-col justify-between flex-1 p-2 md:p-0">
                <div className="flex flex-col gap-2">
                    <div className="text-2xl text-highlight sm:ms-5 animate-fade-in-right sm:me-5 me-2 ms-2 font-semibold">
                        An Introduction - Harshit Jain
                    </div>
                    <div className="flex gap-2 md:gap-5 sm:ms-5 animate-fade-in-right sm:me-5 me-2 ms-2 mt-3">
                        <List variant="info" sizes="xs">
                            <Eye size={16} />
                            2304
                        </List>
                        <List variant="info" sizes="xs">
                            <History size={16} /> 1 month ago
                        </List>
                        <List variant="info" sizes="xs">
                            <ThumbsUp size={16} /> 70
                        </List>
                    </div>
                </div>
                <div className="text-secondary text-sm ms-2 sm:ms-5 sm:me-5 me-2 animate-fade-in-right lg:mb-32 md:mt-10 mt-5 max-w-[500px]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, natus. Beatae laudantium eum et vel ad? Non deserunt, eligendi quisquam quod assumenda ut odit commodi fuga laudantium maxime iste quis rem? Ut magnam, ipsa quia ex pariatur quaerat adipisci et ipsum provident at! Quos voluptatibus officia, laboriosam impedit cum id!
                </div>
            </div>
        </div>
    );
};

export default Intro;
