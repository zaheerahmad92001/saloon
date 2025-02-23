// import {
//   View,
//   Text,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import React, {useState} from 'react';
// import FAQItem from '../../../../components/faqComponent/faqComponent';
// import {faqs} from '../../../../staticData';
// import Header from '../../../../components/appHeader';
// import CustomerSupportImage from '../../assets/svgs/customerSupport.svg';
// import LinkedIn from '../../assets/svgs/linkedin.svg';
// import Youtube from '../../assets/svgs/youtube.svg';
// import Facebook from '../../assets/svgs/facebook.svg';
// import Insta from '../../assets/svgs/insta.svg';
// import SMS from '../../assets/svgs/sms.svg';
// import MsgIcon from '../../assets/svgs/msgIcon.svg';

// const CustomerSupport = ({navigation,route}) => {
//   const [selectedTab, setSelectedTab] = useState('FAQ'); // State to manage selected tab

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header title={'Customer Support'} showBackButton onBackPress={()=>navigation.goBack()} />
// <View style={styles.wrapper}>
  
//       {/* <View style={styles.tabContainer}>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             selectedTab === 'FAQ' && styles.activeTabButton,
//           ]}
//           onPress={() => setSelectedTab('FAQ')}>
//           <Text
//             style={[
//               styles.tabText,
//               selectedTab === 'FAQ' && styles.activeTabText,
//             ]}>
//             FAQ's
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[
//             styles.tabButton,
//             selectedTab === 'Contact' && styles.activeTabButton,
//           ]}
//           onPress={() => setSelectedTab('Contact')}>
//           <Text
//             style={[
//               styles.tabText,
//               selectedTab === 'Contact' && styles.activeTabText,
//             ]}>
//             Contact Us
//           </Text>
//         </TouchableOpacity>
//       </View> */}

//       {selectedTab === 'FAQ' ? (
//         <View>
//           <Text style={styles.heading}>Frequently Asked Questions</Text>
//           {faqs.map((faq, index) => (
//             <FAQItem key={index} question={faq.question} answer={faq.answer} />
//           ))}
//         </View>
//       ) : (
//         <View style={styles.contactContainer}>
//           {/* <Image source={images.room} style={styles.contactImage} /> */}
//           <CustomerSupportImage />
//           <View style={styles.contactDetails}>
//             <View style={styles.contactBox}>
//               <MsgIcon />
//               <Text style={styles.contactText}>+966 123 456 7890</Text>
//             </View>
//             <View style={styles.contactBox}>
//               <SMS />
//               <Text style={styles.contactText}> Support@anaqa.com</Text>
//             </View>
//           </View>
//           <Text style={styles.socialHeading}>Follow Us</Text>
//           <View style={styles.socialIcons}>
//             <TouchableOpacity>
//               <LinkedIn />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Youtube />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Facebook />
//             </TouchableOpacity>
//             <TouchableOpacity>
//               <Insta />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomerSupport;
