import React, {useEffect, useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {getTopHeadlineNewsApi, getTopicSearchNews} from '../helper/ApiHandler';

// import Components
import Navbar from '../components/Homepage/Navbar/Navbar';
import NewsView from '../components/Homepage/NewsView/NewsView';
import CommonTopic from '../components/Homepage/CommonTopic/CommonTopic';
import Spinner from '../components/Homepage/Spinner/Spinner';

const HomeScreen = ({navigation}) => {
  const [newsData, setNewsData] = useState({});
  const [selectedTopic, setSelectedTopic] = useState('');

  // Api Handlers
  const fetchApi = async () => {
    const response = await getTopHeadlineNewsApi();
    setNewsData(response.data);
  };

  const topicApiHandler = async () => {
    setNewsData({});
    const response = await getTopicSearchNews(selectedTopic);
    setNewsData(response.data);
  };

  // Components Handler
  const TopicSelectHandler = text => {
    setSelectedTopic(text);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    topicApiHandler();
  }, [selectedTopic]);

  return (
    <>
      <Navbar navigation={navigation} />
      <ScrollView>
        <CommonTopic selectedTopic={TopicSelectHandler} />
        <Text className="mx-4 my-3 font-semibold">
          {selectedTopic || 'Top India news 🇮🇳'}
        </Text>
        {!newsData || !newsData.articles ? (
          <Spinner />
        ) : (
          newsData?.articles?.map((ele, ind) => (
            <NewsView
              key={ind}
              urlToImage={ele.urlToImage}
              title={ele.title}
              description={ele.description}
              publishedAt={ele.publishedAt}
              Url={ele.url}
              navigation={navigation}
            />
          ))
        )}
      </ScrollView>
    </>
  );
};

export default HomeScreen;
