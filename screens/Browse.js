import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { Card, Badge, Button, Block, Text } from '../components';
import { theme, mocks } from '../constants';
import { movieContainsGenre, getGenreId } from '../utils';

const { width, height } = Dimensions.get('window');

const originalUrl = 'https://image.tmdb.org/t/p';

const mapMovies = (movies = []) => {
  console.log(movies);
  return movies.map(movie => ({
    ...movie,
    poster_path: `${originalUrl}/w500/${movie.poster_path}`
  }));
};

export default class Browse extends Component {
  state = {
    active: 'All',
    genres: [],
    movies: [],
    filteredMovies: []
  };

  componentDidMount() {
    // Fetch movies and put it in the state
    // Fetch genres and add it in the state
  }

  handleTab = tab => {
    // Filter movies per genres when someone changes tab `hint`
    // movieContainsGenre && getGenreId might be helpful
    // this.setState({ active: tab, filteredMovies });
  };

  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text size={16} medium gray={!isActive} secondary={isActive}>
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const tabs = ['All', 'Action', 'Drama', 'Thriller'];

    return (
      <Block style={{ backgroundColor: theme.colors.black }}>
        <Block flex={false} row center space="between" style={styles.header}>
          <Text h1 bold white>
            Browse
          </Text>
          <Button
            onPress={() => {
              console.log('navigation to the Settings screen');
              // navigation to the Settings screen then build the Settings screen
            }}
          >
            <Image
              source={{
                uri: 'https://randomuser.me/api/portraits/women/48.jpg'
              }}
              style={styles.avatar}
            />
          </Button>
        </Block>

        <Block flex={false} row style={styles.tabs}>
          {tabs.map(tab => this.renderTab(tab))}
        </Block>
        <FlatList
          style={{
            backgroundColor: 'rgba(0,0,0,0.3)'
          }}
          data={[]}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: movie }) => {
            return (
              <View
                style={{
                  height: height * 0.8,
                  paddingTop: 10,
                  flex: 1,
                  alignItems: 'center'
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    // Navigate to the movie detail screen
                    // You need to build this one
                  }}
                >
                  <Text>Display the movie poster here in an Image</Text>
                </TouchableHighlight>
              </View>
            );
          }}
        />
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  genres: {
    flexWrap: 'wrap',
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  genre: {
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
    maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
  }
});
