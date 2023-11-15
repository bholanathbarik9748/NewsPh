import {Text, Image, TouchableOpacity, View} from 'react-native';
import {PublishTimeHandler} from './helper';
import React from 'react';
import styles from './NewsViewStyle';

const NewsView = ({
  urlToImage,
  title,
  description,
  publishedAt,
  Url,
  navigation,
}) => {
  const NoImage = 'https://startup.mp.gov.in/assets/img/img-not-found.png';
  const timeAgo = PublishTimeHandler(publishedAt);
  const limitDescription = description?.slice(0, 100);
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.newsCard}>
          <Image
            source={{uri: urlToImage || NoImage}}
            style={styles.newsImage}
          />
          <View style={styles.cardDown} className="bg-primary">
            <Text style={styles.newsTitle}>{title}</Text>
            <Text style={styles.newsPublish}>{timeAgo}</Text>
            <Text style={styles.newsDescription}>{limitDescription}....</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('NewsView', {webLink: Url})}>
              <Text style={styles.buttonText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default NewsView;
