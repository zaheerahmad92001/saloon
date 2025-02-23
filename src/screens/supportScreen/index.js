import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import styles from './styles';
import SupportTabs from '../../components/supportTabs';


const Support = ({navigation, route}) => {

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Customer Support'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <SupportTabs/>
      </View>
    </SafeAreaView>
  );
};

export default Support;
