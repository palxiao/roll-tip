/**
 * @author ShawnPhang
 * @todo a simple random dynamic prompt tip/message.
 */
(function (window, undefined) {
  "use strict";
  var rollTip = function (params) {
    this.minInterval
    this.maxInterval
    this.params = params
    this.custom
    this.init()
  };
  rollTip.prototype = {
    init: function () {
      if (!this.params) return
      if (this.params.el) {
        this.custom = this.custom()
        this.params.el.parentNode.removeChild(this.params.el)
      }
      this.params.minSpeed && this.params.minSpeed >=3 ? this.minInterval = this.params.minSpeed : this.minInterval = 3
      this.params.maxSpeed ? this.maxInterval = this.params.maxSpeed : this.maxInterval = 10

      var html_fragment
      var imgHtml = this.params.headImg ? '<img src = "' + this.params.headImg + '">' : ''
      var mainHtml = this.params.el ? this.params.el.innerHTML : ''
      html_fragment = '<div class="roll-bar" style="display:none"><div class="roll-text">' + imgHtml + mainHtml + '</div></div>';
      if (document.querySelector(".roll-bar")) return;
      document.body.insertAdjacentHTML('beforeend', html_fragment);

      this.runRoll(this.minInterval * 1000);

    },
    runRoll: function (time) {
      var _self = this
      this.setParam()
      setTimeout(function () {
        document.querySelector(".roll-bar").style.display = "";
        setTimeout(function () {
          document.querySelector(".roll-bar").style.display = "none";
        }, 3000)
        _self.runRoll(parseInt(Math.random() * (_self.maxInterval * 1000 - _self.minInterval * 1000)) + _self.minInterval * 1000)
      }, time)
    },
    custom: function () {
      var els = this.params.el.children
      var arr = []
      for (var i = 0; i < els.length; i++) arr.push(els[i].getAttribute("id"))
      return arr
    },
    setParam: function (params) {
      var _self = this
      if (!this.params.custom) this.params.custom = []
      this.params.custom.forEach(function (item, index) {
        var content
        if (!isNaN(item) && item !== "" && item != null) {
          content = _self.randomChoose(item)
        } else if (_self.isArray(item)) {
          content = _self.getRandom(item)
        } else {
          switch (item) {
            case 'phone':
              content = _self.randomPhone(true)
              break;
            case 'name':
              content = _self.randomName()
              break;
            default: content = _self.randomChoose()
              break;
          }
        }     
        if (_self.custom.length != 0) document.getElementById(_self.custom[index]).innerHTML = content
      })
    },
    randomChoose: function (num) {
      if (num) {
        return parseInt(Math.random() * (num - 1)) + 1
      } else {
        var temp = parseInt(Math.random() * 10)
        return temp > 4 ? this.randomPhone(true) : this.randomName()
      }
    },
    getRandom: function (arr) {
      var i = parseInt((arr.length - 1) * Math.random());
      return arr[i]
    },
    randomPhone: function (format) {
      var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"]
      var prefix = this.getRandom(prefixArray);
      for (var j = 0; j < 8; j++) {
        prefix += Math.floor(Math.random() * 9);
      }
      return format ? this.formatPhone(prefix) : prefix
    },
    formatPhone: function (phone) {
      return phone.substr(0, 3) + '****' + phone.substr(7)
      // return phone.substring(0,3)+"****"+phone.substring(8,11)
    },
    randomName: function () {
      var familyNames = [
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
      ]
      var givenNames = [
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
      ]
      return name = this.getRandom(familyNames) + this.getRandom(givenNames);
    },
    isArray: function (value) {
      if (typeof Array.isArray === "function") {
        return Array.isArray(value)
      } else {
        return Object.prototype.toString.call(value) === "[object Array]"
      }
    }
  };
  window.rollTip = rollTip;
})(window);