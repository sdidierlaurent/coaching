<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

// const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Activités',
    to: '/activity',
    // active: route.path.startsWith('/docs/getting-started')
  },
  {
    label: 'Personnes ressource',
    to: '/people',
    // active: route.path.startsWith('/docs/components')
  },
])
</script>
<template>
  <UApp>
    <UHeader title="Coaching avec Sylvie">
      <UNavigationMenu :items="items" />
    </UHeader>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
  </UApp>
</template>
