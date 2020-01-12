<template lang="html">
<div class="login-wrap">
<div class="login">
	<div class="ms-title">后台管理系统</div>
 <!-- <h3>登录页</h3> -->
  <el-form label-width="0px" class="ms-content">
		<el-form-item prop="username">
			<el-input placeholder="username">
				<el-button slot="prepend" icon="el-icon-lx-people"></el-button>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input placeholder="123456">
				<el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
			</el-input>
		</el-form-item>
	<div class="login-btn">
		<el-button type="primary" @click='login'>登录</el-button>
	</div>
	</el-form>
</div>
</div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      username: 'youzan',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', ['userLogin']),
    ...mapMutations('user', ['updateUserinfo']),
    login() {
      const data = {
        username: this.username,
        password: this.password
      }
      this.$http.fetchLogin(data).then(res=>{
        this.updateUserinfo(res)
        localStorage.setItem('token', res.token)
        localStorage.setItem('isLogin', 1)
        this.$router.replace('/')

      })
    }
  }
}
</script>

<style lang="scss" scoped>
	.login-wrap {
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(./login-bg.jpg);
		background-size: 100%;
	}
	.ms-title {
		width: 100%;
		line-height: 50px;
		text-align: center;
		font-size: 20px;
		color: #EEE8D5;
		border-bottom: 1px solid #ddd;
	}
	.login{
		position: absolute;
		left: 50%;
		top: 50%;
		width: 350px;
		margin: -190px 0 0 -175px;
		border-radius: 5px;
		background: rgba(255, 255, 255, 0.3);
		overflow: hidden;
		}
	.ms-content {
		padding: 30px 30px;
	}
	.login-btn {
		text-align: center;
	}
	.login-btn button {
		width: 100%;
		height: 36px;
		margin-bottom: 10px;
	}
</style>
