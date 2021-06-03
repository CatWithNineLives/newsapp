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
        <View>
          <Image style={styles.image} source={{uri: props.data.imageUrl}} />
        </View>
        <View>
          <Text style={styles.createdAt}>{props.data.createdAt}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cardView: {
    height: height * 0.25,
    width: width * 0.45,
    borderRadius: 15,
    backgroundColor: '#ADD8E6',
    marginVertical: height * 0.005,
    marginHorizontal: width * 0.005,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  image: {
    width: width * 0.4,
    height: height * 0.18,
    borderRadius: 15,
  },
  createdAt: {
    fontFamily: 'Optima',
    fontSize: width * 0.03,
  },
});

export default CompactCardComponent;
