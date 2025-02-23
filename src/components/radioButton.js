import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import colors from '../assets/colors';

const RadioButton = props => {
  const {options} = props;

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      {options?.map((option, index) => {
        const isSelected = selectedOption?.key === option.key;
        return (
          <Pressable
            key={index}
            style={styles.radioOption}
            onPress={() => handleSelect(option)}>
            <View
              style={[
                styles.circle,
                {
                  borderColor:
                  isSelected
                      ? colors.primary
                      : colors.gray,
                },
              ]}>
              {isSelected && (
                <View style={styles.checkedCircle} />
              )}
            </View>
            <Text style={styles.optionText}>{option.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
export default RadioButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 25/2,
    borderWidth: 2,
    borderColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  checkedCircle: {
    width: 12.5,
    height: 12.5,
    borderRadius: 12.5/2,
    backgroundColor: colors.primary,
    // backgroundColor:colors.gray,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginRight: 20,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
