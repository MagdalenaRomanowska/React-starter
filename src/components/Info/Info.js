import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {listData, infoContent} from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={infoContent.image} />
    <h2>{infoContent.title}</h2>
    <p>{infoContent.content}</p>
  </Container>
);

export default Info;
