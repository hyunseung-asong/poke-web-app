import { Button, ButtonGroup } from "react-bootstrap";

export default function ScrollButtons({ handleSetId }) {
    const handlePrevious = () => handleSetId((id) => id > 1 ? id - 1 : id);
    const handleNext = () => handleSetId((id) => id + 1);

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
            <ButtonGroup aria-label="Scroll Buttons" className="mb-2">
                <Button variant="secondary" name="previous" onClick={handlePrevious}>
                    ←
                </Button>
                <Button variant="secondary" name="next" onClick={handleNext}>
                    →
                </Button>
            </ButtonGroup>
        </div>
    );
}
