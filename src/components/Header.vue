<template>
  <header class="m-auto container">
    <div class="d-flex justify-content-between align-items-center w-100">
      <div class="logo">
        <h1><router-link to="/theme/space/dist/" class="nav-link"><img src="@/assets/img/logo.png" alt="Adway Education"></router-link></h1>
      </div>
      <div>
        <ul class="navbar nav">
          <li class="nav-item"><router-link to="/theme/space/dist/about" class="nav-link">О нас</router-link></li>
          <li class="nav-item"><a href="#bachelor_magistr" class="nav-link">Бакалавр</a></li>
          <li class="nav-item"><a href="#applicants" class="nav-link">Абитуриентам</a></li>
          <li class="nav-item"><a href="#contacts" class="nav-link">Контакты</a></li>
        </ul>
      </div>
      <div>
        <a href="/my/index.php"><button>Личный кабинет</button></a>
      </div>
    </div>
    <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>

      <ul class="menu__box">
        <li><router-link to="/about" class="nav-link">О нас</router-link></li>
        <li><a class="menu__item" href="#process">Процесс зачисления</a></li>
        <li><a class="menu__item" href="#applicants">Требования</a></li>
        <li><a class="menu__item" href="#profession">Специальности</a></li>
        <li><a class="menu__item" href="#contacts">Контакты</a></li>
      </ul>
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
    height: 45px;
    background: #2D6BBF;
    border-radius: 12px;
  }
  .logo {
    width: 200px;
    font-family: Manrope, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    line-height: 44px;
    color: #000;
  }
  .logo img{
    width:100%;
  }
  a {
    color: black;
  }

  #menu__toggle {
    opacity: 0;
  }

  #menu__toggle:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
  }
  #menu__toggle:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    visibility: visible;
    left: 0;
  }

  .menu__btn {
    display: none;
    position: fixed;
    align-items: center;
    top: 25px;
    right: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 1;
  }

  .menu__btn > span::after,
  .menu__btn > span::before {
    display: block;
    position: absolute;
    width: 180%;
    height: 4px;
    background-color: #2D6BBF;
    transition-duration: .25s;
    right: 0;
    border-radius: 10px;
  }

  .menu__btn > span {
    display: block;
    position: absolute;
    width: 70%;
    height: 4px;
    background-color: #2D6BBF;
    transition-duration: .25s;
    right: 0;
    border-radius: 10px;
  }
  .menu__btn > span::before {
    content: '';
    top: -10px;
  }
  .menu__btn > span::after {
    content: '';
    top: 10px;
  }

  .menu__box {
    display: block;
    position: fixed;
    visibility: hidden;
    top: 0;
    right: 100%;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #ECEFF1;
    box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
    transition-duration: .25s;
  }

  .menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    font-family: Manrope, sans-serif;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }
  .menu__item:hover {
    background-color: #CFD8DC;
  }
}
@media screen and (max-width: 430px) {
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 70px;
    width: 100%;
    position: fixed;

    li {
      display: none;
    }

    .menu__box {
      li {
        display: block;
        padding: 10px;
        gap: 10px;
      }
    }

    button {
      position: absolute;
      top: 10px;
      right: 20%;
      background: #2D6BBF;
      border-radius: 12px;
    }
    #menu__toggle {
      opacity: 0;
    }

    #menu__toggle:checked ~ .menu__btn > span {
      transform: rotate(45deg);

    }
    #menu__toggle:checked ~ .menu__btn > span::before {
      top: 0;
      transform: rotate(0);
    }
    #menu__toggle:checked ~ .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      visibility: visible;
      left: 0;
    }

    .menu__btn {
      display: block;
      align-items: center;
      position: absolute;
      top: 30px;
      right: 20px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }

    .menu__btn > span::after,
    .menu__btn > span::before {
      display: block;
      position: absolute;
      width: 180%;
      height: 4px;
      background-color: #2D6BBF;
      transition-duration: .25s;
      right: 0;
      border-radius: 10px;
    }

    .menu__btn > span {
      display: block;
      position: absolute;
      width: 70%;
      height: 4px;
      background-color: #2D6BBF;
      transition-duration: .25s;
      right: 0;
      border-radius: 10px;
    }
    .menu__btn > span::before {
      content: '';
      top: -10px;
    }
    .menu__btn > span::after {
      content: '';
      top: 10px;
    }

    .menu__box {
      display: block;
      position: fixed;
      visibility: hidden;
      top: 0;
      right: 100%;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: #ECEFF1;
      box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
      transition-duration: .25s;
    }

    .menu__item {
      display: block;
      padding: 12px 24px;
      color: #333;
      font-family: Manrope, sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      transition-duration: .25s;
    }
    .menu__item:hover {
      background-color: #CFD8DC;
    }
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

    .menu__box {
      li {
        display: block;
        padding: 10px;
        gap: 10px;
      }
    }

    button {
      position: absolute;
      top: 10px;
      right: 20%;
      background: #2D6BBF;
      border-radius: 12px;
    }
    #menu__toggle {
      opacity: 0;
    }

    #menu__toggle:checked ~ .menu__btn > span {
      transform: rotate(45deg);
    }
    #menu__toggle:checked ~ .menu__btn > span::before {
      top: 0;
      transform: rotate(0);
    }
    #menu__toggle:checked ~ .menu__btn > span::after {
      top: 0;
      transform: rotate(90deg);
    }
    #menu__toggle:checked ~ .menu__box {
      visibility: visible;
      left: 0;
    }

    .menu__btn {
      display: block;
      align-items: center;
      position: absolute;
      top: 30px;
      right: 20px;
      width: 26px;
      height: 26px;
      cursor: pointer;
      z-index: 1;
    }

    .menu__btn > span::after,
    .menu__btn > span::before {
      display: block;
      position: absolute;
      width: 180%;
      height: 4px;
      background-color: #2D6BBF;
      transition-duration: .25s;
      right: 0;
      border-radius: 10px;
    }

    .menu__btn > span {
      display: block;
      position: absolute;
      width: 70%;
      height: 4px;
      background-color: #2D6BBF;
      transition-duration: .25s;
      right: 0;
      border-radius: 10px;
    }
    .menu__btn > span::before {
      content: '';
      top: -10px;
    }
    .menu__btn > span::after {
      content: '';
      top: 10px;
    }

    .menu__box {
      display: block;
      position: fixed;
      visibility: hidden;
      top: 0;
      right: 100%;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 80px 0;
      list-style: none;
      background-color: #ECEFF1;
      box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
      transition-duration: .25s;
    }

    .menu__item {
      display: block;
      padding: 12px 24px;
      color: #333;
      font-family: Manrope, sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-decoration: none;
      transition-duration: .25s;
    }
    .menu__item:hover {
      background-color: #CFD8DC;
    }
  }
}
</style>
