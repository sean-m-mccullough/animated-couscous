import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { afterEach, expect, it } from 'vitest'

import App from './App';
import { createStore } from './store';

const startDate = new Date(2020, 6, 3);

afterEach(cleanup)

it('renders with no issues', () => {
  const { container } = render(
    <Provider store={createStore(startDate)}>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});

it('opens a dialog when pending contribution is edited', async () => {
  render(
    <Provider store={createStore(startDate)}>
      <App />
    </Provider>
  );

  fireEvent.click(screen.getByText('July 3rd, 2020'));
  fireEvent.click(screen.getByText('Edit'));

  expect(document.body).toMatchSnapshot();
});
