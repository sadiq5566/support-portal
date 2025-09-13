import React, { Component, ReactNode } from 'react';
import ErrorPage from '../../pages/ErrorPage';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = { hasError: false };

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, info: any) {
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    render() {
        if (this.state.hasError) {
            return <ErrorPage error={this.state.error} />;
        }
        return this.props.children;
    }
}
