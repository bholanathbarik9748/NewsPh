// import Packages
import axios from 'axios';

// import Env Files
import {GOOGLE_NEWS_API} from '@env';

export const getTopHeadlineNewsApi = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${GOOGLE_NEWS_API}`,
  );
  return response;
};

export const getTopicSearchNews = async topic => {
  if (topic === 'Top India') {
    topic = 'india';
  }

  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${topic}&apiKey=${GOOGLE_NEWS_API}`,
  );
  return response;
};

export const getSearchNews = async SearchText => {
  const response = await axios.get(
    `https://newsapi.org/v2/everything?q=${SearchText}&apiKey=${GOOGLE_NEWS_API}`,
  );
  return response;
};
