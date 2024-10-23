import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import ButtonCommon from './ButtonCommon';
import Styles from './Styles';
const Calculator = () => {
  const [displayNum, setDisplayNum] = useState('0');
  const [operator, setOperator] = useState('');
  const [total, setTotal] = useState(0);

  const handleNumberInput = (num: number) => {
    displayNum === '0'
      ? setDisplayNum(num.toString())
      : setDisplayNum(displayNum + num);
  };

  const handleClear = () => {
    setDisplayNum('0');
    setOperator('');
    setTotal(0);
  };

  const handleOperatorInput = (operator: string) => {
    setOperator(operator);
    setTotal(parseFloat(displayNum));
    setDisplayNum('0');
  };

  const handleEqual = () => {
    const num1 = total;
    const num2 = parseFloat(displayNum);
    if (operator === '+') {
      setDisplayNum((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayNum((num1 - num2).toString());
    } else if (operator === '*') {
      setDisplayNum((num1 * num2).toString());
    } else if (operator === '/') {
      setDisplayNum((num1 / num2).toString());
    }

    setOperator('');
    setTotal(0);
  };
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.display}>{displayNum}</Text>
      </View>
      <View style={Styles.row}>
        <ButtonCommon onPress={() => handleNumberInput(7)} title="7" />
        <ButtonCommon onPress={() => handleNumberInput(8)} title="8" />
        <ButtonCommon onPress={() => handleNumberInput(9)} title="9" />
        <TouchableOpacity
          style={Styles.operator}
          onPress={() => handleOperatorInput('/')}>
          <Text style={Styles.operator_text}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.row}>
        <ButtonCommon onPress={() => handleNumberInput(4)} title="4" />
        <ButtonCommon onPress={() => handleNumberInput(5)} title="5" />
        <ButtonCommon onPress={() => handleNumberInput(6)} title="6" />
        <TouchableOpacity
          style={Styles.operator}
          onPress={() => handleOperatorInput('*')}>
          <Text style={Styles.operator_text}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.row}>
        <ButtonCommon onPress={() => handleNumberInput(1)} title="1" />
        <ButtonCommon onPress={() => handleNumberInput(2)} title="2" />
        <ButtonCommon onPress={() => handleNumberInput(3)} title="3" />
        <TouchableOpacity
          style={Styles.operator}
          onPress={() => handleOperatorInput('-')}>
          <Text style={Styles.operator_text}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.row}>
        <TouchableOpacity
          style={Styles.zero}
          onPress={() => handleNumberInput(0)}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.operator}
          onPress={() => handleOperatorInput('+')}>
          <Text style={Styles.operator_text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.equal} onPress={handleEqual}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.row}>
        <TouchableOpacity style={Styles.clear} onPress={handleClear}>
          <Text>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Calculator;
