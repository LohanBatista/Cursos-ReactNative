import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';
import Cabecalho from './components/cabecalho/cabecalho';
import Contador from './components/contador/contador';
import ListaDeProdutos from './screens/listaDeProdutos-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetalhesDoProduto from './screens/detalhesDoProduto-screen';
import Provider from './provider';
import Checkout from './screens/checkout-screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <SafeAreaView style={styles.container}>
          {/* <Contador /> */}
          <Stack.Navigator initialRouteName="ListaDeProdutos">
            <Stack.Screen
              name="ListaDeProdutos"
              component={ListaDeProdutos}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="DetalhesDoProduto"
              component={DetalhesDoProduto}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Checkout"
              component={Checkout}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333131',
  },
});

export default App;
