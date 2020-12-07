import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Image,
} from 'react-native';
import Sacola from '../sacola/sacola';

const Background = () => {
  const imgSrc = require('../../assets/images/background.jpg');
  const imgBack = require('../../assets/images/flecha-esquerda.png');
  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imgSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerComponent}>
          <Image style={styles.flecha} source={imgBack} />
          <View style={styles.containerSacola}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {flex: 6},
  imagemFundo: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flecha: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  containerSacola: {padding: 18},
});

export default Background;
