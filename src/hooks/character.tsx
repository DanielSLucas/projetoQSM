import React, { createContext, useCallback, useState, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Character {
  id: number;
  score: number;
  characterName: string;
  hint1: string;
  hint2: string;
  hint3: string;
  hint4: string;
  hint5: string;
}

interface CharacterContextData {
  characters: Character[];
  score: number;
  addCharacter(character: Character): Promise<void>;
  setScore(score: number, id: number): Promise<void>;
  removeAllCharacters(): Promise<void>;
}

interface Data {
  characters: Character[];
  totalScore: number;
}

const CharacterContext = createContext<CharacterContextData>({} as CharacterContextData);

export const CharacterProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);

  const addCharacter = useCallback(async (character: Character) => {
    const characters = await AsyncStorage.getItem('@QSM:Characters');

    if (characters) {
      const parsedCharacters: Character[] = JSON.parse(characters);

      const findCharacter = parsedCharacters.findIndex( arrayItem => arrayItem.id === character.id);
      const characterExists = findCharacter !== -1;

      if (characterExists) {
        const filteredCharacters = parsedCharacters.filter( arrayItem => arrayItem.id !== character.id);
        const updatedCharactersArray = [...filteredCharacters, character];

        await AsyncStorage.removeItem('@QSM:Characters');
        await AsyncStorage.setItem('@QSM:Characters', JSON.stringify(updatedCharactersArray));

        setData({
          characters: [
            ...updatedCharactersArray
          ],
          totalScore: data.totalScore,
        });
      } else {
        const newCharactersArray  = [ ...parsedCharacters, character];

        await AsyncStorage.removeItem('@QSM:Characters');
        await AsyncStorage.setItem('@QSM:Characters', JSON.stringify(newCharactersArray));

        setData({
          characters: [
            ...newCharactersArray
          ],
          totalScore: data.totalScore,
        });
      }


    } else {
      setData({
        characters: [
          character,
        ],
        totalScore: data.totalScore,
      });

      await AsyncStorage.setItem('@QSM:Characters', JSON.stringify([character]));
    }
  }, []);

  const setScore = useCallback(async (score: number, id: number) => {
    const characters = await AsyncStorage.getItem('@QSM:Characters');

    if (characters) {
      let parsedCharacters: Character[] = JSON.parse(characters);
      const findCharacterIndex = parsedCharacters.findIndex(character => character.id === id);

      if (findCharacterIndex !== -1) {
        parsedCharacters[findCharacterIndex].score = score;
      }

      await AsyncStorage.removeItem('@QSM:Characters');
      await AsyncStorage.setItem('@QSM:Characters', JSON.stringify(parsedCharacters));

      const total = parsedCharacters.reduce((scoreTotal, character) => {
        return scoreTotal + character.score;
      }, 0);

      setData({
        characters: parsedCharacters,
        totalScore: total,
      });
    }

  }, []);

  const removeAllCharacters = useCallback(async () => {
    await AsyncStorage.removeItem('@QSM:Characters');
    setData({} as Data);
  }, []);


  return (
    <CharacterContext.Provider
      value={{ characters: data.characters, score: data.totalScore, addCharacter, setScore, removeAllCharacters}}
    >
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
