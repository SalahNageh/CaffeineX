import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
// import { COLORS, FONTFAMILY, FONTSIZE } from '../theme/theme';

const EmptyListAnimation = ({ title }) => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../lottie/coffeecup.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>Cart is empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  LottieStyle: {
    height: 300,
  },
  LottieText: {
    // fontFamily: FONTFAMILY.poppins_medium,
    fontSize: 24,
    color: "#d9662d",
    textAlign: 'center',
  },
});

export default EmptyListAnimation;
