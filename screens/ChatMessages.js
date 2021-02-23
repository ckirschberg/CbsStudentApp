import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TextInput, Image } from 'react-native';
import ChatRoom from '../components/ChatRoom';
import { CHATROOM } from './../data/dummy-data';
import ChatMessage from './../components/ChatMessage'


const ChatMessages = props => {
    const { id } = props.route.params;
    console.log(id);
    const [value, onChangeText] = React.useState('Write message');

    const chatMessages = CHATROOM.find(room => room.id === id).chatMessages;

    

    return (
        <View style={styles.container}>
            
            <View style={styles.messages}>
                <FlatList data={chatMessages} renderItem={itemData => (
                    <ChatMessage chatmessage={itemData.item} img={require('./../assets/ac99082f65d5c636e14e70785817899e.png')}></ChatMessage> 
                )}></FlatList>
            </View>
            
            <View style={styles.inputView}>
                <Image
                    style={styles.tinyLogo}
                    source={require('./../assets/6d38ab105ed32e0c25e4f82e1e9ccd2a.png')}/>
                
                <TextInput
                    style={styles.textInput}
                    onChangeText={text => onChangeText(text)}
                    value={value}/>

                <Button title="Send"></Button>
            </View>

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    messages: {
        flex: 1
    },
    textInput: {
        flex: 1,
        height: 40, 
        backgroundColor: 'lightgray', 
        marginLeft: 10,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginBottom: 10
    },
    inputView: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 5,
        
    },
    tinyLogo: {
        
        marginTop: -5
    },
});

export default ChatMessages;