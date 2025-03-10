import React from 'react';
import StatisticsTabs from '../../components/statisticsTab';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from '../../components/appHeader';
import colors from '../../assets/colors';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const StatisticsScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Statistics'}
        showBackButton
        onBackPress={() => navigation.goBack()} />
      <View style={styles.mainContainer}>
        <StatisticsTabs />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.appBG,
    paddingHorizontal:wp(4),
    paddingTop:heightPercentageToDP(1)
  },
  tabView: {
    marginHorizontal: 20,
  },
});
export default StatisticsScreen;
