import React from 'react';
import { TextInput } from 'react-native';

const UselessTextInput = ({placeholder}) => {
  const [value, onChangeText] = React.useState('');

  return (
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      placeholder = {placeholder}
    />
  );
}

export default UselessTextInput;