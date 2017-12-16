import { ClassAttributes, createElement } from 'react';

interface Props {
  post: any;
}

const TimelineItem = ({ post }: ClassAttributes<HTMLElement> & Props) => {
  console.log(post);

  return <div>{post.body}</div>;
};

export default TimelineItem;
