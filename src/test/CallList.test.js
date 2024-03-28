import React from 'react';
import { render, screen } from '@testing-library/react';
import CallList from 'components/CallList/CallList';
import '@testing-library/jest-dom/extend-expect';

describe('CallList component', () => {
    const calls = [
        {
            id: 1,
            agent: 'Agent 1',
            start_date: '2024-03-28T10:00:00Z',
            status: 'Completed',
            duration: 3600,
            call_type: 'Inbound',
            source: 'Source A',
            origin: '1234',
            destination: '5678'
        },
        {
            id: 2,
            agent: 'Agent 2',
            start_date: '2024-03-28T11:00:00Z',
            status: 'Missed',
            duration: 1800,
            call_type: 'Outbound',
            source: 'Source B',
            origin: '5678',
            destination: '91011'
        }
    ];

    it('muestra la lista de llamadas correctamente cuando la carga es false', () => {
        render(<CallList calls={calls} loading={false} />);
        expect(screen.getByText('Id')).toBeInTheDocument();
        expect(screen.getByText('Agente')).toBeInTheDocument();
        expect(screen.getByText('Fecha')).toBeInTheDocument();
        expect(screen.getByText('Estado')).toBeInTheDocument();
        expect(screen.getByText('Duración')).toBeInTheDocument();
        expect(screen.getByText('Tipo')).toBeInTheDocument();
        expect(screen.getByText('Fuente')).toBeInTheDocument();
        expect(screen.getByText('Interna')).toBeInTheDocument();
    });

    it('renderiza llamadas individuales correctamente', () => {
        render(<CallList calls={calls} loading={false} />);
        calls.forEach(call => {
            expect(screen.getByText(call.id)).toBeInTheDocument();
            expect(screen.getByText(call.agent)).toBeInTheDocument();
        });
    });

    it('muestra el tipo de llamada correctamente', () => {
        render(<CallList calls={calls} loading={false} />);
        calls.forEach(call => {
            expect(screen.getByText(call.call_type)).toBeInTheDocument();
        });
    });

    it('muestra la fuente de la llamada correctamente', () => {
        render(<CallList calls={calls} loading={false} />);
        calls.forEach(call => {
            expect(screen.getByText(call.source)).toBeInTheDocument();
        });
    });

    it('muestra interna o externa correctamente', () => {
        render(<CallList calls={calls} loading={false} />);
        calls.forEach(call => {
            const sourceText = call.origin.length === 4 && call.destination.length === 4 ? 'Interna' : 'Externa';
            expect(screen.getByText(sourceText)).toBeInTheDocument();
        });
    });
});
