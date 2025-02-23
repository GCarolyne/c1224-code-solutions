import { Topic } from './App';

type Prop = {
  topic: Topic;
  isOpen: boolean;
  onSelect: () => void;
};

export function TopicCard({ topic, isOpen, onSelect }: Prop) {
  return (
    <div className="column-full">
      <span className="row title">
        <h2 className="border" onClick={onSelect}>
          {topic.title}
        </h2>
        <div className="column-full">
          {isOpen && <div className="topic-content">{topic.content}</div>}
        </div>
      </span>
    </div>
  );
}
