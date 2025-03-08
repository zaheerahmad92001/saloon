import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import StarIcon from '../../assets/svgs/star.svg'
import images from "../../assets/images";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { MediumText, SmallText } from "../Typography";


const StatUSerProfileCard = () => {
    return (
        <View style={styles.card}>
            <Image
                source={images.room} // Replace with actual image URL
                style={styles.avatar}
            />
            <View style={styles.info}>
                <MediumText text ={'Paityn Lipshutz'} style={styles.name}/>
                <MediumText text={'No of Services: 03'} style={styles.details}/>

            </View>
            <View style={styles.ratingViewAlignment}>
                
                        <View style={styles.rating}>
                            <StarIcon />
                            <SmallText text = {'4.7'} style={styles.ratingText}/>
                        </View>
            
            <SmallText text ={'Total Bookings: 21'} style={styles.details}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        paddingVertical: 15,
        paddingHorizontal:10,
        borderRadius: 10,
        // marginHorizontal: 10,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 8,
    },
    info: {
        flex: 1,
        marginLeft: 15,
    },
    name: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.regular,
        color: colors.appBlack,
    },
    details: {
        fontSize: RFValue(12),
        color: colors.lightBlack
    },
    rating: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'flex-end',
        backgroundColor: colors.darkGray,
        padding: 5,
        borderRadius: 5,
        width:widthPercentageToDP(15)
    },
    ratingText: {
        fontSize: RFValue(12),
        fontFamily: fontsFamily.bold,
        color: colors.appBlack,
        marginLeft: 5,
    },
    ratingViewAlignment :{
        justifyContent:'flex-end',
    }
});

export default StatUSerProfileCard;
