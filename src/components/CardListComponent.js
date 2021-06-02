import React, {useState} from 'react';
import {View} from 'react-native';
import CompactCardListComponent from './CompactCardListComponent';
import ComfortableCardListComponent from './ComfortableCardListComponent';
import ConstantUtils from '../utils/ConstantUtils';

function CardListComponent(props) {
  const cardType = props.isCompactTypeVisible
    ? ConstantUtils.cardType.COMPACT
    : ConstantUtils.cardType.COMFORTABLE;
  //console.log(`CardList ${JSON.stringify(props.dataList)}`);

  return (
    <View>
      {cardType === ConstantUtils.cardType.COMFORTABLE && (
        <ComfortableCardListComponent
          dataList={props.dataList}
          onEndReached={props.onEndReached}
        />
      )}
      {cardType === ConstantUtils.cardType.COMPACT && (
        <CompactCardListComponent
          dataList={props.dataList}
          onEndReached={props.onEndReached}
        />
      )}
    </View>
  );
}
export default CardListComponent;
