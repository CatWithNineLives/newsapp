import React, {useState} from 'react';
import {View} from 'react-native';
import CompactCardComponent from './CompactCardComponent';
import ComfortableCardComponent from './ComfortableCardComponent';
import ConstantUtils from '../utils/ConstantUtils';

function CardListComponent(props) {
  const cardType = props.isSwitchEnabled
    ? ConstantUtils.cardType.COMFORTABLE
    : ConstantUtils.cardType.COMPACT;
  console.log(`CardList ${JSON.stringify(props.dataList)}`);

  return (
    <View>
      {/*cardType === ConstantUtils.cardType.COMFORTABLE && (
        <ComfortableCardComponent dataList={props.dataList} />
      )*/}
      {cardType === ConstantUtils.cardType.COMPACT && (
        <CompactCardComponent dataList={ConstantUtils.data[0]} />
      )}
    </View>
  );
}
export default CardListComponent;
