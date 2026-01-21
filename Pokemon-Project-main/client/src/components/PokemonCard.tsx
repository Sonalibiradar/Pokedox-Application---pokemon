import React from 'react';

interface PokemonData {
    name: string;
    id: number;
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            }
        }
    };
    types: Array<{ type: { name: string } }>;
    stats: Array<{ base_stat: number; stat: { name: string } }>;
    height: number;
    weight: number;
}

interface Props {
    pokemon: PokemonData;
}

export const PokemonCard: React.FC<Props> = ({ pokemon }) => {
    return (
        <div className="main-container">
            <div className="pokemon-display">
                <img
                    src={pokemon.sprites.other['official-artwork'].front_default}
                    alt={pokemon.name}
                    className="pokemon-img"
                />
                <h2>{pokemon.name}</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {pokemon.types.map((t) => (
                        <span key={t.type.name} className="type-pill">
                            {t.type.name}
                        </span>
                    ))}
                </div>
            </div>

            <div className="stats-grid">
                {pokemon.stats.map((s) => (
                    <div key={s.stat.name} className="stat-item">
                        <span className="stat-label" style={{ width: '100px' }}>{s.stat.name.replace('-', ' ')}</span>

                        <div className="progress-bg">
                            <div
                                className="progress-fill"
                                style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                            ></div>
                        </div>

                        <span className="stat-value">{s.base_stat}</span>
                    </div>
                ))}

                <div className="stat-item">
                    <span className="stat-label">Height</span>
                    <span className="stat-value">{pokemon.height / 10} m</span>
                </div>
                <div className="stat-item">
                    <span className="stat-label">Weight</span>
                    <span className="stat-value">{pokemon.weight / 10} kg</span>
                </div>
            </div>
        </div>
    );
};
