import { render, screen } from '@testing-library/react';

import Reports from './Reports';
import DashBoardContext from '../../context/context';

describe('Report component testing', () => {
  const ReportWithProvider = () => {
    const providerProps = {
      period: 'Weekly',
      changePeriod: jest.fn(),
    };
    render(
      <DashBoardContext.Provider value={providerProps}>
        <Reports />
      </DashBoardContext.Provider>
    );
  };
  test('Reports renders 8 reports', () => {
    ReportWithProvider();
    const reports = screen.getAllByLabelText('report');
    expect(reports.length).toEqual(6);
  });
});
