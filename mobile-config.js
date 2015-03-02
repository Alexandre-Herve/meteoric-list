// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.example.lol',
  name: 'lolilol',
  description: 'haha hoho',
  author: 'Alex',
  email: 'alexandre.herve9@gmail.com',
  website: 'http://example.com'
});

// Set up resources such as icons and launch screens.
App.icons({
});

App.launchScreens({
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xff0000ff');
App.setPreference('HideKeyboardFormAccessoryBar', false);

// Pass preferences for a particular PhoneGap/Cordova plugin
//App.configurePlugin('com.phonegap.plugins.facebookconnect', {
//  APP_ID: '1234567890',
//  API_KEY: 'supersecretapikey'
// });
