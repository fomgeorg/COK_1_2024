let themeName = "Название темы...";

let allQuestions = [
    {
        type: 1,
        price: 100,
        text: 'Что такое технический регламент? (выберите несколько правильных вариантов)',
        image: false,
        answers: ['Документ, устанавливающий добровольные требования к продукции и процессам', 'Документ, устанавливающий обязательные требования к продукции и процессам', 'Документ, регулирующий безопасность программного обеспечения', 'Документ, регулирующий международные торговые отношения'],
        correctAnswer: [1,2],
        answered: null
    },    
    {
        type: 6,
        text: "Соедините соответствующие элементы",
        leftContents: [
            { type: 'text', value: 'ISO/IEC' },
            { type: 'text', value: 'ГОСТ' }, 
            { type: 'text', value: 'Межгосударственные стандарты' }, 
            { type: 'text', value: 'СТО' }, 
            { type: 'text', value: 'Технический регламент' }
        ],
        rightContents: [
            { type: 'text', value: 'Документы, регулирующие безопасность продукции' },
            { type: 'text', value: 'Международные стандарты в ИТ' }, 
            { type: 'text', value: 'Внутренние стандарты организаций' },
            { type: 'text', value: 'Документы для стран СНГ' },
            { type: 'text', value: 'Государственные стандарты РФ' }
        ],
        image: false,
        video: false,
        correctAnswer: [1, 4, 3, 2, 0],
        price: 150,
        answered: null,
    },
    {
        type: 1,
        price: 200,
        text: 'Какие из следующих стандартов связаны с информационной безопасностью? (выберите несколько правильных ответов)',
        image: false,
        answers: ['ГОСТ Р 34.10-2012', 'ISO/IEC 27001', 'POSIX', 'ГОСТ Р 57107-2016', 'ISO/IEC 12207'],
        correctAnswer: [0,1,3],
        answered: null
    },   
    {
        type: 1,
        price: 250,
        text: 'Проанализируйте описание технического регламента безопасности электрических приборов и выберите, какие шаги должен пройти производитель для соответствия этому регламенту (выберите несколько правильных вариантов)',
        image: false,
        answers: ['Проведение внутреннего тестирования на соответствие стандартам',
            'Отправка продукции на независимую сертификацию', 
            'Упрощение процедуры тестирования для новых моделей',
            'Нанесение маркировки о соответствии стандартам'],
        correctAnswer: [0,1,3],
        answered: null
    }, 
    {
        type: 0,
        price: 300,
        text: 'Проверка неисправности «некорректные уставки» определяется:',
        image: false,
        answers: ['проверкой соответствия оборудования, характеристикам, указанным в спецификации', 'проверкой соответствия параметров и настроек оборудования, указанных на схеме и фактически выставленных на оборудовании', 'проверкой соответствия параметров и настроек оборудования, указанных в спецификации фактически выставленных  на оборудовании'],
        correctAnswer: [1],
        answered: null
    },     
    {
        type: 1,
        price: 100,
        text: 'Какова основная цель стандартизации? (выберите несколько правильных вариантов)',
        image: false,
        answers: ['Повышение стоимости продукции', 'Обеспечение безопасности продукции и услуг', 'Разработка новых продуктов'],
        correctAnswer: [1,2],
        answered: null
    },
    {
        type: 6,
        text: "Соедините соответствующие элементы",
        leftContents: [
            { type: 'text', value: 'ГОСТ' }, 
            { type: 'text', value: 'ГОСТ Р 34.10-2012' }, 
            { type: 'text', value: 'Межгосударственные стандарты' }, 
            { type: 'text', value: 'Технический регламент' }
        ],
        rightContents: [
            { type: 'text', value: 'Устанавливает требования к безопасности продукции' },
            { type: 'text', value: 'Разрабатываются на уровне СНГ ' }, 
            { type: 'text', value: 'Описание методов шифрования и электронной подписи ' },
            { type: 'text', value: 'Добровольные требования к качеству продукции ' }
        ],
        image: false,
        video: false,
        correctAnswer: [3, 2, 1, 0],
        price: 150,
        answered: null,
    },
    {
        type: 6,
        text: "Соедините соответствующие элементы",
        leftContents: [
            { type: 'text', value: 'ISO/IEC' },
            { type: 'text', value: 'ГОСТы' }, 
            { type: 'text', value: 'СТО (Стандарты организаций)' }, 
            { type: 'text', value: 'Технические регламенты' }
        ],
        rightContents: [
            { type: 'text', value: 'Устанавливают обязательные требования к безопасности продукции' },
            { type: 'text', value: 'Описывают международные стандарты информационной безопасности' }, 
            { type: 'text', value: 'Применяются для внутреннего регулирования процессов в отдельных организациях' },
            { type: 'text', value: 'Устанавливают требования к качеству продукции и услуг, являются добровольными, если не включены в технические регламенты' }
        ],
        image: false,
        video: false,
        correctAnswer: [1, 3, 2, 0],
        price: 200,
        answered: null,
    },
    {
        type: 1,
        price: 250,
        text: 'Проанализируйте пример использования стандарта ГОСТ Р 57107-2016 в разработке мобильного приложения и укажите, какие из перечисленных процессов были стандартизированы согласно этому документу (выберите несколько правильных вариантов)',
        image: false,
        answers: ['Планирование разработки',
            'Аудит процессов разработки', 
            'Внутреннее тестирование',
            'Внешняя поддержка и обновление приложения'],
        correctAnswer: [0,1,2],
        answered: null
    },
    {
        type: 5,
        price: 300,
        text: 'Установите соответствие между причинами повреждений и проявлениями повреждений.',
        image: true,
        answers: ["Длительный срок эксплуатации электроустановки", "Ошибки персонала", "Импульсное перенапряжение коммутационных процессов", "Работа электрической машины на двух фазах"],
        correctAnswer: [1, 2, 0, 3],
        answered: null,
    },
    {
        type: 1,
        price: 100,
        text: 'Какой из методов стандартизации направлен на установление наилучшего сочетания безопасности и эффективности? (выберите несколько правильных вариантов)',
        image: false,
        answers: ['Метод унификации', 'Метод типизации', 'Метод оптимизации', 'Метод комплексного подхода'],
        correctAnswer: [0,2,3],
        answered: null
    },
    {
        type: 6,
        text: "Соедините соответствующие элементы",
        leftContents: [
            { type: 'text', value: 'ISO/IEC 27001' }, 
            { type: 'text', value: 'POSIX' }, 
            { type: 'text', value: 'ГОСТ Р 34.10-2012' }
        ],
        rightContents: [
            { type: 'text', value: 'Стандартизация методов шифрования и электронной подписи' },
            { type: 'text', value: 'Стандарты управления информационной безопасностью ' }, 
            { type: 'text', value: 'Стандарт для обеспечения совместимости операционных систем' },
        ],
        image: false,
        video: false,
        correctAnswer: [1, 2, 0],
        price: 150,
        answered: null,
    },
    {
        type: 6,
        text: "Соедините соответствующие элементы",
        leftContents: [
            { type: 'text', value: 'Метод комплексного подхода' },
            { type: 'text', value: 'Метод оптимизации' }, 
            { type: 'text', value: 'Метод типизации' }, 
            { type: 'text', value: 'Метод унификации' }
        ],
        rightContents: [
            { type: 'text', value: 'Унификация USB-разъемов' },
            { type: 'text', value: 'Создание типовых образцов автомобилей' }, 
            { type: 'text', value: 'Оптимизация процессов тестирования ПО' },
            { type: 'text', value: 'Учет всех факторов при стандартизации информационных систем' }
        ],
        image: false,
        video: false,
        correctAnswer: [3, 2, 1, 0],
        price: 200,
        answered: null,
    },
    {
        type: 6,
        text: "Соотнесите примеры применения стандартов с их типами",
        leftContents: [
            { type: 'text', value: 'Процессы жизненного цикла программного обеспечения по ISO/IEC 12207' },
            { type: 'text', value: 'Стандартизация USB-разъемов' },
            { type: 'text', value: 'Требования безопасности электрических приборов' },
            { type: 'text', value: 'Электронная подпись по ГОСТ Р 34.10-2012' }
        ],
        rightContents: [
            { type: 'text', value: 'Определение стандартов для совместимости оборудования' },
            { type: 'text', value: 'Регламентация методов шифрования и защиты данных' },
            { type: 'text', value: 'Требования к защите и безопасности продуктов' },
            { type: 'text', value: 'Стандарты управления жизненным циклом ПО' }
        ],
        image: true,
        video: true,
        correctAnswer: [3, 0, 2, 1],
        price: 250,
        answered: null,
    },
    {
        type: 4, // Тип вопроса
        price: 300, // Цена вопроса
        text: 'Распределите виды насадочных элементов в соответствии с предложенной классификацией.',   // Текст вопроса
        tables: ["Регулярная насадка","Нерегулярная насадка"], // Названия таблиц
        answers: ["dfgdgdgdgdg","dgdggfd ghjgjghjsdf sdfsfsfsdf ghgjghjghjghs sdfsfsdfsdf","dgfdgdg","ghjgj","jljljljkl","l;'l'l;'l;'l;'l;'ghfhfhfh6","dfgdgdgdgdgdgdg fghfghfgh","fhfhfghfghfghfhfhfgh ghfghfghfghfghfhfghf ghfghfghfg","dfgdgdfgdgdfg dfgdgdfgdgdfg dfgdfgghghj"," dfgdgdgd dfgdfg gkhjkhkhtyrytrt sdfsdf fdgdgdfg","dgdgdgdfgdggdfgdfgdfgdfg"], // Массив ответов
        correctAnswer: [[0,1,2],[3,4,5,6,7,8,9,10]],    // Массив верных ответов
        answered: null, // Флаг, ответили ли на этот вопрос
    },        
];