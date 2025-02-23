import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import colors from '../../../assets/colors';
import fontsFamily from '../../../assets/fontsFamily';
import Header from '../../../components/appHeader';
import SalonCard from '../../../components/salonCard/salonCard';
import Search from '../../../components/search';
import {mockData, recentSearches} from '../../../staticData';

const NearbyVenue = () => {
  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };
  const renderSalonCard = ({item}) => (
    <SalonCard
    item={item}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Nearby Venues'} showBackButton />
      <Search
        setFilteredSearches={setFilteredSearches}
        setIsInputActive={setIsInputActive}
      />
      <Text style={styles.heading}>Nearby Venues</Text>
      <View>
        <FlatList
          data={mockData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderSalonCard}
          contentContainerStyle={styles.list}
          nestedScrollEnabled
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.semiBold,
    color: colors.appBlack,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

export default NearbyVenue;
