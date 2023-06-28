import React from 'react';
import { createRoot } from "react-dom/client";
import { JSDOM } from 'jsdom';
import 'jsdom-global/register'; // Import the jsdom-global package
import AboutUs from './aboutUs';

describe('AboutUs component', () => {
  let container;

  beforeAll(() => {
    const dom = new JSDOM('<!DOCTYPE html>');
    global.document = dom.window.document;
    container = document.createElement('div');
  });

  afterAll(() => {
    delete global.document;
    container = null;
  });

  it('renders without error', () => {
    createRoot(container).render(<AboutUs />);

    // Perform assertions on the rendered output
    // For example:
    expect(container.querySelector('h2')).toHaveTextContent('We are System 32');
    // Add more assertions as needed

    // Cleanup: Unmount the component
    createRoot(container).unmount();
  });
});