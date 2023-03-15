import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
});

export default App;
