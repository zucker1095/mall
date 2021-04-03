import React, { Component } from 'react';
import Taro, { Config } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.css';

import Login from '../../components/login/Login';

export default class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className='index'>
        <Login />
      </View>
    );
  }
}