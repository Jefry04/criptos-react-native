import React from 'react';
import {Text} from 'react-native';

interface IFormProps {
  quote: any;
}

const Result: React.FC<IFormProps> = ({quote}) => {
  if (Object.keys(quote).length === 0) return null;
  return <Text>El precio del Bitcoin es {quote.PRICE}</Text>;
};

export default Result;
