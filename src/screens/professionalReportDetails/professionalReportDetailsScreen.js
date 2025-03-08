import React, { useRef, useState, useReducer, useCallback } from "react";
import { SafeAreaView, View, FlatList, ScrollView } from "react-native";
import styles from './professionalReportDetailsScreen.style';
import StatUSerProfileCard from "../../components/statUserProfileCard/statUserProfileCard";
import Header from "../../components/appHeader";
import DateNavigator from "../../components/dateNavigator/dateNavigator";
import BookingStatics from '../../components/bookingStatics';
import { bookingHistory, bookingStatus } from '../../staticData';
import { MediumText, SmallText } from "../../components/Typography";
import TodayBookings from '../../components/todaysBookingCard';
import FilterIcon from '../../components/FilterIcon';

import { BottomSheet } from '../../components/bottomSheet';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import BarChartView from '../../components/graphView/BarChart';
import { heightPercentageToDP } from "react-native-responsive-screen";
const ratingsData = [
    { stars: 5, count: 180 },
    { stars: 4, count: 80 },
    { stars: 3, count: 30 },
    { stars: 2, count: 15 },
    { stars: 1, count: 7 },
];
const totalRatings = ratingsData.reduce((acc, item) => acc + item.count, 0);

const ServiceReportDetailsScreen = ({ navigation, route }) => {

    const refRBSheet = useRef();

    const refRBSheetTime = useRef();
    const handleFilterPress = () => { };
    const handlePeakTime = () => { };


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

    ///////////// Time Bottom Sheet////////




    const [selectedIndex, setSelectedIndex] = useState(0);
    const renderStaticsTabs = ({ item, index }) => {
        return (
            <BookingStatics
                item={item}
                index={index}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Statistics'} showBackButton onBackPress={() => navigation.goBack()}></Header>

            <View style={styles.mainContainer}>
                <ScrollView>
                    <StatUSerProfileCard />
                    <DateNavigator />

                    <View style={styles.rowContainer}>
                        <FlatList
                            data={bookingStatus}
                            horizontal
                            renderItem={renderStaticsTabs}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>


                    <View style={styles.rowView}>
                        <MediumText text={`Total Booking`} />
                        <SmallText text={'See All'} style={styles.seeAllText} />
                    </View>

                    {[...Array(3)].map((item, index) => {
                        let status = index % 2 === 0 ? 'Completed' : 'Pending';
                        return <TodayBookings status={status} />;
                    })}

                    <View style={styles.graphView}>
                        <View style={styles.graphInnerView}>
                            <MediumText text={'Sales Report'} />
                            <FilterIcon
                                handleFilterPress={openBottomSheet}
                                filterInnerView={{ paddingVertical: 5 }}
                            />
                        </View>
                        <View style={styles.borderView}></View>
                        <BarChartView />
                    </View>
                </ScrollView>

            </View>

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

export default ServiceReportDetailsScreen;