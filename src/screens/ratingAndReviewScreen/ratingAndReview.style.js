import { StyleSheet } from "react-native";
import colors from "../../assets/colors";
import fontsFamily from "../../assets/fontsFamily";
import { RFValue } from "react-native-responsive-fontsize";

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.appBG,
        flex: 1
    },
    totalReviews: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10
    },
    reviewText:{
        fontFamily:fontsFamily.bold,
        fontWeight:'500',
        fontSize:RFValue(12)

    },
    card: {
        backgroundColor: colors.appBG,
        paddingLeft: 20,
        paddingRight: 10,
        paddingBottom:10
    },
    divider:{
        width:'100%',
        marginTop:20,
        borderBottomColor:colors.gray,
        borderBottomWidth:0.7,

    },
    ratintTxt:{
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(12),
        fontWeight:'300',
        paddingVertical:5,
        color:colors.chatlistmessage
    },
    namedateView: {
        flexDirection: 'row',
        marginTop:5,
    },
    nameText:{
        color:colors.primary,
        fontWeight:'500',
    },
    dotText:{
        fontWeight:'500',
        alignItems:'center',
        textAlign:'center',
        fontFamily:fontsFamily.medium,
        color:colors.chatlistmessage
    },
    dateText:{
        color:colors.lightBlack,
        fontWeight:'400',
        fontFamily:fontsFamily.regular,
        fontSize:RFValue(12),
    },
    starContainer: {
        flexDirection: 'row',
        marginTop:10
    },
    starView: {
        padding: 4
    },
    mostRelevent:{
        color:colors.lightBlack,
        fontFamily:fontsFamily.regular,
        fontWeight:'400',
        fontSize:RFValue(12),
    }
});

export default style;