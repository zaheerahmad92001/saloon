import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import Header from '../../../components/appHeader';
import InvoiceCard from '../../../components/invoiceCard/invoiceCard';
import {invoices} from '../../../staticData';
import styles from './invoiceList.styles';
import {XlargeText} from '../../../components/Typography';

const InvoiceList = ({navigation, route}) => {

  const handleOnPress = () => {
    navigation.navigate('invoiceDetail');
  };

  const renderItem = ({item, index}) => {
    return <InvoiceCard invoice={item} handleOnPress={handleOnPress} />;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Invoice'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.mainContainer}>
        
        <XlargeText text={'Invoices'} style={styles.heading} />
        <FlatList
          data={invoices}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      </View>
    </SafeAreaView>
  );
};

export default InvoiceList;
