/* 
包含n个接口请求函数的模块
函数的返回值:promise对象
*/
import ajax from "./ajax";
// 1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const reqAddress = geohash => ajax(`/position/${geohash}`);
// 2、获取食品分类列表](#2获取食品分类列表)
export const reqFoodType = () => ajax("/index_category");
// 3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)[4、根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
export const reqShopS = (longitude, latitude) => ajax("/shops",{longitude, latitude});
// // 5、获取一次性验证码](#5获取一次性验证码)
// export const reqAddress = () => ajax();
// // 6、用户名密码登陆](#6用户名密码登陆)
// export const reqAddress = () => ajax();
// // 7、发送短信验证码](#7发送短信验证码)
// export const reqAddress = () => ajax();
// // 8、手机号验证码登陆](#8手机号验证码登陆)
// export const reqAddress = () => ajax();
// // 9、根据会话获取用户信息](#9根据会话获取用户信息)
// export const reqAddress = () => ajax();
