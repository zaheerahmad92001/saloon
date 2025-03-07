import React, { useCallback, useReducer, useRef, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import styles from "./servicesScreen.style";
import { BottomSheet } from '../../../components/bottomSheet';
import BookingFilter from '../../../components/bookingFilter/BookingFilter';
import { heightPercentageToDP } from "react-native-responsive-screen";
import FilterIcon from "../../../components/FilterIcon";
import { MediumText } from "../../../components/Typography";
import { statisticsservices } from "../../../staticData";
import StaticServiceCard from "../../../components/statisticsTab/staticServiceCard";
import { useNavigation } from "@react-navigation/native";


const ServicesScreen = () => {
    const navigation = useNavigation();
    const refRBSheet = useRef();
    const [state, updateState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            selectedItem: null,
        },
    );
    const hideBottomSheet = () => {
        if (refRBSheet.current) {
            refRBSheet.current.close();
        }
    };
    const openBottomSheet = useCallback((item) => {
        updateState({ selectedItem: item });
        if (refRBSheet.current) {
            setTimeout(() => refRBSheet.current.present(), 0);
        }
    },
        [refRBSheet],
    );

    const ApplyFilter = item => { };

    const clearFilter = item => {
        hideBottomSheet();
    };

    const cancelFilter = useCallback(() => {
        hideBottomSheet();
    }, []);


    const handNavigation = () => {
        navigation.navigate('serviceReport');
    };

    const renderCard = ({ item }) => {
        return (
            <StaticServiceCard service={item} onClick={() => handNavigation()} />
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerSection}>
                <MediumText text={'Services (06)'} style={styles.heading}
                ></MediumText>
                <FilterIcon handleFilterPress={() => openBottomSheet()} />
            </View>

            <FlatList
                data={statisticsservices}
                renderItem={renderCard}
            ></FlatList>





            {/* Booking Filter */}
            <BottomSheet
                refRBSheet={refRBSheet}
                onClose={() => hideBottomSheet()}
                scrollEnabled={false}
                disableDynamicSizing={true}
                height={heightPercentageToDP(58)}>
                <BookingFilter
                    onCancel={cancelFilter}
                    onApply={ApplyFilter}
                    onClear={clearFilter}
                    isHome={true}
                />
            </BottomSheet>
        </SafeAreaView>
    );
}
export default ServicesScreen;