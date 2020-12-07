import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Item = ({imagem, titulo, estudio, itemDesc, itemName, preco, id}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerItem}
      onPress={() => {
        navigation.push('DetalhesDoProduto', {
          imagem,
          titulo,
          estudio,
          itemDesc,
          itemName,
          preco,
          id,
        });
      }}>
      <Image style={styles.imagem} source={imagem} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 80,
    backgroundColor: '#C6C6C6',
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  texto: {
    marginTop: 0,
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
  },
  imagem: {
    height: 54,
  },
});

export default Item;
