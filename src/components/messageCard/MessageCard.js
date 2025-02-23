import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Tickimage from '../../assets/svgs/tickmessagedeliver.svg';
import { SmallText } from '../Typography';
import fontsFamily from '../../assets/fontsFamily';

const ChatCard = props => {
  const {Item} = props;
  return (
    <View>
      <View
        style={[
          style.messageCardView,
          Item.sent ? style.sentMessage : style.receivedMessage,
        ]}>
            <SmallText text={Item.text} style={style.messageText} />
        {/* <Text style={style.messageText}>{Item.text}</Text> */}
      </View>
      {Item.sent ? (
        <View style={style.senderTime}>
          <Text style={[style.timeMessage]}>{Item.time}</Text>
          <Tickimage />
        </View>
      ) : (
        <Text
          style={[
            style.timeMessage,
            Item.sent ? style.senderTime : style.recieverTime,
          ]}>
          {Item.time}
        </Text>
      )}
    </View>
  );
};
const style = StyleSheet.create({
  messageCardView: {
    maxWidth: '80%',
    padding: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
    //marginBottom: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: colors.inputGray,
    borderBottomRightRadius:0,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: colors.lighterPrimary,
    borderBottomLeftRadius:0,
  },
  messageText: {
    color: colors.appBlack,
    fontFamily: fontsFamily.regular,
    fontSize: RFValue(13),
  },
  timeMessage: {
    color: colors.chatlistmessage,
    fontSize: RFValue(11),
  },
  senderTime: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    // marginRight: 23,
    alignItems: 'center',
    gap: 2,
  },
  recieverTime: {
    alignSelf: 'flex-start',
    // marginLeft: 23,
  },
});
export default ChatCard;
