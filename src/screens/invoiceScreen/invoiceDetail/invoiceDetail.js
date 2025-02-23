import React from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import Header from '../../../components/appHeader';
import DetailRow from '../../../components/DetailRow';
import PricingDetails from '../../../components/pricingDetail/pricingDetail';
import SalonCard from '../../../components/salonCard/salonCard';
import {dummyData, invoiceDetailRows, mockData,bookingDetails} from '../../../staticData';
import styles from './invoiceDetail.styles';
import {MediumText, SmallText } from '../../../components/Typography';
import DottedLine from '../../../components/DottedHorizontalLine';
import { AppButton } from '../../../components/appButton';

const InvoiceDetail = ({navigation, route}) => {
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const handlePrint = () => {
    console.log('Print button pressed');
  };

  const handleDownload = () => {
    console.log('Download button pressed');
  };

  const renderItem=({item , index})=>{
    return(
      <DetailRow
      label={item.label}
      value={item.value}
      Icon={item.image}
    />
    )
  }

  const isCancelled = mockData[0].position === 'Cancelled' ? true: false;

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Invoice'} showBackButton onBackPress={()=>navigation.goBack()} />
      <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
          <View style={{marginTop:20,}}>
        {/* <SalonCard
         item={mockData[0]}
          onFavorite={() => handleFavoritePress(mockData[0].id)}
          showFavoriteButton={false}
          position={mockData[0].position}
        /> */}
        </View>
        <View style={styles.content}>
          {/* <View style={styles.serviceDetails}> */}
           {/* <MediumText text={'Your Service'} style={styles.smallText}/>
            <FlatList 
            data={invoiceDetailRows}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={item => item.value}
            showsVerticalScrollIndicator={false}
            /> */}

            {/* <DottedLine/> */}

            <PricingDetails data={dummyData} bookingdetail={bookingDetails} />
          {/* </View> */}

          <View style={styles.buttonContainer}>
            <AppButton onPress={handlePrint} title={isCancelled? 'Later': 'Print'} style={styles.printButton} textstyle={styles.buttonTextPrint}/>
            <AppButton onPress={handleDownload} title={isCancelled?'Pay Now': 'Download'} style={styles.downloadButton} />
          </View>

        </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InvoiceDetail;
