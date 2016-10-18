const h = require('react-hyperscript')
const React = require('react')

const ListItem = React.createClass({
  onUp: function (event) {
    this.props.item.score = this.props.item.score + 1
    this.props.onScoreChange(this.props.item)
  },
  onDown: function (event) {
    if (this.props.item.score === 0) return
    this.props.item.score = this.props.item.score - 1
    this.props.onScoreChange(this.props.item)
  },
  render: function () {
    const item = this.props.item
    return h('li.mh2', [
      h('a.link.light-blue', {
        target: '_blank',
        href: item.link
      }, item.title),
      h('button.ml1.f6.link.dim.br2.ba.ph3.pv2.mb2.dib.black', { onClick: this.onUp }, [
        h('i.fa.fa-thumbs-up')
      ]),
      h('button.ml1.f6.link.dim.br2.ba.ph3.pv2.mb2.dib.black', { onClick: this.onDown }, [
        h('i.fa.fa-thumbs-down')
      ]),
      h('span', item.score)
    ])
  }
})
module.exports = ListItem
