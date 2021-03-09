import React from 'react';
import { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

const Input = props => {
    const value = props.value;
    const [changeName, setChangeName] = useState(props.value); // lift up
    const [nameValid, setNameValid] = useState(false); // lift up - pass through props instead
    const [touched, setTouched] = useState(false);

    const handleNewInput = (enteredText) => {
        setTouched(true);
        enteredText === '' ? setNameValid(false) : setNameValid(true);
        setChangeName(enteredText);
    };

   return (
      <View>
          <Text>{props.label}</Text>
          <TextInput value={changeName} 
            onChangeText={handleNewInput}
            onBlur={() => setTouched(true)}></TextInput>
            {!nameValid && touched && <Text>{props.error}</Text>}
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Input;