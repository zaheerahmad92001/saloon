import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Heart from '../../assets/svgs/heart.svg';
import LocationMarker from '../../assets/svgs/locationMarker.svg';
import Star from '../../assets/svgs/star.svg';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { RFValue } from 'react-native-responsive-fontsize';
import { MediumText, SmallText } from '../Typography';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FavourSelector from '../favouriteSelector';

const UserReviewProfileCard = props => {
    const {
        item,
        onFavorite,
        handleOnPress,
        showFavoriteButton = false,
        selected = false,
        isNotificaiton = false,
        isRefund = false,
        hasDiscount = false,

    } = props;
    const { status, image, title, location, distance, rating, reviews } = item;

    const isCancelled = status === 'Cancelled' ? true : false;
    return (
        <Pressable
            onPress={handleOnPress}
            style={styles.cardContainer}>
            <View style={styles.cardImage}>
                <Image source={image} style={styles.imageStyle} />
            </View>
            <View style={styles.cardContent}>
                <View style={styles.cardTitleContainer}>
                    <View style={[styles.ratingContainer, { flex: 1, flexWrap: 'wrap' }]}>
                        <MediumText text={title} style={styles.cardTitle} />

                    </View>
                    <Text
                        style={styles.distanceText}> {'02/04/2023'}
                    </Text>
                </View>
                <View style={styles.locationContainer}>

                    <Text style={[styles.cardLocation]}>Service: </Text>
                    <Text style={[styles.cardLocation]}>Hair Cut</Text>
                </View>
                <View style={styles.locationContainer}>

                    <Text style={[styles.cardLocation]}>Professional: </Text>
                    <Text style={[styles.cardLocation]}>Hair Cut</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: colors.appBG1,
        borderRadius: 10,
        padding: 0,
        marginBottom: hp(1.5),
        alignItems: 'center',
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        overflow: 'hidden',
        alignSelf: 'flex-start',
    },
    imageStyle: {
        width: null,
        height: null,
        flex: 1,
    },
    cardContent: {
        flex: 1,
        marginLeft: 12
    },
    cardTitle: {
        fontFamily: fontsFamily.bold,
        maxWidth: '95%',
    },
    cardLocation: {
        fontSize: RFValue(12),
        color: colors.lightBlack,
        marginVertical: 3,
        fontFamily: fontsFamily.regular,
        fontWeight: '400',
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        flexWrap: 'wrap',


    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: RFValue(12),
        color: colors.appBlack,
        fontFamily: fontsFamily.regular,
        marginLeft: 4,
    },
    distanceText: {
        fontSize: RFValue(12),
        color: colors.lightBlack,
        fontFamily: fontsFamily.extraLight,
        alignSelf: 'flex-start',
    },
    favoriteButton: {
        padding: 6,
        backgroundColor: colors.inputGray,
        borderRadius: 7,
        marginLeft: 8,
    },
    cardTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 0,
    },
    paidText: {
        color: colors.success,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        fontWeight: '500',
    },
    paidContainer: {
        backgroundColor: colors.lightSuccess,
        paddingVertical: 5,
        borderRadius: 5,
        paddingHorizontal: wp(4.5),
    },
    cancelContainer: {
        backgroundColor: colors.lighterPrimary,
        paddingVertical: 5,
        borderRadius: 5,
        paddingHorizontal: wp(2.5),
    },
    cancelText: {
        color: colors.error,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        fontWeight: '500',
    },
    cancelNotification: {
        color: colors.primary,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(12),
        fontWeight: '500',
    },
    cancelNotificationContainer: {
        backgroundColor: colors.lighterPrimary,
        paddingVertical: 5,
        borderRadius: 5,
        paddingHorizontal: wp(1.8),
    },
    serviceName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: hp(0.7),
    },
    discounts: {
        backgroundColor: colors.lighterPrimary,
        marginHorizontal: 10,
        borderRadius: 15,
        paddingHorizontal: wp(3),
        paddingVertical: hp(0.2),
    },
    smallText: {
        minWidth: wp(5),
        color: colors.primary,
        fontFamily: fontsFamily.regular
    },
});

export default UserReviewProfileCard;
