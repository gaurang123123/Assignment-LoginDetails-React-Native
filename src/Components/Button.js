import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({bgcolor, btnLabel, textColor}) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgcolor,
        borderRadius: 100,
        alignItems: 'center',
      }}>
      <Text style={{color: textColor, fontSize: 22, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
