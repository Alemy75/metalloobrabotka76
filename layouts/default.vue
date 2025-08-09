<script lang="ts" setup>
import WhatsApp from '~/assets/img/whatsapp-icon.svg'

const route = useRoute()
const isMenuVisible = ref(false)

const LINKS = [
  {
    id: '#section-main',
    title: 'Главная',
  },
  {
    id: '#section-about',
    title: 'О компании',
  },
  {
    id: '#section-service',
    title: 'Услуги',
  },
  {
    id: '#section-advantages',
    title: 'Преимущества',
  },
  {
    id: '#section-ship',
    title: 'Доставка',
  },
  {
    id: '#section-payment',
    title: 'Оплата',
  },
  {
    id: '#section-contacts',
    title: 'Контакты',
  },
]
</script>

<template>
  <div
    class="bg-background fixed top-0 left-0 z-100 h-full w-full overflow-y-auto p-4 transition-all duration-500"
    :class="{ '-translate-x-full': !isMenuVisible }"
  >
    <h2 class="text-xl font-semibold">Навигация по сайту</h2>

    <button class="absolute top-4 right-4 cursor-pointer" @click="isMenuVisible = false">
      <LucideX />
    </button>

    <ul class="mt-4 flex w-full flex-col items-start gap-1">
      <li
        v-for="item in LINKS"
        :key="item.id"
        class="hover:border-b-secondary border-b-2 border-b-transparent py-[2px] font-medium transition-all duration-150"
        :class="{ 'text-secondary': route.hash === item.id }"
      >
        <a :href="item.id" @click="isMenuVisible = false">{{ item.title }}</a>
      </li>
    </ul>
  </div>

  <div>
    <div class="border-foreground/20 bg-background fixed top-0 right-0 left-0 z-50 h-14 border-b-1">
      <Container class="flex h-full items-center justify-between gap-4">
        <ul class="flex w-full items-center justify-center gap-4 max-sm:hidden">
          <li
            v-for="item in LINKS"
            :key="item.id"
            class="hover:border-b-secondary border-b-2 border-b-transparent py-[2px] font-medium transition-all duration-150"
            :class="{ 'text-secondary': route.hash === item.id }"
          >
            <a :href="item.id">{{ item.title }}</a>
          </li>
        </ul>

        <button class="ml-auto cursor-pointer sm:hidden" @click="isMenuVisible = true">
          <LucideMenu />
        </button>
      </Container>
    </div>

    <div class="min-h-[calc(100vh-56px)]">
      <slot />
    </div>

    <!-- Footer -->
    <footer id="section-contacts" class="scroll-mt-14 py-10">
      <Container>
        <div class="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Контакты -->
          <div>
            <h4 class="text-primary mb-4 font-semibold uppercase">Контакты</h4>
            <p>Кириченко Геннадий Александрович</p>
            <p class="mt-2">
              Телефон:<br />
              <a href="tel:+79038265241" class="text-primary underline-offset-4 hover:underline"
                >+7 (903) 826-52-41</a
              ><br />
              <a href="tel:+74852737088" class="text-primary underline-offset-4 hover:underline"
                >8 (4852) 73-70-88</a
              >
            </p>
            <p class="mt-2">
              Email:<br />
              <a
                href="mailto:zmk15@yandex.ru"
                class="text-primary underline-offset-4 hover:underline"
                >zmk15@yandex.ru</a
              >
            </p>
            <p class="mt-2">
              <a
                href="https://wa.me/79038265241"
                target="_blank"
                class="text-green-400 underline-offset-4 hover:underline"
              >
                <img :src="WhatsApp" class="size-8" alt="Написать в What's App" />
              </a>
            </p>
          </div>

          <!-- Адреса -->
          <div>
            <h4 class="text-primary mb-4 font-semibold uppercase">Адреса</h4>
            <p>Фактический: г. Ярославль, проспект Ленина, 2</p>
            <p class="mt-2">Юридический: г. Ярославль, ул. Костромская, д. 3</p>
            <p class="mt-2">Пн–Пт: 9:00 – 17:00</p>
          </div>

          <!-- Реквизиты -->
          <div>
            <h4 class="text-primary mb-4 font-semibold uppercase">Реквизиты</h4>
            <p>ООО «Лазер»</p>
            <p>ИНН: 7604234710</p>
            <p>КПП: 760401001</p>
            <p>ОГРН: 1137460009675</p>
            <p>ОКПО: 15065471</p>
          </div>

          <!-- Банковские данные -->
          <div>
            <h4 class="text-primary mb-4 font-semibold uppercase">Банк</h4>
            <p>ПАО «Промсвязьбанк», Ярославский филиал</p>
            <p>Р/с: 40702810002000003613</p>
            <p>К/с: 30101810300000000760</p>
            <p>БИК: 047888760</p>
          </div>
        </div>

        <div class="border-foreground/20 mt-10 border-t pt-4 text-center text-sm opacity-50">
          © 2025 ООО «Лазер». Все права защищены.
        </div>
      </Container>
    </footer>
  </div>
</template>
