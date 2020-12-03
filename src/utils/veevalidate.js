import { extend, localize } from 'vee-validate'
import { required, email, min, max, length, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('required', required)
extend('min', min)
extend('max', max)
extend('length', length)
extend('confirmed', confirmed)

localize('zh-CN', zh)
localize('zh_CN',
  {
    names: {
      password: '密码',
      name: '昵称',
      username: '账号',
      code: '验证码',
      nickname: '昵称',
      repassword: '确认密码'
    },
    messages: {
      ...zh.messages,
      required: '请输入{_field_}'
    },
    fields: {
      username: {
        email: '请输入正确的邮箱格式'
      },
      password: {
        min: '不符合最小长度要求'
      },
      code: {
        length: '验证码长度要求4'
      },
      nickname: {
        length: '不符合最小长度要求'
      },
      repassword: {
        confirmed: '两次输入的内容不一致'
      }
    }
  }
)
