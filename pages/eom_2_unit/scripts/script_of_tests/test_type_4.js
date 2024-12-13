document.getElementById('control_button_3').style.display = 'none';
document.getElementById('control_button_2').style.display = 'inline-block';
function checkBtnStatus(){
    var testData = data[`index_${currentPageIndex}`];
    var attempts = parseInt(localStorage.getItem(`attempts_${currentPageIndex}`));
    if(blockButtonEOM2 == 1 && attempts !== 0 && testData.hasOwnProperty('test')){
        backWardBtn.classList.add('gray_dis');
        backWardBtn.disabled = true;
        nextBtn.classList.add('gray_dis');
        nextBtn.disabled = true;
    } else {
        backWardBtn.classList.remove('gray_dis');
        backWardBtn.disabled = false;
        nextBtn.classList.remove('gray_dis');
        nextBtn.disabled = false;
    }
}
checkBtnStatus();
function checkParagraph(){
    var testObj = data[`index_${currentPageIndex}`].test; //
    if (!testObj){
        return; // Полностью прерываем выполнение функции
    }
    // Если найден ключ paragraph_1, прерываем выполнение
    if (testObj.paragraph_1){
        document.getElementById('control_button_1').classList.remove('gray_dis');
        document.getElementById('control_button_1').disabled = false;
        document.getElementById('control_button_4').classList.remove('gray_dis');
        document.getElementById('control_button_4').disabled = false;
        return; // Прерываем выполнение функции
    }
    var anwserArr3 = testObj.find(item => item.answers).answers;
    var pathImg = testObj.find(item => item.image !== undefined).image; // путь к фотке
    var leftColLength = testObj.find(item => item.leftColumn).leftColumn; //кол-во колонн слева
    var rightColLength = testObj.find(item => item.rightColumn).rightColumn; //кол-во колонн справа
    answerButton.classList.remove('gray_dis');
    answerButton.disabled = false;
    var element = document.querySelector('.number_of_step');
    var number = parseInt(element.textContent, 10);
    var attempts = localStorage.getItem(`attempts_${number}`);
    if (attempts == 0){
        answerButton.classList.add('gray_dis');
        answerButton.disabled = true;
    }
    restartButton.classList.add('hidden');
    restartButton.disabled = false;
    var drag3 = document.createElement('div');
    drag3.classList = 'drag3';
    drag3.id = 'drag3';
    var dragInner = document.createElement('div');
    dragInner.classList = 'drag-inner';
    dragInner.id = 'drag-inner';
    var row2 = document.createElement('div');
    row2.classList = 'row2';
    row2.id = 'row2';
    var imgPlc = document.createElement('div');
    imgPlc.classList = 'img';
    imgPlc.id = 'img';
    var leftColElem = document.createElement('div');
    leftColElem.classList = 'left-col';
    leftColElem.id = 'left-col';
    var rightColElem = document.createElement('div');
    rightColElem.classList = 'right-col';
    rightColElem.id = 'right-col';
    dragInner.appendChild(drag3);
    dragInner.appendChild(row2);
    contentDiv.appendChild(dragInner);
    drag3.appendChild(leftColElem);
    drag3.appendChild(imgPlc);
    drag3.appendChild(rightColElem);
    var leftCol = [];
    var rightCol = [];
    var fullList = [];
    var realIndex = 0;
    var rowList = [];
    function waitForData(){
        if (window.dataLoaded){
            createRow();
            createFields();
            createImg();
            function createImg(){
                var imgOuter = document.getElementById('img');
                var img = document.createElement('img');
                img.setAttribute('src', pathImg);
                img.setAttribute('alt', 'img');
                imgOuter.appendChild(img);
            }
            function createRow(){
                [...anwserArr3]
                .map(a => ({ value: a, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(a => a.value)
                .forEach((item, index) =>{
                    var rowItem = document.createElement('li');
                    rowItem.setAttribute('id', index);
                    rowItem.classList.add('item3');
                    rowItem.draggable = 'true';
                    rowItem.innerText = item;
                    rowList.push(rowItem);
                    row2.appendChild(rowItem);
                })
            }
            function createFields(){
                for (var i = 0; i < leftColLength; i++){
                    var field = document.createElement('div');
                    field.setAttribute('id', realIndex);
                    field.classList.add('field');
                    leftCol.push(field);
                    leftColElem.appendChild(field);
                    realIndex++;
                }
                for (var i = 0; i < rightColLength; i++){
                    var field = document.createElement('div');
                    field.setAttribute('id', realIndex);
                    field.classList.add('field');
                    rightCol.push(field);
                    rightColElem.appendChild(field);
                    realIndex++;
                }
                fullList = [...leftCol, ...rightCol];
            }
            // ЭТО ДЛЯ ОШИБОК
            var element = document.querySelector('.number_of_step');
            var number = parseInt(element.textContent, 10);
            function initializeAttempts(){
                var attempts = localStorage.getItem(`attempts_${number}`);
                if (!attempts){
                    localStorage.setItem(`attempts_${number}`, '2'); // Устанавливаем 2 попытки
                }
            }
            // ЭТО ДЛЯ ОШИБОК
            initializeAttempts();
            function findPreviousParagraph1(currentIndex){
                var keys = Object.keys(data);
                var currentIndexPosition = keys.indexOf(currentIndex);
                // Ищем ближайший предыдущий paragraph_1
                for (var i = currentIndexPosition - 1; i >= 0; i--){
                    var key = keys[i];
                    if (data[key].paragraph_1){
                        return key; // Возвращаем индекс с найденным paragraph_1
                    }
                }
                return null; // Если не найдено
            }
            // ЭТО ДЛЯ ОШИБОК
            // Пример использования
            function toTheoryPage(){
                var element = document.querySelector('.number_of_step');
                var number = parseInt(element.textContent, 10);
                var attempts = localStorage.getItem(`attempts_${number}`);
                if (attempts === 0){
                    document.getElementById('control_button_2').style.display = 'none';
                    document.getElementById('control_button_3').style.display = 'none';
                }
                document.getElementById('control_button_2').style.display = 'none';
                document.getElementById('control_button_3').style.display = 'none';
                nextBtn.classList.remove('gray_dis');
                nextBtn.disabled = false;
                backWardBtn.classList.remove('gray_dis');
                backWardBtn.disabled = false;
                window.alert("Вы потратили все попытки для прохождения задания, кнопка 'Ответить' заблокирована!!!");
            }
            // ЭТО ДЛЯ ОШИБОК
            function disabvarest(){
                document.getElementById('control_button_2').style.display = 'none';
                document.getElementById('control_button_3').style.display = 'none';
                setTimeout(() => toTheoryPage(), 1);
            }
            function checkAnwser5(){
                var isTestCorrect = true; // Общая переменная, которая определяет правильность всего теста
                var attempts = parseInt(localStorage.getItem(`attempts_${number}`));
                var shouldDecreaseAttempts = false; // Флаг для уменьшения попыток
                fullList.forEach((item, index) =>{
                    var isCorrect = true; // Локальная переменная для проверки каждого элемента
                    if (item.querySelector('.item3')?.innerText.trim() === undefined){
                        item.classList.add('incorrect');
                        isCorrect = false;
                        partiallyCorrect = true;
                    } else{
                        var itemName = item.querySelector('.item3').innerText.trim();
                        if (itemName !== anwserArr3[index]){
                            item.classList.add('incorrect');
                            isCorrect = false;
                            partiallyCorrect = true;
                        } else{
                            item.classList.remove('incorrect');
                            item.classList.add('correct');
                            partiallyCorrect = true;
                        }
                    }
                    if (!isCorrect && partiallyCorrect){
                        shouldDecreaseAttempts = true; // Устанавливаем флаг для уменьшения попыток
                    }
                    if (!isCorrect){
                        isTestCorrect = false;
                    }
                    if (isCorrect){
                        backWardBtn.classList.remove('gray_dis');
                        backWardBtn.disabled = false;
                        nextBtn.classList.remove('gray_dis');
                        nextBtn.disabled = false;
                    }
                    localStorage.setItem('answer_form_index_' + `${currentPageIndex}`, JSON.stringify({questionPlace: isCorrect}));
                });
                // Уменьшаем количество попыток, если необходимо
                if (shouldDecreaseAttempts){
                    attempts--;
                    localStorage.setItem(`attempts_${number}`, attempts.toString());
                    if (attempts === 0){
                        disabvarest();
                    };
                };
                // Сохраняем общий результат теста
                localStorage.setItem('answer_form_index_' + `${currentPageIndex}`, JSON.stringify({questionPlace: isTestCorrect}));
            }
            answerButton.onclick = function(){
                checkAnwser5();
                answerButton.classList.add('hidden');
                restartButton.classList.remove('hidden');
                document.getElementById('control_button_2').style.display = 'none';
                document.getElementById('control_button_3').style.display = 'inline-block';
            };
            // Выбор строки, в которую будут добавляться sortable-элементы
            var row = document.getElementById('row2');
            // Выбор всех элементов с классом 'field'
            var fields = document.querySelectorAll('.field');
            // Преобразование NodeList в массив для удобства работы
            var arr = Array.from(fields);
            new Sortable(row,{
                group:{
                    name: 'shared',
                    put: false // Запретить добавление элементов в этот список
                },
                animation: 150,
                onEnd: function(e){
                    if (e.to.className != "row2"){
                        e.item.style = "background-color: #00000000; color: black; border: none; box-shadow: none;";
                    }
                }
            });
            for (var i of arr){
                new Sortable(i,{
                    group: 'shared',
                    animation: 150,
                    onAdd: function(e){
                        var itemEl = e.item;
                        var targetList = e.to;
                        if (targetList.children.length > 1){
                            var existingItem;
                            if (targetList.children[0] === itemEl){
                                existingItem = targetList.children[1];
                            } else{
                                existingItem = targetList.children[0];
                            }
                            var sourceList = e.from;
                            sourceList.appendChild(existingItem);
                            targetList.appendChild(itemEl);
                            if (targetList.className != "field") itemEl.style = "";
                            if (sourceList.className == "row2") existingItem.style = "";
                        }
                    },
                    onEnd: function(e){
                        if (e.to.className == "row2") e.item.style = "";
                    }
                });
            }
        } else{
            // Если данные ещё не загружены, ждем и проверяем снова
            setTimeout(waitForData, 50);
        }
    }
    waitForData();
}
checkParagraph();