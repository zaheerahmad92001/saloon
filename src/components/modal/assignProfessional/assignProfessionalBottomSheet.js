import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {FlatList} from 'react-native-gesture-handler';
import images from '../../../assets/images';
import colors from '../../../assets/colors';
import {AppButton} from '../../../components/appButton';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../../assets/fontsFamily';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';

const AssignProfessionalsModel = props => {
  const {onDone, onCancel, data , selectedIdsProp} = props;
  const [selectedIds, setSelectedIds] = useState([]);
  
  // handle pre-selection when bottom-sheet open
  useEffect(() => {
    setSelectedIds(selectedIdsProp); // Update when prop changes
  }, [selectedIdsProp]);

  const toggleSelection = id => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    );
  };
  const isSelected = id => selectedIds?.includes(id);
 
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Assign Professionals</Text>
      <Text style={styles.subText}>
        You can assign multiple professionals to a single service.
      </Text>
      <View style={{height: hp(52)}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              style={styles.listItem}
              onPress={() => toggleSelection(item.id)}>
              <MaterialIcons
                name={
                  isSelected(item.id) ? 'check-box' : 'check-box-outline-blank'
                }
                size={25}
                color={isSelected(item.id) ? colors.primary : colors.lightBlack}
              />
              <View style={styles.imageContainer}>
                <FastImage source={images.room} style={styles.profileImage} />
              </View>
              <Text style={styles.nameText}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>

      <AppButton
        onPress={() => onDone(selectedIds)}
        title="Done"
        style={styles.buttonStyle}
      />
      <AppButton
        onPress={() => onCancel()}
        title="Cancel"
        style={styles.cancelbuttonStyle}
        textstyle={styles.cancelbuttonTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appBG,
    marginHorizontal: wp(4),
  },
  headerTitle: {
    fontSize: RFValue(16),
    fontFamily: fontsFamily.bold,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: colors.lightBlack,
    marginBottom: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  profileImage: {
    width: null,
    height: null,
    flex: 1,
  },
  nameText: {
    fontSize: RFValue(12),
    fontFamily: fontsFamily.medium,
  },
  buttonStyle: {
    marginTop: 5,
  },

  cancelbuttonStyle: {
    borderWidth: 1,
    borderColor: colors.lighterPrimary,
    marginTop: hp(2),
    backgroundColor: colors.lighterPrimary,
  },
  cancelbuttonTextStyle: {
    color: colors.primary,
  },
  imageContainer: {
    width: 40,
    height: 40,
    overflow: 'hidden',
    borderRadius: 8,
    marginRight: 15,
    marginLeft: 15,
  },
});

export default AssignProfessionalsModel;
