// 立即执行函数，防止变量污染 (function() {})();

// 柱状图模块1
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  // 2.指定配置项和数据
  var option = {
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    // 修改图表位置大小
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    // x轴相关配置
    xAxis: [{
      type: 'category',
      data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
      axisTick: {
        alignWithLabel: true
      },
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 10
      },
      // x轴样式不显示
      axisLine: {
        show: false
      }
    }],
    // y轴相关配置
    yAxis: [{
      type: 'value',
      // 修改刻度标签，相关样式
      axisLabel: {
        color: "rgba(255,255,255,0.6)",
        fontSize: 12
      },
      // y轴样式修改
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.6)",
          width: 2
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }],
    // 系列列表配置
    series: [{
      name: '直接访问',
      type: 'bar',
      barWidth: '35%',
      // ajax传动态数据
      data: [200, 300, 300, 900, 1500, 1200, 600],
      itemStyle: {
        // 修改柱子圆角
        barBorderRadius: 5
      }
    }]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 柱状图模块2
(function () {
  // 1.实例化对象
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));

  // 声明颜色数组
  var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  // 2.指定配置项和数据
  var option = {
    grid: {
      top: "10%",
      left: '22%',
      bottom: '10%',
      // containLabel: true
    },
    xAxis: {
      // 不显示x轴相关信息
      show: false
    },
    yAxis: [{
      type: 'category',
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"]
    }, {
      // y轴数据反转，与数组的顺序一致
      inverse: true,
      show: true,
      // 不显示y轴线和刻度
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      // 将刻度标签文字设置为白色
      axisLabel: {
        color: "#fff"
      },
      data: [702, 350, 610, 793, 664]
    }],
    series: [{
        // 第一组柱子（条状）
        name: '条',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 10,
        // 层级 相当于z-index
        yAxisIndex: 0,
        // 柱子更改样式
        itemStyle: {
          barBorderRadius: 20,
          // 此时的color可以修改柱子的颜色
          color: function (params) {
            // params 传进来的是柱子的对象
            // dataIndex 是当前柱子的索引号
            // console.log(params);
            return myColor[params.dataIndex];
          }
        },
        data: [70, 34, 60, 78, 69],
        // 显示柱子内的百分比文字
        label: {
          show: true,
          position: "inside",
          // {c} 会自动解析为数据（data内的数据）
          formatter: "{c}%"
        }
      },
      {
        // 第二组柱子（框状 border）
        name: '框',
        type: 'bar',
        // 柱子之间的距离
        barCategoryGap: 50,
        // 柱子的宽度
        barWidth: 14,
        // 层级 相当于z-index
        yAxisIndex: 1,
        // 柱子修改样式
        itemStyle: {
          color: "none",
          borderColor: "#00c1de",
          borderWidth: 2,
          barBorderRadius: 15,
        },
        data: [100, 100, 100, 100, 100]
      }
    ]
  };
  // 3.把配置项给实例对象
  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 折线图模块1
(function () {
  // 年份对应数据
  var yearData = [{
      year: "2020", // 年份
      data: [
        // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: "2021", // 年份
      data: [
        // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  var myChart = echarts.init(document.querySelector(".line .chart"));

  var option = {
    // 修改两条线的颜色
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    // 图例组件
    legend: {
      // 当serise 有name值时， legend 不需要写data
      // 修改图例组件文字颜色
      textStyle: {
        color: '#4c9bfd'
      },
      right: '10%',
    },
    grid: {
      top: "20%",
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      show: true, // 显示边框
      borderColor: '#012f4a' // 边框颜色
    },
    xAxis: {
      type: 'category',
      boundaryGap: false, // 去除轴间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度线
      axisTick: {
        show: false
      },
      axisLabel: {
        color: "#4c9bfb" // x轴文本颜色
      },
      axisLine: {
        show: false // 去除轴线
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [{
        type: 'line',
        smooth: true, // 圆滑的线
        name: '新增粉丝',
        data: yearData[0].data[0]
      },
      {
        type: 'line',
        smooth: true, // 圆滑的线
        name: '新增游客',
        data: yearData[0].data[1]
      }
    ]
  };

  myChart.setOption(option);

  // 4.让图表随屏幕自适应
  window.addEventListener('resize', function () {
    myChart.resize();
  })

  // 5.点击切换2020 和 2021 的数据
  $('.line h2 a').on('click', function () {
    // console.log($(this).index());
    // 点击a 之后 根据当前a的索引号 找到对应的 yearData 相关对象
    // console.log(yearData[$(this).index()]);
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    // 选中年份高亮
    $('.line h2 a').removeClass('a-active');
    $(this).addClass('a-active');

    // 需要重新渲染
    myChart.setOption(option);
  })
})();

// 折线图模块2
(function () {
  var myChart = echarts.init(document.querySelector('.line2 .chart'));

  var option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      top: '30',
      left: '10',
      right: '30',
      bottom: '10',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // x轴线的颜色为   rgba(255,255,255,.2)
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.2)"
        }
      },
      data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
    }],
    yAxis: [{
      type: 'value',
      axisTick: {
        // 不显示刻度线
        show: false
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      },
      axisLabel: {
        textStyle: {
          color: "rgba(255,255,255,.6)",
          fontSize: 12
        }
      },
      // 修改分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
        }
      }
    }],
    series: [{
        name: '邮件营销',
        type: 'line',
        smooth: true, // 圆滑的线
        // 单独修改当前线条的样式
        lineStyle: {
          color: "#0184d5",
          width: 2
        },
        // 填充区域渐变透明颜色
        areaStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [{
                offset: 0,
                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
              },
              {
                offset: 0.8,
                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
              }
            ],
            false
          ),
          shadowColor: "rgba(0, 0, 0, 0.1)"
        },
        // 拐点设置为小圆点
        symbol: 'circle',
        // 设置拐点大小
        symbolSize: 5,
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#0184d5",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
      },
      {
        name: "转发量",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [{
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
        itemStyle: {
          color: "#00d887",
          borderColor: "rgba(221, 220, 107, .1)",
          borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
      }
    ]
  };

  myChart.setOption(option);

  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图1
(function () {
  var myChart = echarts.init(document.querySelector(".pie .chart"));
  var option = {
    color: ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // 垂直居中,默认水平居中
      // orient: 'vertical',

      bottom: 0,
      left: 10,
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "10"
      }
    },
    series: [{
      name: '年龄分布',
      type: 'pie',
      // 设置饼形图在容器中的位置
      center: ["50%", "42%"],
      // 修改饼形图大小，第一个为内圆半径，第二个为外圆半径
      radius: ['40%', '60%'],
      avoidLabelOverlap: false,
      // 图形上的文字
      label: {
        show: false,
        position: 'center'
      },
      // 链接文字和图形的线
      labelLine: {
        show: false
      },
      data: [{
          value: 1,
          name: "0岁以上"
        },
        {
          value: 4,
          name: "20-29岁"
        },
        {
          value: 2,
          name: "30-39岁"
        },
        {
          value: 2,
          name: "40-49岁"
        },
        {
          value: 1,
          name: "50岁以上"
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();

// 饼形图2
(function () {
  var myChart = echarts.init(document.querySelector('.pie2 .chart'));
  var option = {
    color: ['#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      bottom: 0,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 10
      }
    },
    series: [{
      name: '地区分布',
      type: 'pie',
      radius: ["10%", "60%"],
      center: ['50%', '40%'],
      // 半径模式  area面积模式
      roseType: 'radius',
      // 图形的文字标签
      label: {
        fontsize: 10
      },
      // 引导线调整
      labelLine: {
        // 连接扇形图线长(斜线)
        length: 6,
        // 连接文字线长(横线)
        length2: 8
      },
      data: [{
          value: 26,
          name: '北京'
        },
        {
          value: 24,
          name: '山东'
        },
        {
          value: 25,
          name: '河北'
        },
        {
          value: 20,
          name: '江苏'
        },
        {
          value: 25,
          name: '浙江'
        },
        {
          value: 30,
          name: '四川'
        },
        {
          value: 42,
          name: '湖北'
        }
      ]
    }]
  };

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();


// 模拟飞行路线地图
(function () {
  var myChart = echarts.init(document.querySelector(".map .chart"));
  var geoCoordMap = {
    '上海': [121.4648, 31.2891],
    '东莞': [113.8953, 22.901],
    '东营': [118.7073, 37.5513],
    '中山': [113.4229, 22.478],
    '临汾': [111.4783, 36.1615],
    '临沂': [118.3118, 35.2936],
    '丹东': [124.541, 40.4242],
    '丽水': [119.5642, 28.1854],
    '乌鲁木齐': [87.9236, 43.5883],
    '佛山': [112.8955, 23.1097],
    '保定': [115.0488, 39.0948],
    '兰州': [103.5901, 36.3043],
    '包头': [110.3467, 41.4899],
    '北京': [116.4551, 40.2539],
    '北海': [109.314, 21.6211],
    '南京': [118.8062, 31.9208],
    '南宁': [108.479, 23.1152],
    '南昌': [116.0046, 28.6633],
    '南通': [121.1023, 32.1625],
    '厦门': [118.1689, 24.6478],
    '台州': [121.1353, 28.6688],
    '合肥': [117.29, 32.0581],
    '呼和浩特': [111.4124, 40.4901],
    '咸阳': [108.4131, 34.8706],
    '哈尔滨': [127.9688, 45.368],
    '唐山': [118.4766, 39.6826],
    '嘉兴': [120.9155, 30.6354],
    '大同': [113.7854, 39.8035],
    '大连': [122.2229, 39.4409],
    '天津': [117.4219, 39.4189],
    '太原': [112.3352, 37.9413],
    '威海': [121.9482, 37.1393],
    '宁波': [121.5967, 29.6466],
    '宝鸡': [107.1826, 34.3433],
    '宿迁': [118.5535, 33.7775],
    '常州': [119.4543, 31.5582],
    '广州': [113.5107, 23.2196],
    '廊坊': [116.521, 39.0509],
    '延安': [109.1052, 36.4252],
    '张家口': [115.1477, 40.8527],
    '徐州': [117.5208, 34.3268],
    '德州': [116.6858, 37.2107],
    '惠州': [114.6204, 23.1647],
    '成都': [103.9526, 30.7617],
    '扬州': [119.4653, 32.8162],
    '承德': [117.5757, 41.4075],
    '拉萨': [91.1865, 30.1465],
    '无锡': [120.3442, 31.5527],
    '日照': [119.2786, 35.5023],
    '昆明': [102.9199, 25.4663],
    '杭州': [119.5313, 29.8773],
    '枣庄': [117.323, 34.8926],
    '柳州': [109.3799, 24.9774],
    '株洲': [113.5327, 27.0319],
    '武汉': [114.3896, 30.6628],
    '汕头': [117.1692, 23.3405],
    '江门': [112.6318, 22.1484],
    '沈阳': [123.1238, 42.1216],
    '沧州': [116.8286, 38.2104],
    '河源': [114.917, 23.9722],
    '泉州': [118.3228, 25.1147],
    '泰安': [117.0264, 36.0516],
    '泰州': [120.0586, 32.5525],
    '济南': [117.1582, 36.8701],
    '济宁': [116.8286, 35.3375],
    '海口': [110.3893, 19.8516],
    '淄博': [118.0371, 36.6064],
    '淮安': [118.927, 33.4039],
    '深圳': [114.5435, 22.5439],
    '清远': [112.9175, 24.3292],
    '温州': [120.498, 27.8119],
    '渭南': [109.7864, 35.0299],
    '湖州': [119.8608, 30.7782],
    '湘潭': [112.5439, 27.7075],
    '滨州': [117.8174, 37.4963],
    '潍坊': [119.0918, 36.524],
    '烟台': [120.7397, 37.5128],
    '玉溪': [101.9312, 23.8898],
    '珠海': [113.7305, 22.1155],
    '盐城': [120.2234, 33.5577],
    '盘锦': [121.9482, 41.0449],
    '石家庄': [114.4995, 38.1006],
    '福州': [119.4543, 25.9222],
    '秦皇岛': [119.2126, 40.0232],
    '绍兴': [120.564, 29.7565],
    '聊城': [115.9167, 36.4032],
    '肇庆': [112.1265, 23.5822],
    '舟山': [122.2559, 30.2234],
    '苏州': [120.6519, 31.3989],
    '莱芜': [117.6526, 36.2714],
    '菏泽': [115.6201, 35.2057],
    '营口': [122.4316, 40.4297],
    '葫芦岛': [120.1575, 40.578],
    '衡水': [115.8838, 37.7161],
    '衢州': [118.6853, 28.8666],
    '西宁': [101.4038, 36.8207],
    '西安': [109.1162, 34.2004],
    '贵阳': [106.6992, 26.7682],
    '连云港': [119.1248, 34.552],
    '邢台': [114.8071, 37.2821],
    '邯郸': [114.4775, 36.535],
    '郑州': [113.4668, 34.6234],
    '鄂尔多斯': [108.9734, 39.2487],
    '重庆': [107.7539, 30.1904],
    '金华': [120.0037, 29.1028],
    '铜川': [109.0393, 35.1947],
    '银川': [106.3586, 38.1775],
    '镇江': [119.4763, 31.9702],
    '长春': [125.8154, 44.2584],
    '长沙': [113.0823, 28.2568],
    '长治': [112.8625, 36.4746],
    '阳泉': [113.4778, 38.0951],
    '青岛': [120.4651, 36.3373],
    '韶关': [113.7964, 24.7028]
  };

  //全国考研人数
  var name_title = "全国生猪出栏价格"
var subname = ''
var nameColor = " rgb(55, 75, 113)"
var name_fontFamily = '等线'
var subname_fontSize = 15
var name_fontSize = 18
var mapName = 'china'
var data = [{
    "name": "安徽",
    "value": 39.51
}, {
    "name": "北京",
    "value": 50
}, {
    "name": "福建",
    "value": 42.35
}, {
    "name": "甘肃",
    "value": 36.62
}, {
    "name": "广东",
    "value": 44
}, {
    "name": "广西",
    "value": 42.64
}, {
    "name": "贵州",
    "value": 36.33
}, {
    "name": "海南",
    "value": 29.18
}, {
    "name": "河北",
    "value": 37.49
}, {
    "name": "河南",
    "value": 38.38
}, {
    "name": "黑龙江",
    "value": 37.43
}, {
    "name": "湖北",
    "value": 40.75
}, {
    "name": "湖南",
    "value": 41.58
}, {
    "name": "吉林",
    "value": 36.81
}, {
    "name": "江苏",
    "value": 40.2
}, {
    "name": "江西",
    "value": 43.05
}, {
    "name": "辽宁",
    "value": 37.45
}, {
    "name": "内蒙古",
    "value": 36.75
}, {
    "name": "宁夏",
    "value": 30.48
}, {
    "name": "青海",
    "value": 30
}, {
    "name": "山东",
    "value": 38.26
}, {
    "name": "山西",
    "value": 38.29
}, {
    "name": "陕西",
    "value": 38.7
}, {
    "name": "上海",
    "value": 39.47
}, {
    "name": "四川",
    "value": 42.27
}, {
    "name": "天津",
    "value": 38.17
}, {
    "name": "西藏",
    "value": 30
}, {
    "name": "新疆",
    "value": 35.84
}, {
    "name": "云南",
    "value": 33.41
}, {
    "name": "浙江",
    "value": 41.13
}, {
    "name": "重庆",
    "value": 41.12
}];

var geoCoordMap = {};
var toolTipData = [{
    name: "安徽",
    value: [{
        name: "猪肉价格",
        value: 39.51
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 151.8
    }]
}, {
    name: "北京",
    value: [{
        name: "猪肉价格",
        value: 3800
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 1000
    }]
}, {
    name: "福建",
    value: [{
        name: "猪肉价格",
        value: 42.35
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 148.7
    }]
}, {
    name: "甘肃",
    value: [{
        name: "猪肉价格",
        value: 36.62
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 130.3
    }]
}, {
    name: "广东",
    value: [{
        name: "猪肉价格",
        value: 44
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 151.7
    }]
}, {
    name: "广西",
    value: [{
        name: "猪肉价格",
        value: 42.64
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 175.2
    }]
}, {
    name: "贵州",
    value: [{
        name: "猪肉价格",
        value: 36.33
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 135.8
    }]
}, {
    name: "海南",
    value: [{
        name: "猪肉价格",
        value: 29.18
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 144
    }]
}, {
    name: "河北",
    value: [{
        name: "猪肉价格",
        value: 37.49
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 142.2
    }]
}, {
    name: "河南",
    value: [{
        name: "猪肉价格",
        value: 38.38
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 155.8
    }]
}, {
    name: "黑龙江",
    value: [{
        name: "猪肉价格",
        value: 37.43
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 145.5
    }]
}, {
    name: "湖北",
    value: [{
        name: "猪肉价格",
        value: 40.75
    }, {
       name: "畜肉类消费价格指数（上年同期）",
        value: 148.1
    }]
}, {
    name: "湖南",
    value: [{
        name: "猪肉价格",
        value: 41.58
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 157.4
    }]
}, {
    name: "吉林",
    value: [{
        name: "猪肉价格",
        value: 36.81
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 143
    }]
}, {
    name: "江苏",
    value: [{
        name: "猪肉价格",
        value: 40.2
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value:143.3
    }]
}, {
    name: "江西",
    value: [{
        name: "猪肉价格",
        value: 43.05
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 154.2
    }]
}, {
    name: "辽宁",
    value: [{
        name: "猪肉价格",
        value: 37.45
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 143
    }]
}, {
    name: "内蒙古",
    value: [{
        name: "猪肉价格",
        value: 36.75
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 135.2
    }]
}, {
    name: "宁夏",
    value: [{
        name: "猪肉价格",
        value: 30.48
    }, {
      name: "九月畜肉类消费价格指数（上年同期）",
        value: 124.3
    }]
}, {
    name: "青海",
    value: [{
        name: "猪肉价格",
        value: 13.41
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 120.6
    }]
}, {
    name: "山东",
    value: [{
        name: "猪肉价格",
        value: 38.26
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 154.6
    }]
}, {
    name: "山西",
    value: [{
        name: "猪肉价格",
        value: 38.29
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value:142.4
    }]
}, {
    name: "陕西",
    value: [{
        name: "猪肉价格",
        value: 38.7
    }, {
       name: "九月畜肉类消费价格指数（上年同期）",
        value: 142.2
    }]
}, {
    name: "上海",
    value: [{
        name: "猪肉价格",
        value: 39.47
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 127.3
    }]
}, {
    name: "四川",
    value: [{
        name: "猪肉价格",
        value: 42.27
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 164.6
    }]
}, {
    name: "天津",
    value: [{
        name: "猪肉价格",
        value: 38.17
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 137.1
    }]
}, {
    name: "西藏",
    value: [{
        name: "猪肉价格",
        value: 0
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 109.4
    }]
}, {
    name: "新疆",
    value: [{
        name: "猪肉价格",
        value: 35.84
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 117.7
    }]
}, {
    name: "云南",
    value: [{
        name: "猪肉价格",
        value: 33.41
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 122.5
    }]
}, {
    name: "浙江",
    value: [{
        name: "猪肉价格",
        value: 41.13
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 138.4
    }]
}, {
    name: "重庆",
    value: [{
        name: "猪肉价格",
        value: 41.12
    }, {
        name: "九月畜肉类消费价格指数（上年同期）",
        value: 156.7
    }]
}];

/*获取地图数据*/
myChart.showLoading();
var mapFeatures = echarts.getMap(mapName).geoJson.features;
myChart.hideLoading();
mapFeatures.forEach(function(v) {
    // 地区名称
    var name = v.properties.name;
    // 地区经纬度
    geoCoordMap[name] = v.properties.cp;

});

// console.log("============geoCoordMap===================")
// console.log(geoCoordMap)
// console.log("================data======================")
console.log(data)
console.log(toolTipData)
var max = 500000,
    min = 1000; // todo 
var maxSize4Pin = 80,
    minSize4Pin =40;

var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};
option = {
    title: {
        text: name_title,
        subtext: subname,
        x: 'center',
        textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize
        },
        subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily
        }
    },
    tooltip: {//wenzikuang
        trigger: 'item',
        formatter: function(params) {
            if (typeof(params.value)[2] == "-2") {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
            } else {
                var toolTiphtml = ''
                for (var i = 0; i < toolTipData.length; i++) {
                    if (params.name == toolTipData[i].name) {
                        toolTiphtml += toolTipData[i].name + ':<br>'
                        for (var j = 0; j < toolTipData[i].value.length; j++) {
                            toolTiphtml += toolTipData[i].value[j].name + ':' + toolTipData[i].value[j].value + "<br>"
                        }
                    }
                }
                console.log(toolTiphtml)
                // console.log(convertData(data))
                return toolTiphtml;
           }
       }
    },
   
    visualMap: {
        show: true,
        min: 30,
        max: 50,
        left: 'left',
        top: 'bottom',
        //text: ['高', '低'], // 文本，默认为数值文本
        calculable: true,
        seriesIndex: [1],
        inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            color: ['#BC8F8F', '#CD0000'] // 蓝绿
            // color:['#FFC1C1','#FF3030'] //红

        }
    },
    /*工具按钮组*/
    // toolbox: {
    //     show: true,
    //     orient: 'vertical',
    //     left: 'right',
    //     top: 'center',
    //     feature: {
    //         dataView: {
    //             readOnly: false
    //         },
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    geo: {
        show: true,
        map: mapName,
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: true,
        itemStyle: {
            normal: {
                areaColor: '#031525',
                borderColor: '#3B5077',
            },
            emphasis: {
                areaColor: '#2B91B7',
            }
        }
    },
    series: [{
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function(val) {
                return val[2] / 10000;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#05C3F9'
                }
            }
        },
        {
            type: 'map',
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#031525',
                    borderColor: '#3B5077',
                },
                emphasis: {
                    areaColor: '#2B91B7'
                }
            },
            animation: false,
            data: data
        },
        {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', //气泡
            symbolSize: function(val) {
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = minSize4Pin - a * min;
                b = maxSize4Pin - a * max;
                return a * val[2] + b;
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 9,
                    }
                }
            },
            //itemStyle: {
                normal: {
                    color: '#F62157', //标志颜色
                }
            //},
            //zlevel: 6,
            //data: convertData(data),
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 5)),
            symbolSize: function(val) {
                return val[2] / 10000;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: 'yellow',
                    shadowBlur: 5,
                    shadowColor: 'yellow'
                }
            },
            zlevel: 1
        },

    ]
};

  myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  })
})();