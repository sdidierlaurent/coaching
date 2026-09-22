<script setup lang="ts">
const props = defineProps<{
  items: { id: string; label: string; color?: string }[]
}>()

const route = useRoute()
const open = ref(false)
const activeId = ref(props.items[0]?.id)
const navigationStyle = computed(() => {
  const color = props.items.find(item => item.id === activeId.value)?.color
  return color ? { '--ui-primary': color } : undefined
})
const links = computed(() => props.items.map(item => ({
  label: item.label,
  to: `${route.path}#${item.id}`,
  active: activeId.value === item.id,
  onSelect: () => { open.value = false }
})))

let frame = 0
function updateActive() {
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const sections = props.items
      .map(item => document.getElementById(item.id))
      .filter((element): element is HTMLElement => !!element)
    const current = sections.filter(section => section.getBoundingClientRect().top <= 180).at(-1)
    activeId.value = current?.id ?? props.items[0]?.id
  })
}

onMounted(() => {
  updateActive()
  window.addEventListener('scroll', updateActive, { passive: true })
  window.addEventListener('resize', updateActive)
})
watch(() => props.items, () => nextTick(updateActive))
onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateActive)
  window.removeEventListener('resize', updateActive)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <aside class="page-sommaire" aria-label="Sommaire de la page">
    <div class="desktop-sommaire">
      <p class="eyebrow mb-4">Dans cette page</p>
      <UNavigationMenu :items="links" :style="navigationStyle" orientation="vertical" :ui="{ linkLabel: 'whitespace-normal' }" />
      <USeparator class="my-6" />
      <UButton to="#haut" color="neutral" variant="ghost" size="sm" icon="i-lucide-arrow-up">Haut de page</UButton>
    </div>
    <UCollapsible v-model:open="open" class="mobile-sommaire relative" :ui="{ content: 'absolute inset-x-0 top-full mt-2 rounded-xl border border-default bg-default p-3 shadow-lg max-h-[60dvh] overflow-y-auto' }">
      <UButton block color="neutral" variant="subtle" :trailing-icon="open ? 'i-lucide-chevron-up' : 'i-lucide-chevron-down'" class="justify-between">
        Dans cette page
      </UButton>
      <template #content>
        <UNavigationMenu :items="links" :style="navigationStyle" orientation="vertical" class="pt-3" :ui="{ linkLabel: 'whitespace-normal' }" />
      </template>
    </UCollapsible>
  </aside>
</template>
