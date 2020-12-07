import {useNavigation} from '@react-navigation/native';
import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {BROWN, FONT_FAMILY_SEMI_BOLD, WHITE} from '../../styles/styles';
import {DataContext} from '../../provider/';

const Sacola = () => {
  const navigation = useNavigation();
  const [itensCheckout] = useContext(DataContext);
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Checkout');
      }}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../../assets/images/icone-sacola.png')}
          style={styles.imagem}
        />
        {itensCheckout.length > 0 ? (
          <View style={styles.containerQuantidade}>
            <Text style={styles.textoQuantidade}>
              {itensCheckout.reduce(
                (acumulado, atual) => acumulado + atual.quantidade,
                0,
              )}
            </Text>
          </View>
        ) : null}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerSacola: {
    backgroundColor: '#C6C6C6',
    padding: 18,
    borderRadius: 30,
  },
  imagem: {
    height: 30,
    width: 30,
  },
  containerQuantidade: {
    backgroundColor: BROWN,
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
});

export default Sacola;
