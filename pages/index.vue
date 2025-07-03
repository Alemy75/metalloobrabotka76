<script setup lang="ts">
import m1 from '~/assets/img/machines-1.webp'
import m2 from '~/assets/img/machines-2.webp'
import m3 from '~/assets/img/machines-3.webp'
import m4 from '~/assets/img/machines-4.webp'
import m5 from '~/assets/img/machines-5.webp'

const containerRef = ref(null)
const slides = ref([
  { id: 1, img: m1 },
  { id: 2, img: m2 },
  { id: 3, img: m3 },
  { id: 4, img: m4 },
  { id: 5, img: m5 },
])

const swiper = useSwiper(containerRef)
</script>

<template>
  <div class="flex gap-8 pt-16">
    <div class="w-1/2 flex justify-center flex-col">
      <h2 class="text-5xl uppercase font-bold text-primary">Металообработка</h2>
      <p class="mt-4">
        Мы занимаемся обработкой металлов и предлагаем полный спектр услуг в этой области. У нас
        работают опытные специалисты, и мы используем современное оборудование. Мы гарантируем
        высокое качество нашей работы и выполняем заказы любой сложности быстро и эффективно.
      </p>
    </div>

    <swiper-container
      :loop="true"
      autoplay-delay="5000"
      ref="containerRef"
      :speed="2000"
      class="w-1/2 rounded-2xl overflow-hidden border-1 border-primary"
    >
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <img :src="slide.img" alt="machines" />
      </swiper-slide>
    </swiper-container>
  </div>
</template>
