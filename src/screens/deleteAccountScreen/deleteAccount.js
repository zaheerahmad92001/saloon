import {
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/appHeader';
import ReasonSelector from '../../components/reasonSelector/reasonSelector';
import {reasons} from '../../staticData';
import styles from './deleteAccount.style';
import RadioButton from '../../components/radioButton';
import { LargeText } from '../../components/Typography';

const DeleteAccount = ({navigation,route}) => {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleSelect = reason => {
    setSelectedReason(reason);
  };

  const handleDeleteAccount = () => {

  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Delete Account'} showBackButton  onBackPress={()=>navigation.goBack()}/>
      <View style = {styles.mainContainer}>
        <View style={styles.contentContainer}>
      <LargeText text={'Delete Account'}  style={styles.heading}/>
      <Text style={styles.description}>
        Are you sure you want to delete your account? This action is permanent
        and will erase all your personal information, booking history, and saved
        preferences
      </Text>
      <FlatList
        data={reasons}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <ReasonSelector
            label={item}
            selected={item === selectedReason}
            onSelect={handleSelect}
          />
        )}
      />
      <Pressable
        style={styles.deleteButton}
        onPress={handleDeleteAccount}
        disabled={!selectedReason} // Disable the button if no reason is selected
      >
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </Pressable>
      </View>
      </View>
      
    </SafeAreaView>
  );
};



export default DeleteAccount;
