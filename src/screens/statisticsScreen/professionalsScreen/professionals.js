import React, { useCallback, useReducer, useRef, useState } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import styles from "./professionals.style";

import FilterIcon from "../../../components/FilterIcon";
import OverViewDropdown from '../../../components/overviewDropdown/overviewDropdown';
import StaticsProfessionalCard from "../../../components/statisticsTab/staticsProfessionalCard";

import { BottomSheet } from '../../../components/bottomSheet';
import BookingFilter from '../../../components/bookingFilter/BookingFilter';
import { heightPercentageToDP } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
const ProfessionalScreen = () => {
    const navigation = useNavigation();
    const refRBSheet = useRef();
    const [selectedValue, setSelectedValue] = useState(null);
    const items = [
        { label: 'Weekly', value: '1' },
        { label: 'Weekly', value: '2' },
        { label: 'Weekly', value: '3' },
        { label: 'Weekly', value: '4' },
        { label: 'Weekly', value: '5' },
    ];

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

    const handleFilterPress = () => { }

    const renderCard = ({ item }) => {
        return (
            <StaticsProfessionalCard onClick={() => handNavigation()} />
        )
    }

    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.headerSection}>
                <View style={styles.filterView}>
                    <OverViewDropdown
                        data={items}
                        value={selectedValue}
                        onChange={item => setSelectedValue(item.value)}
                        placeholder="Status"
                    />
                </View>
                <FilterIcon handleFilterPress={() => openBottomSheet()} />
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
export default ProfessionalScreen