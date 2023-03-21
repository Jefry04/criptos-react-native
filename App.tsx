import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Form from './components/Form';

import Header from './components/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.formContent}>
        <Form />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  formContent: {
    marginHorizontal: '2.5%',
  },
});

export default App;
