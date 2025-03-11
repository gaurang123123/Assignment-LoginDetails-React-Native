import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function DisplayField({ upperLabel, labelValue }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{upperLabel}</Text>
      <View style={styles.fieldContainer}>
        <Text style={styles.value}>{labelValue}</Text>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: hp('1.5%'),
  },
  label: {
    fontSize: wp('2.7%'),
    color: '#555', // Grey text for label
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
  },
  fieldContainer: {
    width: '100%',
    backgroundColor: '#FFFFFF', // White inner box
    borderRadius: 19, // Oval Shape
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('4%'),
    alignItems: 'center',
    shadowColor: '#000', // Soft shadow for box outline
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android shadow effect
  },
  value: {
    fontSize: wp('3%'),
    color: '#555', // Grey text for better readability
    fontWeight: '500',
    // textAlign: 'center',
  },
});
