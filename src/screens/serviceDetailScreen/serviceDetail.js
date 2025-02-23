import React, {useEffect, useRef} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import images from '../../assets/images';
import Header from '../../components/appHeader';
import Message from '../../assets/svgs/messages.svg';
import PinkHeart from '../../assets/svgs/pinkHeart.svg';
import Clock from '../../assets/svgs/clock.svg';
import Location from '../../assets/svgs/locationMarker.svg';
import Star from '../../assets/svgs/star.svg';
import styles from './serviceDetail.style';
import {SmallText, XlargeText} from '../../components/Typography';
import AvailableService from '../../components/availableServices/serviceDropDown';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ServiceCard from '../../components/availableServices/service';
import {FlatList, Pressable} from 'react-native-gesture-handler';
import {AppButton} from '../../components/appButton';
import TimmingComponent from '../../components/timmingComponent';
import TopRatedVenus from '../../components/topRatedVenus';
import Config from 'react-native-config';
import FastImage from 'react-native-fast-image';
import ModalComponent from '../../components/modal';
import OpeningHours from '../../components/modal/openingHours';

const ServiceDetail = ({navigation, route}) => {
  const mapRef = useRef(null);
  const modalRef = useRef();

  const {REACT_APP_GOOGLE_MAPS_API_KEY} = Config;
  const latitude = 37.78825;
  const longitude = -122.4324;
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=600x300&markers=color:red|${latitude},${longitude}&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;

  const renderItem = ({item, index}) => {
    if (index % 2 === 0) {
      return <ServiceCard index={index} />;
    } else {
      return <AvailableService index={index} />;
    }
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(['hairAvenuMarker'], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        animated: true,
      });
    }
  }, []);

  const renderTopRatedVenus = ({item, index}) => {
    return <TopRatedVenus />;
  };
  const handleNavigation = (routeName, params) => {
    navigation.navigate(routeName, {params});
  };

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.open();
    }
  };
  const closeModal = () => {
    modalRef.current.close();
  };

  const renderHeader = () => {
    return (
      <React.Fragment>
        <View style={styles.imageContainer}>
          <Image source={images.room} style={styles.image} />
        </View>
        <View style={styles.subContainer}>
          <XlargeText text={'Hair Avenue'} style={styles.heading} />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => handleNavigation('chat')}
              style={styles.icon}>
              <Message />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <PinkHeart />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          Hair Avenue provides expert haircuts, styling, along with services
          like facials, cleanups, skincare and makeup to keep you looking your
          best.
        </Text>

        <View style={styles.locationContainer}>
          <Pressable
            onPress={() =>
              handleNavigation(
                'location',
                'No 03,Kadalana Road, Kadalana, Moratuwa',
              )
            }
            style={styles.locationSubContainer}>
            <Location />
            <SmallText
              text={'No 03,Kadalana Road, Kadalana, Moratuwa'}
              style={styles.locationText}
            />
          </Pressable>
          <View style={styles.locationSubContainer}>
            <Clock />
            <SmallText text={'9AM-10PM, Mon -Sun'} style={styles.timeText} />
          </View>

          <Pressable
            onPress={() => handleNavigation('ratingAndReview')}
            style={styles.locationSubContainer}>
            <Star />
            <View style={styles.row}>
              <SmallText
                text={'4.5'}
                style={[styles.locationText, {textDecorationLine: 'none'}]}
              />
              <SmallText text={'312'} style={styles.locationText} />
            </View>
          </Pressable>
        </View>
        <XlargeText
          text={'Services'}
          style={{marginBottom: heightPercentageToDP(1)}}
        />
      </React.Fragment>
    );
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <XlargeText
          text={'Opening Hours'}
          style={{marginBottom: heightPercentageToDP(1)}}
        />
        <TimmingComponent
          heading={'Monday - Saturday'}
          subHeading={'Open at: 9AM-10PM '}
          handleOnPress={openModal}
          style={{marginBottom: heightPercentageToDP(2)}}
        />
        <TimmingComponent heading={'Sunday'} subHeading={'Closed '} />

        <XlargeText
          text={'Location'}
          style={{marginVertical: heightPercentageToDP(1)}}
        />
        <View style={styles.mapContainer}>
          <FastImage source={{uri: mapUrl}} style={styles.mapImage} />
          <View style={styles.calloutContainer}>
            <Text style={styles.calloutTitle}>Hair Avenu</Text>
            <View style={[styles.row, {gap: 5}]}>
              <Star />
              <Text style={styles.ratingText}>4.7</Text>
              <Text style={styles.ratingCount}>(312)</Text>
            </View>
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <XlargeText text={'Similar Venues'} />
          <TouchableOpacity>
            <SmallText text={'See All'} style={styles.seeAllText} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          horizontal={true}
          renderItem={renderTopRatedVenus}
          contentContainerStyle={{gap: 10}}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Hair Avenue'}
        showBackButton
        onBackPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.wrapper}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7]}
            renderItem={renderItem}
            ListHeaderComponent={renderHeader}
            ListFooterComponent={renderFooter}
            contentContainerStyle={{marginHorizontal: widthPercentageToDP(4)}}
          />
        </View>

        <AppButton onPress={()=>handleNavigation('availableTimeSlot')} title={`Continue ${'(2)'}`} style={styles.continueButton} />
      </View>
      <ModalComponent ref={modalRef} onClose={closeModal}>
        <OpeningHours onClose={closeModal} />
      </ModalComponent>
    </SafeAreaView>
  );
};

export default ServiceDetail;
