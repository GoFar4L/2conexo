import 'babel-polyfill';
import { render, fireEvent } from '@testing-library/react';
import App from './App';



describe('App component', () => {
  test('Presenza app compoment', () => {
    const { getByText } = render(<App />);
    expect(getByText('A = 0')).toBeInTheDocument();
    expect(getByText('B = 0')).toBeInTheDocument();
  });

  test('Giusti valori in slider dopo ogni cambiamento', () => {
    const { getByRole, getByText } = render(<App />);
    fireEvent.change(getByRole('slider', { name: 'A' }), { target: { value: 20 } });
    fireEvent.change(getByRole('slider', { name: 'B' }), { target: { value: 55 } });
    expect(getByText('A = 20')).toBeInTheDocument();
    expect(getByText('B = 55')).toBeInTheDocument();
  });

});
  // test('Risultato ritorna da backend: CORS blocca richieste app servita tramite flask.', async () => {
  //   const { getByText, getByRole, findByText } = render(<App />);
  //   fireEvent.change(getByRole('slider', { name: 'A' }), { target: { value: 30 } });
  //   fireEvent.change(getByRole('slider', { name: 'B' }), { target: { value: 25 } });
  //   fireEvent.click(getByText('SUM'));
  //   expect(getByText('A + B = ?')).toBeInTheDocument();
  //   await waitFor(() => expect(getByText('A + B = 55')).toBeInTheDocument());
  // });
