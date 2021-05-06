import { shuffleArray } from "@/utils/helpers";

const QUESTIONS = [
  {
    id: 'Q1',
    type: 'binary-radio',
    text: 'With consonants air passes rather freely through the mouth because there is very little narrowing.',
    options: [
      {
        text: 'TRUE',
        value: true,
      },
      {
        text: 'FALSE',
        value: false,
      }
    ]
  },
  {
    id: 'Q2',
    type: 'binary-radio',
    text: 'Labiodental consonants occur when you block airflow out of the mouth by bringing your lips together.',
    options: [
      {
        text: 'TRUE',
        value: true,
      },
      {
        text: 'FALSE',
        value: false,
      }
    ]
  },
  {
    id: 'Q3',
    type: 'multi-radio',
    text: 'Which of these consonants is NOT a bilabial.',
    options: [
      {
        text: '/p/',
        value: 1,
      },
      {
        text: '/b/',
        value: 2,
      },
      {
        text: '/f/',
        value: 3,
      },
      {
        text: '/m/',
        value: 4,
      },
    ]
  },
  {
    id: 'Q4',
    type: 'binary-radio',
    text: 'Dental consonants occur when you block/constrict airflow by placing your slimy tongue against your upper teeth.',
    options: [
      {
        text: 'TRUE',
        value: true,
      },
      {
        text: 'FALSE',
        value: false,
      }
    ]
  },
  {
    id: 'Q5',
    type: 'multi-checkbox',
    text: 'Which consonants are DENTAL consonant ?',
    options: [
      {
        text: '/v/',
        value: 1,
      },
      {
        text: '/f/',
        value: 2,
      },
      {
        text: '/ð/',
        value: 3,
      },
      {
        text: '/dʒ/',
        value: 4,
      },
    ]
  },
  {
    id: 'Q6',
    type: 'binary-radio',
    text: 'The only palatal consonant is /j/.',
    options: [
      {
        text: 'TRUE',
        value: true,
      },
      {
        text: 'FALSE',
        value: false,
      }
    ]
  },
  {
    id: 'Q7',
    type: 'multi-checkbox',
    text: 'Which of these consonants is NOT velar ?',
    options: [
      {
        text: '/ŋ/',
        value: 1,
      },
      {
        text: '/k/',
        value: 2,
      },
      {
        text: '/n/',
        value: 3,
      },
      {
        text: '/w/',
        value: 4,
      },
    ]
  },
  {
    id: 'Q8',
    type: 'multi-radio',
    text: 'The only glottal consonant is ...',
    options: [
      {
        text: '/ð/',
        value: 1,
      },
      {
        text: '/ŋ/',
        value: 2,
      },
      {
        text: '/h/',
        value: 3,
      },
      {
        text: '/k/',
        value: 4,
      },
    ]
  },
  {
    id: 'Q9',
    type: 'multi-radio',
    text: "/θ/ – “thick” and “bath” – air is forced through upper teeth and tongue is called ...",
    options: [
      {
        text: 'Labiodental',
        value: 1,
      },
      {
        text: 'labial',
        value: 2,
      },
      {
        text: 'alveolar',
        value: 3,
      },
      {
        text: 'dental',
        value: 4,
      },
    ]
  },
  {
    id: 'Q10',
    type: 'multi-radio',
    text: "/f/ – “fro” and “calf“- air is forced through the upper teeth and lower lip is called ...",
    options: [
      {
        text: 'Dental',
        value: 1,
      },
      {
        text: 'velar',
        value: 2,
      },
      {
        text: 'bilabial',
        value: 3,
      },
      {
        text: 'labiodental',
        value: 4,
      },
    ]
  },
  {
    id: 'Q11',
    type: 'multi-radio',
    text: "/z/ – “zit” and “jazz” – air is forced through tongue and alveolar ridge is called ...",
    options: [
      {
        text: 'Dental',
        value: 1,
      },
      {
        text: 'labiodental',
        value: 2,
      },
      {
        text: 'alveolar',
        value: 3,
      },
      {
        text: 'bilabial',
        value: 4,
      },
    ]
  },
  {
    id: 'Q12',
    type: 'multi-radio',
    text: "/tʃ/ – “chick” and “match” – air is blocked with tongue just beyond the alveolar ridge is called...",
    options: [
      {
        text: 'Dental',
        value: 1,
      },
      {
        text: 'labiodental',
        value: 2,
      },
      {
        text: 'palatal',
        value: 3,
      },
      {
        text: 'alveolar',
        value: 4,
      },
    ]
  },
  {
    id: 'Q13',
    type: 'multi-radio',
    text: "/w/ – “wet” and “howard” – back of tongue raises to velum (but not too close!) and lips are rounded is called...",
    options: [
      {
        text: 'Alveolar',
        value: 1,
      },
      {
        text: 'velar',
        value: 2,
      },
      {
        text: 'palatal',
        value: 3,
      },
      {
        text: 'bilabial',
        value: 4,
      },
    ]
  },
  {
    id: 'Q14',
    type: 'multi-radio',
    text: "/h/ – “happy” and “hope” – actually /h/ isn’t a fricative. It’s technically not even a real consonant sound since there’s no constriction/obstruction of airflow. This is called by ...",
    options: [
      {
        text: 'Glottal',
        value: 1,
      },
      {
        text: 'velar',
        value: 2,
      },
      {
        text: 'labiodental',
        value: 3,
      },
      {
        text: 'alveolar',
        value: 4,
      },
    ]
  },
  {
    id: 'Q15',
    type: 'multi-radio',
    text: "Sounds involve only a partial blockage of the vocal tract so that air has to be forced through a narrow channel is called ...",
    options: [
      {
        text: 'Nasal',
        value: 1,
      },
      {
        text: 'fricative',
        value: 2,
      },
      {
        text: 'plosive',
        value: 3,
      },
      {
        text: 'affricate',
        value: 4,
      },
    ]
  },
  {
    id: 'Q16',
    type: 'multi-radio',
    text: "Obstruction of airflow in producing a sound is called ...",
    options: [
      {
        text: 'Consonant',
        value: 1,
      },
      {
        text: 'IPA',
        value: 2,
      },
      {
        text: 'vowel',
        value: 3,
      },
      {
        text: 'alphabet',
        value: 4,
      },
    ]
  },
  {
    id: 'Q17',
    type: 'multi-radio',
    text: "When the vocal folds are held together, they start to vibrate when air passes through them. This phenomena is called ...",
    options: [
      {
        text: 'Voiced',
        value: 1,
      },
      {
        text: 'Labial',
        value: 2,
      },
      {
        text: 'Velar',
        value: 3,
      },
      {
        text: 'Voiceless',
        value: 4,
      },
    ]
  },
  {
    id: 'Q18',
    type: 'multi-radio',
    text: "Free air flow obstruction in English sound is called ?",
    options: [
      {
        text: 'Consonant',
        value: 1,
      },
      {
        text: 'vowel',
        value: 2,
      },
      {
        text: 'Semi-vowel',
        value: 3,
      },
      {
        text: 'IPA',
        value: 4,
      },
    ]
  },
  {
    id: 'Q19',
    type: 'multi-radio',
    text: "Free air flow obstruction in English sound is called ?",
    options: [
      {
        text: 'Consonant',
        value: 1,
      },
      {
        text: 'vowel',
        value: 2,
      },
      {
        text: 'Semi-vowel',
        value: 3,
      },
      {
        text: 'IPA',
        value: 4,
      },
    ]
  },
  {
    id: 'Q20',
    type: 'multi-radio',
    text: "The tongue position of vowel /i/, /u/ is ...",
    options: [
      {
        text: 'High',
        value: 1,
      },
      {
        text: 'middle',
        value: 2,
      },
      {
        text: 'back',
        value: 3,
      },
      {
        text: 'low',
        value: 4,
      },
    ]
  },
  {
    id: 'Q21',
    type: 'multi-radio',
    text: "The position of the tongue of /u/, /o/, /a/ ...",
    options: [
      {
        text: 'Back',
        value: 1,
      },
      {
        text: 'low',
        value: 2,
      },
      {
        text: 'middle',
        value: 3,
      },
      {
        text: 'high',
        value: 4,
      },
    ]
  },
  {
    id: 'Q22',
    type: 'multi-checkbox',
    text: "Which refers to vowel production?",
    options: [
      {
        text: 'Fricatives',
        value: 1,
      },
      {
        text: 'Affricates',
        value: 2,
      },
      {
        text: 'Monophthongs',
        value: 3,
      },
      {
        text: 'Diphthongs',
        value: 4,
      },
      {
        text: 'Fracitives',
        value: 5,
      },
      {
        text: 'Affracites',
        value: 6,
      },
    ]
  },
  {
    id: 'Q23',
    type: 'multi-radio',
    text: "Place of articulation....",
    options: [
      {
        text: 'describes how airflow is obstructed to make a sound',
        value: 1,
      },
      {
        text: 'is not part of phonology',
        value: 2,
      },
      {
        text: "involves every sound that doesn't include voicing",
        value: 3,
      },
      {
        text: 'describes where constriction happens to make a soundhthongs',
        value: 4,
      },
    ]
  },
  {
    id: 'Q24',
    type: 'multi-radio',
    text: "Manner of articulation...",
    options: [
      {
        text: 'describes the way airflow is obstructed in the vocal tract to make a consonant sound',
        value: 1,
      },
      {
        text: 'describes the way airflow is obstructed in the vocal tract to make a vowel sound',
        value: 2,
      },
      {
        text: "describes how the vocal cords use air to make a consonant sound",
        value: 3,
      },
    ]
  },
  {
    id: 'Q25',
    type: 'multi-radio',
    text: "Choose the best description for the first sound in the American pronunciation of the word 'teeth.'",
    options: [
      {
        text: 'Alveolar',
        value: 1,
      },
      {
        text: 'Labiodental',
        value: 2,
      },
      {
        text: "Alveolar-palatal",
        value: 3,
      },
      {
        text: "Velar",
        value: 4,
      },
    ]
  },
];

const ANSWERS = [
  {
    id: 'A1',
    for: 'Q1',
    value: false
  },
  {
    id: 'A2',
    for: 'Q2',
    value: false
  },
  {
    id: 'A3',
    for: 'Q3',
    value: 3
  },
  {
    id: 'A4',
    for: 'Q4',
    value: true
  },
  {
    id: 'A5',
    for: 'Q5',
    value: [3]
  },
  {
    id: 'A6',
    for: 'Q6',
    value: true
  },
  {
    id: 'A7',
    for: 'Q7',
    value: [3, 4]
  },
  {
    id: 'A8',
    for: 'Q8',
    value: 3
  },
  {
    id: 'A9',
    for: 'Q9',
    value: 4
  },
  {
    id: 'A10',
    for: 'Q10',
    value: 4
  },
  {
    id: 'A11',
    for: 'Q11',
    value: 3
  },
  {
    id: 'A12',
    for: 'Q12',
    value: 3
  },
  {
    id: 'A13',
    for: 'Q13',
    value: 4
  },
  {
    id: 'A14',
    for: 'Q14',
    value: 1
  },
  {
    id: 'A15',
    for: 'Q15',
    value: 2
  },
  {
    id: 'A16',
    for: 'Q16',
    value: 1
  },
  {
    id: 'A17',
    for: 'Q17',
    value: 1
  },
  {
    id: 'A18',
    for: 'Q18',
    value: 2
  },
  {
    id: 'A19',
    for: 'Q19',
    value: 1
  },
  {
    id: 'A20',
    for: 'Q20',
    value: 1
  },
  {
    id: 'A21',
    for: 'Q21',
    value: 1
  },
  {
    id: 'A22',
    for: 'Q22',
    value: [3, 4]
  },
  {
    id: 'A23',
    for: 'Q23',
    value: 3
  },
  {
    id: 'A24',
    for: 'Q24',
    value: 2
  },
  {
    id: 'A25',
    for: 'Q25',
    value: 1
  },
]

const getAnswerMap = () => ANSWERS.reduce((acc, answer) => {
  return { ...acc, [answer.for]: answer }
}, {});

const getQuestionMap = () => QUESTIONS.reduce((acc, question) => {
  return { ...acc, [question.id]: question }
}, {});

const compareAnswer = ({ question, answer, userAnswer }) => {
  switch (question.type) {
    case 'binary-radio':
    case 'multi-radio':
      return answer.value == userAnswer.value;

    case 'multi-checkbox':
      return answer.value.length === userAnswer.value.length &&
        answer.value.every(v => userAnswer.value.includes(v));

    default:
      throw new Error("unsupported question type: " + question.type);
  }
}


export const createTest = (questions = QUESTIONS) => {
  questions = [...questions];
  shuffleArray(questions);
  questions.forEach((q) => {
    (q.type !== 'binary-radio') && shuffleArray(q.options);
  });
  return questions;
}

export const markTest = (userAnswers) => {
  const answerMap = getAnswerMap();
  const questionMap = getQuestionMap();
  const result = [];
  let score = 0;
  const total = Object.keys(questionMap).length;
  userAnswers.forEach(userAnswer => {
    const question = questionMap[userAnswer.for];
    const answer = answerMap[userAnswer.for];
    const isCorrect = compareAnswer({
      question,
      answer,
      userAnswer
    });
    isCorrect && ++score;
    result.push({
      ...question,
      isCorrect,
      correctAnwser: answer.value,
      userAnswer: userAnswer.value,
    })
  });
  return { result, score, total };
}

