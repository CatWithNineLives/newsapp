/**
 *  Short : image, headline(2) and summary(3)
 *  Expanded : image, headline , summary, createdAt
 */

import React from 'react';
import {View, Text} from 'react-native';

function ComfortableCardComponent(props) {
  return (
    <View>
      <Text>Comfortable</Text>
      <Text>{props.dataList}</Text>
    </View>
  );
}

export default ComfortableCardComponent;
