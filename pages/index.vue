<script setup lang="ts">
import m1 from '~/assets/img/machines-1.webp'
import m2 from '~/assets/img/machines-2.webp'
import m3 from '~/assets/img/machines-3.webp'
import m4 from '~/assets/img/machines-4.webp'
import m5 from '~/assets/img/machines-5.webp'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_m2he2vq'
const TEMPLATE_ID = 'template_udlktxj'
const PUBLIC_KEY = 'EtjJQWA6i4tDaKmU3'

const formFields = reactive({
  email: '',
  name: '',
  message: '',
  phone: '',
  personalData: false,
})

const isFormEnabled = computed(() => {
  return (
    formFields.personalData &&
    [formFields.email, formFields.name, formFields.phone, formFields.message].every(e => e.length)
  )
})

const containerRef = ref(null)
const slides = ref([
  { id: 1, img: m1 },
  { id: 2, img: m2 },
  { id: 3, img: m3 },
  { id: 4, img: m4 },
  { id: 5, img: m5 },
])


function submitForm(event: Event) {
  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, '#email-send-form', {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        alert('Сообщение отправлено!')
      },
      error => {
        console.error(error)
      }
    )
}

onBeforeMount(() => {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  })
})
</script>

<template>
  <!-- Hero -->
  <div class="h-[calc(100vh-56px)] relative bg-gradient-to-br from-secondary/80 to-primary/80">
    <div
      class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-secondary/80 to-primary/80 z-10"
    >
      <Container class="h-full flex items-center">
        <div class="w-1/2 max-lg:w-full flex justify-center flex-col max-lg:text-center">
          <h2 class="text-5xl max-lg:text-3xl uppercase font-bold text-background">
            Металообработка
          </h2>
          <p class="text-background mt-4">
            Мы занимаемся обработкой металлов и предлагаем полный спектр услуг в этой области. У нас
            работают опытные специалисты, и мы используем современное оборудование. Мы гарантируем
            высокое качество нашей работы и выполняем заказы любой сложности быстро и эффективно.
          </p>
        </div>
      </Container>
    </div>

    <swiper-container
      :loop="true"
      autoplay-delay="2000"
      ref="containerRef"
      :speed="2000"
      class="h-full pointer-events-none z-0"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <img class="object-cover h-full w-full" :src="slide.img" alt="machines" />
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- About -->
  <div class="bg-surface">
    <Container class="py-10">
      <h2 class="text-2xl font-bold w-full text-center">Технологическая компания</h2>

      <p class="mt-10">
        Мы предлагаем услуги по металлообработке деталей, опираясь на многолетний опыт нашей команды
        профессионалов. Мы производим компоненты для различных отраслей промышленности и постоянно
        работаем над улучшением наших процессов и технологий, чтобы предоставлять вам продукцию
        высочайшего качества.
      </p>
    </Container>
  </div>
  <!-- Ship -->
  <div>
    <Container class="py-10">
      <h2 class="text-2xl font-bold w-full text-center">Варианты доставки</h2>

      <!-- <p class="mt-10 text-center opacity-50">
        Мы предлагаем два удобных способа получения вашего заказа:
      </p> -->

      <div class="grid grid-cols-2 gap-4 mt-10 max-lg:grid-cols-1">
        <div class="flex flex-col gap-4 items-center">
          <LucideUser :size="40" class="text-secondary" />

          <h3 class="text-primary font-semibold uppercase text-center">
            Самовывоз со склада в Ярославле
          </h3>
          Вы можете забрать заказ самостоятельно с нашего склада по адресу: г. Ярославль, Троицкий
          тракт, 9/6. Склад работает с понедельника по пятницу с 7:00 до 16:00. В выходные — субботу
          и воскресенье — склад закрыт. Перед приездом рекомендуем уточнить готовность заказа у
          менеджера.
        </div>

        <div class="gap-4 flex flex-col items-center">
          <LucideTruck :size="40" class="text-secondary" />

          <h3 class="text-primary font-semibold uppercase text-center">
            Доставка через транспортную компанию
          </h3>
          Мы бесплатно доставим ваш заказ до выбранной вами транспортной компании. Далее вы
          самостоятельно организуете доставку: оплачиваете, отслеживаете и принимаете груз. Мы часто
          работаем с "Деловыми линиями", но вы можете выбрать любую ТК. Доставка возможна в любой
          регион России, а её стоимость рассчитывается самой компанией.
        </div>
      </div>
    </Container>
  </div>
  <!-- Pay -->
  <div class="bg-surface">
    <Container class="py-10">
      <h2 class="text-2xl font-bold w-full text-center">Оплата заказа</h2>

      <p class="mt-10 text-primary uppercase font-semibold border-l-2 border-secondary pl-4">
        Получение счёта
      </p>

      <p class="mt-4 opacity-50">
        Оплата производится по выставленному счету. Чтобы получить счет, пожалуйста, свяжитесь с
        нами любым удобным способом:
      </p>

      <div class="grid grid-cols-3 gap-4 mt-4 max-lg:grid-cols-1">
        <a
          href="tel:84852737088"
          title="8 (4852) 73-70-88"
          class="gap-4 flex flex-col items-center px-4 py-8 rounded-2xl bg-background border-2 border-primary/10 hover:border-secondary/50 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucidePhoneCall :size="40" class="text-secondary" />

          <div class="text-primary font-semibold uppercase text-center">
            Позвоните в офис
            <div class="text-secondary">ООО"Лазер"</div>
          </div>
        </a>

        <a
          href="mailto:L737088@yandex.ru"
          title="L737088@yandex.ru"
          class="gap-4 flex flex-col items-center px-4 py-8 rounded-2xl bg-background border-2 border-primary/10 hover:border-secondary/50 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucideMail :size="40" class="text-secondary" />

          <div class="text-primary font-semibold uppercase text-center">
            Напишите нам на
            <div class="text-secondary">электронную почту</div>
          </div>
        </a>

        <a
          class="gap-4 flex flex-col items-center px-4 py-8 rounded-2xl bg-background border-2 border-primary/10 hover:border-secondary/50 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucideFormInput :size="40" class="text-secondary" />

          <div class="text-primary font-semibold uppercase text-center">
            Воспользуйтесь
            <div class="text-secondary">формой обратной связи</div>
            на нашем сайте
          </div>
        </a>
      </div>

      <p class="mt-10 text-primary uppercase font-semibold border-l-2 border-secondary pl-4">
        Условия оплаты
      </p>

      <ul class="mt-4 p-8 bg-background border-primary/10 border-2 rounded-2xl">
        <li>
          Предоплата:
          <span>
            50% от суммы заказа необходимо внести в течение 3 банковских дней с момента выставления
            счета.
          </span>
        </li>

        <li class="mt-4">
          Постоплата:
          <span>
            После уведомления о готовности заказа к отгрузке, необходимо внести оставшиеся 50% в
            день получения уведомления или на следующий день.
          </span>
        </li>
      </ul>
    </Container>
  </div>

  <!-- Form -->
  <div class="py-10">
    <Container>
      <form
        id="email-send-form"
        @submit.prevent="submitForm"
        class="rounded-2xl flex flex-col gap-4"
      >
        <h2 class="text-2xl font-bold text-foreground mb-4">Оставьте заявку</h2>

        <input type="hidden" name="time" :value="new Date()" />

        <input
          v-model="formFields.name"
          type="text"
          name="name"
          placeholder="Ваше имя"
          class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150 text-foreground bg-white"
          required
        />

        <input
          v-model="formFields.email"
          type="email"
          name="email"
          placeholder="Email"
          class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150 text-foreground bg-white"
          required
        />

        <input
          v-model="formFields.phone"
          type="phone"
          name="phone"
          placeholder="Телефон"
          class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150 text-foreground bg-white"
        />

        <textarea
          v-model="formFields.message"
          name="message"
          rows="4"
          placeholder="Комментарий"
          class="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-150 text-foreground bg-white resize-none"
          required
        ></textarea>

        <label class="flex items-start gap-2 text-sm text-foreground">
          <input
            v-model="formFields.personalData"
            type="checkbox"
            name="consent"
            required
            class="mt-1 accent-primary"
          />
          <span>Я согласен на обработку персональных данных</span>
        </label>

        <button
          :disabled="!isFormEnabled"
          type="submit"
          class="mt-4 py-3 px-6 rounded-xl cursor-pointer bg-primary text-white font-semibold hover:bg-primary/90 active:bg-primary/70 transition-all duration-150 disabled:opacity-50"
        >
          Отправить
        </button>
      </form>
    </Container>
  </div>
</template>
