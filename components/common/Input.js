import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const Input = props => {
    const value = props.value;
    const [touched, setTouched] = useState(false);

    const handleNewInput = (enteredText) => {
        setTouched(true);
        enteredText === '' ? props.onValid(false) : props.onValid(true);
        props.setContent(enteredText);
    };

   return (
      <View>
          <Text>{props.label}</Text>
          <TextInput value={props.text} 
            onChangeText={handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!props.nameValid && touched && <Text>{props.error}</Text>}
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Input;