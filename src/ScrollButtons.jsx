import { Button, ButtonGroup } from "react-bootstrap";

export default function ScrollButtons({ handleSetId }) {
    const handlePrevious = () => handleSetId((id) => id > 1 ? id - 1 : id);
    const handleNext = () => handleSetId((id) => id + 1);

    return (
        <ButtonGroup aria-label="Basic example">
            <Button
                variant="secondary"
                name="previous"
                onClick={handlePrevious}
            >
                ←
            </Button>
            <Button
                variant="secondary"
                name="next"
                onClick={handleNext}
            >
                →
            </Button>
        </ButtonGroup>
    );
}
