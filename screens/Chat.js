import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import ChatRoom from './../components/ChatRoom';
import { CHATROOM } from './../data/dummy-data';

const Chat = props => {
    console.log(CHATROOM);
    

   return (
      <View style={styles.container}>
          <FlatList
            data={CHATROOM}
            renderItem={itemData => (
                <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.id}
        />
      </View>
   );
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center'
    },
});

export default Chat;