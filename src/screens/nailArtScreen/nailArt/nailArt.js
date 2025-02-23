import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Header from '../../../components/appHeader';
import SalonCard from '../../../components/salonCard/salonCard';
import Search from '../../../components/search';
import {mockData, recentSearches} from '../../../staticData';

const NailArt = () => {
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
      <Header title={'Nail Art'} showBackButton />
      <Search
        setFilteredSearches={setFilteredSearches}
        setIsInputActive={setIsInputActive}
      />
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
});

export default NailArt;
