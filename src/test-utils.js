import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import DashBoardProvider from './context/DashBoardProvider';

function render(ui, options) {
  return rtlRender(ui, { wrapper: DashBoardProvider, ...options });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
