const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const textBoxesElement = document.getElementById('text-boxes');

let state = {};

function getTextBox(boxID) {
    return document.getElementById(boxID).value;
  }

function startGame() {
    state = {};
    showTextNode(1);
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;
    while(optionButtonsElement.firstChild || textBoxesElement.firstChild) {
        if(optionButtonsElement.firstChild){
            optionButtonsElement.removeChild(optionButtonsElement.firstChild);
        }
        if(textBoxesElement.firstChild) {
            textBoxesElement.removeChild(textBoxesElement.firstChild);
        }
    }

    if (textNodeIndex === 1 || textNodeIndex === 8) {
        const textBox = document.createElement('input');
        textBox.type = "text";
        textBox.classList.add('txtbx');
        textBox.id = 'inputBox';
        textBoxesElement.appendChild(textBox);
    }
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            if(textNodeIndex === 9 && option.text === "No") {
                button.setAttribute('disabled', 'disabled');
            }
            if (textNodeIndex === 35) {
                button.addEventListener('click', () => calculate(option)) 
            }
            else button.addEventListener('click', () => selectOption(option, textNodeIndex));
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

function calculate(option){
    let applicant = { };
}

const textNodes = [
    {
        id: 1,
        text: '1. What is your E-Mail?',
        options: [
            {
                text: 'Start the Questionnaire',
                nextText: 2,
                setState: {tEmail: getTextBox("inputBox")}
            }
        ]
    },
    {
        id: 2,
        text: '2. What is your Gender?',
        options: [
            {
                text: 'Male',
                nextText: 3,
                setState: { tGender: 'Male'}
            },
            {
                text: 'Female',
                nextText: 3,
                setState: { tGender: 'Female'}
            },
            {
                text: 'Other',
                nextText: 3,
                setState: { tGender: 'Other'}

            }
        ]
    },
    {
        id: 3,
        text: '3. What is your Age Range?',
        options: [
            {
                text: '18-21',
                nextText: 4,
                setState: { tAgeRange: '18-21'}
            },
            {
                text: '22-25',
                nextText: 4,
                setState: { tAgeRange: '22-25'}
            },
            {
                text: '26-29',
                nextText: 4,
                setState: { tAgeRange: '26-29'}
            },
            {
                text: '30+',
                nextText: 4,
                setState: { tAgeRange: '30+'}
            }
        ]
    },
    {
        id: 4,
        text: '4. What is your Major Type?',
        options: [
            {
                text: 'Bio-Chem',
                nextText: 5,
                setState: { tMajorType: 'Bio-Chem'}
            },
            {
                text: 'Trade-Econ',
                nextText: 5,
                setState: { tMajorType: 'Trade-Econ'}
            },
            {
                text: 'Math-Physics',
                nextText: 5,
                setState: { tMajorType: 'Math-Physics'}
            },
            {
                text: 'IT-Programming',
                nextText: 5,
                setState: { tMajorType: 'IT-Programming'}
            },
            {
                text: 'Art-Design',
                nextText: 5,
                setState: { tMajorType: 'Art-Design'}
            },
            {
                text: 'Medicine-Care',
                nextText: 5,
                setState: { tMajorType: 'Medicine-Care'}
            },
            {
                text: 'Comms-Information',
                nextText: 5,
                setState: { tMajorType: 'Comms-Information'}
            },
            {
                text: 'Psych-Education',
                nextText: 5,
                setState: { tMajorType: 'Psych-Education'}
            },
            {
                text: 'Soc-Politics',
                nextText: 5,
                setState: { tMajorType: 'Soc-Politics'}
            },
            {
                text: 'Language-Culture',
                nextText: 5,
                setState: { tMajorType: 'Language-Culture'}
            },
            {
                text: 'Construct-Dev',
                nextText: 5,
                setState: { tMajorType: 'Construct-Dev'}
            }
        ]
    },
    {
        id: 5,
        text: '5. What is your current Semester?',
        options: [
            {
                text: '0',
                nextText: 6,
                setState: { tSemester: '0'}
            },
            {
                text: '1',
                nextText: 6,
                setState: { tSemester: '1'}
            },
            {
                text: '2',
                nextText: 6,
                setState: { tSemester: '2'}
            },
            {
                text: '3',
                nextText: 6,
                setState: { tSemester: '3'}
            },
            {
                text: '4',
                nextText: 6,
                setState: { tSemester: '4'}
            },
            {
                text: '5',
                nextText: 6,
                setState: { tSemester: '5'}
            },
            {
                text: '6',
                nextText: 6,
                setState: { tSemester: '6'}
            },
            {
                text: '7',
                nextText: 6,
                setState: { tSemester: '7'}
            },
            {
                text: '8',
                nextText: 6,
                setState: { tSemester: '8'}
            },
            {
                text: '9',
                nextText: 6,
                setState: { tSemester: '9'}
            }
        ]
    },
    {
        id: 6,
        text: '6. Are you a danish national, or are you of foreign descent?',
        options: [
            {
                text: 'Domestic',
                nextText: 7,
                setState: { tNationality: 'Domestic'}
            },
            {
                text: 'Foreign',
                nextText: 7,
                setState: { tNationality: 'Domestic'}
            }
        ]
    },
    {
        id: 7,
        text: '7. What is your preferred section of Aalborg to live in?',
        options: [
            {
                text: '9000 Aalborg',
                nextText: 8,
                setState: { tSection: '9000'}
            },
            {
                text: '9200 Aalborg SV',
                nextText: 8,
                setState: { tSection: '9200'}
            },
            {
                text: '9210 Aalborg SØ',
                nextText: 8,
                setState: { tSection: '9210'}
            },
            {
                text: '9220 Aalborg Ø',
                nextText: 8,
                setState: { tSection: '9220'}
            }
        ]
    },
    {
        id: 8,
        text: '8. What is your Monthly Budget?',
        options: [
            {
                text: 'Next Question',
                nextText: 9,
                setState: {budget: getTextBox("budget")}
            }
        ]
    },
    {
        id: 9,
        text: '9. Do you want a roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 10,
            },
            {
                text: 'No',
                nextText: -1
            }
        ]
    },
    {
        id: 10,
        text: '10.1. Are you a smoker?',
        options: [
            {
                text: 'Yes',
                nextText: 11,
                setState: { smokeStatus: 'Yes'}
            },
            {
                text: 'No',
                nextText: 11,
                setState: { smokeStatus: 'No'}
            }
        ]
    },
    {
        id: 11,
        text: '10.2. Do you mind if your roommate is a smoker?',
        options: [
            {
                text: 'Yes',
                nextText: 12,
                setState: { prfSmoke: 'Yes'}
            },
            {
                text: 'No',
                nextText: 13,
                setState: { prfSmoke: 'No'}
            }
        ]
    },
    {
        id: 12,
        text: '10.3. From a scale of 1 to 4, how much do you mind?',
        options: [
            {
                text: '1',
                nextText: 13,
                setState: { prfSmokeInt: '1'}
            },
            {
                text: '2',
                nextText: 13,
                setState: { prfSmokeInt: '2'}
            },
            {
                text: '3',
                nextText: 13,
                setState: { prfSmokeInt: '3'}
            },
            {
                text: '4',
                nextText: 13,
                setState: { prfSmokeInt: '4'}
            }
        ]
    },
    {
        id: 13,
        text: '11.1 Do you have a preference for the gender of your roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 14,
                setState: { prfGender: 'Yes'}
            },
            {
                text: 'No',
                nextText: 15,
                setState: { prfGender: 'No'}
            }
        ]
    },
    {
        id: 14,
        text: '11.2 Do you prefer to room with a male or female student?',
        options: [
            {
                text: 'Male',
                nextText: 15,
                setState: { prfGenderSpec: 'Male'}
            },
            {
                text: 'Female',
                nextText: 15,
                setState: { prfGenderSpec: 'Female'}
            },
            {
                text: 'Other',
                nextText: 15,
                setState: { prfGenderSpec: 'Other'}
            }
        ]
    },
    {
        id: 15,
        text: '12.1 Do you have a preference for the age range of your roommate?',
        options: [
            {
                text: 'Yes',
                nextText: 16,
                setState: { prfAge: 'Yes'}
            },
            {
                text: 'No',
                nextText: 18,
                setState: { prfAge: 'No'}
            }
        ]
    },
    {
        id: 16,
        text: '12.2 Which age range would you prefer?',
        options: [
            {
                text: '18-21',
                nextText: 17,
                setState: { prfAgeSpec: '18-21'}
            },
            {
                text: '22-25',
                nextText: 17,
                setState: { prfAgeSpec: '22-25'}
            },
            {
                text: '26-29',
                nextText: 17,
                setState: { prfAgeSpec: '26-29'}
            },
            {
                text: '30+',
                nextText: 17,
                setState: { prfAgeSpec: '30+'}
            }
        ]
    },
    {
        id: 17,
        text: '12.3 On a scale from 1 to 4, how much does the age range of your roommate matter?',
        options: [
            {
                text: '1',
                nextText: 18,
                setState: { prfAgeInt: '1'}
            },
            {
                text: '2',
                nextText: 18,
                setState: { prfAgeInt: '2'}
            },
            {
                text: '3',
                nextText: 18,
                setState: { prfAgeInt: '3'}
            },
            {
                text: '4',
                nextText: 18,
                setState: { prfAgeInt: '4'}
            }
        ]
    },
    {
        id: 18,
        text: '13.1 Would you consider yourself a religious person?',
        options: [
            {
                text: 'Yes',
                nextText: 19,
                setState: { faith: 'Yes'}
            },
            {
                text: 'No',
                nextText: 19,
                setState: { faith: 'No'}
            }
        ]
    },
    {
        id: 19,
        text: '13.2 Could your roommate be religious?',
        options: [
            {
                text: 'Yes',
                nextText: 20,
                setState: { prfFaith: 'Yes'}
            },
            {
                text: 'No',
                nextText: 20,
                setState: { prfFaith: 'No'}
            }
        ]
    },
    {
        id: 20,
        text: '14.1 Do you have a preference for your roommates place in university compared to yourself?',
        options: [
            {
                text: 'Yes',
                nextText: 21,
                setState: { prfUni: 'Yes'}
            },
            {
                text: 'No',
                nextText: 22,
                setState: { prfUni: 'No'}
            }
        ]
    },
    {
        id: 21,
        text: '14.2 Where do you prefer them to be in their education?',
        options: [
            {
                text: 'Same Major Type',
                nextText: 22,
                setState: { prfUniSpec: 'Major Type'}
            },
            {
                text: 'Same Semester',
                nextText: 22,
                setState: { prfUniSpec: 'Semester'}

            },
            {
                text: 'Both',
                nextText: 22,
                setState: { prfUniSpec: 'Both'}

            },
            {
                text: 'Neither',
                nextText: 22,
                setState: { prfUniSpec: 'Neither'}

            }
        ]
    },
    {
        id: 22,
        text: '15.1 Do you have a preference for your roommates nationality?',
        options: [
            {
                text: 'Yes',
                nextText: 23,
                setState: { prfNat: 'Yes'}

            },
            {
                text: 'No',
                nextText: 24,
                setState: { prfNat: 'No'}

            }
        ]
    },
    {
        id: 23,
        text: '15.2 Do you prefer your roommate to be a danish national, or from abroad?',
        options: [
            {
                text: 'Danish National',
                nextText: 24,
                setState: { prfNatSpec: 'Domestic'}

            },
            {
                text: 'From Abroad',
                nextText: 24,
                setState: { prfNatSpec: 'Foreign'}

            }
        ]
    },
    {
        id: 24,
        text: '16.1 How often do you plan on having visitors?',
        options: [
            {
                text: 'Every Day',
                nextText: 25,
                setState: { visitors: 'Every Day'}

            },
            {
                text: 'A few times a week',
                nextText: 25,
                setState: { visitors: 'A few times a week'}
            },
            {
                text: 'Once a week',
                nextText: 25,
                setState: { visitors: 'Once a week'}
            },
            {
                text: 'Once a month',
                nextText: 25,
                setState: { visitors: 'Once a month'}
            },
            {
                text: 'Very Rarely',
                nextText: 25,
                setState: { visitors: 'Very Rarely'}
            }
        ]
    },
    {
        id: 25,
        text: '16.2 Do you mind your roommate having visitors over?',
        options: [
            {
                text: 'Yes',
                nextText: 26,
                setState: { prfVisitors: 'Yes'}
            },
            {
                text: 'No',
                nextText: 27,
                setState: { prfVisitors: 'No'}
            }
        ]
    },
    {
        id: 26,
        text: '16.3 How often is too much?',
        options: [
            {
                text: 'Every Day',
                nextText: 27,
                setState: { prfVisitorsSpec: 'Every Day'}
            },
            {
                text: 'A few times a week',
                nextText: 27,
                setState: { prfVisitorsSpec: 'A few times a week'}
            },
            {
                text: 'Once a week',
                nextText: 27,
                setState: { prfVisitorsSpec: 'Once a week'}
            },
            {
                text: 'Once a month',
                nextText: 27,
                setState: { prfVisitorsSpec: 'Once a month'}
            },
            {
                text: 'Very Rarely',
                nextText: 27,
                setState: { prfVisitorsSpec: 'Very Rarely'}
            }
        ]
    },
    {
        id: 27,
        text: '17.1 When do you typically go to sleep?',
        options: [
            {
                text: 'Before 21:00',
                nextText: 28,
                setState: { sleepyTime: 'Before 21'}
            },
            {
                text: 'Before Midnight',
                nextText: 28,
                setState: { sleepyTime: 'Before Midnight'}
            },
            {
                text: 'After Midnight',
                nextText: 28,
                setState: { sleepyTime: 'After Midnight'}
            }
        ]
    },
    {
        id: 28,
        text: '17.2 Would you mind your roommate going to sleep late?',
        options: [
            {
                text: 'Yes',
                nextText: 29,
                setState: { prfSleep: 'Yes'}
            },
            {
                text: 'No',
                nextText: 30,
                setState: { prfSleep: 'No'}
            }
        ]
    },
    {
        id: 29,
        text: '17.3 On a scale from 1 to 4, how much do you mind your roommate going to sleep late?',
        options: [
            {
                text: '1',
                nextText: 30,
                setState: { prfSleepInt: '1'}
            },
            {
                text: '2',
                nextText: 30,
                setState: { prfSleepInt: '2'}
            },
            {
                text: '3',
                nextText: 30,
                setState: { prfSleepInt: '3'}
            },
            {
                text: '4',
                nextText: 30,
                setState: { prfSleepInt: '4'}
            }
        ]
    },
    {
        id: 30,
        text: '18.1 Do you prefer to study with company, or alone?',
        options: [
            {
                text: 'With Company',
                nextText: 31,
                setState: { prfStudyComp: 'People'}
            },
            {
                text: 'Alone',
                nextText: 31,
                setState: { prfStudyComp: 'Alone'}
            }
        ]
    },
    {
        id: 31,
        text: '18.2 Do you prefer to study in a silent or noisy environment?',
        options: [
            {
                text: 'Silence',
                nextText: 32,
                setState: { prfStudyAud: 'Silence'}
            },
            {
                text: 'Noise',
                nextText: 32,
                setState: { prfStudyAud: 'Noise'}
            }
        ]
    },
    {
        id: 32,
        text: '19.1 Do you have a special diet?',
        options: [
            {
                text: 'Yes',
                nextText: 33,
                setState: { specialDiet: 'Yes'}
            },
            {
                text: 'No',
                nextText: 33,
                setState: { specialDiet: 'No'}
            }
        ]
    },
    {
        id: 33,
        text: '19.2 Would you mind your roommate having a special diet?',
        options: [
            {
                text: 'Yes',
                nextText: 34,
                setState: { prfSpecialDiet: 'Yes'}
            },
            {
                text: 'No',
                nextText: 35,
                setState: { prfSpecialDiet: 'No'}
            }
        ]
    },
    {
        id: 34,
        text: '19.3 On a scale of 1 to 4, how much would you mind your roommate having a special diet?',
        options: [
            {
                text: '1',
                nextText: 35,
                setState: { prfSpecialDietInt: '1'}
            },
            {
                text: '2',
                nextText: 35,
                setState: { prfSpecialDietInt: '2'}
            },
            {
                text: '3',
                nextText: 35,
                setState: { prfSpecialDietInt: '3'}
            },
            {
                text: '4',
                nextText: 35,
                setState: { prfSpecialDietInt: '4'}
            }
        ]
    },
    {
        id: 35,
        text: '20. Are you ready to find your matching roommate?',
        options: [
            {
                text: 'Calculate'
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