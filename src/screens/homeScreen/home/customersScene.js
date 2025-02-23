import React from "react";
import { View,FlatList } from "react-native";
import CustomersCard from "../../../components/customersCard/CustomersCard";
import { mockData} from '../../../staticData';
const CustomersScene = () => {
    const renderSalonCard = ({ item }) => (
        <CustomersCard
          item={item}
          onFavorite={() => handleFavoritePress(item.id)}
          showFavoriteButton={true}
        />
      );
    return (
        <View>
            <FlatList
                data={mockData}
                keyExtractor={item => item.id.toString()}
                renderItem={renderSalonCard}
                //contentContainerStyle={styles.list}
                scrollEnabled={false}
            />
        </View>
    );
}
export default CustomersScene;