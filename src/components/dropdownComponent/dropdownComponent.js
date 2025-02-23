import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Importing Feather icons
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import {RFValue} from 'react-native-responsive-fontsize';

const DropdownComponent = ({
  label = 'Select an option',
  options = [],
  onSelect = () => {},
}) => {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(label);

  const handleSelect = option => {
    setSelectedValue(option);
    onSelect(option);
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={() => setOpen(!open)}>
        <Text style={styles.headerText}>{selectedValue}</Text>
        <Icon
          name={open ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={colors.lightBlack}
          style={styles.icon}
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdownBody}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={styles.option}
              onPress={() => handleSelect(option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    alignSelf: 'center',
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: colors.inputGray,
  },
  headerText: {
    fontSize: RFValue(14),
    color: colors.lightBlack,
    fontFamily: fontsFamily.regular,
  },
  icon: {
    marginLeft: 10,
  },
  dropdownBody: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderTopWidth: 0,
    backgroundColor: colors.inputGray,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.regular,
    color: colors.lightBlack,
  },
});
