# BasicJS

## Общее описание задачи
Ваша задача — написать несколько функций, являющихся решением подзадач. Описания подзадач, а также инструкции по запуску тестов и отправке решений находятся ниже.

---

### **Сосчитай котов!**

![Count cats!](./public/count-cats.jpg)

Задача — сосчитать котов, спрятавшихся на заднем дворе (представленном в виде двумерного массива, `Array`). Коты прячутся отлично, но их **ушки** (`"^^"`) видны очень хорошо. Задача — реализовать функцию `countCats(backyard)`, которая сосчитает котов.

Число найденных котов должно иметь тип `number`. Если коты не найдены, функция должна вернуть `0`.

Например:

`countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
  ])` => `3`

Реализация функции в файле `src/count-cats.js`.

---

### **Carbon dating**

![Carbon dating](./public/%D1%81arbon-dating.jpg) 

Для определения возраста археологических находок широко применяется **радиоизотопный анализ**. Один из его видов — **радиоуглеродный анализ**.

Примерный возраст образца рассчитывается при помощи измерения **соотношения** между **современной** активностью изотопа С14 и активностью этого же изотопа в **образце**.

[Почитайте о методе](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

---
<details>

  <summary>О расчетах</summary>
  Можно использовать формулу из статьи по ссылке выше. 0.693 — это приблизительное значение натурального логарифма двойки.

</details>

---

Задача — реализовать функцию `dateSample(sampleActivity)`, которая рассчитывает примерный возраст образца (в годах). Можно использовать данные `MODERN_ACTIVITY` и `HALF_LIFE_PERIOD`.

Параметр функции `sampleActivity` имеет тип `string`. Рассчитанный возраст образца должен иметь тип `number`. Возраст должен быть **целочисленным**. Возраст должен быть **округлен вверх** (при получении целого числа). В случае неправильного **типа** входного параметра или **несоответствующем** значении активности, или отсутствии аргумента функция должна вернуть `false`.

Например:

`dateSample('1')` => `22387` (либо `22392`, в зависимости от используемой формулы)

`dateSample('WOOT!')` => `false`

Реализация функции в файле `src/carbon-dating.js`.

---

### **Dream team**

![Dream team](./public/dream-team.jpg)  

Представьте себе, что вы с вашими друзьями решаете создать **команду мечты**. Эта команда должна иметь крутое секретное название, в котором зашифрована информация о ней. Например, это могут быть **первые буквы** имен ее членов **в верхнем регистре**, **отсортированные по алфавиту**.

Ваша задача — реализовать функцию `createDreamTeam(members)`, которая возвращает имя только что созданной команды (`string`), основанной на именах ее членов (`array`). Удачи!

Имена членов команды должны быть типа `string`. Значения другого типа должны быть **проигнорированы**. В случае неправильного **типа** аргумента `members` функция должна вернуть `false`.

Имя члена команды может содержать **пробелы**.

Например:

`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`

`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`

Реализация функции в файле `src/dream-team.js`.

### **Какая пора года?**

![What season](./public/season.jpg)

Задача — реализовать функцию `getSeason(date)`, которая принимает объект `Date` и возвращает соответствующую ему пору года. Пора года должна быть типа `string`.

<details>

<summary>Названия пор года в английском языке</summary>
В английском поры года имеют следующие наименования: весна — spring, лето — summer, осень — autumn (fall), зима — winter.

</details>

---

Если аргумент `date` не был передан, функция должна вернуть строку `'Unable to determine the time of year!'` Если аргумент `date` **некорректный**, функция должна выбросить ошибку (`Error`) с сообщением `Invalid date!`.

Тссс! Среди аргументов, которые попадают в эту функцию, затесался вражеский агент. Он руководствуется знаменитой поговоркой: "Если это выглядит как **утка**, плавает как **утка**, и крякает как **утка**, тогда это, скорее всего, **утка** (и неважно, что это **на самом деле**)". Он **искусно маскируется** под настоящую дату (`date`), но умелый javascript-разработчик может поймать его и выбросить ошибку с сообщением `Invalid date!` как раз вовремя!

Например:

`const springDate = new Date(2020, 02, 31)`

`getSeason(springDate)` => `'spring'`

Реализация функции в файле `src/what-season.js`.

---

### **Ханойская башня**

![Tower of hanoi visualisation](./public/pyramid.jpg)

[Ханойская башня](https://www.britannica.com/topic/Tower-of-Hanoi) — знаменитая математическая головоломка 18 столетия. Она состоит из трех стержней и некоторого числа дисков разных размеров, которые могут быть надеты на стержень. Головоломка начинается с того, что диски расположены друг на друге, причем наименьший расположен сверху. Диски образуют конус.

Цель головоломки — переместить всю стопку на другой стержень, следуя этим простым **правилам**:
* перемещать можно только **один** диск за раз
* можно брать только **верхний** диск с одной из стопок и помещать на **верхушку** другой стопки или на пустой стержень
* диск **большего** размера нельзя класть на диск **меньшего** размера

Ваша задача значительно легче, чем придумывать алгоритм, решающий эту задачу :)

Реализуйте функцию `calculateHanoi`, которая принимает параметры `diskNumber` и `turnsSpeed`. `diskNumber` — это число **дисков**, а `turnsSpeed` — скорость перемещения дисков (в **ходах** в **час**). Оба параметра являются числами (тип `number`)

Функция `calculateHanoi` возвращает объект с 2 свойствами:
* `turns` (минимальное число (тип `number`) ходов, необходимое для решения головоломки)
* `seconds` (минимальное число (тип `number`) **секунд**, необходимое для решения головоломки при заданной скорости; должно быть целым числом, полученным в результате округления результата расчетов в меньшую **(floor)** сторону)

Вам не нужно валидировать входные параметры.

Например:

`calculateHanoi(9, 4308)` => `{ turns: 511, seconds: 427 }`

Реализация функции в файле `src/hanoi-tower.js`.

---

### **Преобразование массива**

![Transform array](./public/gears.jpg)

Ваша задача — реализовать функцию `transform(arr)`, которая принимает массив (тип `array`) и возвращает **преобразованный** массив, основываясь на **управляющих последовательностях**, которые содержит `arr`. **Управляющие последовательности** — это определенные строковые элементы вышеупомянутого массива:
* `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.

Например:

`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

`transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

Функция не должна изменять исходный массив. Управляющие последовательности применяются **последовательно, слева направо** к элементам из исходного массива. Управляющие последовательности **не попадают** в преобразованный массив. Управляющие последовательности в исходном массиве не встречаются подряд (не следуют одна за другой). Если около управляющей последовательности **нет элемента**, к которому она может быть применена в исходном массиве, либо он был удален в процессе преобразования массива, **она не делает ничего**. Функция должна выбросить ошибку с сообщением `'arr' parameter must be an instance of the Array!`, если `arr` не является массивом.

Реализация функции в файле `src/transform-array.js`.

---

### **Чейнмейкер**

![Chaining](./public/chaining.jpg)
Давайте попрактикуемся в [чейнинге](https://en.wikipedia.org/wiki/Method_chaining)!

Ваша задача — реализовать объект `chainMaker`, который будет создавать цепочки. Оконченная цепочка это строка (тип `string`) и выглядит следующим образом: `'( value1 )~~( value2 )~~( value3 )'`.

`chainMaker` имеет несколько **методов** для создания цепочек и их модификации:
* `getLength` возвращает текущую длину цепи в виде числа;
* `addLink(value)` добавляет звено, содержащее строковое представление `value` к цепочке;
* `removeLink(position)` удаляет звено цепи, находящееся в заданном положении;
* `reverseChain` разворачивает цепь задом наперед;
* `finishChain` завершает цепь и **возвращает** ее.

Методы `addLink`, `reverseChain` и `removeLink` **чейнятся**, в то время как остальные – нет. Если `addLink` вызван без аргументов, он добавляет пустое звено (`'(  )'`) в цепочку. Если `removeLink` принимает **некорректную** позицию (например, не являющуюся числом, или дробное число, или ссылающуюся на несуществующее звено), он должен выбросить **ошибку** с сообщением `You can't remove incorrect link!`. После вызова метода `finishChain` существующая на данный момент цепь должна быть удалена, как и в случае, если была выброшена **ошибка**.

Например:

`chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`

Реализация задачи в файле `src/simple-chain.js`.

---

### **Recursive depth calculator**

![Go deeper](https://i.imgur.com/k7lADiM.jpg)  
Your task is to implement the class `DepthCalculator` with method `calculateDepth` that takes an `array` and returns its depth.

`calculateDepth` method must pass the given array **recursively**. Depth of a **flat** array is 1. Method must correctly work with `arrays` that contain no elements or contain empty `arrays`.

For example:

`const depthCalc = new DepthCalculator();`

`depthCalc.calculateDepth([1, 2, 3, 4, 5])` => `1`

`depthCalc.calculateDepth([1, 2, 3, [4, 5]])` => `2`

`depthCalc.calculateDepth([[[]]])` => `3`

Write your code in `src/recursive-depth.js`.

---
### **Extended repeater**

![Extended repater](https://upload.wikimedia.org/wikipedia/commons/4/4b/Macaws_at_Jurong_Bird_Park_-Singapore-8.jpg)  
Your task is to implement the function `repeater(str, options)`.
This function returns a repeating `string` based on the given parameters:
* `str` is a `string` to repeat;
* `options` is an `object` of options, that contains properties:
  * `repeatTimes` sets the `number` of repetitions of the `str`;
  * `separator` is a `string` separating repetitions of the `str`;
  * `addition` is an additional `string` that will be added to each repetition of the `str`;
  * `additionRepeatTimes` sets the `number` of repetitions of the `addition`;
  * `additionSeparator` is a `string` separating repetitions of the `addition`.

The `str` and `addition` parameters are `strings` by default. In case when **type** of these parameters is different, they must be converted to a `string`.

`separator` and `additionSeparator` parameters are `strings`. 

`repeatTimes` and `additionRepeatTimes` are integer `numbers` (in the absence of any of them, the corresponding string is not repeated).

The only indispensable parameter is `str`, any others may be not defined. `separator` default value is `'+'`. `additionSeparator` default value is `'|'`.

For example: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

Write your code in `src/extended-repeater.js`.

---

### **Vigenere cipher**

![Ciphering machine](https://live.staticflickr.com/1931/44960892745_471bee66bb_b.jpg)  
Cryptography is awesome! Let's try to organize production of encryption machines. Our machines will use one of the encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the [**Vigenere cipher**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Our machine will have 2 modifications: **direct** and **reverse** (the type of machine is determined at the moment of creation). The **direct** machine simply encodes and decodes the string that was transmitted to it, and the **reverse** machine returns an **inverted** string after encoding and decoding.

Your task is to implement the class `VigenereCipheringMachine`. `constructor` of this `class` accepts `true` (**or nothing**) to create **direct** machine and `false` to create **reverse** machine.
Each instance of `VigenereCipheringMachine` must have 2 methods: `encrypt` and `decrypt`. 

`encrypt` method accepts 2 parameters: `message` (`string` to encode) and `key` (`string`-keyword).

`decrypt` method accepts 2 parameters: `encryptedMessage` (`string` to decode) and `key` (`string`-keyword).

These parameters for both methods are **mandatory**. If at least one of them has not been given, an `Error` with message `Incorrect arguments!` must be thrown. The text returned by these methods must be **uppercase**. Machines encrypt and decrypt **only latin alphabet** (all other symbols remain unchanged).

You don't need to validate value sent to `constructor` and to `encrypt` and `decrypt` methods (except throwing an `Error` on absence of argument for these methods).

For example:

`const directMachine = new VigenereCipheringMachine();`

`const reverseMachine = new VigenereCipheringMachine(false);`

`directMachine.encrypt('attack at dawn!', 'alphonse')` => `'AEIHQX SX DLLU!'`

`directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'ATTACK AT DAWN!'`

`reverseMachine.encrypt('attack at dawn!', 'alphonse')` => `'!ULLD XS XQHIEA'`

`reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse')` => `'!NWAD TA KCATTA'`

Write your code in `src/vigenere-cipher.js`.

---

### **(ST) Common character count**
Your task is to implement function that accepts two **strings** (`s1` and `s2`) and returns **number** of common characters between them.

For example:

`getCommonCharacterCount('aabcc', 'adcaa')` => `3`

Write your code in `src/common-character-count.js`.

---

### **(ST) Delete digit**
Your task is to implement function that accepts **integer number** (`n`) and returns maximal **number** you can obtain by deleting exactly one digit of the given number.

For example:

`deleteDigit(152) => 52`

Write your code in `src/delete-digit.js`.

---

### **(ST) DNS stat**
Your task is to implement function that accepts an **array** of domains (`domains`) and returns the **object** with the appearances of the DNS.

For example:

`getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru'])` => `{'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}`

Write your code in `src/dns-stats.js`.

---

### **(ST) Encode line**
Your task is to implement function that accepts **string** (`str`) and returns its encoded version.

For example:

`encodeLine('aabbbc')` => `'2a3bc'`

Write your code in `src/encode-line.js`.

---

### **(ST) File names**
There's a list of file, since two files cannot have equal names, the one which comes later will have a suffix **(k)**, where k is the smallest **integer** such that the found name is not used yet.
Your task is to implement function that accepts **array** of names (`names`) and returns an **array** of names that will be given to the files.

For example:

`renameFiles(["file", "file", "image", "file(1)", "file"])` => `["file", "file(1)", "image", "file(1)(1)", "file(2)"]`

Write your code in `src/file-names.js`.

---

### **(ST) Get email domain**
Your task is to implement function that accepts email address (`email`) and returns it's **domain**.  

For example:

`getEmailDomain('prettyandsimple@example.com')` => `'example.com'`

Write your code in `src/get-email-domain.js`.

---

### **(ST) Is MAC-48 Address?**
The **MAC-48 address** is six groups of two hexadecimal digits (0 to 9 or A to F) separated by hyphens.
Your task is to implement function that accepts **string** (`inputString`) and returns `true` if **string** is valid **MAC-48 address**.  

For example:

`isMAC48Address('00-1B-63-84-45-E6')` => `true`

Write your code in `src/mac-adress.js`.

---

### **(ST) Matrix elements sum**
Given **matrix**, a rectangular matrix of **integers**, just add up all the values that **don't appear below a "0"**.

For example:

```
const matrix = [
 [0, 1, 1, 2],
 [0, 5, 0, 0],
 [2, 0, 3, 3]
];

getMatrixElementsSum(matrix) => 9
```

Write your code in `src/matrix-elements-sum.js`.

---

### **(ST) Minesweeper**
In the popular Minesweeper game you have a board with some mines and cells that have a **number** in it that indicates the total **number of mines** in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

For example:

```
const matrix = [
 [true, false, false],
 [false, true, false],
 [false, false, false]
];

minesweeper(matrix) => [
 [1, 2, 1],
 [2, 1, 1],
 [1, 1, 1]
];
```

Write your code in `src/mine-sweeper.js`.

---

### **(ST) Sort by height**
Given an array with heights, sort them except if the value is `-1`.
Your task is to implement function that accepts **array** (`arr`) and returns it **sorted**

For example:

`sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])` => `[-1, 150, 160, 170, -1, -1, 180, 190]`

Write your code in `src/sort-by-height.js`.

---

### **(ST) Sum digits**
Your task is to implement function that accepts a **number** (`n`) and returns the **sum of its digits** until we get to a **one digit number**.  

For example:

For 100, the result should be 1 (1 + 0 + 0 = 1)  
`getSumOfDigits(100)` => `1`

For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)  
`getSumOfDigits(91)` => `1`

Write your code in `src/sum-digits.js`.

---

© [AlreadyBored](https://github.com/alreadybored)  

& tasks:
* Common character count
* Delete digit
* DNS stat
* Encode line
* File names
* Get email domain
* Is MAC-48 Adress?
* Matrix elements sum
* Minesweeper
* Sort by height
* Sum digits

are integrated from [Short track 2021 repo](https://github.com/rkhaslarov/rs-school-short-track-2021)

& Thanks [mikhama](https://github.com/mikhama) for assistance!
