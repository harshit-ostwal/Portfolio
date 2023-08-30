import React from 'react';
import ScrollAnimation from '../ScrollAnimation';

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, content }) => {
  return (
    <>
      <div className="timeline-item">
        <div className="timeline-dot animate-fade-in-top" />
        <div className="timeline-date animate-fade-in-left">{date}</div>
        <div className="timeline-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default TimelineItem;
