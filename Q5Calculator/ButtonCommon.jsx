import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styles from './Styles';
const ButtonCommon = ({title, onPress}) => {
  return (
    <TouchableOpacity style={Styles.button} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCommon;
