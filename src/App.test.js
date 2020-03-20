import React from "react";
import { render, fireEvent } from '@testing-library/react';
import App from "./App";
import ContactForm from './components/ContactForm'

test("renders App without crashing", () => {
  render(<App />);
});

test('Renders ContactForm without crashing', () => {
  render(<ContactForm />);
});



test("renders submit form header", () => {

  const text = render(<ContactForm />);
  const getByText = (/submit/i);
})


test('Render First Name and Last Name ', () => {
  const text = render(<ContactForm />);
  const getByText = (/first name/, /last name/i);
});

test("renders submit form header", () => {

  const { getByText } = render(<App />);

  const header = getByText(/submit/i);

  expect(header).toBeInTheDocument();

}) 