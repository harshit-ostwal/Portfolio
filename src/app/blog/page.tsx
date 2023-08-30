import Cover from '@/components/Cover';
import ScrollAnimation from '@/components/ScrollAnimation';
import PostSection from '@/components/sections/PostSection';
import {
    Posts
}
    from '@/components/utils/Data';

export default function Blog() {
    return (
        <>
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10">
                <div>
                    <PostSection title='Blog' animation='animate-fade-in-top' data={Posts} />
                </div>
            </div>
        </>
    );
}