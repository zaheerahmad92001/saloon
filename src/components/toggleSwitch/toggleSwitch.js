import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Animated, StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MediumText} from '../Typography';
import {RFValue} from 'react-native-responsive-fontsize';

const ToggleSwitch = ({label, isEnabled, onToggle}) => {
  const [toggleAnim] = useState(new Animated.Value(isEnabled ? 1 : 0));

  // 💡 Add this useEffect to sync animation when isEnabled changes from parent
  useEffect(() => {
    Animated.timing(toggleAnim, {
      toValue: isEnabled ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isEnabled]);

  const handleToggle = () => {
    onToggle(); // Triggers parent toggle logic
  };

  const thumbPosition = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 20],
  });

  const trackColor = toggleAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#e4e4e4', colors.primary],
  });

  return (
    <View style={styles.container}>
      <MediumText text={label} style={styles.label} />
      <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
        <Animated.View style={[styles.track, {backgroundColor: trackColor}]}>
          <Animated.View
            style={[styles.thumb, {transform: [{translateX: thumbPosition}]}]}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: hp(1.8),
    paddingHorizontal: 15,
    backgroundColor: colors.inputGray,
    borderRadius: 8,
    marginVertical: 8,
  },
  label: {
    color: colors.lightBlack,
    fontFamily: fontsFamily.medium,
    fontSize: RFValue(14),
    fontWeight: '500',
    marginLeft: 5,
  },
  track: {
    width: 45,
    height: 25,
    borderRadius: 20,
    justifyContent: 'center',
    position: 'relative',
    padding: 2,
  },
  thumb: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
    borderRadius: 18 / 2,
  },
});

export default ToggleSwitch;


// import React, {useState} from 'react';
// import {View, Switch, StyleSheet, TouchableOpacity, Animated} from 'react-native';
// import colors from '../../assets/colors';
// import fontsFamily from '../../assets/fontsFamily';
// import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { MediumText } from '../Typography';
// import { RFValue } from 'react-native-responsive-fontsize';

// const ToggleSwitch = ({label, isEnabled, onToggle}) => {
//   console.log('isEnabled',isEnabled)
//   const [toggleAnim] = useState(new Animated.Value(isEnabled ? 1 : 0));

//   const handleToggle = () => {
//     Animated.timing(toggleAnim, {
//       toValue: isEnabled ? 0 : 1,
//       duration: 200,
//       useNativeDriver: false,
//     }).start();
//     onToggle();
//   };

//   const thumbPosition = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: [2, 20],
//   });

//   const trackColor = toggleAnim.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['#e4e4e4', colors.primary],
//   });

//   return (
//     <View style={styles.container}>
//       <MediumText text={label} style={styles.label}/>
//       <TouchableOpacity onPress={handleToggle} activeOpacity={0.7}>
//         <Animated.View style={[styles.track, {backgroundColor: trackColor}]}>
//           <Animated.View
//             style={[styles.thumb, {transform: [{translateX: thumbPosition}]}]}
//           />
//         </Animated.View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//      paddingVertical:hp(1.8),
//     paddingHorizontal: 15,
//     backgroundColor: colors.inputGray,
//     borderRadius: 8,
//     marginVertical: 8,
//   },
//   label: {
//     color: colors.lightBlack,
//     fontFamily: fontsFamily.medium,
//     fontSize:RFValue(14),
//     fontWeight:'500',
//     marginLeft:5
//   },
//   track: {
//     width: 45,
//     height: 25,
//     borderRadius: 20,
//     justifyContent: 'center',
//     position: 'relative',
//     padding: 2,
//   },
//   thumb: {
//     width: 20,
//     height: 20,
//     backgroundColor: '#fff',
//     borderRadius: 18 / 2,
//   },
// });

// export default ToggleSwitch;
