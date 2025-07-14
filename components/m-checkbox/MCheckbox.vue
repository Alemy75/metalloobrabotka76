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
  <label class="flex cursor-pointer items-center space-x-2 select-none" :class="class">
    <div class="relative">
      <input
        type="checkbox"
        class="peer hidden"
        v-bind="inputProps"
        :checked="modelValue"
        @change="handleUpdate"
      />

      <div
        class="border-surface peer-checked:border-primary peer-checked:bg-primary peer-hover:border-primary/70 flex h-5 w-5 items-center justify-center rounded border-2 transition-colors duration-150"
      ></div>

      <svg
        class="text-background absolute top-1/2 left-1/2 h-4 w-4 translate-x-[-50%] translate-y-[-50%] opacity-0 transition duration-300 peer-checked:opacity-100"
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
