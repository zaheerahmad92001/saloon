import { Alert, FlatList, SafeAreaView, Text, View } from "react-native";
import styles from "./PromotionScreen.Style";
import Header from "../../components/appHeader";
import PromotionCard from "../../components/PromotionCard";
import { promotiondata } from "../../staticData";
import { AppButton } from "../../components/appButton";
import {Provider } from "react-native-paper";
const PromotionScreen =({navigation, route})=>{

    const handleEdit = ({}) => {
        console.log("Edit clicked for:");
        Alert.alert('Edit clicked for:');
      };
    
      const handleDelete = ({}) => {
        console.log("Delete clicked for:");
        Alert.alert('Delete clicked for:');
      };

     const renderPromotionCard =({item})=>{
        return(
           <PromotionCard title={item.title}
           max={item.max}
           exp={item.exp}
           onEdit={() =>handleEdit(item)} 
           onDelete={() =>handleDelete(item)}
           ></PromotionCard> 
        );
     }
 //() => navigation.navigate('addPromotionScreen')
    
    return(
        
        <SafeAreaView style={styles.container}>
            <Header title={'Promotion'} showBackButton onBackPress={()=> navigation.goBack()}></Header>
            <Provider>
            <View style={styles.mainContainer}>
           <Text style={styles.discountText}>Discounts</Text>
                <FlatList
                data={promotiondata}
                renderItem={renderPromotionCard}
                ></FlatList>
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
}
export default PromotionScreen;