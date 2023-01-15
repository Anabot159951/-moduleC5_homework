/* Этап 1. Подготовка данных */

// Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const parser = new DOMParser();
// console.log('parser', parser);

// XML, который мы будем парсить
const xmlString = `
 <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;
// console.log('xmlString', xmlString);

/* Этап 2. Получение данных */

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

//forEach спасает)) Долго я не понимал, почему один у меня студет. Хоть подсказку напишите(

const listNode = xmlDOM.querySelector("list");
const studentNodes = [...listNode.querySelectorAll("student")];
const list = [];
studentNodes.forEach( studentNode => {
  // Получение всех DOM-нод
  
  const nameNode = studentNode.querySelector("name");
  const langAttr = nameNode.getAttribute('lang');
  const firstNode = studentNode.querySelector("first");
  const secondNode = studentNode.querySelector("second");
  const ageNode = studentNode.querySelector("age");
  const profNode = studentNode.querySelector("prof");
  //пробежались и пушим)) 
  list.push({
    prof: profNode.textContent,
    first: firstNode.textContent,
    second: secondNode.textContent,
    lang: langAttr,
    age: Number(ageNode.textContent),
  });
});

const result = {
  list: list
};
console.log('result', result);

