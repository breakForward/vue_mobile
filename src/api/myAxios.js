import request from './index'

// 获取常规列表
export function getBanner(url, data) {
  return request.get(url, {
    params: data
  })
}

// 获取文章列表
export function getArticle(url, data) {
  return request.get(url, {
    params: data
  })
}

// 获取详情
export function getDetail(url, data) {
  return request.get(url, {
    params: data
  })
}

// 获取分类列表
export function getInfoClass(url, data) {
  return request.get(url, {
    params: data
  })
}

// 获取搜索列表
export function getSearchList(url, data) {
  return request.get(url, {
    params: data
  })
}
