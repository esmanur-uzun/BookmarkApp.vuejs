<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Register</h3>
      <input v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3" required />
      <input v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3" required />
      <input v-model="userData.password" type="password" placeholder="Şifre" class="input mb-3" required />
      <button @click="onSave" class="default-button">Kayıt ol</button>
      <span class="text-center mt-3 text-sm">
        Zaten Üyeyim,
        <router-link :to="{name: 'LoginPage'}" class="text-red-900 hover:text-black">Giriş yap!</router-link>
      </span>
    </div>
</template>

<script>
import CryptoJS from "crypto-js"
export default {
  
  data(){
    return {
      userData: {
        fullname: null,
        username: null,
        password: null
      }
    }
  },
  methods: {
    onSave(){
      const password= CryptoJS.HmacSHA1(this.userData.password,this.$store.getters._saltKey).toString()
     this.$appAxios.post("/users",{...this.userData,password}).then(registered_user_response => {
      console.log(registered_user_response)
      this.$router.push({name: "HomePage"})
     })
    }
  }
}
</script>

<style>
.login_register_container{
    background-color: #cad2c5;
}
</style>