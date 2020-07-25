import React, { createContext, useCallback, useState, useContext } from 'react';
import { EventSubscriptionVendor } from 'react-native';

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
  const [data, setData] = useState<Data>({
    characters: [
      {"characterName": "Teste1", "hint1": "teste1", "hint2": "", "hint3": "", "hint4": "", "hint5": "", "id": 1},
    ]
  });

  const addCharacter = useCallback((character: Character) => {
    setData({
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
