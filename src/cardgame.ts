export class CardGame {
    element: HTMLElement;
    difficulty: string;
    min: number;
    sec: number;
    levels: { [char: number]: number };
    constructor(element: HTMLElement) {
        if (!(element instanceof HTMLElement)) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;
        this.difficulty = '';
        this.min = 0;
        this.sec = 0;
        this.levels = {
            1: 6,
            2: 12,
            3: 18,
        };

        this.start();
    }

    start() {
        this.element.innerHTML = '';

        const startWindow = document.createElement('div');
        startWindow.classList.add('game__start-window');

        const header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Выбери сложность';

        const menuDifficulty = document.createElement('div');
        menuDifficulty.classList.add('game__menu-difficulty');
        for (let i = 1; i <= 3; i++) {
            let buttonDifficulty = document.createElement('button');
            buttonDifficulty.classList.add('difficulty');
            buttonDifficulty.textContent = `${i}`;
            buttonDifficulty.setAttribute('data-difficulty', `${i}`);
            menuDifficulty.appendChild(buttonDifficulty);
        }
        let buttonsDifficulty = menuDifficulty.querySelectorAll('.difficulty');

        const startButton = document.createElement('button');
        startButton.classList.add('game__button', 'game__button_start');
        startButton.textContent = 'Старт';

        const warning = document.createElement('p');
        warning.textContent = 'Выберите сложность';
        warning.classList.add('warning', 'warning_hidden');

        startWindow.appendChild(header);
        startWindow.appendChild(menuDifficulty);
        startWindow.appendChild(startButton);
        startWindow.appendChild(warning);
        this.element.appendChild(startWindow);

        menuDifficulty.addEventListener('click', (event) => {
            const target = event.target;
            this.difficulty = (target as HTMLElement).dataset.difficulty!;
            console.log(this.difficulty);

            buttonsDifficulty.forEach((button) => {
                if (
                    (button as HTMLElement).dataset.difficulty ==
                    this.difficulty
                ) {
                    button.classList.add('difficulty_active');
                    warning.classList.add('warning_hidden');
                } else {
                    button.classList.remove('difficulty_active');
                }
            });
        });

        startButton.addEventListener('click', () => {
            if (this.difficulty === '' || this.difficulty === undefined) {
                warning.classList.remove('warning_hidden');
            } else {
                this.gameWindow();
            }
        });
    }

    gameWindow() {
        console.log('загрузка');

        const cardsArr = [
            '6C',
            '6D',
            '6H',
            '6S',
            '7C',
            '7D',
            '7H',
            '7S',
            '8C',
            '8D',
            '8H',
            '8S',
            '9C',
            '9D',
            '9H',
            '9S',
            'TC',
            'TD',
            'TH',
            'TS',
            'JC',
            'JD',
            'JH',
            'JS',
            'QC',
            'QD',
            'QH',
            'QS',
            'KC',
            'KD',
            'KH',
            'KS',
            'AC',
            'AD',
            'AH',
            'AS',
        ];
        let cardsInGame = [];

        this.element.innerHTML = '';
        this.element.classList.add('position-top');

        const menuGame = document.createElement('div');
        menuGame.classList.add('game__menu');

        const gameTime = document.createElement('div');
        gameTime.classList.add('game__time');

        const gameTimeTitles = document.createElement('div');
        gameTimeTitles.classList.add('game__time-titles');

        const gameTimeTitlesMin = document.createElement('div');
        gameTimeTitlesMin.classList.add(
            'game__time-title',
            'game__time-title_min'
        );
        gameTimeTitlesMin.textContent = 'min';

        const gameTimeTitlesSec = document.createElement('div');
        gameTimeTitlesSec.classList.add(
            'game__time-title',
            'game__time-title_sec'
        );
        gameTimeTitlesSec.textContent = 'sec';

        const gameTimeDigits = document.createElement('div');
        gameTimeDigits.classList.add('game__time-digits');

        const gameTimeDigitMin = document.createElement('div');
        gameTimeDigitMin.classList.add(
            'game__time-digit',
            'game__time-digit_min'
        );
        gameTimeDigitMin.textContent = '00';

        const dot = document.createElement('div');
        dot.textContent = '.';
        dot.classList.add('game__time-digit');

        const gameTimeDigitSec = document.createElement('div');
        gameTimeDigitSec.classList.add(
            'game__time-digit',
            'game__time-digit_sec'
        );
        gameTimeDigitSec.textContent = '00';

        gameTimeTitles.appendChild(gameTimeTitlesMin);
        gameTimeTitles.appendChild(gameTimeTitlesSec);
        gameTimeDigits.appendChild(gameTimeDigitMin);
        gameTimeDigits.appendChild(dot);
        gameTimeDigits.appendChild(gameTimeDigitSec);
        gameTime.appendChild(gameTimeTitles);
        gameTime.appendChild(gameTimeDigits);

        const buttonPlayAgain = document.createElement('button');
        buttonPlayAgain.classList.add(
            'game__button',
            'game__button_play-again'
        );
        buttonPlayAgain.textContent = 'Начать заново';

        menuGame.appendChild(gameTime);
        menuGame.appendChild(buttonPlayAgain);

        const cardField = document.createElement('div');
        cardField.classList.add('game__card-field');

        for (let i = 1; i <= this.levels[Number(this.difficulty)] / 2; i++) {
            let card = cardsArr[Math.floor(Math.random() * cardsArr.length)];
            cardsInGame.push(card);
        }

        cardsInGame = cardsInGame.concat(cardsInGame);
        cardsInGame = cardsInGame.sort(() => Math.random() - 0.5);
        console.log(cardsInGame);

        for (let i = 0; i <= this.levels[Number(this.difficulty)] - 1; i++) {
            let card = document.createElement('div');
            card.classList.add('game__card');
            const cardBack = document.createElement('img');
            cardBack.setAttribute('src', './static/img/shirt.svg');
            cardBack.classList.add('card');
            card.appendChild(cardBack);
            cardBack.setAttribute('data-card', `${cardsInGame[i]}`);
            cardField.appendChild(card);
        }

        this.element.appendChild(menuGame);
        this.element.appendChild(cardField);

        let cards = document.querySelectorAll('.card');
        buttonPlayAgain.addEventListener('click', () => {
            this.element.classList.remove('position-top');
            this.start();
        });

        setTimeout(() => {
            cards.forEach((item) => {
                item.setAttribute(
                    'src',
                    `./static/img/${(item as HTMLElement).dataset.card}.svg`
                );
            });
            this.gameStart();
        }, 1000);
    }

    gameStart() {
        console.log('игра');
        let cards = document.querySelectorAll('.card');
        setTimeout(() => {
            cards.forEach((item) => {
                item.setAttribute('src', './static/img/shirt.svg');
            });
        }, 5000);
    }

    win() {
        const finalWindow = document.createElement('div');
        finalWindow.classList.add('game__final-window');

        const finalImg = document.createElement('img');
        finalImg.classList.add('game__final-img');
        finalImg.setAttribute('src', './static/img/win.png');

        const header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Вы выиграли!';

        const finalTimeTitle = document.createElement('h3');
        finalTimeTitle.classList.add('game__final-time-title');
        finalTimeTitle.textContent = 'Затраченное время:';

        const minute = document.querySelector('.game__time-digit_min');
        const second = document.querySelector('.game__time-digit_sec');
        const finalTimeDigit = document.createElement('div');
        finalTimeDigit.classList.add('game__final-time-digit');
        finalTimeDigit.textContent = `${minute!.textContent}.${
            second!.textContent
        } `;

        const finalButton = document.createElement('button');
        finalButton.classList.add('game__button', 'game__button_play-again');
        finalButton.textContent = 'Играть снова';

        finalWindow.appendChild(finalImg);
        finalWindow.appendChild(header);
        finalWindow.appendChild(finalTimeTitle);
        finalWindow.appendChild(finalTimeDigit);
        finalWindow.appendChild(finalButton);
        this.element.appendChild(finalWindow);

        finalButton.addEventListener('click', () => {
            this.element.classList.remove('position-top');
            this.start();
        });

        this.min = 0;
        this.sec = 0;
    }

    lose() {
        const finalWindow = document.createElement('div');
        finalWindow.classList.add('game__final-window');

        const finalImg = document.createElement('img');
        finalImg.classList.add('game__final-img');
        finalImg.setAttribute('src', './static/img/lose.png');

        const header = document.createElement('h1');
        header.classList.add('game__header');
        header.textContent = 'Вы проиграли!';

        const finalTimeTitle = document.createElement('h3');
        finalTimeTitle.classList.add('game__final-time-title');
        finalTimeTitle.textContent = 'Затраченное время:';

        const finalTimeDigit = document.createElement('div');
        finalTimeDigit.classList.add('game__final-time-digit');
        finalTimeDigit.textContent = `${
            document.querySelector('.game__time-digit_min')!.textContent
        }.${document.querySelector('.game__time-digit_sec')!.textContent} `;

        const finalButton = document.createElement('button');
        finalButton.classList.add('game__button', 'game__button_play-again');
        finalButton.textContent = 'Играть снова';

        finalWindow.appendChild(finalImg);
        finalWindow.appendChild(header);
        finalWindow.appendChild(finalTimeTitle);
        finalWindow.appendChild(finalTimeDigit);
        finalWindow.appendChild(finalButton);
        this.element.appendChild(finalWindow);

        finalButton.addEventListener('click', () => {
            this.element.classList.remove('position-top');
            this.start();
        });

        this.min = 0;
        this.sec = 0;
    }
}
