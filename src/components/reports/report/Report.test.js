import { render, screen } from '@testing-library/react';

import Report from './Report';

describe('Report component testing', () => {
  const activity = {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  };

  test('Rendering right header', () => {
    render(<Report activity={activity} />);

    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent(/Work/i);
  });

  test('Rendering right amount of current hours', () => {
    render(<Report activity={activity} />);
    const curHours = screen.getByText(/32hrs/i);
    expect(curHours).toBeInTheDocument();
  });

  test('Rendering right amount of previous hours', () => {
    render(<Report activity={activity} />);
    const hours = screen.getByText(/Previous - 36hrs/i);
    expect(hours).toBeInTheDocument();
  });
});
