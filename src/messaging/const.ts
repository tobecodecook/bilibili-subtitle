// 请求信息
export type L2ReqMsg = {
    from: 'extension' | 'inject' | 'app'
    // target: string
    method: string
    params?: any
    // [key: string]: any
}

// 响应信息
export type L2ResMsg<L2Res = any> = {
  code: number
  msg?: string
  data?: L2Res
}

export const MESSAGE_TO_EXTENSION_HANDSHAKE = 'handshake'
export const MESSAGE_TO_EXTENSION_ROUTE_MSG = 'routeMsg'

export const TAG_TARGET_INJECT = 'target:inject'
export const TAG_TARGET_APP = 'target:app'