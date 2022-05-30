const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');
const textBoxesElement = document.getElementById('text-boxes'); 

function getTextBox(boxID) {
    return document.getElementById(boxID).value;
  }

function startSurvey() {
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
        if ((showOption(option) && textNodeIndex != 35) || (showOption(option) && textNodeIndex === 35 && option.text === "No")) {
            const button = document.createElement('button');
            button.innerText = option.text;
            button.classList.add('btn');
            if(textNodeIndex === 9 && option.text === "No") {
                button.setAttribute('disabled', 'disabled');
            }
            button.addEventListener('click', () => selectOption(option, textNodeIndex));
            optionButtonsElement.appendChild(button); 
        }
        else if (showOption(option) && textNodeIndex === 35){
            const button = document.createElement('button');
            button.innerText = "Calculate";
            button.type = "submit"
            button.classList.add('calc-btn');
            button.addEventListener('click', () => submit());
            optionButtonsElement.appendChild(button); 
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state);
}

function selectOption(option, textNodeIndex) {
    const nextTextNodeId = option.nextText;
    if (nextTextNodeId <= 0) {
        return startSurvey();
    }
    state = Object.assign(state, option.setState);
    console.log(state);
    if (textNodeIndex === 1 || textNodeIndex === 8) {
        var boxText = '';
        if (textNodeIndex === 1) {
            boxText = { email: getTextBox('inputBox') };
            state = Object.assign(state, boxText);
        }
        else {
            boxText = { budget: getTextBox('inputBox')};
            state = Object.assign(state, boxText);
        }
    console.log(boxText);
    }
    showTextNode(nextTextNodeId);
}

function submit(){
    let applicant = [{ Gender: state.gender, 
        Email: state.email, 
        Age_Range: state.ageRange, 
        Major_Type: state.majorType,
        Semester: state.semester, 
        Nationality: state.nationality, 
        Monthly_Budget: state.budget,
        Aalborg_Section: state.section, 
        Smoke_Status: state.smokeStatus, 
        Prf_Smoke: state.prfSmoke, 
        Prf_Smoke_Intensity: state.prfSmokeInt, 
        Prf_Gender: state.prfGender, 
        Prf_Gender_Specifics: state.prfGenderSpec,
        Prf_Age: state.prfAge, 
        Prf_Age_Specifics: state.prfAgeSpec, 
        Prf_Age_Intensity: state.prfAgeInt,
        Faith_Status: state.faith, 
        Prf_Faith: state.prfFaith, 
        Prf_Uni: state.prfUni, 
        Prf_Uni_Specifics: state.prfUniSpec,
        Prf_Nationality: state.prfNat, 
        Prf_Nationality_Specifics: state.prfNatSpec, 
        Visitor_Status: state.visitors,
        Prf_Visitor: state.prfVisitors, 
        Prf_Visitor_Limit: state.prfVisitorsSpec, 
        Sleep_Schedule: state.sleepyTime,
        Prf_Sleep: state.prfSleep, 
        Prf_Sleep_Intensity: state.prfSleepInt, 
        Prf_Study_Crowd: state.prfStudyComp,
        Prf_Study_Noise: state.prfStudyAud, 
        Dietary_Status: state.specialDiet, 
        Prf_Diet: state.prfSpecialDiet, 
        Prf_Diet_Int: state.prfSpecialDietInt 
      }
      ];

let sql = applicant.map(item => `(${item.Gender}, ${item.Email}, ${item.Age_Range}, ${item.Major_Type}, ${item.Semester}, ${item.Nationality}, ${item.Monthly_Budget}, ${item.Aalborg_Section}, ${item.Smoke_Status}, ${item.Prf_Smoke}, ${item.Prf_Smoke_Intensity}, ${item.Prf_Gender}, ${item.Prf_Gender_Specifics}, ${item.Prf_Age}, ${item.Prf_Age_Specifics}, ${item.Prf_Age_Intensity}, ${item.Faith_Status}, ${item.Prf_Faith}, ${item.Prf_Uni}, ${item.Prf_Uni_Specifics}, ${item.Prf_Nationality}, ${item.Prf_Nationality_Specifics}, ${item.Visitor_Status}, ${item.Prf_Visitor}, ${item.Prf_Visitor_Limit}, ${item.Sleep_Schedule}, ${item.Prf_Sleep}, ${item.Prf_Sleep_Intensity}, ${item.Prf_Study_Crowd}, ${item.Prf_Study_Noise}, ${item.Dietary_Status}, ${item.Prf_Diet}, ${item.Prf_Diet_Int})`)

console.log(sql);

const finalQuery = "INSERT INTO applicants.applicant_info (gender, email, age_range, major_type, semester, nationality, monthly_budget, aalborg_section, smoke_status, prf_smoke, prf_smoke_intensity, prf_gender, prf_gender_specifics, prf_age, prf_age_specifics, prf_age_intensity, faith_status, prf_faith, prf_uni, prf_uni_specifics, prf_nationality, prf_nationality_specifics, visitor_status, prf_visitor, prf_visitor_limit, sleep_schedule, prf_sleep, prf_sleep_intensity, prf_study_crowd, prf_study_noise, dietary_status, prf_diet, prf_diet_intensity) VALUES " + sql;

console.log("query("+finalQuery+")"); 

// calculate(applicant);

}

function calculate(info){
    let id;
    for(id.number = 1; id.number < noOfApplicants; id.number++){
        if (info.section == id.Aalborg_Section && info.budget >= id.Monthly_Budget){
            var compatibility = 100;
            if (info.smokeStatus == id.Smoke_Status){
            compatibility*1.15;
            }
            if (info.prfSmoke == "Yes" && id.Smoke_Status == "Yes"){
                if (info.prfSmokeInt == "1"){compatibility*0.9;}
                else if (info.prfSmokeInt == "2"){compatibility*0.7;}
                else if (info.prfSmokeInt == "3"){compatibility*0.5;}
                else compatibility*0.3;
            }
            if (info.prfGender == "Yes"){
                if (info.prfGenderSpec == id.Gender){compatibility*1.5;}
                else compatibility*0.65;
            }
            if (info.prfAge == "Yes"){
                if (info.prfAgeSpec == id.Prf_Age_Specifics){compatibility*1.2}
                if (info.prfAgeSpec == id.Age_Range){
                    if (info.prfAgeInt == "1"){compatibility*1.1}
                    else if (info.prfAgeInt == "2"){compatibility*1.2}
                    else if (info.prfAgeInt == "3"){compatibility*1.3}
                    else compatibility*1.4;
                }
                else {
                    if (info.prfAgeInt == "1"){compatibility*0.8}
                    else if (info.prfAgeInt == "2"){compatibility*0.7}
                    else if (info.prfAgeInt == "3"){compatibility*0.6}
                    else compatibility*0.5;
                }
            }
            if (info.prfFaith == "Yes"){
                if (id.Faith_Status == "Yes"){compatibility*1.2}
                else compatibility*0.75;
            }
            else {
                if (id.Faith_Status == "No"){compatibility*1.3}
                else compatibility*0.75;
            }
            if (info.prfNat == "Yes"){
                if (info.prfNatSpec == id.Nationality) {compatibility*1.5}
                else compatibility*0.8;
            }
            if (info.prfUni == "Yes"){
                if (info.prfUniSpec == "Same Semester"){
                    if (info.semester == id.Semester){compatibility*1.25}
                }
                else if (info.prfUniSpec == "Same Major Type") {
                    if (info.majorType == id.Major_Type){compatibility*1.25}
                }
                else if (info.prfUniSpec == "Both") {
                    if (info.majorType == id.Major_Type && info.semester == id.Semester) {compatibility*1.55}
                    else if (info.majorType == id.Major_Type || info.semester == id.Semester) {compatibility*1.25}
                }
                else if (info.prfUniSpec == "Neither") {
                    if (info.majorType != id.Major_Type && info.semester != id.Semester) {compatibility*1.55}
                    else if (info.majorType != id.Major_Type || info.semester != id.Semester) {compatibility*1.25}
                };
            }
            if (info.prfNat == "Yes"){
                if (info.prfNatSpec == id.Nationality){compatibility*1.35}
                else compatibility*0.7;
            }
            if (info.visitors == id.Visitor_Status){
                compatibility*1.1;
            }
            else compatibility*0.9;
            if (info.prfVisitors == "Yes"){
                if (info.prfVisitorsSpec == "Very Rarely"){
                    if (id.Visitor_Status == "Every Day"){compatibility*0.8*0.8*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "A few times a week") {compatibility*0.8*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "Once a week") {compatibility*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "Once a month") {compatibility*0.8*0.8}
                    else if (id.Visitor_Status == "Very Rarely") {compatibility*0.8}
                }
                else if (info.prfVisitorsSpec == "Once a month"){
                    if (id.Visitor_Status == "Every Day"){compatibility*0.8*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "A few times a week") {compatibility*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "Once a week") {compatibility*0.8*0.8}
                    else if (id.Visitor_Status == "Once a month") {compatibility*0.8}
                    else compatibility*1.3;
                }
                else if (info.prfVisitorsSpec == "Once a week"){
                    if (id.Visitor_Status == "Every Day"){compatibility*0.8*0.8*0.8}
                    else if (id.Visitor_Status == "A few times a week") {compatibility*0.8*0.8}
                    else if (id.Visitor_Status == "Once a week") {compatibility*0.8}
                    else compatibility*1.3;        
                }
                else if (info.prfVisitorsSpec == "A few times a week"){
                    if (id.Visitor_Status == "Every Day"){compatibility*0.8*0.8}
                    else if (id.Visitor_Status == "A few times a week") {compatibility*0.8}
                    else compatibility*1.3;        
                }
                else if (info.prfVisitorsSpec == "Every Day"){
                    if (id.Visitor_Status == "Every Day"){compatibility*0.8}
                    else compatibility*1.3;
                }
            }
            if (info.sleepyTime == id.Sleep_Schedule) {compatibility*1.15}
            else compatibility*0.85;
            if (info.prfSleep == "Yes"){
                if (id.Sleep_Schedule == "Before Midnight"){
                    if (info.prfSleepInt == "1"){compatibility*0.95}
                    else if (info.prfSleepInt == "2"){compatibility*0.8}
                    else if (info.prfSleepInt == "3"){compatibility*0.65}
                    else compatibility*0.5;
                }
                else if (id.Sleep_Schedule == "After Midnight"){
                    if (info.prfSleepInt == "1"){compatibility*0.8}
                    else if (info.prfSleepInt == "2"){compatibility*0.6}
                    else if (info.prfSleepInt == "3"){compatibility*0.4}
                    else compatibility*0.2;
                }
            }
            if (info.prfStudyComp == id.Prf_Study_Crowd){
                if (info.prfStudyComp == "With Company" && info.majorType == id.Major_Type){compatibility*1.6}
                else compatibility*1.15;
            }
            if (info.prfStudyAud == id.Prf_Study_Noise){compatibility*1.4};
            if ((info.prfStudyAud == "Noise" && id.Prf_Study_Crowd == "Alone") || (info.prfStudyComp == "Alone" && id.Prf_Study_Noise == "Noise")){
                compatibility*0.7;
            }
            if (info.specialDiet == "No" && info.specialDiet == id.Dietary_Status) {compatibility*1.1};
            if (info.prfSpecialDiet == "Yes" && info.prfSpecialDiet == id.Dietary_Status){
                if (info.prfSpecialDietInt == "1") {compatibility*0.85}
                else if (info.prfSpecialDietInt == "2") {compatibility*0.70}
                else if (info.prfSpecialDietInt == "3") {compatibility*0.55}
                else compatibility*0.4;
            }
        }
        else compatibility = 0;
        id.calculated_mod = compatibility;
    }
} 

const textNodes = [
    {
        id: 1,
        text: '1. What is your E-Mail?',
        options: [
            {
                text: 'Start the Questionnaire',
                nextText: 2
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
                setState: { gender: 'Male'}
            },
            {
                text: 'Female',
                nextText: 3,
                setState: { gender: 'Female'}
            },
            {
                text: 'Other',
                nextText: 3,
                setState: { gender: 'Other'}

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
                setState: { ageRange: '18-21'}
            },
            {
                text: '22-25',
                nextText: 4,
                setState: { ageRange: '22-25'}
            },
            {
                text: '26-29',
                nextText: 4,
                setState: { ageRange: '26-29'}
            },
            {
                text: '30+',
                nextText: 4,
                setState: { ageRange: '30+'}
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
                setState: { majorType: 'Bio-Chem'}
            },
            {
                text: 'Trade-Econ',
                nextText: 5,
                setState: { majorType: 'Trade-Econ'}
            },
            {
                text: 'Math-Physics',
                nextText: 5,
                setState: { majorType: 'Math-Physics'}
            },
            {
                text: 'IT-Programming',
                nextText: 5,
                setState: { majorType: 'IT-Programming'}
            },
            {
                text: 'Art-Design',
                nextText: 5,
                setState: { majorType: 'Art-Design'}
            },
            {
                text: 'Medicine-Care',
                nextText: 5,
                setState: { majorType: 'Medicine-Care'}
            },
            {
                text: 'Comms-Information',
                nextText: 5,
                setState: { majorType: 'Comms-Information'}
            },
            {
                text: 'Psych-Education',
                nextText: 5,
                setState: { majorType: 'Psych-Education'}
            },
            {
                text: 'Soc-Politics',
                nextText: 5,
                setState: { majorType: 'Soc-Politics'}
            },
            {
                text: 'Language-Culture',
                nextText: 5,
                setState: { majorType: 'Language-Culture'}
            },
            {
                text: 'Construct-Dev',
                nextText: 5,
                setState: { majorType: 'Construct-Dev'}
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
                setState: { semester: '0'}
            },
            {
                text: '1',
                nextText: 6,
                setState: { semester: '1'}
            },
            {
                text: '2',
                nextText: 6,
                setState: { semester: '2'}
            },
            {
                text: '3',
                nextText: 6,
                setState: { semester: '3'}
            },
            {
                text: '4',
                nextText: 6,
                setState: { semester: '4'}
            },
            {
                text: '5',
                nextText: 6,
                setState: { semester: '5'}
            },
            {
                text: '6',
                nextText: 6,
                setState: { semester: '6'}
            },
            {
                text: '7',
                nextText: 6,
                setState: { semester: '7'}
            },
            {
                text: '8',
                nextText: 6,
                setState: { semester: '8'}
            },
            {
                text: '9',
                nextText: 6,
                setState: { semester: '9'}
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
                setState: { nationality: 'Domestic'}
            },
            {
                text: 'Foreign',
                nextText: 7,
                setState: { nationality: 'Foreign'}
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
                setState: { section: '9000'}
            },
            {
                text: '9200 Aalborg SV',
                nextText: 8,
                setState: { section: '9200'}
            },
            {
                text: '9210 Aalborg SØ',
                nextText: 8,
                setState: { section: '9210'}
            },
            {
                text: '9220 Aalborg Ø',
                nextText: 8,
                setState: { section: '9220'}
            }
        ]
    },
    {
        id: 8,
        text: '8. What is your Monthly Budget? (In DKK)',
        options: [
            {
                text: 'Next Question',
                nextText: 9
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
                nextText: 30,
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
                text: 'Calculate',
                nextText: 36
            },
            {
                text: 'No',
                nextText: -1
            }
        ]
    },
    {
        id: 36,
        text: 'Your Ideal roommate is Applicant No. [], who has the email-address of []. ',
        options: [
            {
                text: 'Calculate',
                nextText: -1
            }
        ]
    }
]

startSurvey(); 