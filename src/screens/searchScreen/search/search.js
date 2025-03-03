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
import Header from '../../../components/appHeader';

const SearchScreen = ({navigation, route}) => {
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
  };

  const renderListHeader = () => {
    return <SearchResultStats />;
  };

  const renderSearchData = ({item}) => (
    <SalonCard
      item={item}
      onFavorite={() => handleFavoritePress(item.id)}
      showFavoriteButton={true}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Header
          title={'Search'}
          showBackButton
          onBackPress={() => navigation.goBack()}
        />
        <Search
          handleSearch={setFilteredSearches}
          setIsInputActive={setIsInputActive}
        />

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
            <FlatList
              data={mockData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderSearchData}
              ListHeaderComponent={renderListHeader}
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
