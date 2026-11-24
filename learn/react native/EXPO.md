## Expo
- Expo is a framework for react native
- Provides features
  - file-based routing
  - high-quality universal libraries
  - the ability to write plugins that modify native code without having to manage native files
  - You can still add native functionality when necessary
  - Expo tools can be adopted independently
- **Expo app means:** This is a shorthand for describing a React Native app that uses Expo tools

## EAS (Expo Application Services)
- A suite of hosted services
- Use with Expo and React Native projects to:
  - Build, submit, and update your app
  - Set up automation around all of these processes
  - Collaborate with your team
- Solves a set of problems that require physical resources, such as application servers and CDNs for serving over-the-air updates and physical servers for running builds
- It also offers you to run these services on your own infrastructure

## Expo GO
- Fastest way to get started with React Native
- A limited playground and not useful for building production-grade projects

## Development builds
- A debug build of your app that contains `expo-dev-client` library
- Provides a more flexible, reliable, and complete development environment than Expo Go

## Continuous Native Generation (CNG)
- Continuous Native Generation (CNG) is a process for building an Expo app where your native projects are generated on-demand from your app.json and package.json, similar to how your node_modules are generated from your package.json
- Using CNG can make upgrading to new versions of React Native much easier
- Generate android and iOS directories using `npx expo prebuild`. Most of the cases, it's not required

## Build
> Refer 
> https://docs.expo.dev/develop/development-builds/introduction/

## Development workflow
Refer diagram
> Refer 
> https://docs.expo.dev/workflow/overview/#the-core-development-loop



#  NEEDS TO CHECK

To install your app directly on your Android phone as a standalone `.apk` file, you need to use Expo's **EAS Build** (Expo Application Services) system.

Here is how to set it up and generate your APK step-by-step:

1. **Install EAS CLI and Log In:** Prerequisite.
Open your terminal in your project directory, install the EAS CLI globally, and log into your Expo account.

```bash
npm install -g eas-cli
eas login

```

To verify that you are logged in, run `eas whoami`.


2. **Configure Your Build Profile:** Project Setup.
Initialize EAS in your project directory:

```bash
eas build:configure

```

This creates an `eas.json` file in your root folder. Open `eas.json` and add a preview profile configured for an **APK** (the default profile builds an `.aab` file for the Google Play Store):

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {}
  }
}

```

To verify if `eas.json` is configured properly, ensure `"buildType": "apk"` is nested under `preview.android`.


3. **Run the APK Build:** Cloud Build.
Start the build using the `preview` profile you just created:

```bash
eas build -p android --profile preview

```

Select **Yes** if prompted to generate an Android Keystore automatically. The build will run on Expo's cloud servers.

To verify if the build succeeded, check the terminal output for a direct **download link** or a **QR code** when the process completes.


4. **Download and Install on Device:** Final Step.
Scan the generated QR code with your phone or open the provided URL directly on your device to download the `.apk` file.

Before opening the installer, ensure your phone allows installations from your browser or file manager (**Settings > Apps > Special app access > Install unknown apps**).

To verify success, launch the app from your phone's app drawer—it should now run independently without needing Expo Go or a development server.


# Second prompt

To build the APK directly on your local machine, you have two options:

1. **EAS CLI Local Build:** Uses Expo's build pipeline locally.
2. **Native Android / Gradle Build:** Generates native Android code and compiles via Gradle.

---

### Option 1: EAS Local Build (Recommended)

This mirrors Expo's cloud build process on your local computer using the `--local` flag.

> **Prerequisite:** You must have **Android Studio** installed along with the **Android SDK**, **NDK**, and `ANDROID_HOME` configured in your environment path. *(Note: Windows users must use WSL to run local EAS builds).*

1. **Run Local EAS Command:** In Terminal.
Execute the build command with the `--local` flag pointing to your APK preview profile:

```bash
eas build --platform android --profile preview --local

```


2. **Locate the APK Output:** Verification.
Once compilation finishes, EAS CLI will output the generated `.apk` file directly in your project root or in a generated `dist/` directory.


---

### Option 2: Prebuild & Build via Gradle (No EAS CLI Required)

If you prefer not to run EAS locally, you can export the project to native Android code and build it directly with Gradle.

1. **Generate Native Android Directory:** npx expo prebuild.
Run the prebuild command to create the native `/android` folder from your Expo configuration:

```bash
npx expo prebuild

```


2. **Compile APK via Gradle:** Release Build.
Navigate into the generated `android` folder and build the release APK using the Gradle wrapper:

```bash
cd android
./gradlew assembleRelease

```

*(On Windows Command Prompt, run `gradlew assembleRelease` without `./`)*


3. **Locate the Generated APK:** Verification.
Your compiled APK will be located at:
`android/app/build/outputs/apk/release/app-release.apk`


---

### How to Verify the Build & Install

Connect your Android device to your computer via USB (with **USB Debugging** enabled under Developer Options) and run:

```bash
adb install path/to/your-app.apk

```

To verify success, launch the app directly from your phone's home screen.