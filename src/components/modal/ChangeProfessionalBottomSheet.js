import { View, StyleSheet, Text, FlatList, Image, ScrollView } from "react-native";
import ChangeProfessionalCard from "../ChangeProfessionalCard/ChangeProfessionalCard";
import AnyProfessionalIcon from '../../assets/svgs/anyprofession.svg'
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
import { widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP } from 'react-native-responsive-screen';
import colors from "../../assets/colors";
import { MediumText, XlargeText } from '../../components/Typography';
import { Divider } from 'react-native-paper';
import { AppButton } from '../appButton';
import Images from "../../assets/images";
import { professionals } from "../../staticData";
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React, { useState } from 'react';
const ChangeProfessionalBottomSheet = (props) => {
    const { onAgree, onCancel } = props;
    const [selectedCards, setSelectedCards] = useState([]);
    const toggleSelection = (id) => {
        setSelectedCards((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((item) => item !== id) // Deselect if already selected
                : [...prevSelected, id] // Select if not in the array
        );
    };
    const renderItem = ({item}) => {
        const isSelected = selectedCards.includes(item.id);
        return (
            <ChangeProfessionalCard 
             item={item}
             isSelected={isSelected}
             onPress={()=>toggleSelection(item.id)}
            />
        );
    }
    const renderHeader = () => {
        return (
            <View style={styles.card}>
                <Image
                    source={Images.anyprofession}
                    style={styles.profileIconContainer}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>Any Professional</Text>
                    <Text style={styles.profession}>Hair Specialist</Text>
                </View>
            </View>
        );
    }

    return (
        // <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{flex:1}}>
            <XlargeText text={'Change Professional'} style={styles.heading} />
            <Divider style={styles.divider} />
            <MediumText
                text={
                    'Assign professional to this customer according to the selected slot and confirm this booking.'
                }
                style={styles.description}
            />
            <View style={styles.container}>
                <View style={styles.slotContainer}>
                    <Text style={styles.slotText}>Customer Selected Slot:</Text>
                    <Text style={styles.slotText}>9:00 AM - 10:00 AM</Text>
                </View>
            </View>
            

            <FlatList
                data={professionals}
                renderItem={renderItem}
                ListHeaderComponent={renderHeader}
                contentContainerStyle={{ paddingTop: hp(0) }}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            />
        
            

            <AppButton
                title={'Update'}
                onPress={onAgree}
                style={styles.yesButton}
            />

            <AppButton
                title={"Cancel"}
                onPress={onCancel}
                style={styles.cancelButton}
                textstyle={styles.cancelText}
            />
        </View>
        // </ScrollView>
    );
};

const styles = StyleSheet.create({
    heading: {
        paddingVertical: 0,
        paddingHorizontal: 10,
        fontSize: RFValue(14),
        fontFamily: fontsFamily.bold
    },
    divider: {
        borderWidth: 0.1,
        marginTop: hp(1),
        marginBottom: hp(1),
        marginHorizontal: 10,
    },
    subHeading: {
        fontFamily: fontsFamily.bold,
        fontSize: RFValue(14),
        fontWeight: '600'
    },
    description: {
        marginVertical: hp(1),
        marginLeft: hp(1),
        color: colors.lightBlack,
        fontFamily: fontsFamily.regular,
        fontSize: RFValue(10)
    },
    yesButton: {
        marginTop: 10,
    },
    cancelButton: {
        marginTop: hp(1),
        backgroundColor: colors.lighterPrimary,
        borderColor: colors.lighterPrimary,
        marginBottom:20
    },
    cancelText: {
        color: colors.primary,
    },



    container: {
        //padding: 15,
        paddingHorizontal: 10,
        backgroundColor: colors.appBG,
    },
    slotContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 0.8,
        borderColor: colors.primary,
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    slotText: {
        fontSize: RFValue(9),
        fontFamily: fontsFamily.regular,
        color: colors.appBlack,
    },

    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10,
        margin: 6,
        shadowColor: colors.appBlack,
        shadowOpacity: 0.1,
        shadowRadius: 0,
        elevation: 0,

    },
    profileIconContainer: {
        width: 45,
        height: 45,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontSize: RFValue(10),
        fontWeight: fontsFamily.regular,
    },
    profession: {
        fontSize: 14,
        color: "#888",
        marginTop: 3,
    },


});

export default ChangeProfessionalBottomSheet;