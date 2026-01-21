package com.pokemon.api.controller;

import com.pokemon.api.model.PokemonDTO;
import com.pokemon.api.service.PokemonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pokemon")
@CrossOrigin(origins = "*") // Allow React app to access
public class PokemonController {

    private final PokemonService pokemonService;

    @Autowired
    public PokemonController(PokemonService pokemonService) {
        this.pokemonService = pokemonService;
    }

    @GetMapping("/{name}")
    public ResponseEntity<PokemonDTO> getPokemonAndCleanData(@PathVariable String name) {
        PokemonDTO pokemon = pokemonService.getPokemon(name);
        return ResponseEntity.ok(pokemon);
    }
}
