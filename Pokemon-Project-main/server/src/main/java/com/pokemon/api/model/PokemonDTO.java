package com.pokemon.api.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.List;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class PokemonDTO {
    private int id;
    private String name;
    private int height;
    private int weight;
    private Sprites sprites;
    private List<TypeWrapper> types;
    private List<StatWrapper> stats;
    private List<AbilityWrapper> abilities;

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Sprites {
        private String front_default;
        private String back_default;
        private Other other;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Other {
        private OfficialArtwork official_artwork;

        // This maps to "official-artwork" in json, needing JsonProperty or careful
        // mapping.
        // But Jackson handles basic fields. For "official-artwork", we need annotation.
        // Let's keep it simple or use JsonProperty if needed.
        // Actually, let's use a simpler structure if possible, or just standard
        // mapping.
        // To be safe with kebab-case:

        @com.fasterxml.jackson.annotation.JsonProperty("official-artwork")
        private OfficialArtwork officialArtwork;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class OfficialArtwork {
        private String front_default;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class TypeWrapper {
        private Type type;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Type {
        private String name;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class StatWrapper {
        private int base_stat;
        private Stat stat;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Stat {
        private String name;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class AbilityWrapper {
        private Ability ability;
        private boolean is_hidden;
    }

    @Data
    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Ability {
        private String name;
    }
}
