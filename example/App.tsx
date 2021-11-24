import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import LikeButton from 'react-native-like-button';

export default function App() {
  const [Liked, SetLiked] = useState(true);

  const onLikePress = async () => {
    try {
      // Do something for Like operation
      SetLiked(true);
    } catch (error) {}
  };

  const onUnLikePress = async () => {
    try {
      // Do something for Unike operation
      SetLiked(false);
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <LikeButton liked={Liked} onPress={Liked ? onUnLikePress : onLikePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
