<template>
  <div class="wrapper w-100 container my-5 m-auto d-flex align-items-center">
    <img class="main" src="@/assets/img/main_one.png" alt="">
    <img class="mobile" src="@/assets/img/mainmobile.png" alt="">
    <div class="title">
      <h3>ADWAY - ваше будущее начинается здесь и сейчас</h3>
      <p>Присоединяйтесь к нам в путешествии к знаниям, развитию и успеху!</p>
      <button>Получить консультацию</button>
    </div>
  </div>
  <div class="wrapper_one container" id="why">
    <div class="title">
      <h1>Почему мы?</h1>
      <hr>
    </div>
    <div class="wrap w-100 d-flex justify-content-between align-items-center">
      <div class="inner_card">
        <img src="@/assets/img/Icon1.png" alt="$">
        <div class="pt-3">
          <h3>Качество образования</h3>
          <p>Мы предлагаем высококачественные образовательные программы, созданные экспертами, для получения актуальных знаний и навыков для успешной карьеры студентами.</p>
        </div>
      </div>
      <div class="inner_card">
        <img src="@/assets/img/Icon2.png" alt="$">
        <div class="pt-3">
          <h3>Гибкость и доступность</h3>
          <p>Платформа "Adway.edu.kz" предлагает гибкий график обучения, доступ к материалам 24/7 и индивидуальный темп для достижения образовательных целей студентами.</p>
        </div>
      </div>
      <div class="inner_card">
        <img src="@/assets/img/Icon3.png" alt="$">
        <div class="pt-3">
          <h3>Технологические ресурсы</h3>
          <p>Мы используем современные технологии и методики, включая вебинары и виртуальные классы, для обогащения обучения студентов.</p>
        </div>
      </div>
      <div class="inner_card">
        <img src="@/assets/img/Icon4.png" alt="$">
        <div class="pt-3">
          <h3>Персональная поддержка</h3>
          <p>Наша платформа обеспечивает персональную поддержку и ресурсы для успеха и развития студентов в образовательном процессе.</p>
        </div>
      </div>
    </div>

    <div class="mobile">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="inner_card">
            <img src="@/assets/img/Icon1.png" alt="$">
            <div class="pt-3">
              <h3>Качество образования</h3>
              <p>Мы предлагаем высококачественные образовательные программы, созданные экспертами, для получения актуальных знаний и навыков для успешной карьеры студентами.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="inner_card">
            <img src="@/assets/img/Icon2.png" alt="$">
            <div class="pt-3">
              <h3>Гибкость и доступность</h3>
              <p>Платформа "Adway.edu.kz" предлагает гибкий график обучения, доступ к материалам 24/7 и индивидуальный темп для достижения образовательных целей студентами.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="inner_card">
            <img src="@/assets/img/Icon3.png" alt="$">
            <div class="pt-3">
              <h3>Технологические ресурсы</h3>
              <p>Мы используем современные технологии и методики, включая вебинары и виртуальные классы, для обогащения обучения студентов.</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="inner_card">
            <img src="@/assets/img/Icon4.png" alt="$">
            <div class="pt-3">
              <h3>Персональная поддержка</h3>
              <p>Наша платформа обеспечивает персональную поддержку и ресурсы для успеха и развития студентов в образовательном процессе.</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="wrapper_two container pt-5" id="bachelor">
    <div class="title">
      <h1>Процесс зачисления</h1>
      <hr>
    </div>
    <div class="wrap w-100 d-flex justify-content-between align-items-center">
      <div class="inner_card">
        <h1>01</h1>
        <div class="card_inner">
          <h3>Оставить заявку</h3>
          <p>Заполните форму и начните обучение у нас</p>
        </div>
      </div>
      <div class="inner_card">
        <h1>02</h1>
        <div class="card_inner">
          <h3>Cвязь с менеджером</h3>
          <p>Наши менеджеры помогут ответить на ваши вопросы</p>
        </div>
      </div>
      <div class="inner_card">
        <h1>03</h1>
        <div class="card_inner">
          <h3>Подача заявления</h3>
          <p>Следуйте инструкциям для подачи заявления</p>
        </div>
      </div>
    </div>
    <div class="wrap w-100 d-flex justify-content-around align-items-center py-5">
      <div class="inner_card">
        <h1>04</h1>
        <div class="card_inner">
          <h3>Оплата обучения</h3>
          <p>Выберите удобный способ оплаты</p>
        </div>
      </div>
      <div class="inner_long_card">
        <img src="@/assets/img/main_two.png" alt="" style="position: absolute; right: 0; z-index: 10; top: 10px">
        <h1>05</h1>
        <div class="card_inner">
          <h3>Вы обучаетесь в Satbayev University</h3>
          <p>Добро пожаловать в Satbayev University!</p>
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper_three container py-5" id="applicants">
    <div class="title">
      <h1>Требования от абитуриента</h1>
      <hr>
    </div>
    <div class="pt-3 w-100 d-flex">
      <div class="icon" style="width: 40%">
        <img src="@/assets/img/main_five.png" alt="">
      </div>
      <div class="inner_card">
        <div class="card_content">
          <div>
            <img src="@/assets/img/main_six.png" alt="">
          </div>
          <p>Аттестат об общем среднем образовании или
            диплом технического образования</p>
        </div>
        <div class="card_content">
          <div>
            <img src="@/assets/img/main_six.png" alt="">
          </div>
          <p>Копия документа, удостоверяющего
            личность (3 шт) </p>
        </div>
        <div class="card_content">
          <div>
            <img src="@/assets/img/main_six.png" alt="">
          </div>
          <p>Удостоверение о прописке к призывному участку для юношей копия (2 шт.)</p>
        </div>
        <div class="card_content">
          <div>
            <img src="@/assets/img/main_six.png" alt="">
          </div>
          <p>Фото 3х4 см</p>
        </div>
        <div class="card_content">
          <div>
            <img src="@/assets/img/main_six.png" alt="">
          </div>
          <p>Сертификат ЕНТ</p>
        </div>
      </div>
    </div>
    <div class="w-100 long-img pt-5" id="bachelor_magistr">
      <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="20"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
      >
        <swiper-slide>
            <img class="w-100 long-img-main" src="@/assets/img/main_three.png" alt="">
            <img class="w-100 long-img-mobile" src="@/assets/img/main_four.png" alt="">
        </swiper-slide>
        <swiper-slide>
            <img class="w-100 long-img-main" src="@/assets/img/main_three2.png" alt="">
        </swiper-slide>
      </swiper>

    </div>
  </div>

  <div class="wrapper_four container py-5 mt-3" id="profession">
    <div class="title">
      <h1>Выбери профессию по душе</h1>
      <hr>
    </div>
    <p class="py-3">После завершения обучения, вы сможете определиться с профессией для своего будущего.</p>
    <div class="inner_content">
      <div class="inner_card">
        <p>IT-специалист</p>
      </div>
      <div class="inner_card">
        <p>Web-программист</p>
      </div>
      <div class="inner_card">
        <p>Администратор бас данных</p>
      </div>
      <div class="inner_card">
        <p>Бизнес-аналитик</p>
      </div>
      <div class="inner_card">
        <p>Менеджер интернет-проектов</p>
      </div>
      <div class="inner_card">
        <p>Менеджер проекта</p>
      </div>
      <div class="inner_card">
        <p>Программист</p>
      </div>
      <div class="inner_card">
        <p>Разработчик программного обеспечения</p>
      </div>
      <div class="inner_card">
        <p>Продакт-менеджер</p>
      </div>
      <div class="inner_card">
        <p>Системный администратор</p>
      </div>
      <div class="inner_card">
        <p>Разработчик Web и мультимедийных приложений</p>
      </div>
      <div class="inner_card">
        <p>Специалист по информационным ресурсам</p>
      </div>
      <div class="inner_card">
        <p>Специалист по информационным системам</p>
      </div>
    </div>

    <div class="our_partners mt-5" id="partners">
      <div class="title ">
        <h1>Наши партнеры</h1>
        <hr>
      </div>
      <div class="main">
        <h1 class="py-4">Наши партнеры</h1>
        <div class="d-flex justify-content-around align-items-center w-100">
          <img src="@/assets/img/logo1.png" alt="$">
          <img src="@/assets/img/logo2.png" alt="$">
          <img src="@/assets/img/logo3.png" alt="$">
          <img src="@/assets/img/logo4.png" alt="$">
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="logos">
        <div class="logos-slide">
          <img src="@/assets/img/logo1.png" alt="Logo 1">
          <img src="@/assets/img/logo2.png" alt="Logo 2">
          <img src="@/assets/img/logo3.png" alt="Logo 2">
          <img src="@/assets/img/logo4.png" alt="Logo 2">
        </div>
      </div>
    </div>
  </div>

  <div class="wrapper_five container py-5">
    <div class="title">
      <h1>Оставьте заявку и получите <span>бесплатную консультацию</span></h1>
      <p>Мы поможем вам выбрать программу для достижения ваших целей, предоставим информацию о процессе обучения и ответим на все ваши вопросы.</p>
    </div>
    <div class="form d-flex flex-column justify-content-start align-items-start">
      <p>Ваше имя</p>
      <input type="text" placeholder="Алмаз">
      <p class="pt-3">Почта</p>
      <input type="text" placeholder="almaz@gmail.com ">
      <button class="mt-5">Отправить</button>
    </div>
  </div>
</template>

<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default {
  name: "landingPage",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      logos: [
        [
          "~@/assets/img/Logo1.png",
          "~@/assets/img/Logo2.png",
          "~@/assets/img/Logo3.png",
          "~@/assets/img/Logo4.png",
        ],
        [
          "~@/assets/img/Logo1.png",
          "~@/assets/img/Logo2.png",
          "~@/assets/img/Logo3.png",
          "~@/assets/img/Logo4.png",
        ]
      ],
    };
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
}
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 603px;

  .mobile {
    display: none;
  }
  .title {
    padding-left: 5%;

    h3 {
      width: 567px;
      font-family: Manrope, sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      line-height: 55px;
      letter-spacing: 1px;
      color: #FFFFFF;
    }
    p {
      font-family: Manrope, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 25px;
      color: #FFFFFF;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 14px 24px;
      gap: 10px;
      width: 289px;
      height: 55px;
      background: #FFA51E;
      border-radius: 12px;
    }
  }
  img {
    z-index: -10;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background: none;
  }
}

.wrapper_one {
  height: 527px;
  .title {
    width: 202px;
    height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;
    hr {
      right: 0;
      bottom: 0;
      position: absolute;
      width: 40%;
      border: 2px solid #FFA51E;
      text-align: end;
      opacity: 1;
    }
  }
  h1 {
    font-family: Monrope, sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    color: #1A1A1A;
  }
  .inner_card {
    width: 24%;
    height: 312px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 16px;
    gap: 16px;
    background: #F5F5F7;
    border-radius: 40px;

    h3 {
      text-align: start;
      font-family: Manrope, sans-serif;
      font-weight: 800;
      font-size: 20px;
      line-height: 28px;
      color: #2D6BBF;
    }
    p {
      font-family: Manrope, sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: #4A4562;
    }
  }
}

.wrapper_two {
  height: 527px;

  .title {
    width: 330px;
    height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;

    hr {
      right: 0;
      bottom: 0;
      position: absolute;
      width: 40%;
      border: 2px solid #FFA51E;
      text-align: end;
      opacity: 1;
    }
    h1 {
      font-family: Monrope, sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: #1A1A1A;
    }
  }

  .inner_long_card {
    width: 47%;
    height: 180px;
    padding: 24px 16px;
    gap: 16px;
    background: #fff;
    border-radius: 40px;
    position: relative;

    .card_inner {
      width: 80%;
      height: 136px;
      display: flex;
      flex-direction: column;
      background: #F5F5F7;
      position: absolute;
      bottom: 0;
      right: 0;
      justify-content: center;
      align-items: flex-start;
      padding: 24px;
      gap: 8px;
      border-radius: 16px;
      border: 2px solid #FFA51E;


      h3 {
        font-family: Manrope, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #2D6BBF;
      }
      p {
        font-family: Manrope, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #727070;
      }
    }
    h1 {
      top: 0;
      position: absolute;
      width: 93px;
      height: 88px;
      right: 79%;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 80px;
      line-height: 88px;
      color: #FFA51E;
    }
  }
  .inner_card {
    width: 32%;
    height: 180px;
    padding: 24px 16px;
    gap: 16px;
    background: #fff;
    border-radius: 40px;
    position: relative;

    .card_inner {
      width: 80%;
      display: flex;
      flex-direction: column;
      background: #F5F5F7;
      position: absolute;
      bottom: 0;
      right: 0;
      justify-content: center;
      align-items: flex-start;
      padding: 24px;
      gap: 8px;
      height: 136px;
      border-radius: 16px;

      h3 {
        font-family: Manrope, sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 26px;
        color: #2D6BBF;
      }
      p {
        font-family: Manrope, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #727070;
      }
    }

    h1 {
      top: 0;
      position: absolute;
      width: 93px;
      height: 88px;
      left: 0;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 800;
      font-size: 80px;
      line-height: 88px;
      color: #FFA51E;
    }
  }
}

.wrapper_three {
  height: 992px;
  position: relative;

  .long-img {
    position: absolute;
    bottom: 5%;
    .long-img-mobile {
      display: none;
    }
  }
  .title {
    width: 445px;
    height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;

    hr {
      right: 0;
      bottom: 0;
      position: absolute;
      width: 40%;
      border: 2px solid #FFA51E;
      text-align: end;
      opacity: 1;
    }
    h1 {
      font-family: Monrope, sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: #1A1A1A;
    }
  }

  .inner_card {
    padding-left: 10%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .card_content {
      display: flex;
      gap: 20px;
      width: 100%;

      svg {
        width: 32px;
        height: 32px;
      }
      p {
        font-family: Manrope, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 27px;
        color: #1A1A1A;
      }
    }
  }
}

.wrapper_four {
  height: 692px;

  .title {
    width: 465px;
    height: 65px;
    display: flex;
    flex-direction: column;
    position: relative;

    hr {
      right: 0;
      bottom: 0;
      position: absolute;
      width: 40%;
      border: 2px solid #FFA51E;
      text-align: end;
      opacity: 1;
    }
    h1 {
      font-family: Monrope, sans-serif;
      font-weight: 700;
      font-size: 32px;
      line-height: 44px;
      color: #1A1A1A;
    }
  }
  .inner_content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .inner_card {
      width: auto;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 7px;
      background: #FFFFFF;
      border: 1px solid #F3F3F3;
      border-radius: 16px;

      p {
        margin: auto;
        font-family: Manrope, sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #434343;
      }
    }
  }

  .our_partners {
    .title {
        display: none;
      }
      width: 100%;
      height: 268px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;

    .main {
      width: 100%;
      text-align: center;
    }
  }
}
.mobile {
  display: none;
}
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
.logos {
  overflow: hidden;
  padding: 60px 0;
  background: #fff;
}
.logos-slide {
  white-space: nowrap;
  animation: 10s slide infinite linear;
}
.logos-slide img{
  height: 50px;
  margin: 0 40px;
}

.wrapper_five {
  height: 443px;
  display: flex;

  .title {
    width: 50%;

    h1 {
      font-family: Manrope, sans-serif;
      font-weight: 700;
      font-size: 48px;
      line-height: 64px;
      color: #000;

      span {
        color: #2D6BBF;
      }
    }
    p {
      font-family: Manrope, sans-serif;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #434343;
    }
  }
  .form {
    width: 50%;
    padding-left: 10%;
    input {
      box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px 24px;
      gap: 10px;
      width: 444px;
      height: 58px;
      background: #F9F9F9;
      border: 1px solid #F3F3F3;
      border-radius: 16px;
    }
    p {
      font-family: Manrope, sans-serif;
      font-weight: 600;
      font-size: 16px;
      line-height: 26px;
      color: #8E8E93;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 32px;
      gap: 10px;
      width: 444px;
      height: 51px;
      background: #FFA51E;
      border-radius: 16px;
    }
  }
}

@media screen and (max-width: 390px) {
 .wrapper {
   .title {
     h3 {
       width: 304px;
       height: 152px;
       font-weight: 700;
       font-size: 28px;
       line-height: 38px;
       letter-spacing: 1px;
       color: #FFFFFF;
       span {
         color: #2D6BBF;
       }
     }
     p {
       width: 216px;
       height: 95px;
       font-weight: 400;
       font-size: 14px;
       line-height: 19px;
       letter-spacing: 1px;
       color: #EFEEEE;
     }
     button {
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       padding: 14px 24px;
       gap: 10px;
       width: 244px;
       height: 50px;
       background: #FFA51E;
       border-radius: 16px;
     }
   }
   .mobile {
     display: block;
   }
   .main {
     display: none;
   }
 }
  .wrapper_one {
    height: 427px;

    .title {
      width: 150px;
      height: 61px;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .wrap {
      display: none !important;
    }

    .mobile {
      display: block;
    }

    .inner_card {
      width: 100%;

      h3 {
        font-weight: 800;
        font-size: 20px;
        line-height: 28px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  .wrapper_two {
    height: 1100px;

    .title {
      width: 250px;
      height: 61px;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;

      .inner_card {
        width: 100%;

        h1 {
          font-style: normal;
          font-weight: 800;
          font-size: 52px;
          line-height: 88px;
        }
        .card_inner {
          width: 290px;
          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 26px;
          }
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
      .inner_long_card {
        width: 100%;
        h1 {
          right: 73%;
          font-style: normal;
          font-weight: 800;
          font-size: 52px;
          line-height: 88px;
        }
        .card_inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 24px;
          gap: 8px;
          position: absolute;
          width: 290px;
          height: 140px;
          background: #F5F5F7;
          border: 2px solid #FFA51E;
          border-radius: 16px;

          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 26px;
          }
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
  }

  .wrapper_three {
    height: 980px;

    .icon {
      display: none;
    }
    .long-img {
      bottom: 0%;
      .long-img-main {
        display: none;
      }
      .long-img-mobile {
        display: block;
      }
    }
    .title {
      width: 335px;
      height: 65px;
      display: flex;
      flex-direction: column;
      position: relative;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .inner_card {
      padding-left: 1%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .card_content {
        p {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }

  .wrapper_four {
    height: 900px;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #838383;
    }
    .title {
      margin: 0;
      padding: 0;
      width: 347px;
      height: 65px;
      display: flex;
      flex-direction: column;
      position: relative;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 40px;
      }
    }
    .inner_content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .inner_card {
        width: auto;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        background: #FFFFFF;
        border: 1px solid #F3F3F3;
        border-radius: 16px;

        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #838383;
        }
      }
    }

    .our_partners {
      margin: 0;
      width: 100%;
      height: 68px !important;
      display: block;

      .main {
        display: none !important;
      }

      .title {
        margin: 0;
        padding: 0;
        width: 253px;
        height: 61px;
        display: flex;
        flex-direction: column;
        position: relative;

        hr {
          right: 0;
          bottom: 0;
          position: absolute;
          width: 40%;
          border: 2px solid #FFA51E;
          text-align: end;
          opacity: 1;
        }
        h1 {
          display: block;
          font-family: Monrope, sans-serif;
          font-weight: 700;
          font-size: 32px;
          line-height: 44px;
          color: #1A1A1A;
        }
      }
      h1 {display: none}
    }
  }
  .mobile {
    display: block;
  }
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .logos {
    overflow: hidden;
    padding: 0;
    background: #fff;
  }
  .logos-slide {
    white-space: nowrap;
    animation: 10s slide infinite linear;
  }
  .logos-slide img{
    height: 50px;
    margin: 0 40px;
  }
  .wrapper_five {
    display: flex;
    flex-wrap: wrap;
    height: 598px;

    .title {
     width: 100%;
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #1A1A1A;
        span {
          color: #2D6BBF;
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
      }
    }
    .form {
      margin-top: 10px;
      width: 100%;
      padding: 0;
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
      }
      input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        gap: 10px;
        width: 358px;
        height: 58px;
        background: #F9F9F9;
        border: 1px solid #F3F3F3;
        border-radius: 16px;
      }
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 32px;
        gap: 10px;
        width: 358px;
        height: 46px;
        background: #FFA51E;
        border-radius: 16px;
      }
    }
  }
}
@media screen and (max-width: 430px) {
  .wrapper {
    .title {
      h3 {
        padding-left: 8%;
        width: 304px;
        height: 152px;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 1px;
        color: #FFFFFF;
        span {
          color: #2D6BBF;
        }
      }
      p {
        padding-left: 8%;
        width: 216px;
        height: 95px;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 1px;
        color: #EFEEEE;
      }
      button {
        margin-left: 8%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 14px 24px;
        gap: 10px;
        width: 244px;
        height: 50px;
        background: #FFA51E;
        border-radius: 16px;
      }
    }
    .mobile {
      display: block;
    }
    .main {
      display: none;
    }
  }
  .wrapper_one {
    height: 427px;

    .title {
      width: 150px;
      height: 61px;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .wrap {
      display: none !important;
    }

    .mobile {
      display: block;
    }

    .inner_card {
      width: 100%;

      h3 {
        font-weight: 800;
        font-size: 20px;
        line-height: 28px;
      }
      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }

  .wrapper_two {
    height: 1100px;

    .title {
      width: 250px;
      height: 61px;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;

      .inner_card {
        width: 100%;
        h1 {
          font-style: normal;
          font-weight: 800;
          font-size: 52px;
          line-height: 88px;
        }
        .card_inner {
          width: 290px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 24px;
          gap: 8px;
          position: absolute;
          height: 140px;
          background: #F5F5F7;

          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 26px;
          }
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
      .inner_long_card {
        width: 100%;
        h1 {
          right: 77%;
          font-style: normal;
          font-weight: 800;
          font-size: 52px;
          line-height: 88px;
        }
        .card_inner {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 24px;
          gap: 8px;
          position: absolute;
          width: 290px;
          height: 140px;
          background: #F5F5F7;
          border: 2px solid #FFA51E;
          border-radius: 16px;

          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 26px;
          }
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
          }
        }
      }
    }
  }

  .wrapper_three {
    height: 980px;

    .icon {
      display: none;
    }
    .long-img {
      bottom: 0%;
      .long-img-main {
        display: none;
      }
      .long-img-mobile {
        display: block;
      }
    }
    .title {
      width: 335px;
      height: 65px;
      display: flex;
      flex-direction: column;
      position: relative;

      h1 {
        font-size: 24px;
        line-height: 33px;
      }
    }

    .inner_card {
      padding-left: 1%;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .card_content {
        p {
          font-size: 16px;
          line-height: 22px;
        }
      }
    }
  }

  .wrapper_four {
    height: 900px;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #838383;
    }
    .title {
      margin: 0;
      padding: 0;
      width: 347px;
      height: 65px;
      display: flex;
      flex-direction: column;
      position: relative;

      h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 40px;
      }
    }
    .inner_content {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      .inner_card {
        width: auto;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        background: #FFFFFF;
        border: 1px solid #F3F3F3;
        border-radius: 16px;

        p {
          font-weight: 400;
          font-size: 12px;
          line-height: 20px;
          color: #838383;
        }
      }
    }

    .our_partners {
      margin: 0;
      width: 100%;
      height: 68px !important;
      display: block;

      .main {
        display: none !important;
      }

      .title {
        margin: 0;
        padding: 0;
        width: 253px;
        height: 61px;
        display: flex;
        flex-direction: column;
        position: relative;

        hr {
          right: 0;
          bottom: 0;
          position: absolute;
          width: 40%;
          border: 2px solid #FFA51E;
          text-align: end;
          opacity: 1;
        }
        h1 {
          display: block;
          font-family: Monrope, sans-serif;
          font-weight: 700;
          font-size: 32px;
          line-height: 44px;
          color: #1A1A1A;
        }
      }
      h1 {display: none}
    }
  }
  .mobile {
    display: block;
  }
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .logos {
    overflow: hidden;
    padding: 0;
    background: #fff;
  }
  .logos-slide {
    white-space: nowrap;
    animation: 10s slide infinite linear;
  }
  .logos-slide img{
    height: 50px;
    margin: 0 40px;
  }
  .wrapper_five {
    display: flex;
    flex-wrap: wrap;
    height: 598px;

    .title {
      width: 100%;
      h1 {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: #1A1A1A;
        span {
          color: #2D6BBF;
        }
      }
      p {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
      }
    }
    .form {
      margin-top: 10px;
      width: 100%;
      padding: 0;
      p {
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
      }
      input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 16px;
        gap: 10px;
        width: 358px;
        height: 58px;
        background: #F9F9F9;
        border: 1px solid #F3F3F3;
        border-radius: 16px;
      }
      button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 32px;
        gap: 10px;
        width: 358px;
        height: 46px;
        background: #FFA51E;
        border-radius: 16px;
      }
    }
  }
}
</style>