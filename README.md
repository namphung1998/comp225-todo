# Taskitty

#### Authors: Linda Lu, Bibiane Morakotkarn, Kieu-Giang Nguyen, Nam Phung

This is a mobile to-do list application with a gamified aspect that makes it more rewarding for users to complete their tasks.
The app is geared towards students and other people who desire a more enjoyable way to keep track of their tasks and celebrate their completion.

The project is bootstrapped using the [Expo](https://expo.io/) toolchain.

## Build and Run

Make sure you have the following installed on your machine:
  - [Node.js](https://nodejs.org/en/download/)
  - [npm](https://www.npmjs.com/get-npm)
  - [Xcode](https://developer.apple.com/xcode/) (Mac users only - for testing on an iOS simulator), or
  - [Android Studio](https://developer.android.com/studio/install) (testing on an Android emulator).

Change directory into the root of this project, then run this command to install the dependencies.
```
npm install
```

Then, run one of these commands to start a development server.
```
expo start
```

or
```
npm run start
```

Follow either the instructions in the command line, or the UI debugger (which should pop up in your browser) to start a simulator.

## Further Application Development
During the development of our project, we were unable to fully implement all desirable features. These are as follows:
- Editability:
Tasks should be fully editable after creation. This should be done in the already existing task-pop up that already displays extra task details. One simpler implementation of this would be to call a variation of the already existing AddTask screen.
- Sliding Calendar:
Users should be able to interact with the dates in order to scroll through their tasks. For example, if they tap on a date that is marked with a task, the screen should scroll that day’s divider to the top. This will help users navigate when they have multiple tasks spread throughout various due dates.
The calendar should be navigitable, so users can scroll to past or future weeks.
- Gallery Details:
Each photo should be marked with the rarity, so that users know how rare of a photo that they have received.
Duplicate draws need to be handled, so that multiple of the same photos may show up in the Gallery.
Expanding on the Gallery features, duplicates should be sellable or mergeable. For example, duplicates could be sold back for a given amount of fish or merged together to create a new photo.

## Known Bugs
- ImageGallery
Due to the use of a third party component, sizing images in the Gallery is inconsistent across platforms. On iOS, the default photo does not size correctly.
- Styling Issues
Because of the cross-platform nature of the application, the styling is not always consistent across platforms. This can be seen most evidently when a user adds a task.
