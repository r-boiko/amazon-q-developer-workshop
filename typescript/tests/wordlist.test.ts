import {describe, expect, test} from '@jest/globals';
import { WordList } from '../repositories/WordList';

describe('WordList', () => {
    test('make sure tests run', () => {
        expect(true).toBe(true);
    });

    test('getRandomWord returns a 6-character word', () => {
        const wordList = new WordList();
        wordList.addWord('animal');
        wordList.addWord('bakery');
        wordList.addWord('python');
        const randomWord = wordList.getRandomWord();
        expect(randomWord).toBeDefined();
        expect(randomWord.length).toBe(6);
    });

    test('getRandomWord always returns words with 6 characters', () => {
        const wordList = new WordList();
        wordList.addWord('animal');
        wordList.addWord('bakery');
        wordList.addWord('python');
        for (let i = 0; i < 5; i++) {
            const word = wordList.getRandomWord();
            expect(word.length).toBe(6);
        }
    });

    test('getRandomWord returns different words on multiple calls', () => {
        const words = new Set();
        
        // Generate 10 random words
        for (let i = 0; i < 10; i++) {
            WordList.resetInstance(); // Reset to get new instance
            const newWordList = new WordList();
            newWordList.addWord('animal');
            newWordList.addWord('bakery');
            newWordList.addWord('python');
            newWordList.addWord('quaint');
            newWordList.addWord('zephyr');
            words.add(newWordList.getRandomWord());
        }
        
        // Should have more than 1 unique word (randomness test)
        expect(words.size).toBeGreaterThan(1);
    });

    test('getRandomWord returns valid words from the word list', () => {
        const wordList = new WordList();
        wordList.addWord('animal');
        wordList.addWord('bakery');
        wordList.addWord('python');
        const randomWord = wordList.getRandomWord();
        const allWords = wordList.getWords();
        
        expect(allWords).toContain(randomWord);
    });
});
