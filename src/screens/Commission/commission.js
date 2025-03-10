import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import styles from './commission.style';
import { SmallText, XlargeText } from '../../components/Typography';

const CommissionScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Account Management'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.maincontainer}>
        <View style={styles.wrapper}>
        <XlargeText text={'Account Management'} style={styles.sectionTitle}/>
        <SmallText text={'Commission management should be in percentage'} style={styles.description}/>
        <View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Commission Rate <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.Box}>
              <SmallText text={'20%'} style={styles.percntage}/>
            </View>
          </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default CommissionScreen;
