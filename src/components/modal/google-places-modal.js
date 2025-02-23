import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { View, Modal, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import the icon library
import colors from '../../assets/colors';
import GooglePlacesAutoComplete from '../../components/google-places-auto-complete';

const GooglePlacesModal = forwardRef((props,ref) => {
    const {isVisible, toggleModal , setLocation} = props;

    const [visible, setVisible] = useState(false);
      useImperativeHandle(ref, () => ({
        open: () => setVisible(true),
        close: () => setVisible(false),
      }));

  return (

      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={()=>setVisible(false)}
      >
        <SafeAreaView style={{flex:1}}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={()=>setVisible(false)} style={styles.closeButton}>
            <Icon name="close" size={30} color={colors.appBlack} />
          </TouchableOpacity>
          <GooglePlacesAutoComplete
          onItemSelect={item =>
            setLocation(item.name)
            // console.log('Selected item:', item)
          }
          />

        </View>
        </SafeAreaView>
      </Modal>
  );
});

const styles = StyleSheet.create({
  
  modalContainer: {
    flex: 1,
    paddingHorizontal:20,
    backgroundColor: colors.white,
  },
  closeButton: {
    marginBottom: 20, 
    alignSelf: 'flex-end',
  },
  modalText: {
    color: '#fff',
    fontSize: 24,
  },
});

export default GooglePlacesModal;