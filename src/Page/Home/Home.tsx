import * as React from 'react';
import { HomeContainer } from './HomeStyle';

interface HomeProps {}
interface HomeState {}
export default class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return <HomeContainer>HiFi Sales</HomeContainer>;
  }
}
