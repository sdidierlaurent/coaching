<script setup lang="ts">
import { peopleCount, peopleSections } from '~/data/people-sections'
import { activityCategories, initialActivities } from '~/data/activities'

useSeoMeta({
  title: 'Mon point de départ',
  description: 'Mon carnet de coaching avec Sylvie : mes personnes ressources et les activités auxquelles je souhaite faire une place.'
})

const sections = [
  { id: 'contexte', label: 'Le contexte' },
  { id: 'explorer', label: 'Mes deux explorations' },
  { id: 'fil-conducteur', label: 'Le fil conducteur' }
]
</script>

<template>
  <div id="haut">
    <div class="home-hero">
      <UPageHero orientation="horizontal" :ui="{ container: 'py-14 sm:py-20 lg:py-24 gap-12', title: 'hero-title', description: 'text-base sm:text-lg max-w-xl', links: 'gap-3' }">
        <template #headline>
          <UBadge color="primary" variant="subtle" size="lg">Mon carnet - coaching</UBadge>
        </template>
        <template #title>
          Des liens.<br>Des envies.<br><span class="title-accent">Un chemin à dessiner.</span>
        </template>
        <template #description>
          Je rassemble ici les personnes ressources de mon univers professionnel et les activités auxquelles je souhaite faire une place. Une façon visuelle de nourrir ma réflexion avec Sylvie.
        </template>
        <template #links>
          <UButton to="/people" size="xl" trailing-icon="i-lucide-arrow-up-right">Mes personnes ressources</UButton>
          <UButton to="/activity" size="xl" color="neutral" variant="outline" trailing-icon="i-lucide-arrow-right">Mes activités</UButton>
        </template>
        <div class="exploration-board" aria-label="Les deux volets de mon exercice">
          <div class="board-caption"><span class="status-dot" /> Réflexion en cours</div>
          <ULink to="/people" raw class="board-card board-people" aria-label="Découvrir mes personnes ressources">
            <div class="flex items-center justify-between"><span class="eyebrow">01 / M’entourer</span><span class="board-symbol" aria-hidden="true">✳</span></div>
            <h2>Les personnes<br>ressources</h2>
            <p>{{ peopleCount }} personnes · {{ peopleSections.length }} domaines</p>
            <div class="board-chips"><span>Frontend</span><span>Formation</span><span>Inspiration</span></div>
          </ULink>
          <ULink to="/activity" raw class="board-card board-activities" aria-label="Découvrir mes activités">
            <div class="flex items-center justify-between"><span class="eyebrow">02 / Faire de la place</span><span class="board-symbol" aria-hidden="true">◷</span></div>
            <h2>Les activités<br>que je souhaite</h2>
            <p>{{ initialActivities.length }} activités · {{ activityCategories.length }} univers</p>
            <div class="board-palette" aria-hidden="true"><span v-for="category in activityCategories" :key="category.id" :style="{ background: category.color }" /></div>
          </ULink>
          <p class="board-note">Mon point de départ, pas un point final.</p>
        </div>
      </UPageHero>
    </div>

    <UContainer>
      <UPage class="notebook-layout">
        <template #left><PageSommaire :items="sections" /></template>
        <UPageBody class="space-y-16">
          <section id="contexte" aria-labelledby="contexte-title">
            <p class="eyebrow">Le contexte</p>
            <h2 id="contexte-title" class="section-title">Un exercice, ma façon de l’explorer.</h2>
            <div class="context-copy">
              <p>Dans le cadre de mon coaching avec Sylvie, il m’a été demandé de dresser une liste de personnes ressources dans un cadre professionnel et de représenter, de façon visuelle et originale, les activités que je souhaite.</p>
              <p>J’ai choisi d’en faire un site internet. Ce carnet réunit ces deux volets au même endroit : les personnes que j’identifie comme ressources et la place que j’imagine pour mes activités.</p>
            </div>
            <UButton class="mt-5" to="https://www.instagram.com/sylviegrf/" target="_blank" rel="noopener noreferrer" variant="link" trailing-icon="i-lucide-arrow-up-right">Retrouver Sylvie sur Instagram</UButton>
          </section>

          <section id="explorer" aria-labelledby="explorer-title">
            <p class="eyebrow">Deux portes d’entrée</p>
            <h2 id="explorer-title" class="section-title">Ce que je mets en perspective.</h2>
            <UPageGrid class="md:grid-cols-2 lg:grid-cols-2">
              <UPageCard to="/people" class="exploration-card" :ui="{ container: 'p-7 sm:p-8' }">
                <template #leading><span class="chapter-number">01</span></template>
                <template #title><h3 class="text-xl">Mes personnes ressources</h3></template>
                <template #description>Je rassemble les personnes de ma liste par domaine pour parcourir plus facilement mes ressources professionnelles et mes inspirations.</template>
                <template #footer><span class="card-link">Parcourir les personnes <UIcon name="i-lucide-arrow-up-right" /></span></template>
              </UPageCard>
              <UPageCard to="/activity" class="exploration-card exploration-card-teal" :ui="{ container: 'p-7 sm:p-8' }">
                <template #leading><span class="chapter-number">02</span></template>
                <template #title><h3 class="text-xl">Mes activités, en couleurs</h3></template>
                <template #description>Je visualise mes activités à l’échelle d’une semaine et j’ajuste les durées provisoires pour explorer différentes répartitions.</template>
                <template #footer><span class="card-link">Dessiner ma semaine <UIcon name="i-lucide-arrow-up-right" /></span></template>
              </UPageCard>
            </UPageGrid>
          </section>

          <section id="fil-conducteur" aria-labelledby="fil-title" class="reflection-panel">
            <p class="eyebrow">Le fil conducteur</p>
            <h2 id="fil-title" class="section-title">Rendre visible pour en parler.</h2>
            <p class="context-copy">Ce carnet me sert de support pour échanger avec Sylvie. Je peux passer d’une liste de personnes à une vue d’ensemble de mes activités, puis revenir sur ce qui mérite d’être précisé. Les heures sont des repères provisoires que je peux faire évoluer pendant l’exploration.</p>
            <USeparator class="my-6" />
            <div class="reflection-steps">
              <div><h3>01. Repérer</h3><p>Parcourir les personnes et les domaines.</p></div>
              <div><h3>02. Visualiser</h3><p>Observer la place de mes activités.</p></div>
              <div><h3>03. Échanger</h3><p>M’appuyer sur ce carnet avec Sylvie.</p></div>
            </div>
          </section>
        </UPageBody>
      </UPage>
    </UContainer>
  </div>
</template>
