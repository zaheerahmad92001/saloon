import React, {useRef, useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, View, Text} from 'react-native';
import styles from './contractScreen.Style';
import {Checkbox} from 'react-native-paper';
import colors from '../../assets/colors';
import Signature from 'react-native-signature-canvas';
import {AppButton} from '../../components/appButton';
import {MediumText, SmallText} from '../../components/Typography';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ContractScreen = ({navigation, route}) => {
  const [isChecked, setChecked] = useState(false);

  const signatureRef = useRef(null);
  const [signature, setSignature] = useState(null);

  const handleSignature = signatureData => {
    setSignature(signatureData);
  };

  const handleClear = () => {
    signatureRef.current.clearSignature();
    setSignature(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text style={styles.headerTitle}>Contract</Text>

          <Text style={styles.textbody}>
            Lorem ipsum dolor sit amet consectetur. Egestas dui in tellus morbi.
            Enim nisl lectus mattis laoreet id arcu. Luctus lectus diam iaculis
            aliquam mus morbi dui pharetra. Condimentum pretium at duis diam.
            Egestas eu ullamcorper eget viverra in risus. Amet non tincidunt
            feugiat posuere magna maecenas. Dui sed urna tempus ullamcorper
            nisl. Sapien tincidunt viverra viverra nisi velit. Ornare id tempus
            morbi fermentum quam lorem aenean ipsum. Eu turpis tellus ut non
            consectetur at et ultricies donec. Dictum tortor eu nam placerat
            amet quis facilisi scelerisque. Habitasse viverra elit massa eget
            est massa leo quam est. Interdum nibh iaculis scelerisque integer.
            Pellentesque tincidunt sed vestibulum enim ipsum. Ut nascetur
            blandit auctor venenatis eu. Tincidunt at 20% Commission. Turpis
            nulla a proin ut fusce laoreet. Montes curabitur nunc vel lorem
            pellentesque.
          </Text>

          <View style={styles.digitalSignatureLableView}>
            <MediumText
              text={'Digital Signature'}
              style={styles.signatureLable}
            />
            <Pressable style={styles.clearView} onPress={handleClear}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          </View>
          <View style={styles.SignatureView}>
            <Signature
              ref={signatureRef}
              onOK={() => console.log('signature Capture')}
              autoClear={false}
              clearText="Clear"
              confirmText="Save"
              webStyle={'.m-signature-pad--footer {display: none;}'}
            />
          </View>
          <SmallText text="Draw your signature here" style={styles.drawText} />
          <Pressable onPress={()=>setChecked(!isChecked)} style={styles.checkboxContainer}>
            <View style={{alignSelf: 'flex-start'}}>
              <MaterialIcons
                name={isChecked ? 'check-box' : 'check-box-outline-blank'}
                size={25}
                color={isChecked ? colors.primary : colors.lightBlack}
              />
            </View>
            <View style={styles.termViews}>
              <Text style={styles.termsText}>
                I agree to the anaqq{' '}
                <Text style={styles.privacyPolicyText}>Terms of Service</Text>{' '}
                and
              </Text>
              <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
            </View>
          </Pressable>

          
        </View>
        <AppButton
            title={'Submit'}
            disabled={!isChecked}
            style={styles.signUpButton}
            textstyle={styles.signUpText}
            onPress={()=>navigation.navigate('registrationInProcess',{actionName:'registerProcess'})}
          />
      </ScrollView>
    </SafeAreaView>
  );
};
export default ContractScreen;
