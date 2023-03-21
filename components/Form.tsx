import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
const Form = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [criptoCurrency, setCriptoCurrency] = useState('');
  const [criptoCurrencies, setCriptoCurrencies] = useState([]);

  useEffect(() => {
    const getCriptoCurrencies = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const response = await axios.get(url);
      setCriptoCurrencies(response.data.Data);
    };

    getCriptoCurrencies();
  }, []);

  const getCurrency = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const getCripto = (cripto: string) => {
    setCriptoCurrency(cripto);
  };

  const quoteCurrency = () => console.log('cotizando..');

  return (
    <View>
      <Text style={styles.label}>Moneda </Text>
      <Picker
        onValueChange={(currency: string) => getCurrency(currency)}
        selectedValue={selectedCurrency}
        itemStyle={{height: 120}}>
        <Picker.Item label="seleccione" value="" />
        <Picker.Item label="Dolar de estados Unidos" value="USD" />
        <Picker.Item label="Peso Colombiano" value="COP" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Libra Esterlina" value="GBP" />
      </Picker>
      <Text style={styles.label}>Criptomoneda </Text>
      <Picker
        onValueChange={(cripto: string) => getCripto(cripto)}
        selectedValue={criptoCurrency}
        itemStyle={{height: 120}}>
        <Picker.Item label="seleccione" value="" />
        {criptoCurrencies.map((cripto: any) => (
          <Picker.Item
            key={cripto.CoinInfo.Id}
            label={cripto.CoinInfo.FullName}
            value={cripto.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight
        style={styles.quoteBtn}
        onPress={() => quoteCurrency()}>
        <Text style={styles.quoteText}>COTIZAR</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Lato-Black',
    textTransform: 'uppercase',
    fontSize: 22,
    marginVertical: 20,
  },
  quoteBtn: {
    backgroundColor: '#5e49e2',
    padding: 10,
    marginTop: 20,
  },
  quoteText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'lato-Black',
    textAlign: 'center',
  },
});

export default Form;
