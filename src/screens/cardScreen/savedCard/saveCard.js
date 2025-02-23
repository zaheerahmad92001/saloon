import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import Header from '../../../components/appHeader';
import styles from './saveCard.styles';
import { AppButton } from '../../../components/appButton';
import { FlatList } from 'react-native-gesture-handler';
import CreditCard from '../../../components/creditCard';
const Card = ({navigation , route}) => {

const handleAddNewCard=()=>{
navigation.navigate('addCard')
}



const renderItem = ({ item, index }) => {
  return(
   <CreditCard
   item={item}
   index={index}
   />
  )}
  
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Saved Cards'} showBackButton onBackPress={()=>navigation.goBack()} />
      <View style={styles.wrapper}>
        <FlatList 
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        />
        <AppButton title='Add New Card' onPress={handleAddNewCard} style={styles.button} />
      </View>
    </SafeAreaView>
  );
};



export default Card;
