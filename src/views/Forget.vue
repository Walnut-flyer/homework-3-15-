<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user"
         pad20>
      <div class="layui-tab layui-tab-brief"
           lay-filter="user">
        <ul class="layui-tab-title">
          <li>
            <router-link :to="{name: 'login'}">登入</router-link>
          </li>
          <li class="layui-this">找回密码
            <!--重置密码-->
          </li>
        </ul>
        <div class="layui-form layui-tab-content"
             id="LAY_ucm"
             style="padding: 20px 0;">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <validation-provider name="username"
                                       rules="required|email"
                                       v-slot="{errors}">
                    <label for="L_email"
                           class="layui-form-label">邮箱</label>
                    <div class="layui-input-inline">
                      <input type="text"
                             name="email"
                             v-model="username"
                             autocomplete="off"
                             class="layui-input">
                    </div>
                    <div class="error layui-form-mid">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <validation-provider name="code"
                                       rules="required|length:4"
                                       v-slot="{errors}">
                    <div class="layui-row">
                      <label for="L_vercode"
                             class="layui-form-label">验证码</label>
                      <div class="layui-input-inline">
                        <input type="text"
                               v-model="code"
                               placeholder="请输入验证码"
                               autocomplete="off"
                               class="layui-input">
                      </div>
                      <div class>
                        <span class="svg"
                              style="color: #c00;"
                              @click="_getCode()"
                              v-html="svg"></span>
                      </div>
                    </div>
                    <div class="error layui-form-mid">{{errors[0]}}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn"
                          alert="1"
                          lay-filter="*"
                          lay-submit>提交</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import { getCode } from '@/api/login'
import { ValidationProvider } from 'vee-validate'
export default {
  name: 'forget',
  components: {
    ValidationProvider
  },
  data () {
    return {
      username: '',
      code: '',
      svg: ''
    }
  },
  mounted () {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode().then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
.error {
  color: red;
}
</style>
