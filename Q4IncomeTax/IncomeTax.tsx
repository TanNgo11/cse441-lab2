import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Style from './Style';

const IncomeTax = () => {
  const [tax, setTax] = useState('');
  const [income, setIncome] = useState('');

  const handleCal = () => {
    const incomeAmount = parseFloat(income);
    if (isNaN(incomeAmount) || incomeAmount < 0) {
      setTax('Invalid income');
      return;
    }
    let taxAmount = 0;
    if (incomeAmount <= 10000000) {
      taxAmount = incomeAmount * 0.1;
    } else if (incomeAmount <= 50000000) {
      taxAmount = 10000000 * 0.1 + (incomeAmount - 10000) * 0.2;
    } else {
      taxAmount =
        10000000 * 0.1 + 40000000 * 0.2 + (incomeAmount - 50000000) * 0.3;
    }

    setTax(`${taxAmount.toFixed(2)}d`);
  };

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Income Tax Calculator</Text>
      <TextInput
        textAlign="right"
        placeholder="Enter your income"
        keyboardType="numeric"
        style={Style.input}
        value={income}
        onChangeText={setIncome}></TextInput>
      <View style={Style.button}>
        <Button title="CALCULATE TAX" onPress={handleCal} />
      </View>
      <Text style={Style.text}>Income Tax : {tax}</Text>
    </View>
  );
};

export default IncomeTax;
