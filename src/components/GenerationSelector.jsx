import React, { useEffect, useMemo } from "react";
import { Card, Dropdown, DropdownButton, DropdownDivider } from "react-bootstrap";

export default function GenerationSelector({ generationName, setGenerationName, gameVersionName, setGameVersionName }) {
    const gameVersionOptions = useMemo(() => ({
        "official-artwork": [],
        "dream_world": [],
        "home": [],
        "showdown": [],
        "generation-i": ["red-blue", "yellow"],
        "generation-ii": ["crystal", "gold", "silver"],
        "generation-iii": ["ruby-sapphire", "emerald", "firered-leafgreen", "colosseum", "xd"],
        "generation-iv": ["diamond-pearl", "heartgold-soulsilver", "platinum"],
        "generation-v": ["black-white"],
        "generation-vi": ["omegaruby-alphasapphire", "x-y"],
        "generation-vii": ["ultra-sun-ultra-moon"],
        "generation-viii": [],
    }), []);

    useEffect(() => {
        if (gameVersionOptions[generationName]) {
            setGameVersionName(gameVersionOptions[generationName]?.[0] || "");
        }
    }, [generationName, gameVersionOptions, setGameVersionName]);

    if (generationName === null || gameVersionName === null) {
        console.log("generation is null");
        return;
    }

    return (
        <Card className="p-3">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Select a generation and game version:</Card.Title>
                <div className="d-flex gap-2">
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
                    <DropdownButton id="dropdown-basic-button" title={cleanGameVersionName(gameVersionName)}>
                        {gameVersionOptions[generationName].map((item, index) => (
                            <Dropdown.Item key={index} onClick={() => setGameVersionName(item)}>{cleanGameVersionName(item)}</Dropdown.Item>
                        ))}

                    </DropdownButton>
                </div>
            </Card.Body>
        </Card>
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
        case "generation-ix":
            return "Generation 9";
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


function cleanGameVersionName(gameVersionName) {
    switch (gameVersionName) {
        case "red-blue":
            return "Red / Blue";
        case "yellow":
            return "Yellow";
        case "crystal":
            return "Crystal";
        case "gold":
            return "Gold";
        case "silver":
            return "Silver";
        case "ruby-sapphire":
            return "Ruby / Sapphire";
        case "emerald":
            return "Emerald";
        case "firered-leafgreen":
            return "FireRed / LeafGreen";
        case "colosseum":
            return "Colosseum";
        case "xd":
            return "XD";
        case "diamond-pearl":
            return "Diamond / Pearl";
        case "heartgold-soulsilver":
            return "HeartGold / SoulSilver";
        case "platinum":
            return "Platinum";
        case "black-white":
            return "Black / White";
        case "omegaruby-alphasapphire":
            return "OmegaRuby / AlphaSapphire";
        case "x-y":
            return "X / Y";
        case "ultra-sun-ultra-moon":
            return "UltraSun / UltraMoon";
        default:
            return "";

    }
}