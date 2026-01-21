import React, { useState } from 'react';

interface Props {
    onSearch: (name: string) => void;
}

export const SearchBar: React.FC<Props> = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit} className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search for a Pokemon..."
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};
