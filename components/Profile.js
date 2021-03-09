import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = props => {
   const navigation = useNavigation();

   return (
      <View>
          <Text>Profile</Text>
          <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      </View>
   );
}

const styles = StyleSheet.create({
   
});

export default Profile;