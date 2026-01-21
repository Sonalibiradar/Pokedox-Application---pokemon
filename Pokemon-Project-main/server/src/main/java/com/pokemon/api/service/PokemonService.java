package com.pokemon.api.service;

import com.pokemon.api.model.PokemonDTO;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PokemonService {

    private final RestTemplate restTemplate;
    private final String POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon/";

    public PokemonService() {
        this.restTemplate = new RestTemplate();
    }

    @Cacheable(value = "pokemon", key = "#name.toLowerCase()")
    public PokemonDTO getPokemon(String name) {
        String url = POKEAPI_URL + name.toLowerCase();
        return restTemplate.getForObject(url, PokemonDTO.class);
    }
}
