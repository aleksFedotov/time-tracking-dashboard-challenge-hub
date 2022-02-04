import { render, screen } from '@testing-library/react';

import Reports from './Reports';

describe('Report component testing', () => {
  test('Reports renders 8 reports', () => {
    render(<Reports />);
    const reports = screen.getAllByLabelText('report');
    expect(reports.length).toEqual(6);
  });
});
