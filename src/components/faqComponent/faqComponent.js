import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import colors from '../../assets/colors';
import fontsFamily from '../../assets/fontsFamily';
import { LargeText, SmallText } from '../Typography';
import DownArrow from '../../assets/svgs/down-arrow-light-black.svg';
import UpArrow from '../../assets/svgs/up-arrow.svg';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { RFValue } from 'react-native-responsive-fontsize';

const FAQItem = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Pressable
          onPress={() => setIsOpen(!isOpen)}
          style={styles.questionContainer}>
            <LargeText text={question} style={styles.question}/>
          {isOpen ? (
            <UpArrow/>
          ) : (
            <DownArrow/>
          )}
        </Pressable>
      </View>
      {isOpen && <SmallText text={answer} style={styles.answer}/>}
    </View>
  );
};

const styles = StyleSheet.create({

  
  card: {
    marginTop:heightPercentageToDP(2),
    marginBottom:heightPercentageToDP(1),
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    textAlign:'left',
    fontWeight:'500',
    color:colors.appBlack
  },
  answer: {
    color: colors.lightBlack,
    fontFamily:fontsFamily.regular,
    fontWeight:'400',
    fontSize:RFValue(13),
  },
});

export default FAQItem;
