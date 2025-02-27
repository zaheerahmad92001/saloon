import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Cloud from '../../assets/svgs/Cloud.svg'
import fontsFamily from '../../assets/fontsFamily';
import colors from '../../assets/colors';



const UploadImageComponent = () => {
  const handleUpload = () => {
    console.log('Upload Pressed');
    // Implement file picker or image picker here
  };

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Upload</Text>
      <TouchableOpacity style={styles.uploadBox} onPress={handleUpload}>
        <Cloud/>
        <Text style={styles.uploadText}>Upload Image/document</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 20,
    //marginTop:60
  },
  title: {
    fontSize: 12,
    fontWeight: fontsFamily.regular,
    marginBottom: 10,
    color: '#333',
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#7a7a7a',
    borderStyle: 'dashed',
    borderRadius: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  uploadText: {
    marginTop: 10,
    fontSize: 12,
    fontFamily:fontsFamily.regular,
    color: '#7a7a7a',
  },
});

export default UploadImageComponent;
