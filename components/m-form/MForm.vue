<script lang="ts" setup>
import emailjs from '@emailjs/browser'

/* Consts */
const SERVICE_ID = 'service_dsl8mnn'
const TEMPLATE_ID = 'template_c7vus8j'
const PUBLIC_KEY = 'riBBNhcORYSnk6fcf'

const formFields = reactive({
  email: '',
  name: '',
  message: '',
  phone: '',
  personalData: false,
})

const isAlertVisible = ref(false)
const isFormSending = ref(false)

const isFormEnabled = computed(() => {
  return (
    formFields.personalData &&
    !isFormSending.value &&
    [formFields.email, formFields.name, formFields.phone, formFields.message].every(e => e.length)
  )
})

function submitForm() {
  isFormSending.value = true

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, '#email-send-form', {
      publicKey: PUBLIC_KEY,
    })
    .then(
      () => {
        isAlertVisible.value = true

        setTimeout(() => {
          isAlertVisible.value = false
        }, 5000)
      },
      error => {
        console.error(error)
      }
    )
    .finally(() => {
      isFormSending.value = false
    })
}

onBeforeMount(() => {
  emailjs.init({
    publicKey: PUBLIC_KEY,
  })
})
</script>

<template>
  <div
    class="bg-background border-foreground/20 fixed top-18 left-1/2 z-40 flex w-[400px] translate-x-[-50%] translate-y-[-100%] items-start justify-between rounded-2xl border-1 p-4 opacity-0 shadow-2xl transition-all duration-500 max-sm:w-[calc(100%-32px)]"
    :class="{
      'translate-y-0! opacity-100': isAlertVisible,
    }"
  >
    <button
      class="text-foreground/70 hover:text-foreground cursor-pointer transition-all duration-150"
      @click="isAlertVisible = false"
    >
      <LucideX :size="24" class="absolute top-4 right-4 shrink-0" />
    </button>

    <LucideCheckCircle2 :size="32" class="mr-4 text-green-600" />
    <div class="grow pr-14">
      <h3 class="font-semibold">Заявка успешно создана</h3>
      <p class="mt-1">Мы свяжемся с вами в течении <br />3-х рабочих дней.</p>
    </div>
  </div>

  <form
    id="email-send-form"
    @submit.prevent="submitForm"
    class="bg-background flex flex-col gap-4 rounded-2xl p-8"
  >
    <h2 class="text-foreground mb-4 text-2xl font-bold">Оставьте заявку на обратную связь</h2>

    <input type="hidden" name="time" :value="new Date()" />

    <input
      v-model="formFields.name"
      type="text"
      name="name"
      placeholder="Ваше имя"
      class="border-surface focus:ring-primary text-foreground bg-surface rounded-xl border px-4 py-3 transition-all duration-150 focus:ring-2 focus:outline-none"
      required
    />

    <input
      v-model="formFields.email"
      type="email"
      name="email"
      placeholder="Email"
      class="border-durface focus:ring-primary text-foreground bg-surface border-surface rounded-xl border px-4 py-3 transition-all duration-150 focus:ring-2 focus:outline-none"
      required
    />

    <input
      v-model="formFields.phone"
      type="phone"
      name="phone"
      placeholder="Телефон"
      class="border-surface bg-surface focus:ring-primary text-foregroun rounded-xl px-4 py-3 transition-all duration-150 focus:ring-2 focus:outline-none"
    />

    <textarea
      v-model="formFields.message"
      name="message"
      rows="4"
      placeholder="Комментарий"
      class="border-surface focus:ring-primary text-foreground bg-surface resize-none rounded-xl border px-4 py-3 transition-all duration-150 focus:ring-2 focus:outline-none"
      required
    ></textarea>

    <MCheckbox v-model="formFields.personalData" required>
      Я согласен на обработку персональных данных
    </MCheckbox>

    <button
      :disabled="!isFormEnabled"
      type="submit"
      class="bg-primary text-background hover:bg-primary/90 active:bg-primary/70 relative mt-4 cursor-pointer overflow-hidden rounded-xl px-6 py-4 font-semibold transition-all duration-150 disabled:pointer-events-none disabled:opacity-50"
    >
      <div
        class="group-hover:bg-background/20 focus-visible:bg-background/20 focus:bg-background/20 active:bg-background/40 absolute top-0 right-0 bottom-0 left-0 transition-all duration-150"
      ></div>

      <LucideLoaderCircle v-if="isFormSending" class="mx-auto animate-spin" />

      <span v-else>Отправить</span>
    </button>
  </form>
</template>
