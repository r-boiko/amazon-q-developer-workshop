import express, { Request, Response } from 'express';
import path from 'path';
import session from 'express-session';
import { WordSelectionService } from '../services/WordSelectionService';
import { GameStatus } from '../models/GameStatus';
import { Word } from '../models/Word';

interface GuessHistory {
    guess: string;
    result: string;
}

class GameController {

    public path = '/game'
    public router = express.Router();
    public workshopMode = false;
    public basePath = "";

    constructor(workshopMode: boolean, basePath: string) { 
        this.workshopMode = workshopMode;
        this.basePath = basePath;
        this.initializeRoutes();
    }

    public initializeRoutes() {

        this.router.get(this.path, (req: Request, res: Response) => {
            const WORD = new Word(new WordSelectionService().getWord());
            const attempts = 0;
            const user = req.query.user as string;
            
            if (!user) {
                res.redirect('/');
                return;
            }

            // Initialize session data
            (req as any).session = (req as any).session || {};
            (req as any).session.guessHistory = [];
        
            res.render('game.ejs', {
                message: 'Make your first guess!',
                attempts,
                status: GameStatus.INPROGRESS,
                user,
                guessHistory: [],
                workshopMode: this.workshopMode,
                basePath: this.basePath
            });
        });

        this.router.post(this.path, (req: Request, res: Response) => {
            const WORD = new Word(new WordSelectionService().getWord());
            let attempts = this.getAttempts(req);
            const guess = req.body.guess;
            const user = req.body.user || 'Default';
            attempts++;
            const result = WORD.getInfo(guess);
            var message = '';
            var status = 'UNKNOWN';
            
            // Initialize session if not exists
            (req as any).session = (req as any).session || {};
            const guessHistory: GuessHistory[] = (req as any).session.guessHistory || [];
            
            // Add current guess to history
            guessHistory.push({ guess, result });
            (req as any).session.guessHistory = guessHistory;
            
            // log the value of WORD and guess
            console.log(`Word: ${WORD.getWord()}, Guess: ${guess}`);

            if (WORD.isCorrect(guess)) {
                message = 'Congratulations! You guessed correctly.';
                status = GameStatus.SUCCESS;
                
            } else if (attempts >= 5) {
                message = 'Game Over! You have used all your attempts.';
                status = GameStatus.FAILED;
            } else {
                message = 'Try again. Your next guess:';
                status = GameStatus.INPROGRESS;
            }
            res.render('game.ejs', { message, attempts, guess, result, status, 
                user, 
                guessHistory,
                workshopMode: this.workshopMode,
                basePath: this.basePath }
            );
        });
    }

    private getAttempts(req: Request): number {
        try {
            const attempts = req.body.attempts;
            if (attempts === undefined) {
                return 0;
            }
            return parseInt(attempts);
        } catch (e) {
            console.log(e);
            return 0;
        }
    }
}

export = GameController;
