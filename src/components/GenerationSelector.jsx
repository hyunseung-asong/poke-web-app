import React, { useEffect, useMemo } from "react";
import { Card, Dropdown, DropdownButton, DropdownDivider } from "react-bootstrap";

export default function GenerationSelector({ pokemonIsLoading, data, error, generationName, setGenerationName, gameVersionName, setGameVersionName }) {
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


    if (pokemonIsLoading) {
        return;
    }

    if (error) {
        console.error(error);
        return;
    }

    let pokemonDataMap = new Map(Object.entries(data));
    let pokemonSpritesMap = new Map(Object.entries(pokemonDataMap.get("sprites")));
    let pokemonVersionsMap = new Map(Object.entries(pokemonSpritesMap.get("versions")));
    // for (const [key, value] of pokemonVersionsMap) {
    //     console.log(key, value);
    // }

    let availableGenerations = [];
    let availableGames = [];
    let availableSprites = [];
    console.log("-----------------");
    for (let gen of pokemonVersionsMap.keys()) {
        let gameMap = new Map(Object.entries(pokemonVersionsMap.get(gen)));
        for (let game of gameMap.keys()) {
            let spriteMap = new Map(Object.entries(gameMap.get(game)));
            for (let [key, value] of spriteMap) {
                if(value !== null){
                    availableGenerations.push(gen);
                    availableGames.push(game);
                    availableSprites.push(key);
                }
            }
        }
    }
    console.log([...new Set(availableGenerations)]);
    console.log([...new Set(availableGames)]);
    console.log(availableSprites);
    // while(pokemonVersionsMap)
    // let availableGenerations = [];


    return (
        <Card className="p-3">
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                <Card.Title>Select a generation and game version:</Card.Title>
                <div className="d-flex gap-2">
                    <DropdownButton id="dropdown-basic-button" title={cleanName(generationName)}>
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
                    <DropdownButton id="dropdown-basic-button" title={cleanName(gameVersionName)}>
                        {gameVersionOptions[generationName].map((item, index) => (
                            <Dropdown.Item key={index} onClick={() => setGameVersionName(item)}>{cleanName(item)}</Dropdown.Item>
                        ))}

                    </DropdownButton>
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