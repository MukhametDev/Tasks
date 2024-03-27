function deepClone(obj, hash = new WeakMap()) {
    // Проверка на null и примитивные типы
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Если объект уже был скопирован, возвращаем его копию
    if (hash.has(obj)) return hash.get(obj);

    // Создание копии с сохранением прототипа
    let result = Object.create(Object.getPrototypeOf(obj));

    // Запоминаем копируемый объект, чтобы избежать бесконечной рекурсии при наличии циклических ссылок
    hash.set(obj, result);

    // Копирование свойств
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            result[key] = deepClone(obj[key], hash);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

// Исходный объект
const obj = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'swimming'],
    car: {
        brand: 'Toyota',
        model: 'Corolla'
    },
    func: function () {
        console.log('Hello');
    },
    symbol: Symbol('test')
};
obj.self = obj;
// Глубокое копирование объекта
const clonedObj = deepClone(obj);

obj.name = 'Jane';
obj.address.city = 'Los Angeles';

clonedObj.name = 'Mike';
clonedObj.address.city = 'New York';

// Проверка на изменение символа
obj.symbol.description = 'test2';
clonedObj.symbol.description = 'test2';

console.log('Исходный объект:', obj);
console.log('Копия объекта:', clonedObj);
