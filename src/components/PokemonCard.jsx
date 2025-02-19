
import { Card, Placeholder, Spinner } from "react-bootstrap";
import unknownPokemon from "../assets/pokemon-unknown.png";

export default function PokemonCard({ data, pokemonIsLoading, error, generationName, gameVersionName }) {
    if (pokemonIsLoading) {
        return (
            <Card className="text-center" >
                <div
                    style={{
                        width: "auto",
                        height: "18rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF"
                    }}
                >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                </div>
                <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={2} />
                    </Placeholder>
                    <Placeholder as={Card.Subtitle} animation="glow" >
                        <Placeholder xs={1} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                        <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                </Card.Body>

            </Card >

        );
    }


    if (error || data === null) {
        return (
            <Card className="text-center" >
                <Card.Body>
                    <Card.Img
                        variant="top"
                        src={unknownPokemon}
                        alt="Unknown Pokemon"
                        style={{ width: "20rem", height: "auto", objectFit: "cover", margin: "auto" }}
                    ></Card.Img>
                    <Card.Title>Unknown Pokemon</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Unknown</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card >
        );
    }

    let sprite = "";
    if (generationName === "official-artwork" || generationName === "dream_world" || generationName === "home" || generationName === "showdown") {
        sprite = data?.sprites?.other[generationName].front_default;
    } else {
        sprite = data?.sprites?.versions[generationName][gameVersionName]?.front_default;
        if (sprite === undefined) {
            sprite = unknownPokemon;
        }
    }

    return (

        <Card className="text-center" >
            <Card.Img
                variant="top"

                src={sprite}
                alt={data?.name}
                style={{
                    width: "auto",
                    height: "18rem",
                    objectFit: "cover",
                    margin: "auto",
                }}
            ></Card.Img>

            <Card.Body>
                <Card.Title>{data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">No.{data.id}</Card.Subtitle>
                <Card.Text>
                    {data.name} weighs {data.weight} kg
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card >
    );
}