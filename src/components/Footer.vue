<template>
  <footer class="wrapper-footer d-flex flex-column justify-content-between">
    <div class="wrap container d-flex justify-content-around" id="contacts">
      <div class="inner_card">
        <h3 class="pt-5">Главная</h3>
        <p class="pt-3"><router-link to="/about" class="nav-link">О нас</router-link></p>
        <p><a href="#why">Почему мы?</a></p>
        <p><a href="#partners">Наши партнеры</a></p>
      </div>
      <div class="inner_card">
        <h3 class="pt-5"><a href="#applicants">Абитуриентам</a></h3>
        <p class="pt-3"><a href="#process">Процесс зачисления</a></p>
        <p><a href="#bachelor_magistr">Бакалавр</a></p>
        <p><a href="#bachelor_magistr">Магистратура</a></p>
      </div>
      <div class="inner_card" id="contacts">
        <h3 class="pt-5">Контакты</h3>
        <div class="inner_content pt-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a href="tel:+77784119535">+7 (778) 411-95-35</a>
        </div>
        <div class="inner_content py-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.29289 5.29289C3.47386 5.11193 3.72386 5 4 5H20C20.2761 5 20.5261 5.11193 20.7071 5.29289M3.29289 5.29289C3.11193 5.47386 3 5.72386 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.72386 20.8881 5.47386 20.7071 5.29289M3.29289 5.29289L10.5858 12.5857C11.3668 13.3668 12.6332 13.3668 13.4142 12.5857L20.7071 5.29289" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <a href="mailto:admin@adway.edu.kz">admin@adway.edu.kz</a>
        </div>
        <div class="inner_content_logos">
          <a href="#"><img src="@/assets/img/contactIcon1.svg" alt=""></a>
          <a href="https://www.instagram.com/adway.kz/"><img src="@/assets/img/contactIcon2.svg" alt=""></a>
          <a href="#"><img src="@/assets/img/contactIcon3.svg" alt=""></a>
          <a href="https://t.me/adway.kz"><img src="@/assets/img/contactIcon4.svg" alt=""></a>
        </div>
      </div>
    </div>
    <div class="end_footer d-flex w-100 justify-content-center align-items-center">
      <p>© 2024 Adway. Все права защищены.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
}
</script>

<style scoped lang="scss">
.wrapper-footer {
  background: #2D6BBF;
  width: 100%;
  height: 382px;

  .inner_card {
    h3 {
      font-family: Manrope, sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
      color: #C2C2C2;
    }
    p, a {
      padding: 0;
      font-family: Manrope, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      color: #F4F4F4;
    }

    .inner_content {
      display: flex;
      gap: 10px;
    }
    .inner_content_logos {
      display: flex;
      gap: 10px;
    }

    .end_footer {
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #C2C2C2;
    }
  }
}

@media screen and (max-width: 390px) {
  .wrapper-footer {
    width: 100%;
    height: 800px;

    .wrap {
      display: flex;
      flex-wrap: wrap;
    }
    .inner_card {
      width: 100%;
      padding-left: 5%;

      h3 {
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
      }
      p, a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
      }

      .end_footer {
        p {
          font-family: Inter, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 17px;
          color: #C2C2C2;
        }
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .wrapper-footer {
    width: 100%;
    height: 730px;

    .wrap {
      display: flex;
      flex-wrap: wrap;
    }
    .inner_card {
      width: 100%;
      padding-left: 5%;

      h3 {
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
      }
      p, a {
        font-weight: 600;
        font-size: 14px;
        line-height: 19px;
      }

      .end_footer {
        p {
          font-family: Inter, sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 17px;
          color: #C2C2C2;
        }
      }
    }
  }
}
</style>
