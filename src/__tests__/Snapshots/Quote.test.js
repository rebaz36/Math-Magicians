/* eslint-disable , jsx-a11y/anchor-is-valid,  */
import renderer from 'react-test-renderer';
import Quote from '../../pages/Qoute/Quote';

jest.mock('../../pages/Qoute/QuoteData.js');

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
