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