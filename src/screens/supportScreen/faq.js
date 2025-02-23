import {Text, FlatList} from 'react-native';
import React from 'react';
import FAQItem from '../../components/faqComponent/faqComponent';
import {faqs} from '../../staticData';
import styles from './styles';
import { LargeText, XlargeText } from '../../components/Typography';

const Faq = () => {
  const renderItem = ({item}) => (
    <FAQItem question={item.question} answer={item.answer} />
  );

  return (
    <React.Fragment>
      <LargeText text={'Frequently Asked Questions'} style={styles.heading}/>
      <FlatList 
      data={faqs} 
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainerStyle}
      />
    </React.Fragment>
  );
};

export default Faq;
