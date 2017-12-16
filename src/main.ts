import 'firebase/firestore';
import { createElement } from 'react';
import { render } from 'react-dom';
import Application from './Application';

const FIREBASE_API_KEY = 'xxx';
const FIREBASE_AUTH_DOMAIN = 'xxx.firebaseapp.com';
const FIREBASE_PROJECT_ID = 'xxx';

const main = async () => {
  render(
    createElement(Application, {
      firebaseApiKey: FIREBASE_API_KEY,
      firebaseAuthDomain: FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: FIREBASE_PROJECT_ID,
    }),
    document.getElementById('app_root'),
    () => {
      console.log('Hello, world!');
    },
  );
};

window.addEventListener('DOMContentLoaded', main);
