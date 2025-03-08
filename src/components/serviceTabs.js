import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../assets/colors';
import { SmallText } from './Typography';
import { heightPercentageToDP } from 'react-native-responsive-screen';

const ServiceTabs = () => {
    const [activeTab, setActiveTab] = useState('Trimming');

    const tabs = ['Trimming', 'Short Hair Cut', 'Long Hair Cut'];

    return (
        <View style={styles.serviceView}>
            {tabs.map((tab) => (
                <TouchableOpacity
                    key={tab}
                    style={[
                        styles.tab,
                        activeTab === tab ? styles.activeTab : styles.inactiveTab
                    ]}
                    onPress={() => setActiveTab(tab)}
                >
                    <SmallText text={tab}  style={activeTab === tab ? styles.activeText : styles.inactiveText}/>
                        
                    
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    serviceView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical:heightPercentageToDP(1)
        // padding: 10,
    },
    tab: {
        paddingVertical:10,
        paddingHorizontal: 15,
   
    },
    activeTab: {
        backgroundColor: colors.sharpPrimary,
        borderRadius: 7,
    },
    inactiveTab: {
        // backgroundColor: 'lightgray',
    },
    activeText: {
        color: 'white',
    },
    inactiveText: {
        color:colors.lightBlack,
    },
});

export default ServiceTabs;
