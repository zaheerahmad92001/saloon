import { LineChart } from 'react-native-chart-kit';
import colors from '../../assets/colors';
import React, { useState } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { graphTabs } from '../../staticData';
import { SmallText } from '../Typography';

const BezierGraphView = (props) => {
    const {activeTab} = props;
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'];
    const monthsDataSet = [0, 100, 400, 200, 500, 300];
    const lastIndex = monthsDataSet.length - 1
    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const weeksDataSet = [0, 50, 100, 250, 300, 400];

    const screenWidth = Dimensions.get('window').width;

    const [tooltip, setTooltip] = useState(null);

    const handleDataPointClick = ({index, value, x, y }) => {
        const isLastPoint = index === lastIndex;
        setTooltip({ value, x:isLastPoint ? x-60 : x , y:y  }); 
        setTimeout(() => setTooltip(null), 5000);
    };

    return (
        <View style={{ backgroundColor:colors.white,position:'relative', paddingTop:0, }}>
            {tooltip && (
                <View style={[styles.tooltip, { top: tooltip.y, left: tooltip.x }]}>
                    <Text style={styles.tooltipText}>{'17 bookings'}</Text>
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
        zIndex:10,
    },
    tooltipText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default BezierGraphView;
