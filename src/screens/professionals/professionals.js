import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Alert, FlatList, SafeAreaView, Text, View} from 'react-native';
import Header from '../../components/appHeader';

import styles from './professionals.style';
import {MediumText} from '../../components/Typography';
import OverViewDropdown from '../../components/overviewDropdown/overviewDropdown';
import {filterList, mockData} from '../../staticData';
import {AppButton} from '../../components/appButton';
import StaticsProfessionalCard from '../../components/statisticsTab/staticsProfessionalCard';
import {useDispatch, useSelector} from 'react-redux';
import {professionals} from '../../redux/actions/professionalsAction';
import colors from '../../assets/colors';

const Professionals = ({navigation, route}) => {

  const [selectedValue, setSelectedValue] = useState(null);
  const dispatch = useDispatch();

  const limit = 10;
  const {professionalList,pagination, loading, error} = useSelector(state => state.professionals);
 const professionalsList = professionalList ?? [];

  useEffect(() => {
    const loadProfessionals = async () => {
     const response = await dispatch(professionals({page: 1, limit})).unwrap();
    };
    loadProfessionals();
  }, [dispatch]);


  const handNavigation = (item) => {
    navigation.navigate('singleProfessionalProfile',{item});
  };

  const loadMore = () => {
    if ( !loading && pagination.page < pagination.totalPages ) {
      dispatch(professionals({ page: pagination.page + 1, limit })).unwrap();
    }
  };

  const onRefresh = async () => {
      const response = await dispatch(professionals({page: 1, limit})).unwrap();
  };

  const renderItem = ({item, index}) => {
    return(
    <StaticsProfessionalCard 
    item={item}
    index={index}
    onClick={() => handNavigation(item)} />
   );
  };


  const renderFooter = () => {
    if (!pagination || !pagination.page || !loading) {
      return null;
    }
    if (pagination.page > 1 && loading) {
      return (
        <View style={styles.footerLoader}>
          <ActivityIndicator color={colors.error} size="small" />
        </View>
      );
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Header
        title={'Professionals'}
        showBackButton
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.sectionHeader}>
            <MediumText text={'Professionals'} style={styles.sectionTitle} />
            <OverViewDropdown
              data={filterList}
              value={selectedValue}
              onChange={item => setSelectedValue(item.value)}
              placeholder="Weekly"
            />
          </View>

          { pagination.page === 1 && loading &&
            <View style={styles.loaderStyle}>
                <ActivityIndicator color={colors.error} size={'small'}/>
            </View>
          }

          <FlatList
          refreshing={loading}
          onRefresh={onRefresh}
            data={professionalsList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
          />
          <AppButton
            title={'Add Professional'}
            onPress={() => navigation.navigate('addProfessional')}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Professionals;
