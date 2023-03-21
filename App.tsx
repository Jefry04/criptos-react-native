import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Form from './components/Form';
import axios from 'axios';
import Header from './components/Header';
import Result from './components/Result';

function App(): JSX.Element {
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [criptoCurrency, setCriptoCurrency] = useState('');
  const [isFetchApi, setIsFetchApi] = useState(false);
  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    if (isFetchApi) {
      const quoteCripto = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${selectedCurrency}`;
        const response = await axios.get(url);
        setQuotation(response.data.DISPLAY[criptoCurrency][selectedCurrency]);
      };
      quoteCripto();
    }
  }, [isFetchApi, criptoCurrency, selectedCurrency]);

  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.formContent}>
        <Form
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          criptoCurrency={criptoCurrency}
          setCriptoCurrency={setCriptoCurrency}
          setIsFetchApi={setIsFetchApi}
        />
        <Result quote={quotation} />
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
