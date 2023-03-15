import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const Header = () => {
  return <Text style={styles.header}>CRIPTOMONEDAS</Text>;
};

const styles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 50 : 10,
    fontFamily: 'Lato-Black',
    backgroundColor: '#5e49e2',
    paddingBottom: 10,
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});

export default Header;
