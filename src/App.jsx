import * as React from "react"
import PokemonCard from "./PokemonCard";
import ScrollButtons from "./ScrollButtons";
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { Container, Row} from "react-bootstrap";

const queryClient = new QueryClient();

function App() {
    const [id, setId] = React.useState(1);
    const { data: pokemon, isLoading, error } = useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
    });

    return (
        <Container fluid="sm">
            <Row>
                <PokemonCard
                    isLoading={isLoading}
                    data={pokemon}
                    error={error}
                />
            </Row>
            <Row>
                <ScrollButtons handleSetId={setId} />
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
