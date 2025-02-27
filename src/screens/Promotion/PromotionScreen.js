import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import styles from './PromotionScreen.Style';
import Header from '../../components/appHeader';
import PromotionCard from '../../components/PromotionCard';
import { promotiondata } from '../../staticData';
import { AppButton } from '../../components/appButton';
import {Provider } from 'react-native-paper';
const PromotionScreen = ({navigation, route})=>{

    const handleEdit = ({}) => {
        navigation.navigate('editPromotionScreen');
      };

      const handleDelete = ({}) => {
        navigation.navigate('editPromotionScreen');
      };

     const renderPromotionCard = ({item})=>{
        return(
           <PromotionCard title={item.title}
           max={item.max}
           exp={item.exp}
           onEdit={() =>handleEdit(item)}
           onDelete={() =>handleDelete(item)}
            />
        );
     };
 
    return(

        <SafeAreaView style={styles.container}>
            <Header title={'Promotion'} showBackButton onBackPress={()=> navigation.goBack()} />
            <Provider>
            <View style={styles.mainContainer}>
           <Text style={styles.discountText}>Discounts</Text>
                <FlatList
                data={promotiondata}
                renderItem={renderPromotionCard}
                 />
            </View>
          </Provider>
            <AppButton
            onPress={() => navigation.navigate('addPromotionScreen')}
            title={'Add Discount'}
            style={styles.button}
            textstyle={styles.buttonText}
          />

        </SafeAreaView>
    );
};
export default PromotionScreen;
