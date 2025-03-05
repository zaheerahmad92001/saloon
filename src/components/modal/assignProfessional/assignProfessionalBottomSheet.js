import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Pressable } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import images from "../../../assets/images";
import colors from '../../../assets/colors';
import { AppButton } from "../../../components/appButton";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../../assets/fontsFamily";
const professionalsData = [
    { id: 1, name: "Mira Ekstrom", image: images.room, selected: false },
    { id: 2, name: "Lindsey Franci", image: images.room, selected: false },
    { id: 3, name: "Maren Bator", image: images.room, selected: false },
    { id: 4, name: "Makenna Vetrov", image: images.room, selected: false },
    { id: 5, name: "Tatiana Baptista", image: images.room, selected: false },
];


const AssignProfessionalsModel = (props) => {
    const {onDone,onCancel} = props;
    const [professionals, setProfessionals] = useState(professionalsData);

    const toggleSelection = (id) => {
        setProfessionals((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            )
        );
    };

    return (
        <View style={styles.container}>
            
            <Text style={styles.headerTitle}>Assign Professionals</Text>
            <Text style={styles.subText}>You can assign multiple professionals to a single service.</Text>

            <FlatList
                data={professionals}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable style={styles.listItem} onPress={() => toggleSelection(item.id)}>
                        <MaterialIcons
                            name={item.selected ? 'check-box' : 'check-box-outline-blank'}
                            size={25}
                            color={item.selected ? colors.primary : colors.lightBlack}
                        />
                        <Image source={images.room} style={styles.profileImage} />
                        <Text style={styles.nameText}>{item.name}</Text>
                    </Pressable>
                )}
            />

            <AppButton onPress={() => onDone()} title="Done" style={styles.buttonStyle} />
            <AppButton onPress={() => onCancel()} title="Cancel" style={styles.cancelbuttonStyle} textstyle={styles.cancelbuttonTextStyle} />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBG,
        paddingTop: 20,
    },
    headerTitle: {
        fontSize: RFValue(16),
       fontFamily:fontsFamily.bold,
        marginBottom: 10,
    },
    subText: {
        fontSize: 14,
        color: colors.lightBlack,
        marginBottom: 20,
    },
    listItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 15,
        marginLeft: 15,
    },
    nameText: {
        fontSize: RFValue(12),
        fontFamily:fontsFamily.medium
    },
    buttonStyle: {
        marginTop: 10
    },

    cancelbuttonStyle: {
        marginHorizontal: 20,
        borderWidth:0,
        marginTop: 20,
        marginBottom:20,
        backgroundColor:colors.lightPrimary,
    },
    cancelbuttonTextStyle:{
        color:colors.primary
    }
});

export default AssignProfessionalsModel;
