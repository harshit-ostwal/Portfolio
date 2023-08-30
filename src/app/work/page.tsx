import Cover from "@/components/Cover"
import TimelineItem from '@/components/Work/TimelineItem';

interface TimelineDataItem {
    date: string;
    title: string;
    content: string;
}

const timelineData: TimelineDataItem[] = [
    {
        date: '2015',
        title: 'Timeline Item 1 Title',
        content: 'Lorem ipsum dolor...',
    },
    {
        date: '2015',
        title: 'Timeline Item 1 Title',
        content: 'Lorem ipsum dolor...',
    },
    {
        date: '2015',
        title: 'Timeline Item 1 Title',
        content: 'Lorem ipsum dolor...',
    },
    {
        date: '2015',
        title: 'Timeline Item 1 Title',
        content: 'Lorem ipsum dolor...',
    },
    {
        date: '2015',
        title: 'Timeline Item 1 Title',
        content: 'Lorem ipsum dolor...',
    },
    // Add more data items...
];

export default function Work() {
    return (
        <>
            <Cover />
            <div>Work Page</div>
            <section className={'timeline-section'}>
                <div className="timeline-items ">
                    {timelineData.map((item, index) => (
                        <TimelineItem
                            key={index}
                            date={item.date}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
