import React, { createContext, useCallback, useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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
  addCharacter(character: Character): Promise<void>;
  removeAllCharacters(): Promise<void>;
}

interface Data {
  characters: Character[];
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export const CharacterProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);

  const addCharacter = useCallback(async (character: Character) => {
    const characters = await AsyncStorage.getItem('@QSM:Characters');

    if (characters) {
      const parsedCharacters = JSON.parse(characters);

      const newCharactersArray  = [ ...parsedCharacters, character];

      await AsyncStorage.removeItem('@QSM:Characters');
      await AsyncStorage.setItem('@QSM:Characters', JSON.stringify(newCharactersArray));

      setData({
        characters: [
          ...newCharactersArray
        ]
      });

    } else {
      setData({
        characters: [
          character,
        ]
      });

      await AsyncStorage.setItem('@QSM:Characters', JSON.stringify([character]));
    }
  }, []);

  const removeAllCharacters = useCallback(async () => {
    await AsyncStorage.removeItem('@QSM:Characters');
    setData({} as Data);
  }, []);


  return (
    <CharacterContext.Provider value={{ characters: data.characters, addCharacter, removeAllCharacters}} >
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
