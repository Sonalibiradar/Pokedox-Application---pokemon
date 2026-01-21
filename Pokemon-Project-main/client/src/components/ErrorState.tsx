import React from 'react';

interface Props {
    message: string;
}

export const ErrorState: React.FC<Props> = ({ message }) => {
    return (
        <div style={{
            color: '#ff6b6b',
            marginTop: '2rem',
            padding: '1rem',
            background: 'rgba(255, 107, 107, 0.1)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 107, 107, 0.2)'
        }}>
            <h3>⚠ Error</h3>
            <p>{message}</p>
        </div>
    );
};
