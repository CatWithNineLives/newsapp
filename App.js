/**
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, Switch, View} from 'react-native';
import CardListComponent from './src/components/CardListComponent';

import {getNews} from './src/services/NewsService';
import ConstantUtils from './src/utils/ConstantUtils';

import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

function App() {
  const [isCompactTypeVisible, setIsCompactTypeVisible] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [isError, setIsError] = useState(false);

  function toggleSwitch() {
    setIsCompactTypeVisible(previousState => !previousState);
  }
  useEffect(() => {
    getNews(ConstantUtils.itemsPerRequest, offset)
      .then(newDataList => setDataList([...dataList, ...newDataList]))
      .catch(error => {
        setIsError(true);
      });
  }, [offset]);

  async function fetchMoreItems() {
    //console.log(`calling fetchMoreItems`);
    setOffset(prevOffset => prevOffset + ConstantUtils.itemsPerRequest);
  }

  function getErrorView() {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error encountered while fetching news, please try again later!
        </Text>
      </View>
    );
  }
  function getCardTypeToggleViewBox() {
    return (
      <View style={styles.rowBox}>
        <Text style={styles.cardType}>Comfortable</Text>
        <Switch
          trackColor={'powderblue'}
          thumbColor={'steelblue'}
          ios_backgroundColor="aliceblue"
          onValueChange={toggleSwitch}
          value={isCompactTypeVisible}
        />
        <Text style={styles.cardType}>Compact</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewOption}>{getCardTypeToggleViewBox()}</View>
      <View style={styles.cardView}>
        {!isError && (
          <CardListComponent
            isCompactTypeVisible={isCompactTypeVisible}
            dataList={dataList}
            onEndReached={fetchMoreItems}
          />
        )}
        {isError && getErrorView()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardType:{
    fontSize:20,
    fontFamily : 'Optima'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: height * 0.2,
    marginHorizontal : width*0.05,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    fontFamily : 'Optima'
  },
  rowBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: height * 0.05,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#1F7A8C',
  },
  viewOption: {
    flex: 1,
    backgroundColor: '#1F7A8C',
    flexDirection: 'row',
  },
  cardView: {
    backgroundColor: '#001B2E',
    flex: 7,
  },
});

export default App;
