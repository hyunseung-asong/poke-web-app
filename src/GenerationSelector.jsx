import { Card, Dropdown, DropdownButton, DropdownDivider } from "react-bootstrap";

export default function GenerationSelector({ generationName, setGenerationName }) {
    if (generationName === null) {
        console.log("generation is null");
        return;
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", // Center horizontally
                alignItems: "center", // Center vertically (if needed)
                width: "100%", // Ensure the div takes up the full width of its container
                margin: "1rem 0"
            }}
        >
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Select a generation:</Card.Title>
                    <DropdownButton id="dropdown-basic-button" title={cleanGenerationName(generationName)}>
                        <Dropdown.Item onClick={() => { setGenerationName("official-artwork") }}>Official Artwork</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("dream_world") }}>Dream World</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("home") }}>Home</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("showdown") }}>Showdown</Dropdown.Item>
                        <DropdownDivider />
                        <Dropdown.Item onClick={() => { setGenerationName("generation-i") }}>Generation 1</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-ii") }}>Generation 2</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-iii") }}>Generation 3</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-iv") }}>Generation 4</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-v") }}>Generation 5</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-vi") }}>Generation 6</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-vii") }}>Generation 7</Dropdown.Item>
                        <Dropdown.Item onClick={() => { setGenerationName("generation-viii") }}>Generation 8</Dropdown.Item>
                    </DropdownButton>
                </Card.Body>
            </Card>
        </div>
    );
}

function cleanGenerationName(generationName) {
    switch (generationName) {
        case "generation-i":
            return "Generation 1";
        case "generation-ii":
            return "Generation 2";
        case "generation-iii":
            return "Generation 3";
        case "generation-iv":
            return "Generation 4";
        case "generation-v":
            return "Generation 5";
        case "generation-vi":
            return "Generation 6";
        case "generation-vii":
            return "Generation 7";
        case "generation-viii":
            return "Generation 8";
        case "official-artwork":
            return "Official Artwork";
        case "dream_world":
            return "Dream World";
        case "home":
            return "Home";
        case "showdown":
            return "Showdown";
        default:
            return "Unknown Generation"
    }
}