import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import StateList from '.';
import list from '../../mocks/state-list.mock.json';

describe('StateList', () => {
  it('should check whether links are urlified', () => {
    render(
      <Router>
        <StateList list={list} />
      </Router>,
    );

    // Show all links
    fireEvent.click(screen.getByRole('button'));

    list.forEach((state) => {
      const link = screen.getByText(state);

      expect(link).toHaveAttribute(
        'href',
        `/${state.trim().replace(/\s/g, '-')}`,
      );
    });
  });

  it('should check', () => {
    render(
      <Router>
        <StateList list={list} />
      </Router>,
    );

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(6);
  });

  it('should check whether a button is clibale', () => {
    render(
      <Router>
        <StateList list={list} />
      </Router>,
    );

    fireEvent.click(screen.getByRole('button'));

    const links = screen.getAllByRole('link');
    expect(links.length).toBe(51);
  });
});
