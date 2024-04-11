<template>
  <div id="landing">
    <div class="wrapper w-100 container mb-5 mt-3 m-auto d-flex align-items-center">
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
      <div class="title mb-5">
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
          <p>Администратор баз данных</p>
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
        <input v-model="name" type="text" placeholder="Алмаз">
        <p class="pt-3">Телефон</p>
        <input v-model="phone" type="text" placeholder="+7 (777) 777-77-77">
        <button @click="submitForm" class="mt-5">Отправить</button>
      </div>
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
      name: '',
      phone: '',
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
  methods: {
    async submitForm() {
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('phone', this.phone); // Добавляем данные телефона

      try {
        const response = await fetch('https://adway.edu.kz/theme/space/ajax_form.php', { // Замените URL_API на фактический адрес вашего API
          method: 'POST',
          body: formData, // Используем FormData для отправки
        });
        const result = await response.json();
        if (result && result.result === 1) {
          alert('Форма успешно отправлена: ' + result.msg);
        } else {
          throw new Error(result.msg);
        }
      } catch (error) {
        console.error('Ошибка при отправке формы: ', error);
        alert('Ошибка при отправке формы: ' + error.message);
      }
    }
  }
}
</script>

<style lang="scss">
@import './landing.scss';
</style>