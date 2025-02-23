import { useState } from 'react';

import { Topic } from './App';
import { TopicCard } from './TopicCard';

type Props = {
  topics: Topic[];
};

export function Accordion({ topics }: Props) {
  const [activeIndex, setActiveIndex] = useState<number>();

  function handleSelect(id: number): void {
    if (id === activeIndex) {
      setActiveIndex(undefined);
    } else {
      setActiveIndex(id);
    }
  }
  return (
    <div>
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          isOpen={topic.id === activeIndex}
          onSelect={() => handleSelect(topic.id)}
        />
      ))}
    </div>
  );
}
