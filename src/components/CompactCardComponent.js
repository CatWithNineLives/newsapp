/**
 *  Display image and createdAt
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function CompactCardComponent(props) {
  //const data = props.dataList[0];
  return (
    <View style={styles.cardView}>
      <Text>Compact</Text>
      <Image style={styles.image} source={{uri: props.dataList.imageUrl}} />
      <Text>{props.dataList.createdAt}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {
    height: 300,
    width: 300,
    backgroundColor: 'pink',
  },

  image: {
    width: 250,
    height: 250,
  },
});

export default CompactCardComponent;
