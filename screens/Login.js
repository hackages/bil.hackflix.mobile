import React, { Component } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native';

import { Button, Block, Input, Text } from '../components';
import { theme } from '../constants';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false
  };

  handleLogin() {
    // Use Formik for forms manipulation and use Yup for form validation
    // Then navigate to the Browse screen when the
    Keyboard.dismiss();
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
        <Block padding={[0, theme.sizes.base * 2]}>
          <Text h1 bold white>
            Login
          </Text>
          <Block middle>
            <Input
              label="Email"
              style={styles.input}
              defaultValue={this.state.email}
              onChangeText={text => this.setState({ email: text })}
            />
            <Input
              label="Password"
              style={styles.input}
              defaultValue={this.state.password}
              onChangeText={text => this.setState({ password: text })}
            />
            <Button gradient onPress={() => this.handleLogin()}>
              {this.state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>
          </Block>
        </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: theme.colors.black
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    color: theme.colors.white,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  }
});
