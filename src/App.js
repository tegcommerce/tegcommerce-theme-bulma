import React, { Fragment } from 'react';
import './App.scss';
import { Container, Section } from 'rbx';
import Router from './routes';


import Header from './components/global/header';
//import Home from './screens/home/home';
import Footer from './components/global/footer';

const App = () => (
    <Fragment>
      <Header />
      <Section>
        <Container>
          <Router />
        </Container>
      </Section>
      <Footer />
    </Fragment>

)

export default App;
