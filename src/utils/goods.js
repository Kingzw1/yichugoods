import service from "./index";

// 分类接口
export const goodsTypeApi = () => {
  return service({
    method: "get",
    url: "/goods/type",
    // headers: "Content-Type: application/x-www-form-urlencoded",
  });
};
// 获取品牌接口
export const brondListApi = (data) => {
  return service({
    method: "post",
    url: "/goods/brand",
    // headers: "Content-Type: application/x-www-form-urlencoded",

    data,
  });
};
// 获取商品列表
export const goodsListApi = (data) => {
  return service({
    method: "post",
    url: "/goods/list",
    // headers: "Content-Type: application/x-www-form-urlencoded",

    data,
  });
};
// 获取商品详细
export const goodsDetailApi = (id) => {
  return service({
    method: "get",
    url: `/goods/detail`,
    // headers: "Content-Type: application/x-www-form-urlencoded",
    params: {
      id,
    },
  });
};
// 添加购物车
export const addCarApi = (data) => {
  return service({
    method: "post",
    url: "/cart/save",
    headers: "Content-Type: application/json",
    data,
  });
};
// 保持购物车
export const saveCarApi = (data) => {
  return service({
    method: "post",
    url: "/cart/add",
    headers: "Content-Type: application/json",
    data,
  });
};
// 查询购物车
export const seeCarApi = (id) => {
  return service({
    method: "get",
    url: "/cart/query",
    headers: "Content-Type: application/json",
    params: {
      userId: id,
    },
  });
};
