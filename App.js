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

function App() {
  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [offset, setOffset] = useState(1);
  const [error, setError] = useState(null);

  function toggleSwitch() {
    setIsSwitchEnabled(previousState => !previousState);
  }
  useEffect(() => {
    getNews(ConstantUtils.itemsPerRequest, offset)
      .then(newDataList => setDataList([...dataList, ...newDataList]))
      .catch(error => {
        setError(error);
      });
  }, [offset]);

  async function fetchMoreItems() {
    //console.log(`calling fetchMoreItems`);
    setOffset(prevOffset => prevOffset + ConstantUtils.itemsPerRequest);
  }

  function getOptionRowView() {
    return (
      <View style={styles.rowBox}>
        <Text>Comfortable</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isSwitchEnabled ? 'powderblue' : 'red'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isSwitchEnabled}
        />
        <Text>Compact</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewOption}>{getOptionRowView()}</View>
      <View style={styles.cardView}>
        <CardListComponent
          isSwitchEnabled={isSwitchEnabled}
          dataList={dataList}
          onEndReached={fetchMoreItems}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'red',
    borderWidth: 5,
    flex: 1,
    flexDirection: 'column',
  },
  rowBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  viewOption: {
    borderColor: 'blue',
    borderWidth: 5,
    flex: 1,
    backgroundColor: 'darkorange',
    flexDirection: 'row',
  },
  cardView: {
    borderColor: 'black',
    backgroundColor: 'green',
    borderWidth: 5,
    flex: 7,
    //flexDirection: 'row',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
});

export default App;
