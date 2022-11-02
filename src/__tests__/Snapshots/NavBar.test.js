/* eslint-disable jsx-a11y/anchor-is-valid */
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../component/Layout/NavBar';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
