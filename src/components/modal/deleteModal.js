import React from 'react';
import {View, StyleSheet} from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DeleteIcon from '../../assets/svgs/deleteIcon.svg';
import {MediumText, SmallText} from '../Typography';
import fontsFamily from '../../assets/fontsFamily';
import {AppButton} from '../appButton';
import colors from '../../assets/colors';

const DeleteModal = props => {
  const {handleDelete, handleCancel, isService = false, isDeleteRoute} = props;
  const text1 = isService
    ? 'Are you sure you want to'
    : isDeleteRoute
    ? 'Account Deleted'
    : 'Are you sure you want to';
  const text2 = isService
    ? 'delete this service?'
    : isDeleteRoute
    ? 'Your account has been deleted.'
    : 'delete?';
  const text3 = 'deleted';
  return (
    <View style={styles.container}>
      <DeleteIcon />
      <MediumText text={text1} style={styles.mediumText} />
      {!isDeleteRoute && <MediumText text={text2} style={styles.mediumText} />}

      {isDeleteRoute && (
        <View style={{marginTop:5}}>
          <SmallText text={text2} style={styles.smallText}/>
          <SmallText text={text3} style={styles.smallText}/>
        </View>
      )}
      {!isDeleteRoute && (
        <AppButton
          title={'Yes delete'}
          onPress={handleDelete}
          style={styles.buttonStyle}
        />
      )}
      <AppButton
        title={isDeleteRoute ? 'Close' : 'No Thanks'}
        onPress={handleCancel}
        style={[styles.buttonStyle, styles.cancelButton]}
        textstyle={styles.cancelText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediumText: {
    fontFamily: fontsFamily.Pmedium,
    marginTop: hp(1),
  },
  buttonStyle: {
    width: '100%',
    marginTop: hp(1.5),
  },
  cancelButton: {
    backgroundColor: colors.lighterPrimary,
    borderColor: colors.lighterPrimary,
    marginTop: hp(1.5),
  },
  cancelText: {
    color: colors.primary,
  },
  smallText:{
    color:colors.lightBlack,
    textAlign:'center',
  }
});
export default DeleteModal;
