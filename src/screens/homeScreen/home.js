import React, {useCallback, useEffect, useReducer, useRef, useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Search from '../../components/search';
import {filterList, graphTabs, mockData} from '../../staticData';
import {
  MediumText,
  SmallText,
  XlargeText,
} from '../../components/Typography';
import styles from './home.styles';
import HomeHeader from '../../components/homeHeader';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import OverViewDropdown from '../../components/overviewDropdown/overviewDropdown';
import BezierGraphView from '../../components/graphView/BezierGraphView';
import GraphTabs from '../../components/graphTabs';
import {BottomSheet} from '../../components/bottomSheet';
import BookingFilter from '../../components/bookingFilter/BookingFilter';
import AnaqaPills from '../../components/AnaqaPills';
import AnaqaPayoutStatistics from '../../components/AnaqaPayoutStatistics';
import StaticsProfessionalCard from '../../components/statisticsTab/staticsProfessionalCard';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardInfo } from '../../redux/actions/homeActions';

const HomeScreen = ({navigation, route}) => {
  const refRBSheet = useRef();
  const [isInputActive, setIsInputActive] = useState(false);
  const [activeTab, setActiveTab] = useState(graphTabs.sales);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);



  const [state, updateState] = useReducer(
    (state, newState) => ({...state, ...newState}),
    {
      selectedItem: null,
    },
  );
  const {selectedItem} = state;

  const [selectedValue, setSelectedValue] = useState(null);
  

useEffect(()=>{

  const loadDashboardData= async ()=>{
    let infoData = user?.id
     const response = await dispatch(dashboardInfo(infoData)).unwrap();
  
  }
   loadDashboardData();
},[dispatch, user?.id])

  const handNavigation = () => {
    // navigation.navigate('ProfessionalService');
};

  const renderCustomers = ({item}) => (
    <StaticsProfessionalCard
      onClick={() => handNavigation()}
      showServiceCount={false}
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
  const openBottomSheet = useCallback((item) => {
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
              <MediumText text={'Overview'} style={styles.sectionTitle} />
              <OverViewDropdown
                data={filterList}
                value={selectedValue}
                onChange={item => setSelectedValue(item.value)}
                placeholder="Weekly"
              />
            </View>
            <AnaqaPills/>

            <MediumText text={'Total Sales'} style={styles.totalSalesTitle} />

            <View style={styles.tabView}>
              <GraphTabs setActiveTab={setActiveTab} />
              <AnaqaPayoutStatistics handleFilterPress={() => openBottomSheet()} />
              <BezierGraphView activeTab={activeTab} />
            </View>

            <View style={styles.sectionHeader}>
              <XlargeText text={'Professionals'} style={styles.sectionTitle} />
              <TouchableOpacity onPress={() => handleSeeAll('professionals')}>
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
