import axios from 'axios'
// 封装 axios 方法
export function http(url, data = {}, type = 'get') {
  return new Promise((resolve, reject) => {
    return axios({
      url: url,
      method: type,
      data: data
    }).then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
// 用promise封装原生ajax
export function http2(url, data = {}, type = 'GET') {
  return new Promise((resolve, reject) => {
    // 获取 xhr 对象
    let xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else {
      // 此xhr 对象用于IE7-
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // xhr 监听状态变化
    xhr.onreadystatechange = function () {
      // readyState 表示请求的五种状态    status 表示请求的状态码
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // 请求结束后,在此处写处理代码
        resolve(JSON.parse(xhr.response))
      }
    }
    // 携带cookie
    xhr.withCredentials = true
    // xhr.open() 接收的请求方法只支持大写
    type = type.toUpperCase()
    // 初始化请求 第三个参数是开启异步，默认就是true
    xhr.open(type, url, true)
    if (type === 'POST') {
      // post 请求需要 设置头
      xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8')
      // 将传入的data转换为JSON对象
      data = JSON.parse(data)
    }
    // 发送请求数据
    xhr.send(data)
  })
}



/**
 * 3.(对象深拷贝)
 * @param {object} obj copy的对象
 * @return {object} 深拷贝返回对象
 */

export function deepCloneJson(obj) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj.constructor === Date) return new Date(obj);
  if (obj.constructor === RegExp) return new RegExp(obj);
  const newObj = new obj.constructor(); // 保持继承链
  for (const key of Object.keys(obj)) {
    if (obj.hasOwnProperty(key)) { // 不遍历其原型链上的属性
      const val = obj[key];
      newObj[key] = typeof val === 'object' ? deepCloneJson(val) : val; // 使用arguments.callee解除与函数名的耦合
    }
  }
  return newObj;
}
/**
 * 当使用post或者get请求下载文件的时候，服务端会返回二进制文件流，
 * 为了模拟点击a链接下载内容，需要在当前页面js动态创建一个iframe
 * 把url赋给他，模拟直接将链接放入浏览器url地址栏下载的效果
 */
export function downloadUrl(url) {
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  iframe.onload = function () {
    document.body.removeChild(iframe);
  };
  document.body.appendChild(iframe);
}

/**
 * 当服务端响应回来的二进制文件完成后，我们可以取得二进制内容
 * 通过blob对象进而转换成源文件
 */
export function translateBlob(res) {
  // res就是返回回来的二进制内容
  const blob = new Blob([res]);
  let fileName = '所要保存的文件名称';
  // 非IE下载
  if ('download' in document.createElement('a')) {
    const elink = document.createElement('a');
    elink.download = fileName;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else {
    // IE10+下载
    navigator.msSaveBlob(blob, fileName);
  }
}

/**
 * 当git请求的时候 传入对象  拼接url
 */
export function getDataStringify(url, data) {
  let params = ''
  if (data) {
    for (const key of Object.keys(data)) {
      if (data[key] !== undefined && data[key] !== null && data[key] !== '') {
        params += `${key}=${data[key]}&`
      }
    }
    params = params.slice(0, params.length - 1)
  }
  return data ? `${url}?${params}` : url
}

/**
 * js代码开启或是关闭浏览器全屏
 */
export function fullScreen() {
  var el = document.documentElement;
  var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
    el.mozRequestFullScreen || el.msRequestFullScreen;
  if (rfs) { //typeof rfs != "undefined" && rfs
    rfs.call(el);
  } else if (typeof window.ActiveXObject != "undefined") {
    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
/**关闭全屏 */
export function closeFullScreen() {
  var el = document;
  var cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
    el.mozCancelFullScreen || el.exitFullScreen;
  if (cfs) { //typeof cfs != "undefined" && cfs
    cfs.call(el);
  } else if (typeof window.ActiveXObject != "undefined") {
    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    var wscript = new ActiveXObject("WScript.Shell");
    if (wscript != null) {
      wscript.SendKeys("{F11}");
    }
  }
}
/** 判断是否是全屏 */
export function orFullScreen() {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}



// 下面的方式是针对dom操作的一些封装↓

/** 查看dom元素是否含有指定类名 */
export const hasClass = (obj, cls) => {
  return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/** 为元素添加指定类名 */
export const addClass = (obj, cls) => {
  if (!hasClass(obj, cls)) obj.className += ' ' + cls
}

/** 为dom元素移除类名 */
export const removeClass = (obj, cls) => {
  if (hasClass(obj, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    obj.className = obj.className.replace(reg, ' ')
  }
}

/** 为dom元素toggle类名 */
export const toggleClass = (obj, cls) => {
  if (hasClass(obj, cls)) {
    removeClass(obj, cls)
  } else {
    addClass(obj, cls)
  }
}

/**
 *  @param {number} value 需要操作的数字
 *  @param {number} count 需要保留的小数位数 count > 0
 *  @return {string} 操作后的数字字符串
 */
export const formatNum = (value, count) => {
  value = Number(value)
  if (count) {
    let temp = value.toFixed(++count)
    value = temp.substring(0, temp.indexOf('.') + count)
  } else {
    let temp = value.toFixed(2)
    value = temp.substring(0, temp.indexOf('.'))
  }
  return value
}

/**
 *
 * @param {Date} time default 为当前时间， 可以是时间戳，日期字符串
 * @param {boolean} flag default = true, 默认显示具体时间，设置为false只显示日期
 * @param {string} pattern default = '-' 连接年月日的字符
 */
export const formatTime = (time = new Date(), flag = true, pattern = '-') => {
  let result = ''
  time = new Date(time)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  month = month < 10 ? `0${month}` : month
  let day = time.getDate()
  day = day < 10 ? `0${day}` : day

  result = `${year}${pattern}${month}${pattern}${day}`

  // 显示日期同时显示时间
  if (flag) {
    result += ` ${time.toString().match(/\d{2}:\d{2}:\d{2}/)[0]}`
  }
  return result
}

/**
 * @FileDescription: 树型结构扁平化
 * @param tree Array<Object>
 * @param comparator Fun 比较器
 */
 export const flatTree = (tree, comparator = null) => {
  let result = []
  for(const item of tree) {
      // 将自身追加到数组中
      const cpItem = JSON.parse(JSON.stringify(item))
      if(cpItem.children) {
          delete cpItem.children
          result.push(cpItem)
      }
      Array.isArray(item.children) ? result = result.concat(flatTree(item.children)) : result.push(item)
  }

  if(comparator) {
     return result.sort(comparator)
  }

  return result
}

/**
 * @FileDescription: 树型结构转换
 * @Author: chc
 * @Date: 2020/12/23
 * @LastEditors: chc
 * @LastEditTime: 2020/12/23
 * 扁平数组通过父子id组成树状结构
 **/
 export const convertToTreeData = (list) => {
  //筛选出 包含parentId的数组；

  let parents = list.filter(value => value.parentId == 0);

  //筛选出 包含不parentId的数组；
  let childrens = list.filter(value => value.parentId !== 0);
  //运用递归方法将子数组插入到父数组
  let translator = (parents, childrens) => {
      //遍历每一个父数组
      parents.forEach((parent) => {
          //遍历子数组 判断子节点的parentId等于父数组的id，
          childrens.forEach((child, index) => {
              if (child.parentId === parent.id) {
                  //对子节点数据进行深复制
                  let temp = JSON.parse(JSON.stringify(childrens));
                  //让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
                  temp.splice(index, 1);
                  //让当前子节点作为唯一的父节点，去递归查找其对应的子节点
                  translator([child], temp);
                  //把找到子节点放入父节点的ChildNodes属性中
                  typeof parent.children !== 'undefined' ? parent.children.push(child) : parent.children = [child];
              }
          })

      })
  };
  translator(parents, childrens)
  //返回最终的结果
  return parents
}


/**
 * 深拷贝
 * 2021.03.30
 */
 function deepClone(obj) {
  if(typeof obj !== 'object' || obj === null || obj === undefined) {
    return obj
  }
  let result = obj instanceof Array ? [] : {}
  for(let i in obj) {
    result[i] = deepClone(obj[i])
  }
  return result
}

/**
 * 获取当前时间的时分秒
 * @returns {string}
 */
function time() {
  // "2021/10/14" ->"2021-10-14"
  // new Date().toLocaleDateString().replace(/\//g, '-')

  // "11:13:27"
  return new Date().toTimeString().split(' ')[0];
}
