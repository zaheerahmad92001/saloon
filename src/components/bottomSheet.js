import React, { useCallback } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { TouchableWithoutFeedback, View, Text, Pressable, StyleSheet } from 'react-native';
import colors from '../assets/colors';
import { MediumText } from './Typography';
import Close from '../assets/svgs/close.svg';

export const BottomSheet = (props) => {
  const {
    children,
    refRBSheet,
    onClose,
    height,
    isModal,
    scrollEnabled,
    disableDynamicSizing,
    title,
    style,
    sheetModalStyle,
    removeSheetScrolllView=false,
  } = props;

  const renderBackdrop = useCallback(
    (props) => (
      <>
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
        >
          {isModal && (
            <TouchableWithoutFeedback onPress={onDismiss}>
              <View style={{ flex: 1, backgroundColor: 'transparent' }} />
            </TouchableWithoutFeedback>
          )}
        </BottomSheetBackdrop>
      </>
    ),
    []
  );

  const onDismiss = () => {
    if (typeof onClose === 'function') {
      onClose();
    }
  };

  return (
    <BottomSheetModal
      ref={refRBSheet}
      snapPoints={[height]}
      enableDynamicSizing={disableDynamicSizing ? false : true}
      keyboardBlurBehavior="restore"
      enableDismissOnClose
      backdropComponent={renderBackdrop}
      backgroundStyle={[styles.modalStyle , sheetModalStyle]}
      onDismiss={onDismiss}
      waitFor={refRBSheet} // Helps prevent gesture conflicts
      simultaneousHandlers={refRBSheet}
    >
      {Boolean(title) && (
       <Pressable onPress={onClose} style={styles.header}>
         <MediumText text={title} />
       <Close />
     </Pressable>
      )}
     { removeSheetScrolllView ?
      <View style={{ minHeight: height }}>{children}</View>
      :
      <BottomSheetScrollView
      style={[styles.sheetContainer, style]}
        nestedScrollEnabled={false}
        scrollEnabled={scrollEnabled ? true : false}>
        <View style={{ minHeight: height }}>{children}</View>
      </BottomSheetScrollView>
      }
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    paddingBottom:hp(1),
    marginHorizontal:20,
  },
  sheetContainer:{
    paddingHorizontal:20, 
    backgroundColor:colors.white
  },
  modalStyle: {
    backgroundColor: colors.white,
  },
})