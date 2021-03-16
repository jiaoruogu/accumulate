<template>
  <div class="page">
    <!-- 自己写上传 -->
    <input type="file" name="file" @change="uploadPic">
  </div>
</template>

<script type="text/ecmascript-6">
import $axios from 'axios'
export default {
  data () {
    return {

    }
  },
  methods: {
    uploadPic (e) {
      let type = e.target.files[0]
      if (this.beforeAvatarUpload(type)) {
        let file = e.target.files[0]
        let param = new FormData() // 创建form对象
        param.append('file', file, file.name) // 通过append向form对象添加数据
        let config = {
          // 添加请求头
          headers: { 'Content-Type': 'multipart/form-data' }
        } 
        $axios.post('/file/upload', param, config).then(response => {
          // 处理图片上传完成后的回调
          // ...
        })
      }
    },
    // 图片上传前验证
    beforeAvatarUpload (file) {
      let type = false
      if (
        file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/jpg' ||
        file.type === 'image/bmp'
      ) {
        type = true
      }
      const isLt2M = file.size / 1024 / 1024 < 10
      if (!type) {
        this.$message.error('上传头像图片只能是 JPEG/jpg/png/gif/bmp 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 10MB!')
      }
      return type && isLt2M
    },
  }
}
</script>

<style scoped lang="less">
</style>
