import React from 'react';
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import GenerationSelector from "../components/GenerationSelector";
import ScrollButtons from "../components/ScrollButtons";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from "react-bootstrap";

const queryClient = new QueryClient();

function App() {
    const [pokemonId, setPokemonId] = useState(2);
    const [spritePath, setSpritePath] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemonId + ".png");

    // correct version
    const { data: pokemon, isLoading: pokemonIsLoading, error: pokemonError } = useQuery({
        queryKey: ['pokemon', pokemonId],
        queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => res.json())
    });


    // forced 1s loading time
    // const { data: pokemon, isLoading: pokemonIsLoading, error: pokemonError } = useQuery({
    //     queryKey: ['pokemon', pokemonId],
    //     queryFn: () =>
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    //                     .then(res => res.json())
    //                     .then(resolve);
    //             }, 200);
    //         }),
    // });


    return (
        <Container fluid style={{ hight: '100vh' }} className="justify-content-center align-items-center">
            <Row>
                <Col xs={12}>
                    <GenerationSelector 
                        pokemonIsLoading={pokemonIsLoading}
                        data={pokemon}
                        error={pokemonError}
                        setSpritePath={setSpritePath}
                    />
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <PokemonCard
                        pokemonIsLoading={pokemonIsLoading}
                        data={pokemon}
                        error={pokemonError}
                        spritePath={spritePath}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ScrollButtons handleSetId={setPokemonId} />
                </Col>
            </Row>
        </Container>
    );
}


export default function Root() {
    return (
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    );
}
