import { LineChart } from "react-native-chart-kit";
import colors from '../../assets/colors';
import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
const BezierGraphView = () => {
    const screenWidth = Dimensions.get("window").width - 40;
    return (
        <View style={{backgroundColor: "white", padding: 20 }}>

                <LineChart
                    data={{
                         labels: [],
                        datasets: [
                            {
                                data: [100, 500, 800, 300, 500, 1000],
                                color: (opacity = 1) => colors.primary, // Line color
                                strokeWidth: 2,
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width}
                    height={300}
                    yAxisLabel="$"
                    yAxisSuffix=""
                    yAxisInterval={1} 
                    chartConfig={{
                        backgroundGradientFrom: colors.white,
                        backgroundGradientTo: colors.white,
                        // backgroundColor: colors.appBlack,
                        // backgroundGradientFrom: colors.lightPrimary,
                        // backgroundGradientTo: colors.lightPrimary,
                        decimalPlaces: 0,
                        color: (opacity = 1) => colors.primary,
                        labelColor: (opacity = 0) => colors.appBlack,
                        style: {
                            //borderRadius: 16,
                            backgroundColor: colors.white
                        },
                        propsForDots: {
                            r: "5",
                            strokeWidth: "2",
                            stroke: colors.primary
                        },
                        propsForBackgroundLines: {
                            strokeWidth: 0 // ✅ Hides background grid lines
                        },
                        fillShadowGradient: colors.primary, // Dataset background color
                        fillShadowGradientOpacity: 0.4, // Adjust opacity for light fill
                    }}
                    bezier
                    style={{
                        width:'80%',
                        //marginVertical: 8,
                        //borderRadius: 16,
                        //backgroundColor: colors.white,
                          marginRight: 50, 
                          marginBottom:0
                        
                    }}
                />
            </View>
        
    );
}

const styles = StyleSheet.create({
    mainView: {

        // borderLeftWidth: 1,  // Left border
        // borderBottomWidth: 1, // Bottom border
        //borderColor: "#E0E0E0", // Light gray border color
        // paddingBottom: 10,
         paddingLeft: 10,
         
        // paddingBottom:0,
        // marginBottom: -10,
        elevation: 6,
    paddingTop:10,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 5, 
    overflow: "hidden"

    }
});
export default BezierGraphView;
