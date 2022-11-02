/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import Footer from '../../component/Layout/Footer';

it('renders correctly', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});
