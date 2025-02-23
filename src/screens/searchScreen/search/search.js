import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './search.styles';
import SalonCard from '../../../components/salonCard/salonCard';
import Close from '../../../assets/svgs/close.svg';
import Search from '../../../components/search';
import {mockData, recentSearches} from '../../../staticData';
import SearchResultStats from '../../../components/searchResultStats';

const SearchScreen = () => {
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);

  const renderSearchItem = ({item}) => (
    <View style={styles.searchItem}>
      <Text style={styles.searchText}>{item}</Text>
      <TouchableOpacity
        style={styles.removeIcon}
        // onPress={() => handleRemoveSearch(item)}
      >
        <Close />
      </TouchableOpacity>
    </View>
  );

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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Search
          setFilteredSearches={setFilteredSearches}
          setIsInputActive={setIsInputActive}
        />

        {/* Horizontat Line */}
        <View style={styles.horizontalLine} />
        {!isInputActive && (
          <>
            <Text style={styles.recentSearchTitle}>Recent search</Text>
            <FlatList
              data={filteredSearches}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderSearchItem}
              contentContainerStyle={styles.recentSearchList}
              nestedScrollEnabled
            />
          </>
        )}

        {isInputActive && (
          <View style={{flex: 1}}>
            <SearchResultStats/>
            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderSalonCard}
              contentContainerStyle={styles.list}
              nestedScrollEnabled
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
