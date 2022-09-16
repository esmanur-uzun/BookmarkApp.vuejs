<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Login</h3>
      <input type="text" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input type="password" placeholder="Şifre" class="input mb-3" />
      <button class="default-button">Giriş yap</button>
      <span class="text-center mt-3 text-sm">
        Üye değilim,
        <a href="#" class="text-red-900 hover:text-black">Üye olmak istiyorum!</a>
      </span>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
.login_register_container{
    background-color: #cad2c5;
}
</style>