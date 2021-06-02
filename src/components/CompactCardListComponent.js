import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ConstantUtils from '../utils/ConstantUtils';
import CompactCardComponent from './CompactCardComponent';

function CompactCardListComponent(props) {
  //console.log(`dataList in cardList ${JSON.stringify(props.dataList)}`);
  return (
    <SafeAreaView>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        data={props.dataList}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={dataItem => <CompactCardComponent data={dataItem.item} />}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={0.7}
        showDefaultLoadingIndicators={true}
      />
    </SafeAreaView>
  );
}

export default CompactCardListComponent;
