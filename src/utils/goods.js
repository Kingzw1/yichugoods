import service from "./index";

// 分类接口
export const goodsTypeApi = () => {
  return service({
    method: "get",
    url: "/goods/type",
  });
};
// 获取品牌接口
export const brondListApi = (data) => {
  return service({
    method: "post",
    url: "/goods/brand",
    data,
  });
};
// 获取商品列表
export const goodsListApi = (data) => {
  return service({
    method: "post",
    url: "/goods/list",
    data,
  });
};
