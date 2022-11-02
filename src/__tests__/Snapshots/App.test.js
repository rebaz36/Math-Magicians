/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import App from '../../App';

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
