import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import fontsFamily from '../../assets/fontsFamily';
import {LargeText, MediumText, SmallText, XlargeText} from '../Typography';
import {RFValue} from 'react-native-responsive-fontsize';

const ChatListCard = props => {
    const {onPress} = props
  return (
    <Pressable 
    onPress={onPress}
    style={style.CardView}>
      <View style={style.imageContainer}>
        <Image source={images.room} style={style.imageView} />
        <View style={style.onlineIndicator} />
      </View>

      <View style={style.chatContent}>
        <LargeText text={'Big Hair We Care'} style={{fontWeight: '500'}} />
        <MediumText text={'Hi Guys, Wassup!'} style={style.chatMessage} />
      </View>
      <View style={style.chatInfo}>
        <Text style={style.chatTime}>Yesterday, 5:25pm</Text>
        <View style={style.unreadBadge}>
          <Text style={style.unreadText}>6</Text>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  chatContent: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  imageContainer: {
    height: hp(5.5),
    width: wp(12),
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageView: {
    height: null,
    width: null,
    flex: 1,
  },
  onlineIndicator: {
    width: 12,
    height: 12,
    backgroundColor: 'green',
    borderRadius: 6,
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: colors.white,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: RFValue(12),
    fontWeight: '500',
    color: colors.chatlistmessage,
  },
  chatInfo: {
    alignItems: 'flex-end',
  },
  chatTime: {
    fontSize: 14,
    color: colors.chatlistmessage,
    fontFamily: fontsFamily.medium,
  },
  unreadBadge: {
    backgroundColor: colors.primary,
    width: 25,
    height: 25,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  unreadText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: fontsFamily.bold,
  },
});

export default ChatListCard;
