export default [
    {
        id: 1,
        sectionName: 'Введение в психологию',
        lessons: [
            {
                id: 1,
                lessonName: 'Общее представление о психологии как о науке',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/introduceToPsihology.html')
                    },
                    {
                        type: 'controlQuestions',
                        value: [
                            {
                                question: 'some question $',
                                answers: ['fuck']
                            },
                            {
                                question: 'some question $',
                                answers: ['fuck']
                            },
                            {
                                question: 'some question $',
                                answers: ['fuck']
                            },
                            {
                                question: 'some question $',
                                answers: ['fuck']
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                lessonName: 'Методы исследования в психологии',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/metods.html')
                    }
                ]
            },
            {
                id: 3,
                lessonName: 'Происхождение и развитие сознания человека',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/theDevelopmentMind.html')
                    }
                ]
            },
            {
                id: 4,
                lessonName: 'Психологическая теория деятельности',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/activityTheory.html')
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        sectionName: 'Психология познавательных процессов',
        lessons: [
            {
                id: 1,
                lessonName: 'Внимание',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/attention.html')
                    }
                ]
            },
            {
                id: 2,
                lessonName: 'Ощущения',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/feeling.html')
                    }
                ]
            },
            {
                id: 3,
                lessonName: 'Восприятие',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/perception.html')
                    }
                ]
            },
            {
                id: 4,
                lessonName: 'Память',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/memory.html')
                    }
                ]
            },
            {
                id: 5,
                lessonName: 'Мышление и речь',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/thoughtAndSpeech.html')
                    }
                ]
            },
            {
                id: 6,
                lessonName: 'Воображение',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/imagination.html')
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        sectionName: 'Психология личности',
        lessons: [
            {
                id: 1,
                lessonName: 'Введение в психологию личности',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/introductionToTheIndividualPsychology.html')
                    }
                ]
            },
            {
                id: 2,
                lessonName: 'Темперамент',
                parts: [
                    {
                        type:'theory',
                        value: require('./configs/temperament.html')
                    }
                ]
            },
            {
                id: 3,
                lessonName: 'Характер',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/character.html')
                    }
                ]
            },
            {
                id: 4,
                lessonName: 'Способности',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/abilities.html')
                    }
                ]
            },
            {
                id: 5,
                lessonName: 'Эмоции и чувства',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/emotionsAndFeelings.html')
                    }
                ]
            },
            {
                id: 6,
                lessonName: 'Воля',
                parts: [
                    {
                        type:'theory',
                        value: require('./configs/volition.html')
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        sectionName: 'Социальная психология',
        lessons: [
            {
                id: 1,
                lessonName: 'Введение в социальную психологию',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/introductionToSocialPsychology.html')
                    }
                ]
            },
            {
                id: 2,
                lessonName: 'Общение',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/talking.html')
                    }
                ]

            },
            {
                id: 3,
                lessonName: 'Психология малых групп',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/psychologyOfSmallGroups.html')
                    }
                ]
            },
            {
                id: 4,
                lessonName: 'Конфликт',
                parts: [
                    {
                        type: 'theory',
                        value: require('./configs/conflict.html')
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        sectionName: 'Основы инженерной психологии',
        lessons: [
            
        ]
    }
];
