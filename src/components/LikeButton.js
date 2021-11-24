import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// General Default Props
const DEFAULT_ICON_SIZE = 32;

// Default configs for Liked Component
const DEFAULT_LIKED_ICON_NAME = "heart-outline";
const DEFAULT_LIKED_ICON_COLOR = "red";

// Default configs for Unliked Component
const DEFAULT_UNLIKED_ICON_NAME = "heart";
const DEFAULT_UNLIKED_ICON_COLOR = "black";

export default function LikeButton({
  // Basic Props
  liked = undefined,
  onPress = () => {},
  iconSize = DEFAULT_ICON_SIZE,

  // Liked Component Props
  customLikedComponent,
  likedColor = DEFAULT_LIKED_ICON_COLOR,
  likedIconName = DEFAULT_LIKED_ICON_NAME,

  // Unlike Component Props
  customUnlikedComponent,
  unlikedColor = DEFAULT_UNLIKED_ICON_COLOR,
  unlikedIconName = DEFAULT_UNLIKED_ICON_NAME,
}) {
  // This is a shared value for animation
  const isLiked = useSharedValue(liked !== undefined && liked === true ? 1 : 0);

  // Check whether the component should be controlled or uncontrolled
  const controlled = liked !== undefined;

  // useEffect to detect when `liked` prop changes
  // If component is controlled then animate according to `liked` prop
  useEffect(() => {
    if (controlled) isLiked.value = withSpring(liked ? 1 : 0);
  }, [liked]);

  // Animated Styles for the upper like button
  const OutLineStyling = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(isLiked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
        },
      ],
    };
  });

  // Animated Styles for the bottom like button
  const FillStyling = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: isLiked.value,
        },
      ],
      opacity: isLiked.value,
    };
  });

  // If Component is uncontrolled, just invert the isLiked value
  // Other wise do nothing
  const onComponentPress = async () => {
    try {
      if (!controlled) isLiked.value = withSpring(isLiked.value ? 0 : 1);

      if (onPress instanceof Function) onPress();
    } catch (error) {}
  };

  // Render
  return (
    <Pressable onPress={onComponentPress}>
      <Animated.View style={[StyleSheet.absoluteFillObject, OutLineStyling]}>
        {customUnlikedComponent ? (
          customUnlikedComponent
        ) : (
          <MaterialCommunityIcons
            name={likedIconName}
            size={iconSize}
            color={unlikedColor}
          />
        )}
      </Animated.View>

      <Animated.View style={FillStyling}>
        {customLikedComponent ? (
          customLikedComponent
        ) : (
          <MaterialCommunityIcons
            name={unlikedIconName}
            size={iconSize}
            color={likedColor}
          />
        )}
      </Animated.View>
    </Pressable>
  );
}
