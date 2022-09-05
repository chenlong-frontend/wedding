$('body').one('click', function() {
    $('#music')[0].play()

    $('.audio').addClass('mrotate')
    $('.icon-cancel').hide()
})

$('#audio').on('click', function() {
    if ($('.audio').hasClass('mrotate')) {
        $('#music')[0].pause()
        $('.audio').removeClass('mrotate')
        $('.icon-cancel').show()
    } else {
        $('#music')[0].play()
        $('.audio').addClass('mrotate')
        $('.icon-cancel').hide()
    }
})

$('#map').on('click', function() {
    location.href = 'https://m.amap.com/search/mapview/__p=B0FFJ2LG6E,32.972239190607304,120.38758277893069,%E7%9B%90%E5%9F%8E%E6%A2%A6%E5%B9%BB%E8%BF%B7%E5%AE%AB%E5%BA%A6%E5%81%87%E9%85%92%E5%BA%97,%E5%A4%A7%E4%B8%B0%E5%8C%BA%E8%8D%89%E5%A0%B0%E9%95%87%E4%B8%89%E5%85%83%E6%9D%91%E4%B8%83%E7%BB%84&src=app_share&callnative=1&callapp=0&userRelationToken=9dfc941d2b8f11ed94f000163e0d1dc11&poiid=B0FFJ2LG6E'
})

var map = new AMap.Map('amap', {
    zoom: 14,//级别
    center: [120.387583, 32.972239],//中心点坐标
    viewMode:'3D'//使用3D视图
});

var marker = new AMap.Marker({
    position:[120.387583, 32.972239]//位置
})

map.add(marker);//添加到地图


// wx.config({
//     debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//     appId: 'wx20f168f01ea432c5', // 必填，公众号的唯一标识
//     timestamp: '', // 必填，生成签名的时间戳
//     nonceStr: '', // 必填，生成签名的随机串
//     signature: '',// 必填，签名
//     jsApiList: ['openLocation'] // 必填，需要使用的JS接口列表 这里填写需要用到的微信api openlocation为使用微信内置地图查看位置接口
// });

// $('.tip').click(function () {
//     wx.openLocation({
//         latitude: 32.972239, // 纬度，浮点数，范围为90 ~ -90。如果是动态获取的数据，使用parseFloat()处理数据
//         longitude: 120.387583, // 经度，浮点数，范围为180 ~ -180。如果是动态获取的数据，使用parseFloat()处理数据；
//         name: '梦幻迷宫度假酒店', // 位置名
//         address: '结婚地点', // 地址详情说明
//         scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
//     });
// })