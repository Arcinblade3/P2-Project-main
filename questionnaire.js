const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild);
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            button.addEventListener('click', () => selectOption(option));
            optionButtonsElement.appendChild(button); 
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState);
    showTextNode(nextTextNodeId);
}

const textNodes = [
    {
        id: 2,
        text: 'What is your Gender?',
        options: [
            {
                text: 'Male',
                nextText: 3
            },
            {
                text: 'Female',
                nextText: 3
            },
            {
                text: 'Other',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'What is your Age Range?',
        options: [
            {
                text: '18-21',
                nextText: 4
            },
            {
                text: '22-25',
                nextText: 4
            },
            {
                text: '26-29',
                nextText: 4
            },
            {
                text: '30+',
                nextText: 4
            }
        ]
    },
    {
        id: 4,
        text: 'What is your Major Type?',
        options: [
            {
                text: 'Bio-Chem',
                nextText: 5
            },
            {
                text: 'Trade-Econ',
                nextText: 5
            },
            {
                text: 'Math-Physics',
                nextText: 5
            },
            {
                text: 'IT-Programming',
                nextText: 5
            },
            {
                text: 'Art-Design',
                nextText: 5
            },
            {
                text: 'Medicine-Care',
                nextText: 5
            },
            {
                text: 'Comms-Information',
                nextText: 5
            },
            {
                text: 'Psych-Education',
                nextText: 5
            },
            {
                text: 'Soc-Politics',
                nextText: 5
            },
            {
                text: 'Language-Culture',
                nextText: 5
            },
            {
                text: 'Construct-Dev',
                nextText: 5
            }
        ]
    },
    {
        id: 5,
        text: 'What is your current Semester?',
        options: [
            {
                text: '1',
                nextText: 6
            },
            {
                text: '2',
                nextText: 6
            },
            {
                text: '3',
                nextText: 6
            },
            {
                text: '4',
                nextText: 6
            },
            {
                text: '5',
                nextText: 6
            },
            {
                text: '6',
                nextText: 6
            },
            {
                text: '7',
                nextText: 6
            },
            {
                text: '8',
                nextText: 6
            },
            {
                text: '9',
                nextText: 6
            }
        ]
    },
    {
        id: 6,
        text: 'Are you a danish national, or are you of foreign descent?',
        options: [
            {
                text: 'Domestic',
                nextText: 7
            },
            {
                text: 'Foreign',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'What is your preferred section of Aalborg to live in?',
        options: [
            {
                text: '9000 Aalborg',
                nextText: 8
            },
            {
                text: '9200 Aalborg SV',
                nextText: 8
            },
            {
                text: '9210 Aalborg SØ',
                nextText: 8
            },
            {
                text: '9220 Aalborg Ø',
                nextText: 8
            }
        ]
    },
    {
        id: 9,
        text: 'Do you want a roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 10
            },
            {
                text: 'No',
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: 'Are you a smoker?',
        options: [
            {
                text: 'Yes',
                nextText: 11
            },
            {
                text: 'No',
                nextText: 11
            }
        ]
    },
    {
        id: 11,
        text: 'Do you mind if your roommate is a smoker?',
        options: [
            {
                text: 'Yes',
                nextText: 12
            },
            {
                text: 'No',
                nextText: 13
            }
        ]
    },
    {
        id: 12,
        text: 'From a scale of 1 to 4, how much do you mind?',
        options: [
            {
                text: '1',
                nextText: 13
            },
            {
                text: '2',
                nextText: 13 
            },
            {
                text: '3',
                nextText: 13
            },
            {
                text: '4',
                nextText: 13
            }
        ]
    },
    {
        id: 13,
        text: 'Do you have a preference for the gender of your roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 14
            },
            {
                text: 'No',
                nextText: 15
            }
        ]
    },
    {
        id: 14,
        text: 'Do you prefer to room with a male or female student?',
        options: [
            {
                text: 'Male',
                nextText: 15
            },
            {
                text: 'Female',
                nextText: 15
            },
            {
                text: 'Other',
                nextText: 15
            }
        ]
    },
    {
        id: 15,
        text: 'Do you have a preference for the age range of your roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 16
            },
            {
                text: 'No',
                nextText: 18
            }
        ]
    },
    {
        id: 16,
        text: 'Which age range would you prefer?',
        options: [
            {
                text: '18-21',
                nextText: 17
            },
            {
                text: '22-25',
                nextText: 17
            },
            {
                text: '26-29',
                nextText: 17
            },
            {
                text: '30+',
                nextText: 17
            }
        ]
    },
    {
        id: 17,
        text: 'On a scale from 1 to 4, how much does the age range of your roommate matter?',
        options: [
            {
                text: '1',
                nextText: 18
            },
            {
                text: '2',
                nextText: 18
            },
            {
                text: '3',
                nextText: 18
            },
            {
                text: '4',
                nextText: 18
            }
        ]
    },
    {
        id: 18,
        text: 'Would you consider yourself a religious person?',
        options: [
            {
                text: 'Yes',
                nextText: 19
            },
            {
                text: 'No',
                nextText: 19
            }
        ]
    },
    {
        id: 19,
        text: 'Could your roommate be religious?',
        options: [
            {
                text: 'Yes',
                nextText: 20
            },
            {
                text: 'No',
                nextText: 20
            }
        ]
    },
    {
        id: 20,
        text: 'Do you have a preference for your roommates place in university compared to yourself?',
        options: [
            {
                text: 'Yes',
                nextText: 21
            },
            {
                text: 'No',
                nextText: 22
            }
        ]
    },
    {
        id: 21,
        text: 'Where do you prefer them to be in their education?',
        options: [
            {
                text: 'Same Major Type',
                nextText: 22
            },
            {
                text: 'Same Semester',
                nextText: 22
            },
            {
                text: 'Both',
                nextText: 22
            },
            {
                text: 'Neither',
                nextText: 22
            }
        ]
    },
    {
        id: 22,
        text: 'Do you have a preference for your roommates nationality?',
        options: [
            {
                text: 'Yes',
                nextText: 23
            },
            {
                text: 'No',
                nextText: 24
            }
        ]
    },
    {
        id: 23,
        text: 'Do you prefer your roommate to be a danish national, or from abroad?',
        options: [
            {
                text: 'Domestic',
                nextText: 24
            },
            {
                text: 'Foreign',
                nextText: 24
            }
        ]
    },
    {
        id: 24,
        text: 'How often do you plan on having visitors?',
        options: [
            {
                text: 'Every Day',
                nextText: 25
            },
            {
                text: 'A few times a week',
                nextText: 25
            },
            {
                text: 'Once a week',
                nextText: 25
            },
            {
                text: 'Once a month',
                nextText: 25
            },
            {
                text: 'Very Rarely',
                nextText: 25
            }
        ]
    },
    {
        id: 25,
        text: 'Do you mind your roommate having visitors over?',
        options: [
            {
                text: 'Yes',
                nextText: 26
            },
            {
                text: 'No',
                nextText: 27
            }
        ]
    },
    {
        id: 26,
        text: 'How often is too much?',
        options: [
            {
                text: 'Every Day',
                nextText: 27
            },
            {
                text: 'A few times a week',
                nextText: 27
            },
            {
                text: 'Once a week',
                nextText: 27
            },
            {
                text: 'Once a month',
                nextText: 27
            },
            {
                text: 'Very Rarely',
                nextText: 27
            }
        ]
    },
    {
        id: 27,
        text: 'When do you typically go to sleep?',
        options: [
            {
                text: 'Before 21:00',
                nextText: 28
            },
            {
                text: 'Before Midnight',
                nextText: 28
            },
            {
                text: 'After Midnight',
                nextText: 28
            }
        ]
    },
    {
        id: 28,
        text: 'Would you mind your roommate going to sleep late?',
        options: [
            {
                text: 'Yes',
                nextText: 29
            },
            {
                text: 'No',
                nextText: 30
            }
        ]
    },
    {
        id: 29,
        text: 'On a scale from 1 to 4, how much do you mind your roommate going to sleep late?',
        options: [
            {
                text: '1',
                nextText: 30
            },
            {
                text: '2',
                nextText: 30
            },
            {
                text: '3',
                nextText: 30
            },
            {
                text: '4',
                nextText: 30
            }
        ]
    },
    {
        id: 30,
        text: 'Do you prefer to study with company, or alone?',
        options: [
            {
                text: 'With Company',
                nextText: 31
            },
            {
                text: 'Alone',
                nextText: 31
            }
        ]
    },
    {
        id: 31,
        text: 'Do you prefer to study in a silent or noisy environment',
        options: [
            {
                text: 'Silence',
                nextText: 32
            },
            {
                text: 'Noise',
                nextText: 32
            }
        ]
    },
    {
        id: 32,
        text: 'Do you have a special diet?',
        options: [
            {
                text: 'Yes',
                nextText: 33
            },
            {
                text: 'No',
                nextText: 33
            }
        ]
    },
    {
        id: 33,
        text: 'Would you mind your roommate having a special diet?',
        options: [
            {
                text: 'Yes',
                nextText: 34
            },
            {
                text: 'No',
                nextText: 35
            }
        ]
    },
    {
        id: 34,
        text: 'On a scale of 1 to 4, how much would you mind your roommate having a special diet?',
        options: [
            {
                text: '1',
                nextText: 35
            },
            {
                text: '2',
                nextText: 35
            },
            {
                text: '3',
                nextText: 35
            },
            {
                text: '4',
                nextText: 35
            }
        ]
    },
/*    {
        id: 2,
        text: 'you venture forth',
        options: [
            {
                text: 'trade goo for sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'trade goo for shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true},
                nextText: 3
            },
            {
                text: 'Ignore',
                nextText: 3
            },
        ]
    } */
]

startGame(); 