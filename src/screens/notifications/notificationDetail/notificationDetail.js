import React, {useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import DetailRow from '../../../components/DetailRow';
import styles from './notificationDetail.styles';
import {invoiceDetailRows, mockData} from '../../../staticData';
import Header from '../../../components/appHeader';
import SalonCard from '../../../components/salonCard/salonCard';
import {
  LargeText,
  MediumText,
  SmallText,
} from '../../../components/Typography';
import fontsFamily from '../../../assets/fontsFamily';

const NotificationDetail = ({navigation, route}) => {
  const renderItem = ({item, index}) => {
    return (
      <DetailRow label={item.label} value={item.value} Icon={item.image} />
    );
  };

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title="Notification"
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.detailContainer}>
          <SalonCard
          item={mockData[0]}
            onFavorite={() => handleFavoritePress(mockData[0].id)}
            showFavoriteButton={false}
            isNotificaiton={true}
          />

          <View style={styles.serviceDetails}>
            <MediumText text={'Your Service'} style={styles.smallText} />
            <FlatList
              data={invoiceDetailRows}
              renderItem={renderItem}
              scrollEnabled={false}
              keyExtractor={item => item.value}
              showsVerticalScrollIndicator={false}
            />

            <View style={styles.totalPriceContainer}>
              <LargeText text={'Total Price'}  style={styles.TotalPrice}/>
              <MediumText text={'SAR 210'} style={styles.TotalPrice}/>
            </View>
          </View>

          <MediumText text={'Reason'} style={styles.reasonText} />
          <View style={styles.reasonContainer}>
            <SmallText
              text={'No longer able to attend the appointment'}
              style={styles.reasonValue}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationDetail;
