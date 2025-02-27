import React from "react";
import AccessAbilitySettingsCard from "../../components/AccessAbilitySettingsCard/AccessAbilitySettingsCard";
import { Alert, FlatList, SafeAreaView, View } from "react-native";
import styles from "./AccessAbilitySettings.Style";
import Header from "../../components/appHeader";
import { AccessAbilitySettingsData } from "../../staticData";
const AccessAbilitySettingScreen = ({ navigation, route }) => {


    const renderCard=({item})=>{

        const handleNavigation =(routeName)=>{
            console.log("Navigating to:", routeName);
            navigation.navigate('accessAbility')
          }
        return(
            <AccessAbilitySettingsCard
            item={item}
            onPress={() => handleNavigation(item.routeName)}
            ></AccessAbilitySettingsCard>
        );
    }
    return (
        <SafeAreaView style={styles.container}>
            <Header
                title={'Accessibility Settings'}
                showBackButton
                onBackPress={() => navigation.goBack()}
            />
            <View style={styles.mainContainer}>
                <FlatList
                data={AccessAbilitySettingsData}
                renderItem={renderCard}
                ></FlatList>

            </View>
        </SafeAreaView>
    );
}
export default AccessAbilitySettingScreen;