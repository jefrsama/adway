<template>
  <header class="m-auto container">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="logo">
        <h1><router-link to="/" class="nav-link">LOGO</router-link></h1>
      </div>
      <div>
        <ul class="navbar nav">
          <li class="nav-item"><router-link to="/about" class="nav-link">О нас</router-link></li>
          <li class="nav-item"><a href="#" class="nav-link">Бакалавр</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Абитуриентам</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Контакты</a></li>
        </ul>
      </div>
      <div>
        <button>Войти</button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
}
</script>

<style scoped lang="scss">
header {
  margin-top: 40px;
  position: relative;
  z-index: 1000;
  top: 0;
  background-color: #FFF;
  height: 61px;
  color: #000;

  button {
    padding: 10px 24px;
    gap: 10px;
    width: 102px;
    height: 45px;
    background: #2D6BBF;
    border-radius: 12px;
  }
  .logo {
    width: 76px;
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 44px;
    color: #000;
  }
  a {
    color: black;
  }
}

@media only screen and (max-width: 390px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 80px;
    width: 390px;
    position: relative;

    li {
      display: none;
    }

    button {
      display: block;
      right: 0;
      background: #2D6BBF;
      border-radius: 12px;
    }
  }
}
</style>
