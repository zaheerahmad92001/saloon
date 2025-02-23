import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import CustomerSupportImage from '../../assets/svgs/customerSupport.svg';
import LinkedIn from '../../assets/svgs/linkedin.svg';
import Youtube from '../../assets/svgs/youtube.svg';
import Facebook from '../../assets/svgs/facebook.svg';
import Insta from '../../assets/svgs/insta.svg';
import SMS from '../../assets/svgs/sms.svg';
import MsgIcon from '../../assets/svgs/msgIcon.svg';
import styles from './styles';
import { LargeText, MediumText } from '../../components/Typography';

const CustomerSupport = ({navigation,route}) => {

  return (       
        <View style={styles.contactContainer}>
          <CustomerSupportImage />
          <View style={styles.contactDetails}>
            <View style={styles.contactBox}>
              <MsgIcon />
              <MediumText text={'+966 123 456 7890'} style={styles.contactText} />
            </View>
            <View style={styles.contactBox}>
              <SMS />
              <MediumText text={'Support@anaqa.com'} style={styles.contactText} />
            </View>
          </View>

          <LargeText text={'Follow Us'} style={styles.socialHeading} />
          
          <View style={styles.socialIcons}>
            <TouchableOpacity>
              <LinkedIn />
            </TouchableOpacity>
            <TouchableOpacity>
              <Youtube />
            </TouchableOpacity>
            <TouchableOpacity>
              <Facebook />
            </TouchableOpacity>
            <TouchableOpacity>
              <Insta />
            </TouchableOpacity>
          </View>
        </View>
  );
};

export default CustomerSupport;
