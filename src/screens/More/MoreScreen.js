import React from "react";
import MoreCard from "../../components/moreCard/MoreCard";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import styles from "./MoreScreen.Style";
import Header from "../../components/appHeader";
import { More } from "../../staticData";
const MoreScreen = ({ navigation, route }) => {


    const renderCard=({item})=>{

        const handleNavigation = () => {
            switch (item.routeName) {
                case 'profileScreen':
                    navigation.navigate('profileScreen');
                    break;
                case 'accountManagementScreen':
                   // navigation.navigate('accountManagementScreen');
                    navigation.navigate('accountManagementScreen');
                    break;
                case 'workingHoursScreen':
                    navigation.navigate('workingHoursScreen');
                    break;
            }
        };
        return(
            <MoreCard
            item={item}
            onPress={handleNavigation}
            ></MoreCard>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'More'}
                showBackButton={false}
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.mainContainer}>
                <FlatList
                data={More}
                renderItem={renderCard}
                ></FlatList>

            </View>
        </SafeAreaView>
    );
}
export default MoreScreen;