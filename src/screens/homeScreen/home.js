import React, {useCallback, useReducer, useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Search from '../../components/search';
import {graphTabs, mockData, recentSearches} from '../../staticData';
import {
  LargeText,
  MediumText,
  SmallText,
  XlargeText,
} from '../../components/Typography';
import styles from './home.styles';
import HomeHeader from '../../components/homeHeader';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import OverViewDropdown from '../../components/overviewDropdown/overviewDropdown';
import TotalBookingIcon from '../../assets/svgs/TotalBookingsIcon.svg';
import ServicesIcon from '../../assets/svgs/ServicesIcon.svg';
import RevenueIcon from '../../assets/svgs/RevenueIcon.svg';
import ReviewIcon from '../../assets/svgs/ReviewIcon.svg';

import BezierGraphView from '../../components/graphView/BezierGraphView';
import GraphTabs from '../../components/graphTabs';
import TradeUp from '../../assets/svgs/trade-up-arrow.svg';
import Filter from '../../assets/svgs/filter-search.svg';
import CustomersCard from '../../components/customersCard/CustomersCard';
import {BottomSheet} from '../../components/bottomSheet';
import BookingFilter from '../../components/bookingFilter/BookingFilter';

const HomeScreen = ({navigation, route}) => {
  const refRBSheet = useRef();
  const [isInputActive, setIsInputActive] = useState(false);
  const [activeTab, setActiveTab] = useState(graphTabs.sales);

  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
    },
  );
  const {selectedItem} = state;

  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    {label: 'Weekly', value: '1'},
    {label: 'Weekly', value: '2'},
    {label: 'Weekly', value: '3'},
    {label: 'Weekly', value: '4'},
    {label: 'Weekly', value: '5'},
  ];

  const renderCustomers = ({item}) => (
    <CustomersCard
      item={item}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );

  const handleNotificationPress = () => {
    navigation.navigate('notificationStack', {screen: 'notifications'});
  };

  const handleSeeAll = routeName => {
    navigation.navigate(routeName);
  };

  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };
  const openBottomSheet = useCallback(
    item => {
      updateState({selectedItem: item});
      if (refRBSheet.current) {
        setTimeout(() => refRBSheet.current.present(), 0);
      }
    },
    [refRBSheet],
  );

  const ApplyFilter = item => {};

  const clearFilter = item => {
    hideBottomSheet();
  };

  const cancelFilter = useCallback(() => {
    hideBottomSheet();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        onNotificationPress={handleNotificationPress}
        name={'Giana Lipshuts'}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <View style={{marginVertical: heightPercentageToDP(2)}}>
            <Search
              handleSearch={()=>{}}
              setIsInputActive={setIsInputActive}
              handleOnPress={()=>navigation.navigate('search', {screen: 'search'})}
              inActive={true}
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.sectionHeader}>
              <LargeText text={'Overview'} style={styles.sectionTitle} />
              <OverViewDropdown
                data={items}
                value={selectedValue}
                onChange={item => setSelectedValue(item.value)}
                placeholder="Weekly"
              />
            </View>

            <View style={styles.overView}>
              <View style={styles.totalBookingView}>
                <TotalBookingIcon />
                <View style={styles.textlableValueView}>
                  <SmallText text="Total Booking" style={styles.lableText} />
                  <MediumText text={'56'} style={styles.ValueText} />
                </View>
              </View>

              <View style={styles.totalBookingView}>
                <RevenueIcon />
                <View style={styles.textlableValueView}>
                  <Text style={styles.lableText}> Total Income</Text>
                  <Text style={styles.ValueText}>SAR 2000</Text>
                </View>
              </View>
            </View>

            <View style={styles.overView}>
              <View style={styles.totalBookingView}>
                <ServicesIcon />
                <View style={styles.textlableValueView}>
                  <Text style={styles.lableText}> Services</Text>
                  <Text style={styles.ValueText}>08</Text>
                </View>
              </View>

              <View style={styles.totalBookingView}>
                <ReviewIcon />
                <View style={styles.textlableValueView}>
                  <Text style={styles.lableText}> Professional</Text>
                  <Text style={styles.ValueText}>32</Text>
                </View>
              </View>
            </View>


            <LargeText text={'Total Sales'} style={styles.totalSalesTitle} />

            <View style={styles.tabView}>
              <GraphTabs setActiveTab={setActiveTab} />
              <View style={[styles.rowWrap, styles.spaceBetween]}>
                <View style={styles.rowWrap}>
                  <XlargeText text={'SAR 500'} />
                  <View style={styles.TradeUpView}>
                    <SmallText text={'16%'} style={styles.tradeText} />
                    <TradeUp />
                  </View>
                </View>

                <View style={styles.filterView}>
                  <Pressable onPress={openBottomSheet} style={styles.filterIconView}>
                    <Filter />
                    <MediumText
                      text={'Filter'}
                      style={styles.filterTextStyle}
                    />
                  </Pressable>
                </View>
              </View>
              <BezierGraphView activeTab={activeTab} />
            </View>

            <View style={styles.sectionHeader}>
              <XlargeText text={'Professionals'} style={styles.sectionTitle} />
              <TouchableOpacity onPress={() => handleSeeAll('categories')}>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderCustomers}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
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
};

export default HomeScreen;
