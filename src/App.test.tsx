import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

import { createStore } from './store';

const startDate = new Date(2020, 6, 3);

it('renders with no issues', () => {
  const { container } = render(
    <Provider store={createStore(startDate)}>
      <App />
    </Provider>
  );

  expect(container).toMatchSnapshot();
});

it('opens a dialog when pending contribution is edited', () => {
  const { getByText } = render(
    <Provider store={createStore(startDate)}>
      <App />
    </Provider>
  );

  fireEvent.click(getByText('July 3rd, 2020'));
  fireEvent.click(getByText('Edit'));

  expect(document.body).toMatchSnapshot();
});
