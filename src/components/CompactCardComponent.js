/**
 *  Display image and createdAt
 */

import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

function CompactCardComponent(props) {
  //console.log(`imageUrl inside component ${props.data.imageUrl}`);
  return (
    <View style={styles.cardView}>
      <View style={styles.cardContainer}>
        <Image style={styles.image} source={{uri: props.data.imageUrl}} />
        <Text>{props.data.createdAt}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {
    height: height * 0.25,
    width: width * 0.45,
    borderRadius: 15,
    backgroundColor: 'pink',
    marginVertical: 10,
    marginHorizontal: 3,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: height * 0.15,
    height: width * 0.4,
  },
});

export default CompactCardComponent;
