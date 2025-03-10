import React, {useCallback, useState, useReducer, useRef} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../../components/appHeader';
import styles from './payout.style';
import {
  LargeText,
  MediumText,
  SmallText,
  XlargeText,
} from '../../components/Typography';
import colors from '../../assets/colors';
import AnaqaPills from '../../components/AnaqaPills';
import GraphTabs from '../../components/graphTabs';
import AnaqaPayoutStatistics from '../../components/AnaqaPayoutStatistics';
import BezierGraphView from '../../components/graphView/BezierGraphView';
import {graphTabs, invoices} from '../../staticData';
import {BottomSheet} from '../../components/bottomSheet';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import {ScrollView} from 'react-native-gesture-handler';
import InvoiceCard from '../../components/invoiceCard/invoiceCard';

const Payouts = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState(graphTabs.sales);
  const refRBSheet = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
    },
  );
  const {selectedItem} = state;

  const openBottomSheet = useCallback(
    item => {
      updateState({selectedItem: item});
      if (refRBSheet.current) {
        setTimeout(() => refRBSheet.current.present(), 0);
      }
    },
    [refRBSheet],
  );

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const ApplyFilter = item => {};

  const clearFilter = item => {
    hideBottomSheet();
  };

  const cancelFilter = useCallback(() => {
    hideBottomSheet();
  }, []);
    
  const handleNavigation = (routeName) => {
      navigation.navigate(routeName);
    };
  
    const renderItem = ({item, index}) => {
      return <InvoiceCard 
      invoice={item} 
      handleOnPress={()=>handleNavigation('invoiceDetail')} 
      showStatus={false}
      />;
    };

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <Header
        title={'Payment in & Payouts'}
        showBackButton
        textstyle={styles.appHeaderText}
        titleTextStyle={styles.appHeaderText}
        iconColor={colors.white}
        onBackPress={() => navigation.goBack()}
      />

      <View style={styles.giftImageContainer}>
        <MediumText
          text={'Available Balance'}
          style={styles.availablePointsText}
        />
        <XlargeText text={'SAR 2,950'} style={styles.availableBalance} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.subContainer}>
          <View style={{paddingHorizontal: widthPercentageToDP(4)}}>
            <AnaqaPills />
            <LargeText text={'Total Sales'} style={styles.totalSalesTitle} />
          </View>

          <View style={styles.tabView}>
            <GraphTabs setActiveTab={setActiveTab} />
            <AnaqaPayoutStatistics
              handleFilterPress={() => openBottomSheet()}
            />
            <BezierGraphView activeTab={activeTab} />
          </View>
          <View style={{marginHorizontal: widthPercentageToDP(4)}}>
            <View style={styles.sectionHeader}>
              <XlargeText text={'Invoices'} style={styles.sectionTitle} />
              <TouchableOpacity onPress={()=>handleNavigation('invoiceList')}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={invoices}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              scrollEnabled={false}
              contentContainerStyle={{paddingBottom: heightPercentageToDP(2)}}
            />
          </View>
        </View>
      </ScrollView>

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
    </View>
  );
};
export default Payouts;
