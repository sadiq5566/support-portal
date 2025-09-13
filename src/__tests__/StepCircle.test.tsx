// StepCircle.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { User } from 'lucide-react';
import { StepCircle } from '../components/steps/StepCircle';

describe('StepCircle', () => {
    const defaultProps = {
        stepNumber: 1,
        icon: User,
        status: 'pending' as const,
        canNavigate: false,
        onClick: vi.fn(),
    };

    it('render button in the component', () => {
        render(<StepCircle {...defaultProps} status="completed" />);

        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders pending status with button disable', () => {
        render(<StepCircle {...defaultProps} status="pending" />);

        expect(screen.getByRole('button')).toBeDisabled();

    });

    it('calls onClick when navigable', () => {
        const onClick = vi.fn();
        render(
            <StepCircle
                {...defaultProps}
                status="active"
                canNavigate={true}
                onClick={onClick}
            />
        );

        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('does not call onClick when disabled', () => {
        const onClick = vi.fn();
        render(<StepCircle {...defaultProps} onClick={onClick} status="pending" />);

        fireEvent.click(screen.getByRole('button'));
        expect(onClick).not.toHaveBeenCalled();
    });

    it('shows active ring for active status', () => {
        const { container } = render(
            <StepCircle {...defaultProps} status="active" />
        );

        expect(container.querySelector('.animate-pulse')).toBeInTheDocument();
    });
});