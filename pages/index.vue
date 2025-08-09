<script setup lang="ts">
import m1 from '~/assets/img/machines-1.webp'
import m2 from '~/assets/img/machines-2.webp'
import m3 from '~/assets/img/machines-3.webp'
import m4 from '~/assets/img/machines-4.webp'
import m5 from '~/assets/img/machines-5.webp'
import b1 from '~/assets/img/bench-1.webp'
import b2 from '~/assets/img/bench-2.webp'
import b3 from '~/assets/img/bench-3.webp'
import b4 from '~/assets/img/bench-4.webp'
import b5 from '~/assets/img/bench-5.webp'
import b6 from '~/assets/img/bench-6.webp'
import b7 from '~/assets/img/bench-7.webp'
import b8 from '~/assets/img/bench-8.webp'
import b9 from '~/assets/img/bench-9.webp'
import b10 from '~/assets/img/bench-10.webp'
import b11 from '~/assets/img/bench-11.webp'
import b12 from '~/assets/img/bench-12.webp'
import b13 from '~/assets/img/bench-13.webp'
import b14 from '~/assets/img/bench-14.webp'
import b15 from '~/assets/img/bench-15.webp'

/* Meat */
useHead({
  title: 'Металлообработка | Ярослвль',
  meta: [
    { name: 'description', content: 'Полный спектр услуг обработки металла' },
    {
      name: 'keywords',
      content:
        'металлообработка, фрезерные работы, электроэрозионная обработка, термическая обработка, координатно-расточные работы, шлифовальные работы, долбёжная обраотка',
    },
    { name: 'author', content: 'ООО "Лазер"' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Металлообработка в Ярославле' },
    { property: 'og:description', content: 'Полный спектр услуг обработки металла' },
    { property: 'og:type', content: 'website' },
  ],
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.svg' }],
})

const HERO_SLIDES = [
  { id: 1, img: m1 },
  { id: 2, img: m2 },
  { id: 3, img: m3 },
  { id: 4, img: m4 },
  { id: 5, img: m5 },
]

const ABOUT_SLIDES = [
  { id: 10, img: b10 },
  { id: 11, img: b11 },
  { id: 12, img: b12 },
  { id: 13, img: b13 },
  { id: 14, img: b14 },
  { id: 15, img: b15 },
  { id: 1, img: b1 },
  { id: 2, img: b2 },
  { id: 3, img: b3 },
  { id: 4, img: b4 },
  { id: 5, img: b5 },
  { id: 6, img: b6 },
  { id: 7, img: b7 },
  { id: 8, img: b8 },
  { id: 9, img: b9 },
]

const aboutSwiperRef = ref()
const aboutSwiper = useSwiper(aboutSwiperRef)
</script>

<template>
  <!-- Hero -->
  <div
    id="section-main"
    class="bg-gradient-black/80 relative mt-14 h-[calc(100vh-56px)] scroll-mt-14 overflow-hidden"
  >
    <div class="absolute top-0 left-0 z-10 h-full w-full">
      <Container class="ite flex h-full items-center">
        <div
          class="bg-gradient-black/80 inline-flex h-full flex-col justify-center p-12 shadow-black max-lg:w-full max-lg:text-center"
        >
          <h2 class="text-background text-5xl font-bold uppercase max-lg:text-xl">
            Металлообработка
          </h2>

          <p class="text-background mt-4 max-w-[500px]">
            Мы занимаемся обработкой металлов и предлагаем полный спектр услуг в этой области. У нас
            работают опытные специалисты, и мы используем современное оборудование. Мы гарантируем
            высокое качество нашей работы и выполняем заказы любой сложности быстро и эффективно.
          </p>

          <a
            href="#section-form"
            class="text-background bg-secondary group relative mt-4 flex max-w-full cursor-pointer justify-center overflow-hidden rounded-xl px-6 py-4 font-semibold transition-all duration-150 disabled:opacity-50"
          >
            <div
              class="group-hover:bg-background/20 focus-visible:bg-background/20 focus:bg-background/20 active:bg-background/40 absolute top-0 right-0 bottom-0 left-0 transition-all duration-150"
            ></div>
            Оставить заявку
          </a>
        </div>
      </Container>
    </div>

    <swiper-container
      :loop="true"
      autoplay-delay="10000"
      :speed="2000"
      class="pointer-events-none z-0 h-full"
    >
      <swiper-slide v-for="(slide, idx) in HERO_SLIDES" :key="idx">
        <img class="h-full w-full object-cover" :src="slide.img" alt="machines" />
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- About -->
  <div id="section-about" class="bg-surface scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Технологическая компания</h2>

      <p class="mt-10">
        Мы предлагаем услуги по металлообработке деталей, опираясь на многолетний опыт нашей команды
        профессионалов. Мы производим компоненты для различных отраслей промышленности и постоянно
        работаем над улучшением наших процессов и технологий, чтобы предоставлять вам продукцию
        высочайшего качества.
      </p>

      <div class="mt-10">
        <div class="border-primary relative mx-auto border-2 max-sm:mx-5">
          <button
            class="bg-primary text-background group absolute top-1/2 left-0 z-10 flex h-10 w-10 translate-x-[-50%] translate-y-[-50%] cursor-pointer items-center justify-center overflow-hidden rounded-full"
            @click="aboutSwiper.prev()"
          >
            <div
              class="group-hover:bg-background/20 focus-visible:bg-background/20 focus:bg-background/20 active:bg-background/40 absolute top-0 right-0 bottom-0 left-0 transition-all duration-150"
            ></div>
            <LucideChevronLeft />
          </button>

          <button
            class="bg-primary text-background group absolute top-1/2 right-0 z-10 flex h-10 w-10 translate-x-[50%] translate-y-[-50%] cursor-pointer items-center justify-center overflow-hidden rounded-full"
            @click="aboutSwiper.next()"
          >
            <div
              class="group-hover:bg-background/20 focus-visible:bg-background/20 focus:bg-background/20 active:bg-background/40 absolute top-0 right-0 bottom-0 left-0 transition-all duration-150"
            ></div>
            <LucideChevronRight />
          </button>

          <swiper-container
            ref="aboutSwiperRef"
            :loop="true"
            autoplay-delay="5000"
            :speed="500"
            class="h-full"
          >
            <swiper-slide v-for="(slide, idx) in ABOUT_SLIDES" :key="idx">
              <img class="w-full object-cover" :src="slide.img" alt="machines" />
            </swiper-slide>
          </swiper-container>
        </div>

        <div class="mt-4 flex justify-center">
          <span class="flex items-center gap-2">
            <div
              v-for="(slide, idx) in ABOUT_SLIDES"
              :key="idx"
              class="bg-primary/50 h-2 w-2 cursor-pointer rounded-full transition duration-150"
              :class="{ 'bg-primary/100': aboutSwiper.activeIndex.value === idx }"
              @click="aboutSwiper.to(idx)"
            ></div>
          </span>
        </div>
      </div>
    </Container>
  </div>

  <!-- Advantages -->
  <div id="section-benches" class="bg-surface scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Оборудование</h2>

      <p class="my-10">
        В основе нашего производства лежит использование передового высокотехнологичного
        оборудования, обеспечивающего высокое качество и точность изготавливаемых изделий. Мы
        применяем:
      </p>

      <div class="mt-10 grid grid-cols-2 grid-rows-2 gap-4 max-lg:grid-cols-1">
        <div
          class="bg-background border-primary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">
            3-координатные станки с ЧПУ VMC60C и VMC650
          </h3>
          <p>
            Эти станки позволяют выполнять широкий спектр операций по фрезерованию и сверлению с
            высокой степенью автоматизации.
          </p>
        </div>

        <div
          class="bg-background border-primary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">5-координатный станок с ЧПУ CT350</h3>
          <p>
            Данное оборудование обеспечивает возможность обработки деталей со сложной геометрией в
            пяти плоскостях, что значительно расширяет наши производственные возможности.
          </p>
        </div>

        <div
          class="bg-background border-primary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">
            Ленточнопильный станок CUT -300х500CSA
          </h3>
          <p>
            Предназначен для точного и эффективного распила различных материалов с максимальной
            длиной реза до 500 мм.
          </p>
        </div>

        <div
          class="bg-background border-primary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">Плоскошлифовальный станок 3Л722А</h3>
          <p>
            Используется для достижения высокой чистоты и точности обработки плоских поверхностей.
          </p>
        </div>
      </div>
    </Container>
  </div>

  <div id="section-service" class="scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Наши услуги</h2>

      <MServices />
    </Container>
  </div>

  <!-- Advantages -->
  <div id="section-advantages" class="bg-surface scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Наши преимущества</h2>

      <div class="mt-10 grid grid-cols-2 grid-rows-2 gap-4 max-lg:grid-cols-1">
        <div
          class="bg-background border-secondary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">Индивидуальный подход</h3>
          <p>
            Мы глубоко погружаемся в специфику вашего производства, чтобы предложить наиболее
            эффективные решения.
          </p>
        </div>

        <div
          class="bg-background border-secondary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">
            Современные технологии проектирования
          </h3>
          <p>
            Используем передовое программное обеспечение для 3D-моделирования и прочностных
            расчетов.
          </p>
        </div>

        <div
          class="bg-background border-secondary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">Опыт и экспертиза</h3>
          <p>
            Наша команда состоит из высококвалифицированных инженеров с многолетним опытом в области
            проектирования оснастки.
          </p>
        </div>

        <div
          class="bg-background border-secondary flex flex-col gap-4 rounded-2xl border-l-8 p-8 shadow-2xl"
        >
          <h3 class="text-primary font-semibold uppercase">Оптимизация затрат</h3>
          <p>
            Мы стремимся предложить решения, которые не только повысят производительность, но и
            будут экономически выгодны для вашего предприятия.
          </p>
        </div>
      </div>
    </Container>
  </div>

  <!-- Ship -->
  <div id="section-ship" class="bg-surface scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Варианты доставки</h2>

      <div class="mt-10 grid grid-cols-2 gap-4 max-lg:grid-cols-1">
        <div class="flex flex-col items-center gap-4">
          <LucideUser :size="40" class="text-secondary" />

          <h3 class="text-primary text-center font-semibold uppercase">
            Самовывоз со склада в Ярославле
          </h3>
          Вы можете забрать заказ самостоятельно с нашего склада по адресу: г. Ярославль, Троицкий
          тракт, 9/6. Склад работает с понедельника по пятницу с 7:00 до 16:00. В выходные — субботу
          и воскресенье — склад закрыт. Перед приездом рекомендуем уточнить готовность заказа у
          менеджера.
        </div>

        <div class="flex flex-col items-center gap-4">
          <LucideTruck :size="40" class="text-secondary" />

          <h3 class="text-primary text-center font-semibold uppercase">
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
  <!-- Payment -->
  <div id="section-payment" class="scroll-mt-14">
    <Container class="py-10">
      <h2 class="w-full text-center text-2xl font-bold">Оплата заказа</h2>

      <p class="text-primary border-secondary mt-10 border-l-2 pl-4 font-semibold uppercase">
        Получение счёта
      </p>

      <p class="mt-4 opacity-50">
        Оплата производится по выставленному счету. Чтобы получить счет, пожалуйста, свяжитесь с
        нами любым удобным способом:
      </p>

      <div class="mt-4 grid grid-cols-3 gap-4 max-lg:grid-cols-1">
        <a
          href="tel:84852737088"
          title="8 (4852) 73-70-88"
          class="bg-background border-primary/10 hover:border-secondary/50 flex flex-col items-center gap-4 rounded-2xl border-2 px-4 py-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucidePhoneCall :size="40" class="text-secondary" />

          <div class="text-primary text-center font-semibold uppercase">
            Позвоните в офис
            <div class="text-secondary">ООО"Лазер"</div>
          </div>
        </a>

        <a
          href="mailto:L737088@yandex.ru"
          title="L737088@yandex.ru"
          class="bg-background border-primary/10 hover:border-secondary/50 flex flex-col items-center gap-4 rounded-2xl border-2 px-4 py-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucideMail :size="40" class="text-secondary" />

          <div class="text-primary text-center font-semibold uppercase">
            Напишите нам на
            <div class="text-secondary">электронную почту</div>
          </div>
        </a>

        <a
          href="#section-form"
          class="bg-background border-primary/10 hover:border-secondary/50 flex flex-col items-center gap-4 rounded-2xl border-2 px-4 py-8 transition-all duration-200 hover:translate-y-[-4px] hover:shadow-2xl"
        >
          <LucideFormInput :size="40" class="text-secondary" />

          <div class="text-primary text-center font-semibold uppercase">
            Воспользуйтесь
            <div class="text-secondary">формой обратной связи</div>
            на нашем сайте
          </div>
        </a>
      </div>

      <p class="text-primary border-secondary mt-10 border-l-2 pl-4 font-semibold uppercase">
        Условия оплаты
      </p>

      <ul class="bg-background border-primary/10 mt-4 rounded-2xl border-2 p-8">
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

      <p class="text-primary border-secondary mt-10 border-l-2 pl-4 font-semibold uppercase">
        Рассчет стоимости
      </p>

      <p class="mt-4 opacity-50">
        Стоимость услуг обработки определяется на основании технических требований к детали, включая
        материал, сложность, объем и сроки. Для получения коммерческого предложения, просим
        предоставить чертежи.
      </p>
    </Container>
  </div>

  <!-- Form -->
  <div id="section-form" class="bg-surface scroll-mt-14 py-10">
    <Container>
      <MForm />
    </Container>
  </div>
</template>
