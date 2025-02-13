import React from 'react';
import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import GenerationSelector from "../components/GenerationSelector";
import ScrollButtons from "../components/ScrollButtons";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from "react-bootstrap";

const queryClient = new QueryClient();

function App() {
    const [generationName, setGenerationName] = useState("official-artwork");
    const [pokemonId, setPokemonId] = useState(1);
    
    // const { data: generation, isLoading: generationIsLoading, error: generationError } = useQuery({
    //     queryKey: ['generation', generationName],
    //     queryFn: () => fetch(`https://pokeapi.co/api/v2/generation/${generationName}`)
    //         .then(res => res.json())
    // });
    

    // correct version
    const { data: pokemon, isLoading: pokemonIsLoading, error: pokemonError } = useQuery({
        queryKey: ['pokemon', pokemonId],
        queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(res => res.json())
    });


    // forced 1s loading time
    // const { data: pokemon, isLoading, error } = useQuery({
    //     queryKey: ['pokemon', id],
    //     queryFn: () =>
    //         new Promise((resolve) => {
    //             setTimeout(() => {
    //                 fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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
                        generationName={generationName}
                        setGenerationName={setGenerationName}  
                    />
                </Col>
            </Row>
            
            <Row>
                <Col xs={12}>
                    <PokemonCard
                        pokemonIsLoading={pokemonIsLoading}
                        data={pokemon}
                        error={pokemonError}
                        generation={generationName}
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
