// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const environment = {
  production: false,
  firebaseConfig: {
  apiKey: 'AIzaSyBQ9VUi69kQnAsb_CsP90mw6pKcK8uK_Wg',
  authDomain: 'crud-ionic-56356.firebaseapp.com',
  projectId: 'crud-ionic-56356',
  storageBucket: 'crud-ionic-56356.appspot.com',
  messagingSenderId: '1017935412567',
  appId: '1:1017935412567:web:e317ffe41275f1963e1212'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
