import React, { Component } from 'react';
import { Image } from 'react-native';

import { Button, Block, Text } from '../components';
import { theme } from '../constants';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigation } = this.props;

    return (
      <Block style={{ backgroundColor: theme.colors.black }}>
        <Block middle center>
          <Image
            style={{ width: 350, height: 100 }}
            source={require('../assets/images/hackflix.png')}
          />
        </Block>
        <Block margin={[0, theme.sizes.padding * 2]}>
          <Button gradient onPress={() => navigation.navigate('Login')}>
            <Text center semibold white>
              Login
            </Text>
          </Button>
        </Block>
      </Block>
    );
  }
}
