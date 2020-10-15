package com.gfd.eshop.network.core;

/**
 * 6    =>'用户名或者密码错误',
 * 8    =>'处理失败',
 * 11   =>'用户名或email已使用',
 * 13   =>'不存在的信息',
 * 14   =>'购买失败',
 * 100  =>'您的帐号已过期',
 * 101  =>'协议格式错误',
 * 501  =>'协议格式错误',
 * 502  =>'协议格式错误',
 * 503  =>'合同期终止',
 * 10001=>'您必须选定一个配送方式',
 * 10002=>'购物车中没有商品',
 * 10003=>'您的余额不足以支付整个订单，请选择其他支付方式',
 * 10005=>'您选择的超值礼包数量已经超出库存。请您减少购买量或联系商家。',
 * 10006=>'如果是团购，且保证金大于0，不能使用货到付款',
 * 10007=>'您已收藏过此商品',
 * 10008=>'库存不足',
 * 10009=>'订单无发货信息'
 */
public interface ApiError {
    int SESSION_EXPIRE = 100;
}
