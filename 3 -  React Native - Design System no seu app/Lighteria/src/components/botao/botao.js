import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  BROWN,
  FONT_FAMILY_SEMI_BOLD,
  FONT_SIZE_MEDIUM,
  WHITE,
} from '../../styles/styles';

const Botao = ({titulo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.botaContainer}>
        <Text style={styles.botaoTexto}>{titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botaContainer: {
    backgroundColor: BROWN,
    padding: 20,
    borderRadius: 6,
  },
  botaoTexto: {
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    color: WHITE,
  },
});

export default Botao;
