import { request } from './request'

function init() {
    return request({
        url: '/home/init.json'
    })
}

export default { init }