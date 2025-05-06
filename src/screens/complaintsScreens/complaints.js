import React, {useEffect} from 'react';
import {View, Text, Pressable, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './complaints.styles';
import Header from '../../components/appHeader';
import {complaints, requestComplaintEnum} from '../../staticData';
import {AppButton} from '../../components/appButton';
import {useDispatch, useSelector} from 'react-redux';
import {fetch_request_and_complaint_count_by_type} from '../../redux/actions/requestComplaintAction';

const allowedKeys = ['Pending', 'Resolved'];

const ComplaintsRequestScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {complaints, loading} = useSelector(state => state.requestAndComplaint);

  useEffect(() => {
    const fetchRequestCount = async () => {
      dispatch(
        fetch_request_and_complaint_count_by_type(requestComplaintEnum.request),
      ).unwrap();
    };
    fetchRequestCount();
  }, [dispatch]);

  const handleOnPress = item => {
    navigation.navigate('complaintDetail', {scene: item,type:requestComplaintEnum.complaints});
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={'Complaints'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      {loading ? (
        <View style={styles.loaderView}>
          <ActivityIndicator color={'red'} size={'small'} />
        </View>
      ) : (
        <View style={styles.wraper}>
          <View style={styles.contentContainer}>
            <View style={styles.rowContainer}>
              {Object.entries(complaints)
                ?.filter(([status]) => allowedKeys.includes(status))
                .map(([status, count], index) => {
                  return (
                    <Pressable
                      onPress={() => handleOnPress(status)}
                      style={styles.box}>
                      <Text style={styles.statusText}>{status}</Text>
                      <View style={styles.innerRoundedBox}>
                        <Text style={styles.innerTextValue}>{count}</Text>
                      </View>
                    </Pressable>
                  );
                })}
            </View>
            <AppButton
              onPress={() => navigation.navigate('addComplaint')}
              title={'Add Complaints'}
              style={styles.button}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default ComplaintsRequestScreen;
