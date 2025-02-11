
import {  Card,  Placeholder, Spinner } from "react-bootstrap";

export default function GenerationSelect({ generation }) {

    if (generation === null){
        console.log("generation is null");
        return;
    }


    return (
        <Card className="text-center" >
            {/* <Card.Img
                variant="top"
                src={data?.sprites?.other?.["official-artwork"]?.front_default}
                alt={data?.name}
                style={{
                    width: "auto",
                    height: "18rem",
                    objectFit: "cover",
                    margin: "auto",
                }}
            ></Card.Img> */}
            {/* <Card.Img
                variant="top"
                src={data?.sprites?.front_default}
                alt={data?.name}
                style={{
                    width: "auto",
                    height: "18rem",
                    objectFit: "cover",
                    margin: "auto",
                }}
            ></Card.Img>
            <Card.Img
                variant="top"
                src={data?.sprites?.versions?.["generation-iii"]?.emerald?.front_default}
                alt={data?.name}
                style={{
                    width: "auto",
                    height: "18rem",
                    objectFit: "cover",
                    margin: "auto",
                }}
            ></Card.Img> */}
            
            <Card.Body>
                <Card.Title>{generation}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{generation}</Card.Subtitle>
                <Card.Text>
                    {/* {data.name} weighs {data.weight} kg */}
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card >
    );
}