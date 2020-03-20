const chartList = [{
  name: '文本框',
  type: 'Text',
  basic: {
    x: 0,
    y: 0,
    width: 100,
    height: 40
  },
  props: {
    fileds: [{
      label: '文本内容',
      value: '默认文本',
      prop: 'content',
      type: 'text'
    }, {
      label: '文本颜色',
      prop: 'color',
      type: 'color-select'
    }]
  }
}, {
  name: '折线图',
  type: 'Text',
  basic: {
    x: 0,
    y: 0,
    width: 400,
    height: 200
  },
  props: {
    fileds: [{
      label: '文本内容',
      prop: 'content',
      type: 'text'
    }, {
      label: '文本颜色',
      prop: 'color',
      type: 'color-select'
    }]
  }
}]

export default chartList
