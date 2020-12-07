import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Cabecalho from '../components/cabecalho/cabecalho';
import {DATA} from '../utils/data';
import Item from '../components/item/item';

const ListaDeProdutos = () => {
  const imgSrc = require('../assets/images/background.jpg');
  return (
    <View style={styles.container}>
      <Cabecalho />
      <View style={styles.containerDescricao}>
        <View style={styles.separador} />
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          data={DATA}
          renderItem={({item}) => <Item {...item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#333131',
  },
  separador: {
    borderWidth: 0.5,
    borderColor: '#C6C6C6',
    margin: 10,
  },
  containerDescricao: {
    paddingHorizontal: 16,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 24,
    backgroundColor: '#333131',
    color: '#C6C6C6',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
});

export default ListaDeProdutos;
