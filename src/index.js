class Sorter {
  constructor() {
    this.sortermas = [];
    this.CompareFunc = function(a,b) {return a-b};
// Создаём экземпляр класса Sorter
  }

  add(element) {
    this.sortermas.push(element);// Добавление в массив
  }

  at(index) {
    return this.sortermas[index];// Вывод одного элемента по индексу
  }

  get length() {
    return this.sortermas.length;// Длина массива
  }

  toArray() {
    return this.sortermas;// Вывод всех элементов массива
  }

  sort(indices) {
    var sortmas = [];
    var index = [];
    for (var k = 0; k < indices.length; k++)
      index.push(indices[k]);//Массив Index заполнится индексами, которые нужно сортировать

    for (var k = 0; k < indices.length; k++)
      sortmas.push(this.sortermas[indices[k]]);//Массив Sortmas заполнится значениями исх. массива по индексам

    for (var j = 0; j < indices.length-1; j++)
      for (var i = 0; i < (indices.length-1-j); i++)
        if (index[j] > index[j+1]){
          var a = index[i];
          index[i] = index[i+1];
          index[i+1] = a;
        }//Сортировка индексов

    for (var j = 0; j <= indices.length-1; j++)
      for (var i = 0; i <= (indices.length-1-j); i++)
        if (sortmas[i] > sortmas[i+1]){
          var a = sortmas[i];
          sortmas[i] = sortmas[i+1];
          sortmas[i+1] = a;
        }// Сортировка элементов массива

    for (var i = 0; i < this.sortermas.length; i++)//Меняю отсортированные значения в исходном массиве
      for (var k = 0; k < index.length; k++){
        if (i === index[k]){
          this.sortermas[i] = sortmas[k];
        }
      }

  }

  setComparator(compareFunction) {
    this.CompareFunc = compareFunction;//Сравнение по свойству или строкам
  }
}

module.exports = Sorter;
