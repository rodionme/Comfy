import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import CONSTANTS from '@/constants/App.constants';

let mock = new MockAdapter(axios, { delayResponse: 1000 });

mock.onGet(`${CONSTANTS.API_URL}/categories`).reply(200, {
  categories: [
    { id: 1, title: 'География' },
    { id: 2, title: 'Искусство' },
    { id: 3, title: 'История' },
    { id: 4, title: 'Музыка' },
    { id: 5, title: 'Наука' },
    { id: 6, title: 'Общество' },
    { id: 7, title: 'Персоналии' },
    { id: 8, title: 'Религия' },
    { id: 9, title: 'Спорт' },
    { id: 10, title: 'Техника' },
    { id: 11, title: 'Философия' },
  ]
});

mock.onGet(`${CONSTANTS.API_URL}/categories/1`).reply(200, {
  category: {
    id: 1,
    title: 'Название категории',
    articles: [
      { id: 1, title: 'Статья один' },
      { id: 2, title: 'Статья два' },
      { id: 3, title: 'Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку' },
      { id: 4, title: 'Статья четыре' },
      { id: 5, title: 'Статья пять' },
      { id: 6, title: 'Статья шесть' },
      { id: 7, title: 'Статья семь' },
      { id: 8, title: 'Статья восемь' },
      { id: 9, title: 'Статья девять' },
      { id: 10, title: 'Статья десять' },
      { id: 11, title: 'Статья одиннадцать' },
    ]
  }
});

mock.onGet(`${CONSTANTS.API_URL}/articles`, { params: { query: 'Статья' } }).reply(200, {
  articles: [
    { id: 1, title: 'Статья один' },
    { id: 2, title: 'Статья два' },
    { id: 3, title: 'Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку' },
    { id: 4, title: 'Статья четыре' },
    { id: 5, title: 'Статья пять' },
    { id: 6, title: 'Статья шесть' },
    { id: 7, title: 'Статья семь' },
    { id: 8, title: 'Статья восемь' },
    { id: 9, title: 'Статья девять' },
    { id: 10, title: 'Статья десять' },
    { id: 11, title: 'Статья одиннадцать' },
  ]
});

mock.onGet(`${CONSTANTS.API_URL}/articles/1`).reply(200, {
  article: {
    id: 1,
    title: 'Днепр (город)',
    content: `
        <p><strong>Днепр</strong> (<strong>Днипро́</strong>[5], укр. <em>Дніпро́</em>; до 1796 и с 1802 по 1926 — <strong>
           Екатериносла́в</strong>, с 1796 по 1802 — <strong>Новоросси́йск</strong>, с 1926 по 2016 — <strong>
           Днепропетро́вск</strong>, укр. <em>Дніпропетро́вськ</em>) — город, областной центр Днепропетровской области
           Украины, центр Днепровской агломерации[6]. Четвёртый город по численности населения на Украине после
           <a href="#">Киева</a>, <a href="#">Харькова</a> и <a href="#">Одессы</a>.</p>

        <p>Город был первоначально задуман как третья[7][8][9] столица Российской империи, после Москвы и
           Санкт-Петербурга, и как центр Новороссии[7]. Один из крупнейших промышленных центров Советской Украины,
           Днепропетровск был одним из ключевых центров оборонной и космической промышленности Советского Союза.
           Из-за своей военной промышленности Днепропетровск был закрытым для посещения иностранцами городом
           вплоть до 1990-х годов. Особенно были развиты чёрная металлургия, металлообрабатывающие цеха,
           машиностроение и другие тяжёлые отрасли промышленности.</p>

        <p>По данным на 1 января 2017 года, в городе проживало 976 525 человек наличного населения, в границах
           горсовета — включая пгт Авиаторское — 978 943 человека[3], на 1 ноября 2015 года — 974 341 постоянный
           житель и 984 466 человек наличного населения, в границах горсовета — 976 755 постоянных жителей и 986
           887 человек наличного населения[10]. В 1976—2011 годах численность населения Днепропетровска превышала
           миллион человек.</p>`
  }
});

mock.onPost(`${CONSTANTS.API_URL}/articles`).reply(201, { article: { id: 1 } });

mock.onPut(`${CONSTANTS.API_URL}/articles/1`).reply(204, { article: { id: 1 } });

mock.onGet(`${CONSTANTS.API_URL}/articles`, { params: { latest: 10 } }).reply(200, {
  articles: [
    { id: 1, title: 'Статья один' },
    { id: 2, title: 'Статья два' },
    { id: 3, title: 'Статья с очень-преочень длинным названием, которое вряд ли поместится на одной строчке без ее переноса на другую строку' },
    { id: 4, title: 'Статья четыре' },
    { id: 5, title: 'Статья пять' },
  ]
});

mock.onGet(`${CONSTANTS.API_URL}/articles`, { params: { random: 1 } }).reply(200, {
  article: {
    id: 1,
    title: 'Днепр (город)',
    content: `
      <p><strong>Днепр</strong> (<strong>Днипро́</strong>[5], укр. <em>Дніпро́</em>; до 1796 и с 1802 по 1926 — <strong>
         Екатериносла́в</strong>, с 1796 по 1802 — <strong>Новоросси́йск</strong>, с 1926 по 2016 — <strong>
         Днепропетро́вск</strong>, укр. <em>Дніпропетро́вськ</em>) — город, областной центр Днепропетровской области
         Украины, центр Днепровской агломерации[6]. Четвёртый город по численности населения на Украине после
         <a href="#">Киева</a>, <a href="#">Харькова</a> и <a href="#">Одессы</a>.</p>

      <p>Город был первоначально задуман как третья[7][8][9] столица Российской империи, после Москвы и
         Санкт-Петербурга, и как центр Новороссии[7]. Один из крупнейших промышленных центров Советской Украины,
         Днепропетровск был одним из ключевых центров оборонной и космической промышленности Советского Союза.
         Из-за своей военной промышленности Днепропетровск был закрытым для посещения иностранцами городом
         вплоть до 1990-х годов. Особенно были развиты чёрная металлургия, металлообрабатывающие цеха,
         машиностроение и другие тяжёлые отрасли промышленности.</p>

      <p>По данным на 1 января 2017 года, в городе проживало 976 525 человек наличного населения, в границах
         горсовета — включая пгт Авиаторское — 978 943 человека[3], на 1 ноября 2015 года — 974 341 постоянный
         житель и 984 466 человек наличного населения, в границах горсовета — 976 755 постоянных жителей и 986
         887 человек наличного населения[10]. В 1976—2011 годах численность населения Днепропетровска превышала
         миллион человек.</p>`
  }
});

export default mock;
