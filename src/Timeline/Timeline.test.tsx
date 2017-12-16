import { shallow } from 'enzyme';
import firebase = require('firebase');
import 'firebase/firestore';
import { createElement } from 'react';
import Timeline from './Timeline';

describe('<Timeline>', () => {
  const firestore = firebase
    .initializeApp({
      apiKey: 'dummy',
      authDomain: 'dummy',
      projectId: 'dummy',
    })
    .firestore();

  test('it matches with what it renders', () => {
    jest.spyOn(firestore, 'collection');

    const rendered = shallow(<Timeline firestore={firestore} />);

    expect(rendered).toMatchSnapshot();
  });

  test('it subscribes collection "posts" of firestore and set own state', () => {
    const posts = [createDummyFirestoreDocumentSnapshot('post1'), createDummyFirestoreDocumentSnapshot('post2'), createDummyFirestoreDocumentSnapshot('post3')];
    const onSnapshot = jest.fn(callback => callback({ docs: posts }));
    const collectionFunction = jest.spyOn(firestore, 'collection').mockImplementation(() => ({ onSnapshot }));

    const rendered = shallow(<Timeline firestore={firestore} />);

    expect(collectionFunction).toHaveBeenCalledWith('posts');
    expect(onSnapshot).toHaveBeenCalled();
    expect(rendered.state().posts).toEqual(posts);
    expect(rendered).toMatchSnapshot();
  });
});

const createDummyFirestoreDocumentSnapshot = (id: string, data?: Record<string, any>) => ({
  id,
  data: () => data ? data : Symbol(id),
});
