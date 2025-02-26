import React from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import images from '../../assets/images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import fontsFamily from '../../assets/fontsFamily';
import {LargeText, MediumText} from '../Typography';
import {RFValue} from 'react-native-responsive-fontsize';

const ChatListCard = props => {
  const {onPress} = props;
  return (
    <Pressable onPress={onPress} style={style.CardView}>
      <View style={style.imageContainer}>
        <Image source={images.room} style={style.imageView} />
        <View style={style.onlineIndicator} />
      </View>

      <View style={{flex: 1}}>
        <View style={style.chatContent}>
          <View style={style.chatMessageView}>
            <LargeText
              text={'Big Hair We Care'}
              style={{textAlign: 'left', fontWeight: '500'}}
            />
          </View>
          <Text style={style.chatTime}>Yesterday, 5:25pm</Text>
        </View>

        <View style={style.chatContent}>
          <View style={style.chatMessageView}>
            <MediumText
              text={'Hi Guys, Wassup!'}
              style={style.chatMessage}
            />
          </View>
          <View style={style.unreadBadge}>
            <Text style={style.unreadText}>6</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  chatContent: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
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
    fontSize: RFValue(Platform.OS === 'android' ? 13 : 12),
    fontWeight: '500',
    color: colors.chatlistmessage,
  },
  chatTime: {
    fontSize: 14,
    color: colors.chatlistmessage,
    fontFamily: fontsFamily.medium,
    textAlign: 'right',
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
  chatMessageView: {flex: 1, alignSelf: 'flex-start'},
});

export default ChatListCard;
