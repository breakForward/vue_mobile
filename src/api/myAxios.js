import request from './index'

export function getBanner(url, data) {
  return request.get(url, {
    params: data
  })
}

export function getArticle(url, data) {
  return request.get(url, {
    params: data
  })
}

export function getDetail(url, data) {
  return request.get(url, {
    params: data
  })
}

export function getInfoClass(url, data) {
  return request.get(url, {
    params: data
  })
}
