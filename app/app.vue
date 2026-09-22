<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { fr } from '@nuxt/ui/locale'

const route = useRoute()
const items = computed<NavigationMenuItem[]>(() => [
  { label: 'Mon carnet', to: '/', active: route.path === '/' },
  { label: 'Personnes ressources', to: '/people', active: route.path === '/people' },
  { label: 'Mes activités', to: '/activity', active: route.path === '/activity' }
])

useHead({
  htmlAttrs: { lang: 'fr' },
  titleTemplate: '%s · Mon carnet de coaching',
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=2', sizes: '16x16 32x32 48x48' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' }
  ]
})
</script>

<template>
  <UApp :locale="fr">
    <a class="skip-link" href="#contenu">Aller au contenu</a>
    <UHeader title="Mon carnet de coaching" :menu="{ title: 'Navigation du carnet', description: 'Accéder à l’accueil, aux personnes ressources et aux activités.' }">
      <template #title>
        <span class="brand-mark" aria-hidden="true">✳</span>
        <span class="brand-name">Mon carnet<span>Coaching avec Sylvie</span></span>
      </template>
      <UNavigationMenu :items="items" aria-label="Navigation principale" />
      <template #right>
        <UColorModeButton />
      </template>
      <template #body>
        <UNavigationMenu :items="items" orientation="vertical" aria-label="Navigation principale" />
      </template>
    </UHeader>
    <UMain id="contenu" tabindex="-1">
      <NuxtPage />
    </UMain>
    <UFooter class="site-footer">
      <template #left>
        <p class="text-sm text-muted">Un espace pour réfléchir, explorer et en parler avec Sylvie.</p>
      </template>
      <template #right>
        <UButton to="https://www.instagram.com/sylviegrf/" target="_blank" rel="noopener noreferrer" color="neutral" variant="ghost" trailing-icon="i-lucide-arrow-up-right">
          Sylvie sur Instagram
        </UButton>
      </template>
    </UFooter>
  </UApp>
</template>
