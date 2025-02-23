import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from "../../assets/colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import More from '../../assets/svgs/more.svg'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import images from "../../assets/images";
import fontsFamily from "../../assets/fontsFamily";
const ChatHeader = ({ userName, userImage, onBackPress, morePressed , iconColor }) => {
    return (
        <View style={style.container}>
            <View style={style.mainContainer}>
                <View style={style.leftSideView}>
                    <TouchableOpacity onPress={onBackPress}>
                    <Ionicons name="chevron-back" size={20} color={iconColor?iconColor :colors.appBlack} />
                    </TouchableOpacity>
                    <Image source={images.room} style={style.usrImageView}></Image>
                    <Text style={style.userNameTitle}>{userName}</Text>
                </View>

                <TouchableOpacity onPress={morePressed}>
                    <More />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15
    },
    leftSideView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    usrImageView: {
        width: wp(9),
        height: hp(4),
        borderRadius: 5,
        marginLeft: 12
    },
    userNameTitle: {
        marginLeft: 8,
        fontFamily: fontsFamily.bold,
        fontWeight: '600'
    }
});


export default ChatHeader;