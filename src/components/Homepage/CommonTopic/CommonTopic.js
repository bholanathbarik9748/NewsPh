import React, {useEffect, useState} from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';

// import Topic Data
import {Topic} from '../../../assets/Data/Topics';

const CommonTopic = ({selectedTopic}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const TopicHandler = (ind, text) => {
    setActiveIndex(ind);
    selectedTopic(text);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4 mx-3">
      <View className="flex flex-row my-3">
        {Topic &&
          Topic?.map((ele, ind) => (
            <TouchableOpacity
              key={ind}
              className={`${
                activeIndex === ind ? 'bg-secondary' : 'bg-primary'
              } rounded-lg mr-2`}
              onPress={() => TopicHandler(ind, ele)}>
              <Text
                className={`${
                  activeIndex === ind ? 'text-black' : 'text-white'
                } px-3 py-2 font-serif font-bold`}>
                {ele}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
};

export default CommonTopic;
