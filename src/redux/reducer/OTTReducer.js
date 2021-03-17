
const stateDefault = {
    // playerPick: {
    //     value: 'Kéo',
    //     image: './gameOTTImage/keo.png',
    // },

    result: {
        playerResult: '',
        playerScores: 0,
        winRate: 0,
        playerOverAll: 0,
    },

    computerPick: {
        id: 'Bao',
        image: './gameOTTImage/bao.png'
    },

    OTTArray: [
        { id: 'Kéo', image: './gameOTTImage/keo.png', bet: false },
        { id: 'Búa', image: './gameOTTImage/bua.png', bet: false },
        { id: 'Bao', image: './gameOTTImage/bao.png', bet: true },
    ],
}

export const OTTReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'BET_GAME': {
            let OTTArrayUpdate = [...state.OTTArray];
            OTTArrayUpdate = OTTArrayUpdate.map((item, index) => {
                if (item.id === action.betID) {
                    return { ...item, bet: true }
                }
                return { ...item, bet: false };
            })
            state.OTTArray = OTTArrayUpdate;
            return { ...state };
        }

        case 'RANDOM': {
            let randomIndex = Math.floor(Math.random() * state.OTTArray.length);
            let computerPick = {
                id: state.OTTArray[randomIndex].id,
                image: state.OTTArray[randomIndex].image
            };
            state.computerPick = computerPick;
            return{...state};
        }

        case 'PLAY_GAME': {

            let playerPick = state.OTTArray.find(item => item.bet === true);
            switch (playerPick.id) {
                case 'Kéo': {
                    switch (state.computerPick.id) {
                        case 'Kéo': {
                            state.result.playerResult = 'HÒA';
                            break;
                        }
                        case 'Búa': {
                            state.result.playerResult = 'THUA';
                            break;
                        }
                        case 'Bao': {
                            state.result.playerResult = 'THẮNG';
                            state.result.playerScores += 1;
                            break;
                        }
                    }
                    break;
                }
                case 'Búa': {
                    switch (state.computerPick.id) {
                        case 'Kéo': {
                            state.result.playerResult = 'THẮNG';
                            state.result.playerScores += 1;
                            break;
                        }
                        case 'Búa': {
                            state.result.playerResult = 'HÒA';
                            break;
                        }
                        case 'Bao': {
                            state.result.playerResult = 'THUA';
                            break;
                        }
                    }
                    break;
                }
                case 'Bao': {
                    switch (state.computerPick.id) {
                        case 'Kéo': {
                            state.result.playerResult = 'THUA';
                            break;
                        }
                        case 'Búa': {
                            state.result.playerResult = 'THẮNG';
                            state.result.playerScores += 1;
                            break;
                        }
                        case 'Bao': {
                            state.result.playerResult = 'HÒA';
                            break;
                        }
                    }
                    break;
                }
            };

            state.result.playerOverAll += 1;

            state.result.winRate = `${((state.result.playerScores / state.result.playerOverAll) * 100).toFixed(2)}%`;

            return { ...state };
        }
        default: return { ...state };
    }
}