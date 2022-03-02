import Footer from 'layouts/Footer';
import { render } from '@testing-library/react';

describe('<Footer />', () => {
  it('renders footer', () => {
    const { getByText } = render(<Footer />);
    const footer = getByText('Page Not Found');
    expect(footer).toBeInTheDocument();
  });
});
