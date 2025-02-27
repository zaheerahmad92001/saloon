import React from 'react';
import MoreCard from '../../components/moreCard/MoreCard';
import {FlatList, SafeAreaView, View} from 'react-native';
import styles from './MoreScreen.Style';
import Header from '../../components/appHeader';
import {moreRoutes} from '../../staticData';

const MoreScreen = ({navigation, route}) => {

  const handleNavigation = item => {
    navigation.navigate(item.routeName, {item});
  };

  const renderCard = ({item}) => {
    return (
    <MoreCard 
    item={item} 
    onPress={()=>handleNavigation(item)} />
    );
  };


  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'More'}
        showBackButton={false}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        <FlatList
          data={moreRoutes}
          renderItem={renderCard}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
export default MoreScreen;
