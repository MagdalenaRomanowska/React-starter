import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import {listData, faqContent} from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={listData.title} image={faqContent.image} />
    <h2>{faqContent.title}</h2>
    <p>{faqContent.content}</p>
  </Container>
);

export default FAQ;
