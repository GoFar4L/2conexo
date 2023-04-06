import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';

describe('Slider Component', () => {
  test('Mostra i valori passati come props', () => {
    const view = render(<Slider value={50} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(view.getByText('50')).toBeInTheDocument();
  });

  test('Chiama correttamente handlechange per ogni cambiamento', () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Slider value={50} handleChange={handleChange} />);
      // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.change(getByRole('slider'), { target: { value: 75 } });
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object), 75);
  });
});
