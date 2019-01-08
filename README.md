# Entelect Incubator - React Native 0.57.X (WIP)

## Entelect Experts (for when you're stuck)
* \#javascript on Slack
* \#react-native on Slack
* [Ryan Kotzen](https://confluence.entelect.co.za/display/~RyanK)
* [JP Strydom](https://confluence.entelect.co.za/display/~jp.strydom)

## Preface
This incubator is a summary of Entelect's [React Native - A Beginner's Guide](https://confluence.entelect.co.za/download/attachments/28147728/React%20Native%20-%20A%20Beginner%27s%20Guide.pdf?version=1&modificationDate=1545909051510&api=v2) - please feel free to have a look at it for more detailed information (This [Lodash Presentation](https://confluence.entelect.co.za/download/attachments/28147728/Lodash%20Presentation.pdf?version=1&modificationDate=1545909127963&api=v2) serves as an addendum to the aforementioned document).

This incubator goes under the assumption that you have some experience with React and Redux. If that is not the case, I'd recommend that you familiarise yourself with these first, as it will shed a lot of light on some of the topics being discussed. Entelect's [React 16.X Incubator](https://confluence.entelect.co.za/display/ES/React+16.x+Incubator+Pack) is an excellent starting place.

## Outcomes
After going through the incubator, you should be familiar with the following concepts:
* ES6
* React Native JSX
* Using native API's (GPS, local storage, etc.)
* React Native application State and Lifecycle
* Native code modules
* React Native classes

The incubator does not intend to prepare you to start an enterprise React Native project from scratch, but rather, prepares you to **hit the ground running** when joining a team, or starting on an old project. For an enterprise-level React Native setup, see the attached [React Native Beginner's Guide](https://confluence.entelect.co.za/download/attachments/28147728/React%20Native%20-%20A%20Beginner%27s%20Guide.pdf?version=1&modificationDate=1545909051510&api=v2).

## Getting Started
Facebook's React Native [Getting Started](https://facebook.github.io/react-native/docs/getting-started) guide will help you to get your environment up and running and their [Tutorial](https://facebook.github.io/react-native/docs/tutorial) is an excellent starting place, as it covers theoretical and practical aspects of React Native. Completing Facebook's React Native tutorial shouldn't take more than a day.

You probably noticed during the tutorial that there's no built in mechanism for making Ajax requests and that there's no built in navigation framework. The tutorial not covering these is not an oversight. React Native doesn't have either of these built in, you need to choose one. 

Based on experience garnered from React Native projects we've done, [Axios](https://github.com/axios/axios) is our preferred Ajax library and [React Navigation](https://reactnavigation.org/en/) is our preferred navigation framework.

## Pro-tips & Pitfalls
*Note: See the **Pro-tips & Pitfalls** section in the [React Native Beginner's Guide](https://confluence.entelect.co.za/download/attachments/28147728/React%20Native%20-%20A%20Beginner%27s%20Guide.pdf?version=1&modificationDate=1545909051510&api=v2) for a more detailed breakdown of React Native's pro-tips & pitfalls.*

* Expo is useful for prototyping but it does not allow you to make native code alteration - have a look at the Expo [caveats](https://facebook.github.io/react-native/docs/getting-started#caveats). It is not recommended to use Expo for enterprise projects.
* When installing libraries and packages that require native code changes, make sure that the appropriate native files are updated correctly - this can be done by following the library/package in question's manual installation steps.
* Use React Native's [StyleSheet.create](https://facebook.github.io/react-native/docs/style#docsNav) method to create small reusable style components.
* Give thought to how your application will scale on different devices with different sizes and aspect ratios:
    *Try to avoid using pixel values
    * Make sure to use the [Flexbox](https://facebook.github.io/react-native/docs/flexbox) system as much as possible
    * React Native allows you to access the device's dimensions - you can use a percentage of the devices height or width to size and scale components
* Develop on a physical device if you can:
    * When running in debug (develop) mode, React Native applications take a big performance hit - this combined with the poor performance of emulators can lead to a less than ideal and sluggish experience
    * Some visual components don't function correctly on emulators, so you might end up trying to fix a visual bug that might not even exist on physical devices
    * When using your fingers to navigate and action your application, you get a better understanding of how your application will feel to actual users

## Practical
You must create a calendar and itinerary with weather information for a city that the user selects when they first visit the mobile application.

High-level functional requirements are as follows:

1) When the user opens the app for the first time it must ask them in which City they stay.
2) Once a city has been selected the user must be asked which time format they prefer, 24 hour or 12 hour.
3) Once the initial setup component of selected a time format and city has been completed the user is sent to their dashboard.
4) The dashboard is essentially a calendar with integrated weather forecasts.
5) The dashboard shows the current weather conditions as returned by the [Open Weather API](https://openweathermap.org/api).
6) The dashboard must show weather data for the current day.
7) The dashboard must show the weather forecast for the next 5 days as returned by the Open Weather API.
8) When a user taps on a day on the calendar they are able to edit their itinerary for that day.
9) When editing their itinerary the user can add items for a specific time, or they can add todo items which are not to be completed at a specific time.
10) Modifications to a user's location, time format preference, and itinerary should be persisted to local storage.

You have free reign over the design, layout, and look & feel of the portal. Be creative!

You're welcome to use whatever you please, but the [Expo](https://facebook.github.io/react-native/docs/getting-started) seed is the easiest seed with which to begin your project. You can also use Entelect's own React Native [starter project﻿](https://github.com/entelect/incubator_react_native) if you don't mind setting up the Android/iOS environments.

*Note: Expo is not recommended for large or enterprise projects, see the **Getting Started** section in the [React Native Beginner's Guide](https://confluence.entelect.co.za/download/attachments/28147728/React%20Native%20-%20A%20Beginner%27s%20Guide.pdf?version=1&modificationDate=1545909051510&api=v2) for a more detailed breakdown of getting started with React Native.*

## Advanced
1) Use React Native's [Geolocation API](https://facebook.github.io/react-native/docs/geolocation) to automatically get the user's location (this is not available in Expo apps that have not been ejected).
2) Add support for multiple users.
3) Use Redux.
4) Use Redux-Thunk.
5) Use a testing framework to test your reducers.
6) Use enzyme for acceptance / regression testing.

## Feedback
Feedback is important. If you find a cool new resource or feel that any part of this incubator or it's resources are out of date, leave us a message in the #javascript or #react-native Slack channel.
