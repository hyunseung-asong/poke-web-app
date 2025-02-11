import { Dropdown, DropdownButton } from "react-bootstrap";

export default function DropdownSelector({ handleSetId }) {
    const handleSelection = () => handleSetId((id) => id);
    // const handlePrevious = () => handleSetId((id) => id > 1 ? id - 1 : id);
    // const handleNext = () => handleSetId((id) => id + 1);

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
            {/* <ButtonGroup aria-label="Scroll Buttons" className="mb-2">
                <Button variant="secondary" name="previous" onClick={handlePrevious}>
                    ←
                </Button>
                <Button variant="secondary" name="next" onClick={handleNext}>
                    →
                </Button>
            </ButtonGroup> */}

            <DropdownButton id="dropdown-basic-button" title="Dropdown button" onClick={handleSelection}>
                <Dropdown.Item onClick={() => handleSelection("official-artwork")}>Official Artwork</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("dream-world")}>Dream World</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("home")}>Home</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => handleSelection("generation-i")}>Generation 1</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-ii")}>Generation 2</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-iii")}>Generation 3</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-iv")}>Generation 4</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-v")}>Generation 5</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-vi")}>Generation 6</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-vii")}>Generation 7</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSelection("generation-viii")}>Generation 8</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}
