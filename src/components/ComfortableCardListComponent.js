import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ConstantUtils from '../utils/ConstantUtils';
import ComfortableCardComponent from './ComfortableCardComponent';

function ComfortableCardListComponent(props) {
  //console.log(`dataList in cardList ${JSON.stringify(props.dataList)}`);
  return (
    <SafeAreaView>
      <FlatList
        data={props.dataList}
        numColumns={1}
        keyExtractor={(item, index) => item.id}
        renderItem={dataItem => (
          <ComfortableCardComponent data={dataItem.item} />
        )}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.6}
        showDefaultLoadingIndicators={true}
      />
    </SafeAreaView>
  );
}

export default ComfortableCardListComponent;
