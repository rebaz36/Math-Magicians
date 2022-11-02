/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import Calculator from '../../pages/Calculator/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
