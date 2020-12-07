import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {
  FONT_SIZE_LARGE,
  BLACK,
  FONT_FAMILY_BOLD,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_X_LARGE,
  FONT_FAMILY_REGULAR,
  FONT_SIZE_SMALL,
} from '../../styles/styles';
import Botao from '../botao/botao';

const DescricaoItem = ({
  imagem,
  titulo,
  estudio,
  itemDesc,
  itemName,
  preco,
  id,
}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
              <Text style={styles.textoSuperior}>{estudio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
              <Text style={styles.textoInferior}>{titulo}</Text>
            </View>
            <Image style={styles.imagem} source={imagem} />
          </View>
          <Text style={styles.textoDescricao}>{itemDesc}</Text>
          <View style={styles.rodape}>
            <Text style={styles.moeda}>{preco}</Text>
            <Botao titulo={'Beber'} width={'100%'} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },
  itemPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
  },
  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagem: {
    width: 30,
    height: 72,
  },
  textoSuperior: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_MEDIUM,
    marginBottom: 4,
  },
  textoMedio: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_X_LARGE,
    marginBottom: 4,
  },
  textoInferior: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#cacaca',
    marginBottom: 12,
  },
  textoDescricao: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_SMALL,
    color: '#acaaab',
    marginTop: 10,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  moeda: {
    fontFamily: FONT_FAMILY_BOLD,
    fontSize: FONT_SIZE_LARGE,
    color: BLACK,
  },
});
export default DescricaoItem;
