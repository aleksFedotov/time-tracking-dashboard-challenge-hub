import { render, screen } from '@testing-library/react';

import ProfileCard from './ProfileCard';

test('profile card rendering', () => {
  render(<ProfileCard />);

  const avatar = screen.getByRole('img');
  const user = screen.getByText(/Jeremy Robson/i);
  const list = screen.getByRole('list');
  const listItems = screen.getAllByRole('listitem');

  expect(avatar).toBeInTheDocument();
  expect(user).toBeInTheDocument();
  expect(list).toBeInTheDocument();
  expect(listItems.length).toEqual(3);
});
