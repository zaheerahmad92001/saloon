
import {StyleSheet } from "react-native"; 
import colors from "../../assets/colors";
import { RFValue } from "react-native-responsive-fontsize";
import fontsFamily from "../../assets/fontsFamily";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    mainContainer:{
        flex:1,
        backgroundColor:colors.appBG,
        padding:20
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 15,
    },
    backText: {
      fontSize: 16,
      color: "#000",
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    deleteText: {
      fontSize: 16,
      color: "red",
    },
    mainTitle: {
      fontSize: RFValue(12),
      fontFamily:fontsFamily.medium,
      //marginBottom: 15,
    },
    subServiceContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        // padding: 10,
        paddingHorizontal:10,
        paddingVertical:5,
        marginBottom: 10,
      
    },
    subServiceHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
    },
    subServiceTitle: {
      fontSize: RFValue(11),
     fontFamily:fontsFamily.regular
    },
    subServiceDetails: {
      marginTop: 3,
    },
    divicerView:{
      marginBottom:10
    },
    label: {
      fontSize: RFValue(11),
      fontFamily:fontsFamily.regular,
      marginBottom: 5,
    },
    input: {
      borderRadius: 8,
      padding: 13,
      backgroundColor: colors.inputGray,
      marginBottom: 10,
      color:colors.lightBlack,
      fontSize:RFValue(9)
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    column: {
      width: "48%",
    },
    Assineerow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:'center',
      margin:5
    },
    assignButton: {
      borderWidth: 0.7,
      borderRadius: 6,
      borderColor: colors.primary,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    assignText: {
      color: colors.primary,
      fontSize: RFValue(11),
    },
    saveButton: {
      backgroundColor: "#c89aa0",
      paddingVertical: 15,
      alignItems: "center",
      borderRadius: 10,
      marginTop: 20,
    },
    saveButtonText: {
      color: "#fff",
      fontSize: 16,
    },

    collapsedSubServiceContainer: {
        borderWidth: 1,
        borderColor: colors.darkGray,
        backgroundColor: colors.white, 
        
      },
      buttonStyle: {
        
        marginTop: 30
    },
    DeleteView:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems:'center',
      marginBottom:10
    },
    DeleteText:{
      color:colors.red,
      fontsFamily:fontsFamily.regular,
      fontSize:RFValue(12)
    },
    bottomSheetColor:{
    backgroundColor:colors.appBG
    }
  });
  
  export default styles;