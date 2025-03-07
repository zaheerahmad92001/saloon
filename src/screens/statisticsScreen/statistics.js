import React from "react";
import StatisticsTabs from "../../components/statisticsTab";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../../components/appHeader";
import colors from "../../assets/colors";

const StatisticsScreen = ({ navigation, route }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Statistics'} showBackButton onBackPress={() => navigation.goBack()}></Header>
            <View style={styles.mainContainer}>

                <StatisticsTabs />

            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    mainContainer: {
        flex: 1,
        backgroundColor: colors.appBG,
        paddingHorizontal: 20


    },
    tabView: {
        marginHorizontal: 20
    }

});
export default StatisticsScreen;