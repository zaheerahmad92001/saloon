import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../../assets/colors';

const ModalComponent = forwardRef(({onClose , children ,style }, ref) => {
  
  const [visible, setVisible] = useState(false);
  useImperativeHandle(ref, () => ({
    open: () => setVisible(true),
    close: () => setVisible(false),
  }));

  return (
    <Modal
      visible={visible}
      transparent={true} // Important for background transparency
      animationType="fade"
      onRequestClose={()=>setVisible(false)} // Calls onClose when back button is pressed on Android
    >
      <TouchableWithoutFeedback onPress={()=>setVisible(false)}>
      <View style={styles.overlay}>
        <View style={[styles.modalContent,style]}>
          {children}
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
});

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  modalContent: {
    backgroundColor: colors.appBG,
    borderRadius: 10,
    width:'90%',
    padding: 20,
    alignSelf: 'center',
  },
});

export default ModalComponent;
