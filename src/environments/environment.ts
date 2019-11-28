// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  name: 'local',
  creditPartyServiceUrl: 'http://localhost:5050/v1',
  creditPartyServiceSubscriberId: 'cb2b8d1d-6adf-4c69-b234-b7cd3a602391',
  creditPartyServiceSubscriberSecret: 'ZmynOKRb'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
