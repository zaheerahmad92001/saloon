import {View, Text, SafeAreaView, SectionList, Pressable} from 'react-native';
import React from 'react';
import Wallet from '../../../assets/svgs/wallet-minus.svg';
import AddSquare from '../../../assets/svgs/add-square.svg';
import UserIcon from '../../../assets/svgs/user-icon.svg';

import styles from './notifications.styles';
import Header from '../../../components/appHeader';
import {MediumText, SmallText} from '../../../components/Typography';
import {notificationData} from '../../../staticData';

const Notification = ({navigation, route}) => {
  const renderItem = ({item, index}) => {
    return (
      <Pressable 
      onPress={() =>
        navigation.navigate('notificationDetail', {
          item: item,
        })
      }
      style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          {index === 1 ? (
            <AddSquare />
          ) : index === 2 ? (
            <UserIcon />
          ) : (
            <Wallet />
          )}
        </View>

        <View style={{gap: 5}}>
          <MediumText text={item.heading} style={styles.titleHeading}/>
          <SmallText text={item.subHeading} style={styles.description} />
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Notifications"
        showBackButton={true}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.wrapper}>
        <View style={styles.notifyContainer}>
            <SectionList
              sections={notificationData}
              keyExtractor={(item, index) => item + index}
              renderItem={renderItem}
              renderSectionHeader={({section: {title}}) => (
                <MediumText text={title.toUpperCase()} style={styles.title} />
              )}
              stickySectionHeadersEnabled={false}
              showsVerticalScrollIndicator={false}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notification;
