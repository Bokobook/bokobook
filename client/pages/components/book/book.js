// pages/components/book/book.js
var config = require('../../../config')

Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    book: {
      type: Object,
      value: 'default value',
    }
  },
  data: {
    host: config.service.host,
    oldprice: null,
    price: null
  },
  attached: function() {
    this.setData({
      oldprice: this.properties.book.oldprice.toFixed(2),
      price: this.properties.book.price.toFixed(2)
    })
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})