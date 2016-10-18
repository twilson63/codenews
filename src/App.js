const h = require('react-hyperscript')
var items = [{ id: 1,
    title: 'JavaScript Fatigue',
    link: 'https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f#.qtciu77bd',
    score: 0
}]

module.exports = () => h('div.pa4.bg-blue.vh-100', [
 h('header', [
   h('h1.f3.white', 'Code News!')
 ]),
 h('main', [
   h('section.list', [
     h('ul', items.map(item =>
       h('li', [
         h('a', {href: item.link}, item.title),
         h('button', 'Up'),
         h('button', 'Down'),
         h('span', item.score)
       ])
     ))

   ]),
   h('section.form', [
     h('h2.f4.white', 'Add News'),
     h('form', [
       h('div.pb2', [
         h('label.mr1', 'Title'),
         h('input')
       ]),
       h('div.pb2', [
         h('label.mr1', 'Link'),
         h('input')
       ]),
       h('div.tr', [
         h('button', 'Add News')
       ])
     ])
   ])
 ])
])
