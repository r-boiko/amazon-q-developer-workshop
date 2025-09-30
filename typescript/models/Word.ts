export class Word {
    private word: string;
  
    constructor(word: string) {
      this.word = word;
    }
  
    getWord(): string {
      return this.word;
    }
  
    contains(c: string): boolean {
      return this.word.includes(c);
    }
  
    isCorrect(guess: string): boolean {
      return this.word === guess;
    }

    /**
     * Evaluates a guess against the target word and returns feedback
     * @param guess - The word being guessed
     * @returns A string where:
     *  '+' indicates correct letter in correct position
     *  '?' indicates correct letter in wrong position
     *  'X' indicates letter not in word
     */
    getInfo(guess: string): string {
      const result: string[] = [];
  
      for (let i = 0; i < guess.length; i++) {
        const c = guess[i];
        if (this.contains(c)) {
          if (c === this.word[i]) {
            result.push('+');
          } else {
            result.push('?');
          }
        } else {
          result.push('X');
        }
      }
  
      return result.join('');
    }
  }