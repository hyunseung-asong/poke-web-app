import { useState } from "react";
import PokemonCard from "./PokemonCard";
import ScrollButtons from "./ScrollButtons";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Container, Row, Col } from "react-bootstrap";

const queryClient = new QueryClient();

function App() {
    const [id, setId] = useState(1);

    // correct version
    const { data: pokemon, isLoading, error } = useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
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


    // return (
    //     <Container className="p-4">
    //         <Row>
    //             <Col>1 of 3</Col>
    //             <Col xs={6}>
    //                 <PokemonCard
    //                     isLoading={isLoading}
    //                     data={pokemon}
    //                     error={error}
    //                 />
    //             </Col>
    //             <Col>3 of 3</Col>
    //         </Row>
    //         <Row>
    //         </Row>
    //     </Container>
    // );

    return (
        <Container fluid style={{ hight: '100vh' }} className="justify-content-center align-items-center">
            <Row>
                <Col xs={12}>
                    <PokemonCard
                        isLoading={isLoading}
                        data={pokemon}
                        error={error}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <ScrollButtons handleSetId={setId} />
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
