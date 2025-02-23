import React, {useState} from 'react';
import {FlatList, View, SafeAreaView} from 'react-native';
import Header from '../../components/appHeader';
import Search from '../../components/search';
import ChatListCard from '../../components/chatlistCard/ChatListCard';
import {recentSearches} from '../../staticData';
import {LargeText} from '../../components/Typography';
import styles from './chatList.style';

const ChatList = ({navigation , route}) => {
  const [filteredSearches, setFilteredSearches] = useState(recentSearches);
  const [isInputActive, setIsInputActive] = useState(false);
  
  const handleNavigation=(item)=>{
  navigation.navigate('chat',{item})
  }

  const renderChatCard = ({item}) => {
    return (
      <ChatListCard item={item}
      onPress={() => handleNavigation(item)}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Chat'} showBackButton={false} />
      <View style={styles.contentWrapper}>
        <Search
          setFilteredSearches={setFilteredSearches}
          setIsInputActive={setIsInputActive}
          isSearch={true}
        />

        <LargeText text={'RECENTS'} style={styles.recentTextview} />

        <FlatList
          data={[...Array(10).keys()]}
          renderItem={renderChatCard}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 10}}
        />
      </View>
    </SafeAreaView>
  );
};
export default ChatList;
