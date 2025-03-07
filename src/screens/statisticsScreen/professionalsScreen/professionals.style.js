import React from "react";
import { StyleSheet } from "react-native";
import colors from "../../../assets/colors";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.appBG
    },

    headerSection: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 10

    },
    filterView: {
        marginTop: 10
    }
});
export default styles;