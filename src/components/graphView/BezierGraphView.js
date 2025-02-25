import { LineChart } from 'react-native-chart-kit';
import colors from '../../assets/colors';
import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { graphTabs } from '../../staticData';

const BezierGraphView = (props) => {
    const {activeTab} = props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];
    const monthsDataSet = [0, 100, 400, 200, 500, 300];
    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeksDataSet = [0, 50, 100, 250, 300, 400];

    const screenWidth = Dimensions.get('window').width;

    const [tooltip, setTooltip] = useState(null);

    const handleDataPointClick = ({ value, x, y }) => {
        setTooltip({ value, x:x, y:10  }); 
        setTimeout(() => setTooltip(null), 5000);
    };

    return (
        <View style={{ backgroundColor: 'white',position:'relative', paddingTop:0 }}>
            {tooltip && (
                <View style={[styles.tooltip, { top: tooltip.y, left: tooltip.x }]}>
                    <Text style={styles.tooltipText}>${tooltip.value}</Text>
                </View>
            )}

            <LineChart
                data={{
                    labels: activeTab === graphTabs.sales ? months : weeks,
                    datasets: [
                        {
                            data: activeTab=== graphTabs.sales ? monthsDataSet : weeksDataSet , 
                            color: (opacity = 1) => colors.primary,
                            strokeWidth: 2,
                        },
                    ],
                }}
                width={screenWidth}
                height={heightPercentageToDP(35)}
                yAxisLabel="$"
                yAxisSuffix=""
                yAxisInterval={2}
                chartConfig={{
                    backgroundGradientFrom: colors.white,
                    backgroundGradientTo: colors.white,
                    decimalPlaces: 0,
                    color: (opacity = 1) => colors.primary,
                    labelColor: (opacity = 1) => colors.appBlack,
                    propsForDots: {
                        r: '0',
                    },
                    propsForBackgroundLines: {
                        strokeWidth: 0,
                    },
                    fillShadowGradient: colors.primary,
                    fillShadowGradientOpacity: 0.4,
                }}
                bezier
                onDataPointClick={handleDataPointClick}
                style={{
                    width: '100%',
                    marginBottom: 0,
                    marginTop: 20,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    tooltip: {
        position: 'absolute',
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
    },
    tooltipText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default BezierGraphView;




// import { LineChart } from "react-native-chart-kit";
// import colors from "../../assets/colors";
// import React, { useState } from "react";
// import { View, Dimensions, Text, StyleSheet } from "react-native";
// import { heightPercentageToDP } from "react-native-responsive-screen";

// const BezierGraphView = () => {
//     const screenWidth = Dimensions.get("window").width;

//     // State to handle tooltip visibility
//     const [tooltip, setTooltip] = useState(null);

//     const handleDataPointClick = ({ value, x, y }) => {
//         setTooltip({ value, x: x - 25, y: y - 35 }); // Adjust tooltip position

//         // Remove tooltip after 2 seconds
//         setTimeout(() => setTooltip(null), 2000);
//     };

//     return (
//         <View style={{ backgroundColor: "white", position: "relative",}}>
//             {/* Tooltip - Shows when clicking on any point */}
//             {tooltip && (
//                 <View style={[styles.tooltip, { top: 20, left: 20 }]}>
//                     <Text style={styles.tooltipText}>${tooltip.value}</Text>
//                 </View>
//             )}

//             <LineChart
//                 data={{
//                     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","July"], // X-axis labels
//                     datasets: [
//                         {
//                             data: [0,100, 400, 200, 500, 300], // Y-axis values
//                             color: (opacity = 1) => colors.primary, // Line color
//                             strokeWidth: 2,
//                         },
//                     ],
//                     legend: ["Rainy Days"]
//                 }}
//                 width={screenWidth} // Adjust width for padding
//                 height={heightPercentageToDP(35)}
//                 yAxisLabel="$"
//                 yAxisSuffix=""
//                 yAxisInterval={2}
//                 chartConfig={{
//                     backgroundGradientFrom: colors.white,
//                     backgroundGradientTo: colors.white,
//                     decimalPlaces: 0,
//                     color: (opacity = 1) => colors.primary,
//                     labelColor: (opacity = 1) => colors.appBlack,
//                     propsForDots: {
//                         r: "5", // Hide default dots
//                     },
//                     propsForBackgroundLines: {
//                         strokeWidth: 0, // ✅ Hide background grid lines
//                     },
//                     fillShadowGradient: colors.primary,
//                     fillShadowGradientOpacity: 0.4,
//                 }}
//                 bezier
//                 onDataPointClick={handleDataPointClick}
//                 style={{
//                     width: "100%",
//                     marginBottom: 0,
//                     marginTop:20,
//                     backgroundColor:'red',
//                 }}
//             />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     tooltip: {
//         position: "absolute",
//         backgroundColor: "black",
//         padding: 5,
//         borderRadius: 5,
//         alignItems: "center",
//     },
//     tooltipText: {
//         color: "white",
//         fontSize: 12,
//         fontWeight: "bold",
//     },
// });

// export default BezierGraphView;
