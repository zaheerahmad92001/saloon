import React, {useState} from 'react';
import {View, SafeAreaView, FlatList} from 'react-native';
import Header from '../../components/appHeader';
import SalonCard from '../../components/salonCard/salonCard';
import Search from '../../components/search';
import {mockData, recentSearches} from '../../staticData';
import styles from './categoryListing.styles';

const CategoriesList = ({navigation , route}) => {

  const {item} = route.params
  const {title} = item

  const handleFavoritePress = id => {
    console.log(`Favorite pressed for salon ID: ${id}`);
  };

  const renderSalonCard = ({item , index}) => (
    <SalonCard
     item={item}
     onFavorite={() => handleFavoritePress(item.id)}
     handleOnPress={()=>navigation.navigate('detail',{item})}
     showFavoriteButton={true}
     isNotificaiton={false}
    />
  );

  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Header title={title} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
      <View style={styles.contantContainer}>
      <Search
        setFilteredSearches={setFilteredSearches}
        setIsInputActive={setIsInputActive}
      />
        <FlatList
          data={mockData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderSalonCard}
          contentContainerStyle={styles.list}
          nestedScrollEnabled
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesList;
