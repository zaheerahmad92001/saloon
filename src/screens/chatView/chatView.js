import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import ChatHeader from '../../components/ChatHeader/ChatHeader';
import images from '../../assets/images';
import style from './chatView.Style';
import ChatCard from '../../components/messageCard/MessageCard';
import DocumentAttachment from '../../assets/svgs/attachedocument.svg';
import SendIcon from '../../assets/svgs/sendicon.svg';
import colors from '../../assets/colors';
import {keepLocalCopy, pick ,types} from '@react-native-documents/picker';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Chat = ({navigation, route}) => {
  const [file, setFile] = useState(null);
  const arr = [
    {id: 1, text: 'Lorem', time: '7:21', sent: false},
    {id: 2, text: 'Lorem ipsum', time: '7:24', sent: true},
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      time: '7:26',
      sent: false,
    },

    {id: 1, text: 'Lorem', time: '7:21', sent: false},
    {id: 2, text: 'Lorem ipsum', time: '7:24', sent: true},
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      time: '7:26',
      sent: true,
    },
    {id: 1, text: 'Lorem', time: '7:21', sent: false},
    {id: 2, text: 'Lorem ipsum', time: '7:24', sent: true},
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      time: '7:26',
      sent: false,
    },
    {id: 1, text: 'Lorem', time: '7:21', sent: false},
    {id: 2, text: 'Lorem ipsum', time: '7:24', sent: true},
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      time: '7:26',
      sent: true,
    },
  ];

  const [messages, setMessages] = useState(arr);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim().length > 0) {
      setMessages([
        ...messages,
        {id: Date.now().toString(), text: message, time: '7:34', sent: false},
      ]);
      setMessage('');
    }
  };

  const renderMessageCard = ({item}) => {
    return <ChatCard Item={item} />;
  };

  const pickDocuments = async () => {
    const [file] = await pick({
      allowMultiSelection: true,
      // type: [types.pdf, types.docx],
    })
  };

  const ParentView = Platform.OS === 'android' ? View : KeyboardAvoidingView;

  return (
    <SafeAreaView style={style.container}>
      <ChatHeader userImage={images.room} userName={'Alexandra’s Salon'} onBackPress={()=>navigation.goBack()}/>
      <View style={style.dividerView} />

      <ParentView
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? heightPercentageToDP(1) : 0
        }
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={style.wrapper}>
        <FlatList
          data={messages}
          renderItem={renderMessageCard}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.chatContainer}
        />

        <View style={style.inputContainer}>
          <View style={style.inputMainView}>
            <TextInput
              style={style.input}
              placeholder="Write a message"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity onPress={pickDocuments}>
              <DocumentAttachment />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={style.sendButton} onPress={sendMessage}>
            <SendIcon />
          </TouchableOpacity>
        </View>
      </ParentView>
    </SafeAreaView>
  );
};

export default Chat;
