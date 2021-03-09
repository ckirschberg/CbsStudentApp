import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Input from './../components/common/Input';

const EditProfileScreen = props => {
    const profileInfo = useSelector(state => state.user.loggedInUser);
    // lifted up to this parent component.

    const handleSave = () => {
        if (nameValid) {
            // dispatch a redux action to save the new user obj.
        } else {
            // Display an alert saying: Fix the errors.
        }
    };

   return (
      <View>
          <Text>Edit Profile Screen</Text>
          <Input label="Username" value={profileInfo.name} 
            error="Please fill out your name"/>
        
        {/* <Input label="Email" value={profileInfo.email} 
            error="Please fill out your email"/> */}

            <Button title="Save" onPress={handleSave} />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default EditProfileScreen;