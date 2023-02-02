import { render } from '@testing-library/react';
import { Footer } from '../components/Footer';

describe('App component', () => {
  it('should render', () => {
    const { getByText , debug } = render(<Footer />);

    expect(getByText('MKS sistemas © Todos os direitos reservados'))
      .toBeInTheDocument;
  });
});
