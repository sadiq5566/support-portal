import * as ReactTestingLibrary from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { User } from 'lucide-react';
import { StepCircle } from '../components/steps/StepCircle';
const { render, fireEvent } = ReactTestingLibrary;
const screen = ReactTestingLibrary.screen;

describe('StepCircle', () => {
    const defaultProps = {
        stepNumber: 1,
        icon: User,
        status: 'pending' as const,
        canNavigate: false,
        onClick: vi.fn(),
    };

    it('renders button', () => {
        render(<StepCircle {...defaultProps} status="completed" />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders pending status with button disabled', () => {
        render(<StepCircle {...defaultProps} status="pending" />);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('calls onClick when navigable', () => {
        const onClick = vi.fn();
        render(
            <StepCircle
                {...defaultProps}
                status="active"
                canNavigate
                onClick={onClick}
            />
        );
        fireEvent.click(screen.getByRole('button'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
