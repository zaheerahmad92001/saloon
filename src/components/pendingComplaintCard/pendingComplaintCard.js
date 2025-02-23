import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../assets/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import fontsFamily from '../../assets/fontsFamily';

const PendingRequestCard = Data => {
  return (
    <View style={styles.card}>
      <View style={styles.complainView}>
        <Text style={styles.label}>Complaint Status</Text>
        <View style={styles.statusView}>
          <Text style={styles.value}>Pending</Text>
        </View>
      </View>
      <View style={styles.columnView}>
        <View style={styles.columnOneView}>
          <Text style={styles.label}>Request ID</Text>
          <Text style={styles.value}>#21506854</Text>
        </View>

        <View style={styles.columnOneView}>
          <Text style={styles.label}>Complaint Date</Text>
          <Text style={styles.value}>02 Feb 2024</Text>
        </View>
      </View>

      <View style={styles.columnView}>
        <View style={styles.columnOneView}>
          <Text style={styles.label}>Salon</Text>
          <Text style={styles.value}>ABS Salon</Text>
        </View>
        <View style={styles.columnOneView}>
          <Text style={styles.label}>Complain Type</Text>
          <Text style={styles.value}>Service</Text>
        </View>
      </View>

      <View style={styles.columnView}>
        <View style={styles.columnOneView}>
          <Text style={styles.label}>Service</Text>
          <Text style={styles.value}>Hair Cut</Text>
        </View>
      </View>
      <View style={styles.descriptionView}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>
          Lorem ipsum dolor sit amet consectetur. Vulputate mauris pharetra
          egvllus.Lorem ipsum dolor sit amet consectetur. Vulputate mauris
          pharetra egvllus.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  complainView: {
    flexDirection: 'row',
    backgroundColor: colors.lightGray,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  statusView: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 7,
    width: wp('24%'),
    alignItems: 'center',
  },
  columnView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 5,
    paddingLeft: 0,
  },
  columnOneView: {
    flex: 1,
  },
  label: {
    fontSize: RFValue(14),
    fontFamily: fontsFamily.medium,
    fontWeight: '600',
    color: '#000',
  },
  value: {
    fontSize: RFValue(12),
    color: '#555',
    fontFamily: fontsFamily.regular,
    marginTop: 2,
  },
  descriptionView: {
    marginTop: 0,
    marginLeft: 15,
    marginRight: 10,
    marginBottom: 20,
    paddingLeft: 0,
  },
});

export default PendingRequestCard;
