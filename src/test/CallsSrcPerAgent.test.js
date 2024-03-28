import React from 'react';
import { render, screen } from '@testing-library/react';
import CallSrcPerAgent from 'components/CallSrcPerAgent/CallSrcPerAgent';
import '@testing-library/jest-dom/extend-expect';

describe('CallSrcPerAgent Component', () => {
    it('renderiza sin fallar', () => {
        render(<CallSrcPerAgent calls={[]} loading={false} />);
    });

    it('muestra el esqueleto cuando el loading es true', () => {
        render(<CallSrcPerAgent calls={[]} loading={true} />);
        expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    });

    it('muestra el gráfico de barras cuando la carga es false', () => {
        const mockCalls = [
            { agent: 'Agent1', source: 'Source1' },
            { agent: 'Agent2', source: 'Source2' },
        ];
        render(<CallSrcPerAgent calls={mockCalls} loading={false} />);
        expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    });

});