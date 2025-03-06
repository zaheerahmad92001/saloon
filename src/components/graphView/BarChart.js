/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import colors from '../../assets/colors';
import {SmallText, XlargeText} from '../Typography';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

const VerticalBarChart = (props) => {

 const{datasets} = props

  const [selectedBar, setSelectedBar] = useState(null);

  const [barIndex, setBarIndex] = useState(null);
  const maxValue = Math.max(...datasets);
  const lastIndex = datasets.length - 1;
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const weekDates = ['10', '11', '12', '13', '14', '15', '16'];

  const handleBarPress = (index, value) => {
    setSelectedBar(true);
    setBarIndex(index);
  };

  return (
    <View style={{padding: 0,}}>
      <View style={styles.weekDayView}>
        {weekDays.map((day, index) => (
          <View>
            <XlargeText text={weekDates[index]} style={styles.dateStyle} />
            <SmallText text={day} style={styles.dayStyle} />
          </View>
        ))}
      </View>

      <View style={styles.barContainer}>
        {datasets.map((value, index) => (
          <View key={index} style={styles.barInsideContent}>
            <Pressable onPress={() => handleBarPress(index, value)}>
              <View
                style={[
                  styles.innerContent,
                  {height: (value / maxValue) * 200},
                ]}>
                <SmallText text={`SAR ${value}`} style={styles.incomeStyle} />
              </View>
            </Pressable>
            {selectedBar && barIndex === index && (
              <View
                style={[
                  styles.overlay,
                  {
                    bottom: (value / maxValue) * 200 + 10,
                    left: barIndex === lastIndex ? -10 : 5,
                  },
                ]}>
                <SmallText
                text={`20 booking`}
                  style={styles.overlayContent}/>
              </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekDayView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateStyle: {
    textAlign: 'center',
    // width: 40,
  },
  dayStyle: {
    textAlign: 'center',
    width: 40,
    marginTop: hp(0.5),
    color: colors.lightBlack,
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 200,
    marginTop:hp(2.5),
  },
  barInsideContent: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  innerContent: {
    width: 40,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 5,
  },
  incomeStyle: {
    color: 'white',
    fontSize: RFValue(11),
    textAlign: 'center',
    fontWeight: 'normal',
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    width: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
  },
  overlayContent:{
        color: 'white',
        textAlign: 'center',
        fontSize:RFValue(11),
        fontWeight:'normal',
  }
});

export default function App() {
  const datasets = [20, 45, 28, 80, 99, 43, 60];

  return <VerticalBarChart datasets={datasets} />;
}
