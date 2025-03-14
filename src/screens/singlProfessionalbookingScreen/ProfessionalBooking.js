import {SafeAreaView, StyleSheet, View} from 'react-native';
import React,{ useCallback, useReducer, useRef } from 'react';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import FilterIcon from '../../components/FilterIcon';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import BookingTabs from '../../components/singlProfessionalbookingTabs/bookingTabs';
import { BottomSheet } from '../../components/bottomSheet';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import { MediumText } from '../../components/Typography';
import { heightPercentageToDP } from 'react-native-responsive-screen';
const ProfessionalBooking = ({navigation, route}) => {

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

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Bookings'}
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.wrapper}>
        
          <BookingTabs />
        </View>
      </View>


    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
  },
  wrapper: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  
});

export default ProfessionalBooking;
