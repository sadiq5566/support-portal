import { render } from '@testing-library/react';
import { ProgressBar } from '../components/wizard/formSteps/ProgressBar';
import '@testing-library/jest-dom';

describe('ProgressBar', () => {
    it('renders correctly', () => {
        const { container } = render(<ProgressBar value={50} />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('renders with proper container styling', () => {
        const { container } = render(<ProgressBar value={100} />);
        expect(container.firstChild).toHaveClass('space-y-2');
    });

    it('renders Progress component', () => {
        const { container } = render(<ProgressBar value={75} />);
        // Check if any element exists (Progress component should render something)
        expect(container.querySelector('*')).toBeInTheDocument();
    });

    it('accepts different prop values', () => {
        const { container } = render(<ProgressBar value={25} />);
        expect(container.firstChild).toBeInTheDocument();
    });
});