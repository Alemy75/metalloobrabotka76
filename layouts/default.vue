<script lang="ts" setup>
import WhatsApp from '~/assets/img/whatsapp-icon.svg'
</script>

<template>
  <div>
    <div class="h-14 border-b border-b-primary">
      <Container class="h-full flex items-center">
        <h1 class="text-primary text-2xl">Металообработка</h1>
      </Container>
    </div>

    <div class="min-h-[calc(100vh-112px)]">
      <slot />
    </div>

    <!-- Footer -->
    <footer class="py-10 bg-surface">
      <Container>
        <div class="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Контакты -->
          <div>
            <h4 class="uppercase font-semibold text-primary mb-4">Контакты</h4>
            <p>Кириченко Геннадий Александрович</p>
            <p class="mt-2">
              Телефон:<br />
              <a href="tel:+79038265241" class="text-primary hover:underline">+7 (903) 826-52-41</a
              ><br />
              <a href="tel:+74852737088" class="text-primary hover:underline">8 (4852) 73-70-88</a>
            </p>
            <p class="mt-2">
              Email:<br />
              <a href="mailto:zmk15@yandex.ru" class="text-primary hover:underline"
                >zmk15@yandex.ru</a
              >
            </p>
            <p class="mt-2">
              <a
                href="https://wa.me/79038265241"
                target="_blank"
                class="text-green-400 hover:underline"
              >
                <img :src="WhatsApp" class="size-8" alt="Написать в What's App" />
              </a>
            </p>
          </div>

          <!-- Адреса -->
          <div>
            <h4 class="uppercase font-semibold text-primary mb-4">Адреса</h4>
            <p>Фактический: г. Ярославль, проспект Ленина, 2</p>
            <p class="mt-2">Юридический: г. Ярославль, ул. Костромская, д. 3</p>
            <p class="mt-2">Пн–Пт: 9:00 – 17:00</p>
          </div>

          <!-- Реквизиты -->
          <div>
            <h4 class="uppercase font-semibold text-primary mb-4">Реквизиты</h4>
            <p>ООО «Лазер»</p>
            <p>ИНН: 7604234710</p>
            <p>КПП: 760401001</p>
            <p>ОГРН: 1137460009675</p>
            <p>ОКПО: 15065471</p>
          </div>

          <!-- Банковские данные -->
          <div>
            <h4 class="uppercase font-semibold text-primary mb-4">Банк</h4>
            <p>ПАО «Промсвязьбанк», Ярославский филиал</p>
            <p>Р/с: 40702810002000003613</p>
            <p>К/с: 30101810300000000760</p>
            <p>БИК: 047888760</p>
          </div>
        </div>

        <div class="text-center text-sm opacity-50 mt-10 border-t border-foreground/20 pt-4">
          © 2025 ООО «Лазер». Все права защищены.
        </div>
      </Container>
    </footer>
  </div>
</template>
