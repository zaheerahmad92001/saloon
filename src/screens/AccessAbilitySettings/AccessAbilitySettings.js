import React from 'react';
import AccessAbilitySettingsCard from '../../components/AccessAbilitySettingsCard/AccessAbilitySettingsCard';
import { FlatList, SafeAreaView, View } from 'react-native';
import styles from './accessAbilitySettings.Style';
import Header from '../../components/appHeader';
import { AccessAbilitySettingsData } from '../../staticData';


const AccessAbilitySettings = ({ navigation, route }) => {


    const handleNavigation = (routeName)=>{
        navigation.navigate(routeName);
      };

    const renderCard = ({item})=>{
        return(
            <AccessAbilitySettingsCard
            item={item}
            onPress={() => handleNavigation(item.routeName)}
             />
        );
    };
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
                 />

            </View>
        </SafeAreaView>
    );
};
export default AccessAbilitySettings;
