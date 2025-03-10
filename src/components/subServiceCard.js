import React from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../assets/fontsFamily';
import {Divider} from 'react-native-paper';
import colors from '../assets/colors';
import {SmallText} from './Typography';
import TextField from './textField/textField';

const SubServiceCard = props => {
  const {
    handleInputChange,
    item,
    currentIndex,
    openBottomSheet,
    isNewService = false,
    removeSubService,
  } = props;

  return (
    <View style={styles.subServiceDetails}>
      {!isNewService && <Divider style={styles.divicerView} /> }
      <View style={styles.subServiceHeader}>
      <SmallText
        text={isNewService ? `Sub Service ${currentIndex}` : 'Name'}
        style={styles.label}
      />
      {isNewService && (
        <Pressable onPress={() => removeSubService(item.id)}>
          <SmallText text={'Remove'} style={styles.removeText} />
        </Pressable>
      )}
      </View>
      <TextField
        style={styles.input}
        value={item.name}
        onChangeText={text => handleInputChange(item.id, 'name', text)}
      />

      <View style={styles.row}>
        <View style={styles.column}>
          <SmallText text={'Price'} style={styles.label} />
          <TextField
            style={styles.input}
            value={item.price}
            keyboardType="numeric"
            onChangeText={text => handleInputChange(item.id, 'price', text)}
          />
        </View>
        <View style={styles.column}>
          <SmallText text={'Estimated Duration'} style={styles.label} />
          <TextField
            style={styles.input}
            value={item.duration}
            onChangeText={text => handleInputChange(item.id, 'duration', text)}
          />
        </View>
      </View>
      {!isNewService && (
        <View style={styles.Assineerow}>
          <SmallText text={'Assigned Professionals'} style={styles.label} />
          <Pressable style={styles.assignButton} onPress={openBottomSheet}>
            <SmallText
              text={'+Assign Professionals'}
              style={styles.assignText}
            />
          </Pressable>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subServiceDetails: {
    marginTop: 3,
  },

  divicerView: {
    marginBottom: 10,
  },
  label: {
    fontSize: RFValue(11),
    fontFamily: fontsFamily.regular,
    marginBottom: 5,
  },
  input: {
    borderRadius: 8,
    backgroundColor: colors.inputGray,
    marginBottom: 10,
    color: colors.lightBlack,
    fontSize: RFValue(9),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    width: '48%',
  },
  Assineerow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  assignButton: {
    borderWidth: 0.7,
    borderRadius: 6,
    borderColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  assignText: {
    color: colors.primary,
    fontSize: RFValue(11),
  },
  removeText: {
    color: colors.error,
    fontSize: RFValue(11),
  },
  subServiceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SubServiceCard;
