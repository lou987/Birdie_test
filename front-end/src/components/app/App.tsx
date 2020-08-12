import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { RootState } from '@App/store/reducers';
import { connect } from 'react-redux';

import Title from '@App/components/Title';
import Logo from '@App/components/Logo';
import SubTitle from '@App/components/SubTitle';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppProps {

}

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: #F9F9F9;
    > div {
      height: 100%;
    }
  }
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC<AppProps> = ({ ...props }) => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Logo src={LogoUrl} />
        <Title>Welcome to the birdie test</Title>
        <SubTitle>Best of luck!</SubTitle>
      </AppContainer>
    </>
  );
};

const mapStateToProps = (state: RootState) => state;

// const mapDispatchToProps = (dispatch: Dispatch<RootState>) => { };

export default connect(mapStateToProps)(App);