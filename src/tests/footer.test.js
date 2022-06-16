import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../components/footer';

it('renders correctly', () => {
  const footer = renderer
    .create(<Footer />)
    .toJSON();
  expect(footer).toMatchSnapshot();
});
