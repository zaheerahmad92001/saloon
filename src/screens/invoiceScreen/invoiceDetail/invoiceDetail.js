import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../../components/appHeader';
import PricingDetails from '../../../components/pricingDetail/pricingDetail';
import {dummyData, mockData, bookingDetails} from '../../../staticData';
import styles from './invoiceDetail.styles';
import {AppButton} from '../../../components/appButton';

const InvoiceDetail = ({navigation, route}) => {
  const handlePrint = () => {
    console.log('Print button pressed');
  };

  const handleDownload = () => {
    console.log('Download button pressed');
  };

  const isCancelled = mockData[0].position === 'Cancelled' ? true : false;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Invoice'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.contentContainer}>
            <View style={{marginTop: 20}}></View>
            
              <PricingDetails data={dummyData} bookingdetail={bookingDetails} />

              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={handlePrint}
                  title={isCancelled ? 'Later' : 'Print'}
                  style={styles.printButton}
                  textstyle={styles.buttonTextPrint}
                />
                <AppButton
                  onPress={handleDownload}
                  title={isCancelled ? 'Pay Now' : 'Download'}
                  style={styles.downloadButton}
                />
              </View>
            </View>
          </View>
        
      </View>
    </SafeAreaView>
  );
};

export default InvoiceDetail;
