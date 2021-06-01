/**
 *  Short : image, headline(2) and summary(3)
 *  Expanded : image, headline , summary, createdAt
 */

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function ComfortableCardComponent(props) {
  const [isViewExpanded, setIsViewExpanded] = useState(true);

  function getExpandedView() {
    return (
      <View style={styles.expandedCardView}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.data.imageUrl}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headline}>{props.data.headline}</Text>
            <Text style={styles.summary}>{props.data.summary}</Text>
            <Text style={styles.createdAt}>{props.data.createdAt}</Text>
          </View>
        </View>
      </View>
    );
  }

  function getCompressedView() {
    return (
      <View style={styles.compressedCardView}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: props.data.imageUrl}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headline}>{props.data.headline}</Text>
            <Text style={styles.summary}>{props.data.summary}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View>
      {isViewExpanded && getExpandedView()}
      {!isViewExpanded && getCompressedView()}
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Optima',
  },
  summary: {
    fontSize: 15,
    fontFamily: 'Optima',
  },
  createdAt: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Optima',
  },
  compressedCardView: {
    height: height * 0.25,
    width: width * 0.9,
    borderRadius: 15,
    backgroundColor: 'pink',
    marginVertical: 10,
    marginHorizontal: 12,
  },
  expandedCardView: {
    height: height * 0.45,
    width: width * 0.9,
    borderRadius: 15,
    backgroundColor: 'pink',
    marginVertical: 10,
    marginHorizontal: 12,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: height * 0.1,
    height: width * 0.2,
  },
});

export default ComfortableCardComponent;
