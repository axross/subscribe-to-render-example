import firebase = require('firebase');
import { ClassAttributes, Component, createElement } from 'react';
import Timeline from './Timeline';

interface Props {
  firebaseApiKey: string;
  firebaseAuthDomain: string;
  firebaseProjectId: string;
}

class Application extends Component<ClassAttributes<HTMLElement> & Props, {}> {
  private firestore: firebase.firestore.Firestore;

  constructor(props: Props) {
    super(props);

    this.firestore = firebase
      .initializeApp(
        {
          apiKey: props.firebaseApiKey,
          authDomain: props.firebaseAuthDomain,
          projectId: props.firebaseProjectId,
        },
        `instance_${Math.random()}`,
      )
      .firestore();
  }

  render() {
    return (
      <div>
        <Timeline firestore={this.firestore} />
      </div>
    );
  }
}

export default Application;
