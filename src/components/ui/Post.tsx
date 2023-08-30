import Image from 'next/image';
import { FC } from 'react';
import List from './List';
import { History, ThumbsUp } from 'lucide-react';
import Link from 'next/link';

interface PostProps {
    title: string;
    date: string;
    like: number;
    src: string;
    desc: string;
    href?: string;
}

const Post: FC<PostProps> = ({
    title,
    date,
    like,
    src,
    desc,
    href,
}) => {
    return (
        <div className="flex flex-col gap-3 transform transition-transform hover:scale-105">
            <Link target="_blank" href={href || '/'}>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                        src={src}
                        alt={title}
                        fill
                        className='bg-white object-center'
                    />
                </div>
            </Link>
            <div className="grid gap-2 px-2">
                <div className="text-highlight text-2xl font-bold animate-fade-in-left">{title}</div>
                <div className="flex gap-2 md:gap-10 animate-fade-in-left">
                    <List
                        variant="info"
                        target="_blank"
                        link={href || '/'}
                        sizes="xs"
                    >
                        <History size={16} />
                        {date}
                    </List>
                    <List
                        variant="info"
                        target="_blank"
                        link={href || '/'}
                        sizes="xs"
                    >
                        <ThumbsUp size={16} />
                        {like.toLocaleString()}
                    </List>
                </div>
                <div className="text-secondary text-sm font-bold animate-fade-in-right">{desc}</div>
            </div>
        </div>
    );
};

export default Post;
