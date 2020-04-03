// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase:   {
    apiKey:            'AIzaSyDpkwRAI219MHjBYD1c44VeWUOI6wITTlQ',
    authDomain:        'regex-explorer.firebaseapp.com',
    databaseURL:       'https://regex-explorer.firebaseio.com',
    projectId:         'regex-explorer',
    storageBucket:     'regex-explorer.appspot.com',
    messagingSenderId: '1052835483587',
    appId:             '1:1052835483587:web:f60e1b1be705a532e4b776',
    measurementId:     'G-HEKN4H2T1H'
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
