<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
  modelValue: boolean
}>()
const emit = defineEmits<{
  (event: 'update:modelValue', action: boolean): void
}>()

function handleUpdate(event: Event) {
  if (!event.target) return

  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}

const inputProps = computed(() => {
  const { modelValue, class: className, ...other } = props

  return other
})
</script>

<template>
  <label class="flex items-center cursor-pointer select-none space-x-2" :class="class">
    <div class="relative">
      <input
        type="checkbox"
        class="peer hidden"
        v-bind="inputProps"
        :checked="modelValue"
        @change="handleUpdate"
      />

      <div
        class="w-5 h-5 flex items-center justify-center border-2 border-foreground/10 rounded transition-colors duration-150 peer-checked:border-primary peer-checked:bg-primary peer-hover:border-primary/70"
      ></div>

      <svg
        class="w-4 h-4 text-background opacity-0 peer-checked:opacity-100 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] transition duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    <span class="text-sm">
      <slot></slot>
    </span>
  </label>
</template>
