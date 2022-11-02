/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import Home from '../../pages/Home/Home';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
