import { FC } from 'react';
import Blog from '../ui/Post';
import { ISectionBlogData } from '../utils/Data';

interface BlogSectionProps {
    title: string;
    animation: string;
    data: ISectionBlogData[];
}
const BlogSection: FC<BlogSectionProps> = ({ title, animation, data }) => {
    return (
        <section className={animation}>
            <div className='grid gap-5 p-5 md:p-0 mb-20'>
                <div className="md:ms-5 lg:ms-0 text-xl font-bold text-highlight mt-20">{title}</div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:gap-5 md:ms-5 md:me-5 lg:grid-cols-3 lg:gap-5 lg:ms-0 xl:grid-cols-3 gap-5">
                    {data.map((card) => (
                        <Blog
                            href={card.href}
                            key={card.id}
                            title={card.title}
                            src={card.src}
                            like={card.like}
                            date={card.date}
                            desc={card.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
