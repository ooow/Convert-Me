import React from 'react';
import { StatusBar } from 'react-native';
import Container from '../components/container/Container';
import Logo from '../components/logo/Logo';

const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <Logo />
  </Container>
);

export default Home;
