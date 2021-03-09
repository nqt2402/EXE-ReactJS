
const stateDefault = {
    playerPick: {
        value: 'Kéo',
        image: './gameOTTImage/keo.png',
    },

    playerResult: '',
    playerScores: 0,
    playerOverAll: 0,
    winRate: 0,

    computerPick: {
        value: 'Bao',
        image: './gameOTTImage/bao.png'
    },

    OTTArray: [
        { value: 'Kéo', image: './gameOTTImage/keo.png' },
        { value: 'Búa', image: './gameOTTImage/bua.png' },
        { value: 'Bao', image: './gameOTTImage/bao.png' },
    ],
}

export const OTTReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'PLAYER_PICK': {
            state.playerPick.image = action.imgSource;
            state.playerPick.value = action.imgValue;

            return { ...state };
        }

        case 'PLAY_GAME': {

            let randomIndex = Math.floor(Math.random() * state.OTTArray.length);

            let computerPick = {
                value: state.OTTArray[randomIndex].value,
                image: state.OTTArray[randomIndex].image
            };

            state.computerPick = computerPick;

            switch (state.playerPick.value) {
                case 'Kéo': {
                    switch (computerPick.value) {
                        case 'Kéo': {
                            state.playerResult = 'HÒA';
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Búa': {
                            state.playerResult = 'THUA';
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Bao': {
                            state.playerResult = 'THẮNG';
                            state.playerScores += 1;
                            console.log(computerPick.value);
                            break;
                        }
                    }
                    console.log(state.playerPick.value);
                    break;
                }

                case 'Búa': {
                    console.log(state.playerPick.value);
                    switch (computerPick.value) {
                        case 'Kéo': {
                            state.playerResult = 'THẮNG';
                            state.playerScores += 1;
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Búa': {
                            state.playerResult = 'HÒA';
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Bao': {
                            state.playerResult = 'THUA';
                            console.log(computerPick.value);
                            break;
                        }
                    }
                    break;
                }

                case 'Bao': {
                    console.log(state.playerPick.value);
                    switch (computerPick.value) {
                        case 'Kéo': {
                            state.playerResult = 'THUA';
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Búa': {
                            state.playerResult = 'THẮNG';
                            state.playerScores += 1;
                            console.log(computerPick.value);
                            break;
                        }

                        case 'Bao': {
                            state.playerResult = 'HÒA';
                            console.log(computerPick.value);
                            break;
                        }
                    }
                    break;
                }
            };

            state.playerOverAll += 1;

            state.winRate = `${((state.playerScores / state.playerOverAll) * 100).toFixed(2)}%`;

            return { ...state };
        }

        default: return { ...state };
    }


}