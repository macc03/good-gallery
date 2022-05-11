import request from '@/utils/request'
import { LoginInterface } from '@/types/login'

export function login(data: LoginInterface) {
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}