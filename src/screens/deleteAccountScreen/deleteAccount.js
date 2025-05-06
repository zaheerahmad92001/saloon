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
import {reasons, settingsEnum} from '../../staticData';
import styles from './deleteAccount.style';
import { LargeText } from '../../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addSettingsByType } from '../../redux/actions/settingsAction';

const DeleteAccount = ({navigation,route}) => {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth);
  const {loading, inProgress } = useSelector(state => state.settings);
  const salonId = user?.id;

  const [selectedReason, setSelectedReason] = useState(null);

  const handleSelect = reason => {
    setSelectedReason(reason);
  };

  const handleDeleteAccount = async () => {
  //  navigation.navigate('verifyIdentity',{isDeleteRoute:true})
  let payload={
    type:settingsEnum.DeleteAccount,
    reason:selectedReason,
    salonId:salonId,
  };
//  const response = await dispatch(addSettingsByType(payload)).unwrap();

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
        disabled={!selectedReason} 
      >
        <Text style={styles.deleteButtonText}>Delete Account</Text>
      </Pressable>
      </View>
      </View>
      
    </SafeAreaView>
  );
};



export default DeleteAccount;
