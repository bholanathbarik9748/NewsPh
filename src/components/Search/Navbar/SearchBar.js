import {
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './SearchBarStyle';
import {
  MagnifyingGlassCircleIcon,
  XCircleIcon,
} from 'react-native-heroicons/solid';
import NoSearch from '../../../assets/image/noSearch.png';

// Api Functions
import {getSearchNews} from '../../../helper/ApiHandler';

// import Components
import NewsView from '../../Homepage/NewsView/NewsView';
import Spinner from '../../Homepage/Spinner/Spinner';

const SearchBar = ({navigation}) => {
  const [textInput, setTextInput] = useState('');
  const [Data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const inputTextHandler = text => {
    setTextInput(text);
  };

  const clearTextHandler = () => {
    setData({});
    setTextInput('');
  };

  // Api Handler
  const SearchNewsHandler = async () => {
    setIsLoading(true);
    setData({});
    const response = await getSearchNews(textInput);
    setData(response.data);
    setIsLoading(false);
  };

  return (
    <>
      <View className="bg-primary h-32">
        <View className="bg-white mx-2 h-10 rounded-3xl mt-16 justify-between flex-row">
          <TextInput
            onChangeText={inputTextHandler}
            value={textInput}
            placeholder="Search here"
            className="p-3 pl-3 text-start"
          />
          <View className="flex flex-row">
            <TouchableOpacity>
              <XCircleIcon
                onPress={clearTextHandler}
                style={styles.SearchIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MagnifyingGlassCircleIcon
                onPress={SearchNewsHandler}
                style={styles.SearchIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {!Data.articles && !isLoading && (
        <View className="justify-center items-center">
          <Image source={NoSearch} style={styles.NoSearchIcon} />
        </View>
      )}
      <ScrollView>
        {isLoading ? (
          <Spinner />
        ) : (
          Data?.articles?.map((ele, ind) => (
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

export default SearchBar;
