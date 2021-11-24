# React Native Like Button

Provides an animated like/unlike button for reusability.

## Features

- Animated Like Button
- Fully customizable

## ✨ Preview

<p align="center">
  <img src="https://i.imgur.com/4FhxI6u.gif" width=300 height=700 />
</p>

## Installation

Just run the below command in your project folder

Note:- This runs only in React Native CLI project. For Expo projects, use [this](https://github.com/kartikeyvaish/expo-like-button) package.

To install,

    npm install --save react-native-like-button

## Usage

### UnControlled Component

Below shown is the usage of the component as an uncontrolled component.

```javascript
import LikeButton from 'react-native-like-button';

...

// basic Usage
<LikeButton />
```

### Controlled Component

For controlled component, you can use it as shown.

```javascript
import LikeButton from "react-native-like-button";

const [Liked, SetLiked] = useState(true);

const onLikePress = async () => {
  // Do something for Like operation
  SetLiked(true);
};

const onUnLikePress = async () => {
  // Do something for Like operation
  SetLiked(true);
};

// basic Usage
<LikeButton liked={Liked} onPress={Liked ? onUnLikePress : onLikePress} />;
```

## Parameters

### Basic Parameters

| Parameter | Default     | Description                                                                                         |
| --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| liked     | `undefined` | Color of the timestamp which shows total time that has been elapsed since the video started playing |
| onPress   | `undefined` | Color of the timestamp which shows total duration of the clip                                       |
| iconSize  | `undefined` | Color of the timestamp which shows total duration of the clip                                       |

### Liked Icon Component Props

| Parameter            | Default           | Description                                                                        |
| -------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| likedColor           | `red`             | Color of the liked icon                                                            |
| likedIconName        | `"heart-outline"` | name of the icon when liked is true (Derived from `MaterialCommunityIcons` family) |
| customLikedComponent | `null`            | custom component to show in place of liked icon                                    |

### UnLiked Icon Component Props

| Parameter              | Default   | Description                                                                         |
| ---------------------- | --------- | ----------------------------------------------------------------------------------- |
| unlikedColor           | `black`   | Color of the unliked icon                                                           |
| unlikedIconName        | `"heart"` | name of the icon when liked is false (Derived from `MaterialCommunityIcons` family) |
| customUnlikedComponent | `null`    | custom component to show in place of unliked icon                                   |
