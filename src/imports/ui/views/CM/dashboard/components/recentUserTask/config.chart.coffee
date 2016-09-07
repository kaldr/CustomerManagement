exports.chartConfig =
  basicChart:
    data:
        columns: [
            ['本周操作', 24, 30, 13, 40, 12]
            ['今日操作', 12, 3, 8, 5, 6]
        ]
        colors:
            '今日操作':'#0277BD'
            '本周操作':'#ccc'
        types:
            '今日操作':'bar'
            '本周操作':'area-spline'
    legend:
        show: false

    axis:
        rotated: true
        x:
            type: 'category'
            tick:
                outer: false
            categories: ['朱老大','邓超','王宝强','林允儿','金泰妍']
        y:
            show: false
    size:
        height: 166
        width: 400
