import * as React from "react";
import { Card } from "react-bootstrap";

export default function PokemonCard({ data, isLoading, error }) {
    if (isLoading) {
        return;
    }
    if (error) {
        return;
    }
    return (
        <Card className="text-center" >
            <Card.Img
                variant="top" 
                src={data?.sprites?.front_default}
                alt={data?.name}
            ></Card.Img>
            <Card.Title>{data.name.slice(0, 1).toUpperCase() + data.name.slice(1)}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">No.{data.id}</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>

        </Card>
    );
    if (isLoading === true) {
        return <div className="card" />;
    }
    if (error) {
        return (
            <div className="card">
                <figure>
                    <img
                        width="100px"
                        height="100px"
                        src="./images/pokemon-unknown.png"
                        alt="Unknown Pokemon"
                    />
                    <figcaption>
                        <h4>Oops.</h4>
                        <h6>{error}</h6>
                    </figcaption>
                </figure>
            </div>
        );
    }

    return (
        <div className="card">
            <figure>
                <img
                    width="475px"
                    height="475px"
                    src={data?.sprites?.front_default}
                    alt={data?.name}
                />
                <figcaption>
                    <h4>{data.name}</h4>
                    <h6>No. {data.id}</h6>
                </figcaption>
            </figure>
        </div>
    );
}
