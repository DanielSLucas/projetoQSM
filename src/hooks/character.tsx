import React, { createContext, useCallback, useState, useContext } from 'react';

interface Character {
  id: number;
  characterName: string;
  hint1: string;
  hint2: string;
  hint3: string;
  hint4: string;
  hint5: string;
}

interface CharacterContextData {
  characters: Character[];
  addCharacter(character: Character): void;
}

interface Data {
  characters: Character[];
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export const CharacterProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);

  const addCharacter = useCallback((character: Character) => {

    if (!data.characters) {
      return setData({
        characters: [
          character,
        ],
      });
    }

    const characterIndex = data.characters.findIndex( arrayItem => arrayItem.id === character.id);
    const characterExists = characterIndex !== -1;

    if (characterExists) {
      const filteredCharacters = data.characters.filter( arrayItem => arrayItem.id !== character.id);

      return setData({
        characters: [
          ...filteredCharacters,
          character,
        ]
      });
    }

    return setData({
      characters: [
        ...data.characters,
        character,
      ]
    })

  }, []);


  return (
    <CharacterContext.Provider value={{ characters: data.characters, addCharacter}} >
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter(): CharacterContextData {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
