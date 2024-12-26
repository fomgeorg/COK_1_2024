window.dataLoaded = false;
    let title_of_eom = themeOfDEC;
    let methodRecomendation = 'Изучите материал о породоразрушающем инструменте. Чтобы перейти к учебному материалу, кликайте на блоки с текстом';
    let dropType = 17;
    let typeOfButtons = 'hexagon'; // Можер быть "hexagon", "lightning", "tiles" или "video" или "custom";
    let timings = [ // если typeOfButtons = 'video'
        { time: 30, name: "ertertetert 1" }, // если typeOfButtons = 'video'
        { time: 40, name: "gdfgdgdg 2" }, // если typeOfButtons = 'video'
        { time: 50, name: "Button 3" }, // если typeOfButtons = 'video'
        { time: 60, name: "Button 4" }, // если typeOfButtons = 'video'
        { time: 70, name: "Button 5" }, // если typeOfButtons = 'video'
        { time: 80, name: "Button 5fghfhfh" }, // если typeOfButtons = 'video'
        { time: 90, name: "Button 5kjkjkjk" }, // если typeOfButtons = 'video'
        { time: 100, name: "Button 5wewqeewqw" }, // если typeOfButtons = 'video'
    ]; // если typeOfButtons = 'video'
    let pathToVideo = './content/page_content/test_video.mp4'; // если typeOfButtons = 'video'
    let videoTitle2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'; // если typeOfButtons = 'video'
    // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let customPage = ``; // В CSS должна быть к каждому id или class приписка "_custom", и закидываем их в файл "pages/eom_1_unit/styles/custom_pages.css"
    let background_type = dropType;
    let literaListEOM1 = 
    `Нескоромных, В. В. Бурение скважин: учебное пособие / В. В. Нескоромных. – М.: ИНФРА-М, 2019. – 351 с.
    Храменков, В. Г.  Автоматизация управления технологическими процессами бурения нефтегазовых скважин : учебное пособие для среднего профессионального образования / В. Г. Храменков. – М.: Юрайт, 2024. – 415 с.
    Технология и техника бурения : учебное пособие : в 2 частях. Часть 2. Технология бурения скважин / В.С. Войтенко, А.Д. Смычник, А.А. Тухто, С.Ф. Шемет ; под общей редакцией В.С. Войтенко. – М.: ИНФРА-М, 2024. – 613 с.
    Нескоромных, В. В. Бурение скважин : учебное пособие / В.В. Нескоромных. – Москва : ИНФРА-М ; Красноярск : Сибирский федеральный университет, 2023. – 352 с.
    Гладких, Т. Д. Автоматизация технологических процессов в нефтегазовой отрасли : учебное пособие / Т. Д. Гладких. – М.; Вологда : Инфра-Инженерия, 2022. – 152 с.
    Ладенко, А. А. Основы строительства нефтяных и газовых скважин : учебное пособие / А. А. Ладенко. – М.; Вологда : Инфра-Инженерия, 2022. – 196 с.
    Нескоромных, В. В. Основы техники, технологии и безопасности буровых работ: учебное пособие / В. В. Нескоромных. – М: ИНФРА-М. 2019. – 376 с.
    Заливин, В. Г. Аварийные ситуации в бурении на нефть и газ / В. Г. Заливин, А. Г. Вахромеев. – М.: Инфра-Инженерия, 2018. – 508 с.
    Бабаян, Э. В. Конструкция нефтяных и газовых скважин. Осложнения и их преодоления: учебное пособие / Э. В. Бабаян. – М.: Инфра-Инженерия, 2018. – 252 с. ` // Список литературы
    const data = {
        "index_0":{
            "subtitle": "Классификация породоразрушающего инструмента",
            "paragraph_1":[
                {"text": ` <b>Породоразрушающий инструмент (ПРИ)</b> предназначен для формирования ствола скважины путем разрушения горной породы (ГП). Эффективность разрушения ГП зависит от ее механических свойств и характера воздействия ПРИ (рисунок 1).
                `}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img1_1.png", "img_sign": "Рисунок 1. Классификация ПРИ"}
            ],
            "paragraph_3":[
                {"text": ` Основным породоразрушающим инструментом при бурении являются буровые долота, которые в зависимости от конструкции промывочных устройств делят на <b>струйные</b> (с насадками), в которых струя промывочной жидкости очищает поверхность забоя, частично разрушает породу, и <b>проточные</b>, в которых струя омывает шарошки, частично достигает забоя (рисунок 2).
                `}
            ],
            "paragraph_4":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img1_2.png", "img_sign": "Рисунок 2. Конструкция промывочных устройств"}
            ]
        },
        "index_1":{
            "subtitle": "Особенности устройства и область применения породоразрушающего инструмента",
            "paragraph_1":[
                {"text": ` <b>Долота для сплошного бурения</b> различаются по устройству на лопастные и шарошечные разных типоразмеров, регламентируемых ГОСТ 20692-2003. Область применения ПРИ зависит от разрушаемой горной породы (ГП) (рис. 3).
                `}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img2_1.png", "img_sign": "Рисунок 3. Классификация долот по устройству и назначению"}
            ]
        },
        "index_2":{
            "subtitle": "Устройство шарошечных долот",
            "paragraph_1":[
                {"text": ` <b>Устройство любого вида шарошечных долот имеет общие элементы</b> (рисунок 4):
                    <p>
                    <ul class='ul_custom'>
                        <li>одну секцию (лапу) – одношарошечное долото, две (двухшарошечные) или три секции (лапы) (трехшарошечные);</li>
                        <li>цапфа (цапфы) с опорами в виде сочетания подшипников качения и скольжения, для свободного вращения шарошек;</li>
                        <li>вооружение – элементы, которые называются иденторами (штыри или зубья), непосредственно разрушающих породу.</li>
                    </ul>
                    </p>
                `}
            ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img3_1.png", "img_sign": ""},
                {"text": `
                            1,2,3 – ниппель; <br>
                                4 – уступ;<br>
                                5,6 – полость для смазки и ее компенсанционная система; <br>
                                7 – лапа;<br>
                                8,9,10,12  – подшипники качения и скольжения; <br>
                                11 – герметизирующий элемент; <br>
                                13,14,15,26 – фрезерованные зубья  периферийного, среднего венцов и вершины шарошки<br>
                                17 – шарошка; <br>
                                18 – козырек лапы; <br>
                                19 – замковый палец; <br>
                                20 – цапфа лапы; <br>
                                21 – спинка лапы; <br>
                                22 – корпус долота;<br>
                                23,24,25,27,28 – твердосплавные зубки, запрессованные в тыльный корпус шарошки; периферийного венца,  среднего венца, вершины шарошки, запрессованный в козырек лапы.      
                    `} 
            ],
            "paragraph_3":[
                {"text": `
                    <div class='two_img_custom'>
                        <div class='two_img_1_custom'>
                           <img src='./content/page_content/img3_2.png'>
                        </div>
                         <div class='two_img_2_custom'>
                           <img src='./content/page_content/img3_3.png'>
                        </div>
                    </div> 
                    <p style="text-align: center !important"><b>Рисунок 4. Устройство долот</b></p> <br>
                    `},
            ],
            "paragraph_4":[
                {"image": true, "image_path": "./content/page_content/img3_4.png", "img_sign": " "}
            ]
        },
        "index_3":{
            "subtitle": "Сравнение шарошечных долот",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"text":`
                    Сравнить долота шарошечные и лопастные можно по площади контакта с забоем и перемещением по последнему (перекат или скольжение), что влияет на интенсивность износа шарошек и лезвий; по длине рабочих кромок, что влияет на эффективность разрушения ГП, по крутящему моменту, потребляемым долотом, что приводит к минимальному заклиниванию  шарошек (рисунок 5).
                    `}
            ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img4_1.png", "img_sign": "Рисунок 5. Сравнение долот"}
            ],
            "paragraph_3":[
                {"text":`
                    Сравнить долота с разным количеством шарошек можно по классу разрушаемой горной породы, способу промывки (проточная или гидромониторная), по особенностям бурения (низко- или высокооборотное).
                    `}
            ],
            "paragraph_4":[
                {"text":`<br>
                    <b class='blue_header'>Таблица 1. Сравнение шарошечных долот</b>
                    `}
            ],
            "paragraph_5":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img4_2.png", "img_sign": " "}
            ]
        },
        "index_4":{
            "subtitle": "Алмазные долота",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img5_1.png", "img_sign": "Рисунок 6. Алмазное долото – ДР"},
                {"text": `<p>Поскольку эффективность применения долот зависит от класса горной породы, для бурения вертикальных и наклонно-направленных скважин при прохождении песчаников, доломитов, известняков требуется более совершенный породоразрушающий инструмент – алмазные (матричные) долота, которые имеют порошкообразную твердосплавную головку (матрицу) с алмазами и стальной корпус (рисунок 6).</p>
                <p>
                Алмазные долота модифицированы в зависимости от размещения их зёрен (в поверхностном слое или в объеме матричного материала) (рисунок 7).  Поскольку перед применением таких долот скважина предварительно калибруется шарошечным долотом, возможно разрушение элементов опор. Эти частички металла буровым раствором выносятся лишь частично на поверхность, а остальное  попадает на забой и  выкрашивает алмазы, поэтому  обязательно производят очистку ствола.   
                </p>
                `}
                ],
                "paragraph_2":[
                    {"text": false},
                    {"image": true, "image_path": "./content/page_content/img5_2.png", "img_sign": "Рисунок 7. Модификации алмазных долот"}
                ]
        },
        "index_5":{
            "subtitle": "Новые конструкции породоразрушающего инструмента и их применение",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>
                    <b>Комбинированные (гибридные) долота</b> совмещают особенности долот различных групп. Таким примером долот являются оптимальные конструкции (рисунок 8), разработанные ООО НПП «Буринтех» (г. Уфа) с высококачественным вооружением PDC (поликристаллическая алмазная вставка).
                    </p>
                    <p>
                    При строительстве скважин В ПАО «Сургутнефтегаз» используют в основном породоразрушающий инструмент производителей:  ОАО «Волгабурмаш» (г. Самара) – шарошечные, алмазные долота и бурголовки; ООО НПП «Буринтех» (г. Уфа) – алмазные долота  (рисунок 9) и бурголовки. Указанные высокоэффективные долота по соотношению цена/качество превосходят зарубежные, которые составляли менее 3% от общего количества ПРИ до 2003 г.
                    </p>
                    `},
                {"text":`<div class='two_img_custom'>
                    <div>
                        <img src='./content/page_content/img6_1.png'>
                        <p><b>Рисунок 8. Долото буровое с PDС </b></p>
                    </div>
                    <div>
                        <img src='./content/page_content/img6_2.png'>
                        <p><b>Рисунок 9. Буровое долото с PDC <br> ООО НПП «Буринтех»</b></p>
                    </div>
                </div>` }
                ]
        },
        "index_6":{
            "subtitle": "Рекомендации по применению долот PDC",
            "step_of_popup": "step 3",
            "paragraph_1":[
                {"text":`
                    В процессе бурения долотами PDC их использование необходимо производить строго в соответствии с геолого-техническим нарядом (ГТН) и режимно-технологической картой (РТК) бурения, согласованной со специалистами ООО НПП «БУРИНТЕХ», с соблюдением указанных в них всех режимов и параметров бурения, а также процесса разбуривания технологической оснастки предыдущей колонны.
                    `},
                ],
            "paragraph_2":[
                {"image": true, "image_path": "./content/page_content/img7_1.png", "img_sign": "Рисунок 10. Изучение долот в учебной мастерской"},
                {"text": `На любые отклонения в процессе бурения от режимов и параметров, указанных в ГТН и РТК составляется акт  инженером ООО НПП «БУРИНТЕХ». В процессе бурения долотом PDC запрещается превышать осевую нагрузку на долото выше указанного значения в паспорте долота, производить неравномерную подачу нагрузки на долото, ударять долото о забой скважины, допускать повышенный уровень вибрации КНБК.
                `}
            ]
        },
        "index_7":{
            "subtitle": "Гидравлические насадки",
            "step_of_popup": "step 4",
            "paragraph_1":[
                {"text":`
                    <p>
                        На ресурс работы забойного двигателя и механическую скорость бурения влияет конфигурация и количество <b class='blue_header'> гидравлических насадок долота </b> (рисунок 11). Нарушение их компоновки может привести и к размыву корпуса долота и выпадению резцов. Данные по пересчету суммарной площади (мм<sup>2</sup>) проходного сечения насадок в зависимости от количества приводятся в справочниках.
                    </p>
                    <p>
                        Если невозможно установить на долото насадки одного типоразмера, их используют с минимальной разницей по внутреннему диаметру. Причём в областях ограниченных большими лопастями их располагают симметрично по внутреннему диаметру. Долота, у которых возле больших лопастей по две гидравлические насадки,  меньшую по диаметру  устанавливают  ближе к центру, а большую – дальше от центра.
                    </p>
                    `}
                ],
            "paragraph_2":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img8_1.png", "img_sign": "Рисунок 11. Конфигурация твердосплавных гидравлических насадок"}
            ]
        },
        "index_8":{
            "subtitle": "Эксплуатация и обслуживание породоразрушающего инструмента",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"image": true, "image_path": "./content/page_content/img9_1.png", "img_sign": "Рисунок 12. Подготовка PDC долот к работе", "left_img": true},
                {"text":`
                    <p><b> Подготовка PDC долот к работе:</b></p>
                    <p>
                        <ol class='ul_custom'>
                            <li>Каждое долото, доставляемое на буровую, должно иметь серийный номер, паспорт с отметкой о текущем техническом состоянии и текущей наработке.</li>
                            <li>При поступлении долота на буровую производится его внешний осмотр и проверяется соответствие номера, указанного на долоте, номеру, указанному в паспорте.</li>
                            <li>Проверяется конфигурация и целостность установленных на долоте насадок, сверяется с указанными насадками в паспорте долота.</li>   
                            <li>Проверяется укомплектованность долота согласно паспорту долота.</li>
                            <li>Перед спуском в скважину необходимо внимательно осмотреть долото на наличие возможных повреждений во время его транспортировки или хранения. Следует также осмотреть внутреннюю часть долота и убедиться в отсутствии каких-либо предметов, наличие которых может привести к забиванию насадок. Проверить состояние присоединительной резьбы и упорного уступа (рисунок 12).</li>                    
                        </ol>
                    </p>
                    `}
                ]
        },
        "index_9":{
            "subtitle": "Инструмент для отбора керна",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>Для разрушения породы и углубления скважины по периферии забоя используют <b class='blue_header'> инструмент для отбора керна </b> – снаряд для колонкового бурения, основные части (бурильная головка, колонковая труба, кернодержатель) которого и принципы применения (снаряд с постоянной колонковой трубой или снаряд со съёмной грунтоноской) приведены на рисунке 13. Порядок работы со снарядом показан на рисунке 14.</p>
                    `}
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img10_1.png", "img_sign": "Рисунок 13. Конструктивные особенности снаряда"}    
                ],
            "paragraph_3":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img10_2.png", "img_sign": "Рисунок 14. Порядок работы со снарядом"}    
                ],
        },
        "index_10":{
            "subtitle": "Процесс формирования керна",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>Керн формируется  бурильной головкой, чтобы его оторвать и удержать применяют кернодержатель. Подъём грунтоноски с керном и спуск за ним происходит по процессу,  схема которого продемонстрирована на рисунке 15. По статистике чаще используются снаряды со съёмной грунтоноской. Процесс формирования керна происходит при  действиях, порядок которых отражен на рисунке 16. Режим работы снаряда зависит от параметров долот, глубины бурения, горных пород, способа бурения (турбинный или роторный).</p>
                    `}
                ],
            "paragraph_2":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img11_1.png", "img_sign": "Рисунок 15. Процесс работы грунтоноски"}    
                ],
            "paragraph_3":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img11_2.png", "img_sign": "Рисунок 16. Процесс образования керна"}    
                ],
        },
        "index_11":{
            "subtitle": "Долота для специальных целей",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p>В бурении для специальных целей используют расширители, фрезерные долота, долота для реактивно-турбинного способа бурения, для бурения без подъема бурильной колонные для смены долота. Назначение и особенности перечисленных долот приведены в таблице.</p>
                    <p><b class='blue_header'>Таблица 2. Долота для специальных целей</b></p>
                    `}
                ],
            "paragraph_2":[
                {"text": `
                 <div class='table_new_custom'>
                    <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Назначение</th>
                            <th>Особенности</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style='background-color: #EAEFF7'><b>1. Расширители</b> (рисунок 17)</td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Расширение диаметра скважины (сплошное и колонковое бурение);</li>
                                    <li>Центрирование ПРИ</li>
                                </ul>
                            </td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Форма рабочих органов (шарошечные, лопастные);</li>
                                    <li>Способ крепления рабочего органа (жесткозакрепленные, разборные и раздвижные);</li>
                                    <li>Число рабочих органов;</li>
                                    <li>Тип вооружения рабочего органа</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style='background-color: #EAEFF7'><b>2. Фрезерные долота</b> (рисунок 18)</td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Бурение малоабразивных пород;</li>
                                    <li>Разбуривание цементных мостов и металла в скважине</li>
                                </ul>
                            </td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Рабочая часть – сфера;</li>
                                    <li>Твердосплавные пластинки (съемные) по спирали</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style='background-color: #EAEFF7'><b>3. Долота РТБ</b> (рисунок 19)</td>
                            <td>Реактивно-турбинный способ бурения</td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Вооружения шарошек долот – зубья (фрезерованные или твердосплавные) на периферийных венцах;</li>
                                    <li>Сменные приваренные лапы</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td style='background-color: #EAEFF7'><b>4. Вставные долота</b></td>
                            <td>
                                Для турбинного и роторного бурения без подъема бурильной колонны для смены долота
                            </td>
                            <td>
                                <ul class='ul_table_custom'>
                                    <li>Новое долото спускается, а отработанное поднимается (с помощью каната и специального инструмента – овершота или обратной циркуляции) внутри бурильной колонны</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                    `},
                // {"image": true, "image_path": "./content/page_content/img12_1.png", "img_sign": " "}    
                ],
            "paragraph_3":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img12_2.png", "img_sign": "Рисунок 17. Расширитель"}    
                ],
            "paragraph_4":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img12_3.png", "img_sign": "Рисунок  18. Фрезерное долото"}    
                ],
            "paragraph_5":[
                {"text": false},
                {"image": true, "image_path": "./content/page_content/img12_4.png", "img_sign": "Рисунок 19. Долото РТБ"}    
                ],
        },
        "index_12":{
            "subtitle": "Показатели работы породоразрушающего  инструмента",
            "step_of_popup": "step 5",
            "paragraph_1":[
                {"text":`
                    <p> Определение технико-экономических показателей работы долот позволяет оценить их работу. К ним относятся следующие три показателя: проходка (м), механическая и рейсовая скорости проходки (м/ч).
                    На успешность проводки скважины влияет подбор долот и его отработка, которая зависит от физико-механических особенностей разбуриваемой горной породы. Тип долот и основные параметры бурения (осевая нагрузка на долото, число оборотов, время пребывания на забое и т.д.) указываются в геолого-техническом наряде.
                    Экспериментальные и исследовательские изыскания научно-исследовательских организаций топливно-энергетического комплекса нашей страны приводят к разработке регламентов отработки долот для каждой новой скважины. Типовой регламент приведён на рисунке 20.  </p>
                    `}
                ],
            "paragraph_2":[
            {"text": false},
            {"image": true, "image_path": "./content/page_content/img13_1.png", "img_sign": "Рисунок 20. Содержание регламента отработки долот"}    
            ]
        }
        
    };
    const themesOfEOM1 = Object.values(data).map(item => item.subtitle).join('\n');
window.dataLoaded = true;