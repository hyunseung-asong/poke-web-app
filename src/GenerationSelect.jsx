
import {  Card,  Placeholder, Spinner } from "react-bootstrap";

export default function GenerationSelect({ generationName }) {

    if (generationName === null){
        console.log("generation is null");
        return;
    }


    return (
        <Card className="text-center" >            
            <Card.Body>
                <Card.Title>{generationName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{generationName}</Card.Subtitle>
                <Card.Text>
                    this shows the generation title
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card >
    );
}