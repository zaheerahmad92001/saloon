import React, { useCallback, useReducer, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import Search from '../../../components/search';
import { mockData, recentSearches } from '../../../staticData';
import images from '../../../assets/images';
import SalonCard from '../../../components/salonCard/salonCard';
import { LargeText, SmallText, XlargeText } from '../../../components/Typography';
import styles from './home.styles';
import HomeHeader from '../../../components/homeHeader';
import GooglePlacesModal from '../../../components/modal/google-places-modal';
import TopRatedVenus from '../../../components/topRatedVenus';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import SalonFilterCard from '../../../components/salon_filter/salonFilterCard';
import ModalComponent from '../../../components/modal';
import OverViewDropdown from '../../../components/overviewDropdown/overviewDropdown';
import TotalBookingIcon from '../../../assets/svgs/TotalBookingsIcon.svg';
import ServicesIcon from '../../../assets/svgs/ServicesIcon.svg';
import RevenueIcon from '../../../assets/svgs/RevenueIcon.svg';
import ReviewIcon from '../../../assets/svgs/ReviewIcon.svg';
import { LineChart } from "react-native-chart-kit";
import colors from '../../../assets/colors';
import SaleCustomersTabs from './TabIndex';
import CustomersScene from './customersScene';
const categories = [
  { id: 1, name: 'Salon', icon: images.salon },
  { id: 2, name: 'Spa', icon: images.spa },
  {
    id: 3,
    name: 'Nail Art',
    icon: images.nail,
  },
  {
    id: 4,
    name: 'Salon & Spa',
    icon: images.salonSpa,
  },
];

const HomeScreen = ({ navigation, route }) => {
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);
  const [location, setLocation] = useState('');
  const modalRef = useRef()
  const locationModalRef = useRef();

  const [state, updateState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isModalVisible: false,
      isVisible: false,
    },
  );
  const { isModalVisible, isVisible } = state;

  const openModal = () => {
    if (modalRef?.current) {
      modalRef.current.open()
    }
  };
  const closeModal = () => {
    if (modalRef?.current) {
      modalRef.current.close()
    }
  };

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const items = [
    { label: 'Weekly', value: '1' },
    { label: 'Weekly', value: '2' },
    { label: 'Weekly', value: '3' },
    { label: 'Weekly', value: '4' },
    { label: 'Weekly', value: '5' },
  ];

  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}>
      <View style={styles.catImageContainer}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={styles.categoryIcon}
        />
      </View>
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderSalonCard = ({ item }) => (
    <SalonCard
      item={item}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );

  const openLocationModal = () => {
    if (locationModalRef?.current) {
      locationModalRef.current.open()
    }
  };


  const renderTopRatedVenus = ({ item, index }) => {
    return <TopRatedVenus />;
  };

  const handleNotificationPress = () => {
    navigation.navigate('notificationStack', { screen: 'notifications' });
  };
  const handleFavouritePress = () => {
    navigation.navigate('favorites',);
  };

  const handleSeeAll = (routeName) => {
    navigation.navigate(routeName)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader
        onNotificationPress={handleNotificationPress}
        onFavoritePress={handleFavouritePress}
        onLocationPress={openLocationModal}
        location={location}
      />
      <View style={styles.wrapper}>
        <View style={styles.contentWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginVertical: heightPercentageToDP(2) }}>
              <Search
                setFilteredSearches={setFilteredSearches}
                setIsInputActive={setIsInputActive}
                isHome={false}
                isSearch={true}

              />
            </View>
            {/* <View>
              <View style={styles.imageContainer}>
                <Image
                  source={images.customers}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>

              <View style={styles.headerCard}>
                <Text style={styles.headerText}>Morning Special!</Text>
                <Text style={styles.discountText}>Get 20% Off</Text>
                <Text style={styles.subText}>
                  Limited-time offers on all services
                </Text>
                <TouchableOpacity onPress={openModal} style={styles.bookButton}>
                  <Text style={styles.bookButtonText}>Book Now</Text>
                </TouchableOpacity>
              </View>
            </View> */}


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
                  <Text style={styles.lableText}> Total Booking</Text>
                  <Text style={styles.ValueText}>56</Text>
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
             
             <View style={styles.mainGraphView}>
              <SaleCustomersTabs/>
              <CustomersScene/>
             </View>

            {/* <View style={styles.sectionHeader}>
              <LargeText text={'Nearby Venues'} style={styles.sectionTitle} />
              <TouchableOpacity>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderSalonCard}
              contentContainerStyle={styles.list}
              scrollEnabled={false}
            />

            <View style={styles.sectionHeader}>
              <LargeText text={'Top Rated Venues'} style={styles.sectionTitle} />
              <TouchableOpacity>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              horizontal={true}
              renderItem={renderTopRatedVenus}
              contentContainerStyle={{ gap: 10 }}
              showsHorizontalScrollIndicator={false}
            />

            <View style={styles.sectionHeader}>
              <LargeText
                text={'Recommended Venues'}
                style={styles.sectionTitle}
              />
              <TouchableOpacity>
                <SmallText text={'See All'} style={styles.seeAllText} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderSalonCard}
              contentContainerStyle={styles.list}
              scrollEnabled={false}
            /> */}
          </ScrollView>
        </View>
      </View>
      <GooglePlacesModal
        ref={locationModalRef}
        setLocation={setLocation}
      />

      <ModalComponent
        ref={modalRef}
        onClose={closeModal}>
        <SalonFilterCard
          onCancel={closeModal}
          onApply={() => {
            console.log('Apply')
          }}

        />
      </ModalComponent>



    </SafeAreaView>
  );
};

export default HomeScreen;
