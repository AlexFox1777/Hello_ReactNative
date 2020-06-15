# Welcome to React Native guide - https://kadikraman.github.io/react-native-v2/intro

# Hello_ReactNative

linter
prittier
eslint
auto fixing

npm install eslint @react-native-community/eslint-config --save-dev

# Tips

## Lists

In Native Development you should never use a map to display an array of items. This is due to performance. Because the mobile phone will render every single thing that`s on the screen. So if you have an array of 100 colors, it will try to render all of them. And it will try to rerender all of them whenever the component tree renders.
In order to render lists we have special components:

• Flat List
• Section List
