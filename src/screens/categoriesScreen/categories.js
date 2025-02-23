import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Header from '../../components/appHeader';
import MenuItem from '../../components/menItems/menuItems';
import {categoriesOptions} from '../../staticData';
import styles from './categories.styles';
import {LargeText} from '../../components/Typography';

const Categories = ({navigation, route}) => {

const handlePress=(item)=>{
 navigation.navigate('categoryListing',{item})
}


  const renderItem = ({item, index}) => {
    return (
      <MenuItem
        key={index}
        title={item.title}
        Icon={item.img}
        showImage={true}
        style={styles.menuItemStyle}
        onPress={() => handlePress(item)}
      />
    );
  };

 const renderHeader=()=>{
return(
  <LargeText text={'All Categories'} style={styles.title} />
)
 }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Categories'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <View style={styles.contentContainer}>
            <FlatList
              data={categoriesOptions}
              renderItem={renderItem}
              keyExtractor={item => item.title}
              ListHeaderComponent={renderHeader}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
