
import { Card, Dropdown, DropdownButton } from "react-bootstrap";

export default function GenerationSelector({ pokemonIsLoading, data, error, setSpritePath }) {

    if (pokemonIsLoading) {
        return;
    }

    if (error) {
        console.error(error);
        return;
    }

    let cleanedData = cleanNullValues(data["sprites"]);
    const modifiedData = removeFirstNKeys(cleanedData, 4);
    let path = "";

    const RecursiveDropdown = ({ data, title = "Root", path }) => {
        if (title.substring(0, 5) === "front" || title.substring(0, 4) === "back") {
            return <Dropdown.Item as="button" onClick={() => setSpritePath(data)}>{cleanName(title)}</Dropdown.Item>;
        }
        return (
            <DropdownButton title={cleanName(title)} variant="primary" className="m-2">
                {Object.entries(data).map(([key, value]) => (
                    <RecursiveDropdown key={key} data={value} title={key} path={path.length > 0 ? path + "," + key : key}/>
                ))}
            </DropdownButton>
        );
    };


    return (
        <Card className="p-3">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Select a generation and game version:</Card.Title>
                <div className="d-flex gap-2">
                    <RecursiveDropdown data={modifiedData} title="Select Sprite" path={path}/>
                </div>
            </Card.Body>
        </Card>
    );
}

function cleanName(name) {
    let generation = name.substring(0, 10) === "generation";
    let hadSpace = false;
    for (let i = 0; i < name.length; i++) {
        if (name.charAt(i) === '-' || name.charAt(i) === '_' || name.charAt(i) === ' ') {
            name = name.substring(0, i) + " " + name.substring(i + 1);
            hadSpace = true;
        }
        else {
            if (hadSpace || i === 0) {
                name = name.substring(0, i) + name.charAt(i).toUpperCase() + name.substring(i + 1);
                if (!generation) {
                    hadSpace = false;
                }
            }
        }
    }
    return name;
}

function cleanNullValues(obj) {
    if (typeof obj === 'object' && obj !== null) {
        let cleanedObj = {};
        for (let key in obj) {
            let cleanedValue = cleanNullValues(obj[key]);
            if (cleanedValue !== null) {
                cleanedObj[key] = cleanedValue;
            }
        }
        return Object.keys(cleanedObj).length > 0 ? cleanedObj : null;
    }

    return obj;
}

function removeFirstNKeys(obj, n = 0) {
    const keys = Object.keys(obj);
    const newObj = {};

    for (let i = n; i < keys.length; i++) {
        newObj[keys[i]] = obj[keys[i]];
    }

    return newObj;
}