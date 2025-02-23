import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React, {useCallback, useReducer, useRef,} from 'react';
import {mockData} from '../../staticData';
import SalonCard from '../../components/salonCard/salonCard';
import colors from '../../assets/colors';
import Header from '../../components/appHeader';
import {heightPercentageToDP, heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import FavoriteModal from '../../components/modal/favoriteModal';
import { BottomSheet } from '../../components/bottomSheet';

const Favorites = ({navigation, route}) => {
    const refRBSheet = useRef();
    const [state, updateState] = useReducer(
      (state, newState) => ({...state, ...newState}),
      {
        selectedItem:null,
      },
    );
    const {selectedItem} = state;

    const handleFavoritePress = useCallback((item) => {
      updateState({ selectedItem: item });
      if (refRBSheet.current) {
        setTimeout(() => refRBSheet.current.present(), 0);
      }
    }, [refRBSheet]);


  const hideBottomSheet = () => {
    if (refRBSheet.current) {
      refRBSheet.current.close();
    }
  };

  const removeFavourite=()=>{
    hideBottomSheet()
    navigation.navigate('successScreen',{actionName:'remove'})
  }


  const renderSalonCard = ({item}) => (
    <SalonCard
      item={item}
      onFavorite={() => handleFavoritePress(item)}
      showFavoriteButton={true}
      selected={true}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Favorites'} showBackButton={true} onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
        <FlatList
          data={mockData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderSalonCard}
          contentContainerStyle={{marginTop:20}}
          nestedScrollEnabled
        />
        </View>
      </View>

      <BottomSheet
        refRBSheet={refRBSheet}
        onClose={() =>hideBottomSheet()}
        scrollEnabled={false}
        disableDynamicSizing={true}
        height={heightPercentageToDP(32)}
      >
         <FavoriteModal 
        item={selectedItem}
        cancelButton={() => hideBottomSheet()} 
        removeButton={removeFavourite}
        />
      </BottomSheet>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  wrapper: {
    flex: 1,
    backgroundColor:colors.appBG,
  },
  contentContainer:{
    flex:1,
    marginHorizontal: wp(4),
  }
});

export default Favorites;
