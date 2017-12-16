import firebase = require('firebase');
import { ClassAttributes, Component, createElement } from 'react';
import TimelineItem from './TimelineItem';

interface Props {
  firestore: firebase.firestore.Firestore;
}

interface State {
  posts: firebase.firestore.DocumentSnapshot[];
}

class Timeline extends Component<ClassAttributes<HTMLElement> & Props, State> {
  private unsubscribe?: () => void;

  public state: State = {
    posts: [],
  };

  public componentDidMount() {
    this.unsubscribe = this.props.firestore.collection('posts').onSnapshot(querySnapshot => {
      this.setState({ posts: querySnapshot.docs });
    });
  }

  public componentWillUnmount() {
    this.unsubscribe!();
  }

  public render() {
    const items = this.state.posts.map(post => <TimelineItem post={post.data()} key={post.id} />);

    return <div>{items}</div>;
  }
}

export default Timeline;
