import List from '@/components/ui/List';
import { Eye, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <div className="hidden md:flex flex-col w-max px-4 gap-5 text-info">
            <List link="/instagram" sizes="xs" className="gap-4 animate-fade-in-right">
                <User size={16} />
                <span>
                    <b className="text-secondary">200</b> Followers
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4 animate-fade-in-left">
                <Video size={16} />
                <span>
                    <b className="text-secondary">1</b> Videos
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4 animate-fade-in-right">
                <Eye size={16} />
                <span>
                    <b className="text-secondary">5K</b> Views
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4 animate-fade-in-left">
                <ThumbsUp size={16} />
                <span>
                    <b className="text-secondary">2K</b> Likes
                </span>
            </List>
        </div>
    );
};

export default Stats;
