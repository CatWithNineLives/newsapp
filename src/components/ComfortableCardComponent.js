/**
 *  Short : image, headline(2) and summary(3)
 *  Expanded : image, headline , summary, createdAt
 */

import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function ComfortableCardComponent(props) {
  const [isViewExpanded, setIsViewExpanded] = useState(false);

  function getExpandedView() {
    return (
      <TouchableHighlight onPress={toggleCardView} underlayColor={'#E0FFFF'}>
        <View style={styles.expandedCardView}>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.data.imageUrl}} />
            </View>
            <View style={styles.textContainer}>
              <View style={{marginBottom: height * 0.005}}>
                <Text style={styles.headline}>{props.data.headline}</Text>
              </View>
              <View style={{marginBottom: height * 0.005}}>
                <Text style={styles.summary}>{props.data.summary}</Text>
              </View>
              <View style={{marginBottom: height * 0.03}}>
                <Text style={styles.createdAt}>{props.data.createdAt}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  function toggleCardView() {
    setIsViewExpanded(prevState => !prevState);
  }
  function getCompressedView() {
    return (
      <TouchableHighlight onPress={toggleCardView} underlayColor={'#E0FFFF'}>
        <View style={styles.compressedCardView}>
          <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{uri: props.data.imageUrl}} />
            </View>
            <View style={styles.textContainer}>
              <View style={{marginBottom: height * 0.005}}>
                <Text numberOfLines={2} style={styles.headline}>
                  {props.data.headline}
                </Text>
              </View>
              <View style={{marginBottom: height * 0.03}}>
                <Text numberOfLines={3} style={styles.summary}>
                  {props.data.summary}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
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
    marginLeft: width * 0.03,
    marginTop: height * 0.03,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 3,
    marginTop: height * 0.03,
    marginLeft: width * 0.05,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginRight: 5,
  },
  headline: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    fontFamily: 'Optima',
  },
  summary: {
    fontSize: width * 0.04,
    fontFamily: 'Optima',
  },
  createdAt: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
    fontFamily: 'Optima',
  },
  compressedCardView: {
    height: 'auto',
    width: width * 0.95,
    borderRadius: 15,
    backgroundColor: '#ADD8E6',
    marginVertical: height * 0.008,
    marginHorizontal: width * 0.025,
  },
  expandedCardView: {
    height: 'auto',
    width: width * 0.95,
    borderRadius: 15,
    backgroundColor: '#ADD8E6',
    marginVertical: height * 0.008,
    marginHorizontal: width * 0.025,
    alignSelf: 'center',
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: height * 0.1,
    height: width * 0.2,
  },
});

export default ComfortableCardComponent;
