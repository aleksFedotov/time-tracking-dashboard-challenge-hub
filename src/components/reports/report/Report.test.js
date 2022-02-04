import { render, screen } from '../../../test-utils';

import DashBoardContext from '../../../context/context';

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

  const context = {
    period: 'Weekly',
    changePeriod: jest.fn(),
  };

  const ReportWithProvider = () => {
    return render(<Report activity={activity} />, { period: 'Weekly' });
  };
  test('Rendering right header', () => {
    ReportWithProvider();
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent(/Work/i);
  });
  // test('Rendering right amount of current hours', () => {
  //   render(
  //     <DashBoardProvider>
  //       <Report activity={activity} />
  //     </DashBoardProvider>
  //   );
  //   const curHours = screen.getByText(/32hrs/i);
  //   expect(curHours).toBeInTheDocument();
  // });
  // test('Rendering right amount of previous hours', () => {
  //   render(
  //     <DashBoardProvider>
  //       <Report activity={activity} />
  //     </DashBoardProvider>
  //   );
  //   const hours = screen.getByText(/Last Week - 36hrs/i);
  //   expect(hours).toBeInTheDocument();
  // });
});
