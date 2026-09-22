<script setup lang="ts">
import { peopleCount, peopleSections } from '~/data/people-sections'

useSeoMeta({ title: 'Mes personnes ressources', description: 'Les personnes ressources de mon univers professionnel, regroupées par domaine.' })

const search = ref('')
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('fr')
const filteredSections = computed(() => {
  const query = normalize(search.value.trim())
  return peopleSections.map(section => ({
    ...section,
    people: section.people.filter(person => normalize(`${person.name} ${person.description} ${section.label}`).includes(query))
  })).filter(section => section.people.length)
})
const resultCount = computed(() => new Set(filteredSections.value.flatMap(section => section.people.map(person => person.name.trim()))).size)
const summary = computed(() => [
  { id: 'repertoire', label: 'Mon répertoire' },
  ...filteredSections.value.map(section => ({ id: section.id, label: section.shortLabel }))
])
</script>

<template>
  <UContainer id="haut">
    <UPageHeader headline="01 / M’entourer" title="Mes personnes ressources" description="Je rassemble les personnes que j’identifie comme ressources dans mon univers professionnel. Chaque domaine est une porte d’entrée pour explorer cette liste." class="editorial-header">
      <div class="flex flex-wrap gap-2 mt-6">
        <UBadge variant="subtle" size="lg">{{ peopleCount }} personnes</UBadge>
        <UBadge color="secondary" variant="subtle" size="lg">{{ peopleSections.length }} domaines</UBadge>
      </div>
    </UPageHeader>
    <UPage class="notebook-layout">
      <template #left><PageSommaire :items="summary" /></template>
      <UPageBody class="space-y-12">
        <section id="repertoire" aria-labelledby="repertoire-title">
          <p class="eyebrow">Mon répertoire</p>
          <h2 id="repertoire-title" class="section-title">Des personnes, plusieurs horizons.</h2>
          <p class="text-muted max-w-2xl mb-6">Je peux parcourir les domaines ou retrouver une personne par son nom ou sa description. Une même personne peut figurer dans plusieurs domaines.</p>
          <UFormField label="Rechercher dans mon répertoire" name="recherche">
            <UInput v-model="search" placeholder="Un nom, un métier, un domaine…" icon="i-lucide-search" size="xl" class="w-full" :ui="{ trailing: 'pe-2' }">
              <template v-if="search" #trailing><UButton color="neutral" variant="ghost" icon="i-lucide-x" aria-label="Effacer la recherche" size="sm" @click="search = ''" /></template>
            </UInput>
          </UFormField>
          <p class="text-sm text-muted mt-3" role="status">{{ resultCount }} personne{{ resultCount > 1 ? 's' : '' }} {{ search ? 'trouvée' : 'répertoriée' }}{{ resultCount > 1 ? 's' : '' }}</p>
        </section>

        <UAlert v-if="!filteredSections.length" color="neutral" variant="subtle" title="Aucune personne trouvée" description="Je peux essayer un autre nom, un métier ou effacer la recherche." :actions="[{ label: 'Effacer la recherche', color: 'neutral', variant: 'outline', onClick: () => search = '' }]" />

        <section v-for="section in filteredSections" :id="section.id" :key="section.id" :aria-labelledby="`${section.id}-title`" class="resource-section">
          <div class="section-heading">
            <div class="section-icon"><UIcon :name="section.icon" class="size-6" /></div>
            <h2 :id="`${section.id}-title`" class="category-title">{{ section.label }}</h2>
            <UBadge color="neutral" variant="subtle" class="shrink-0">{{ section.people.length }}</UBadge>
          </div>
          <UPageGrid class="md:grid-cols-2 lg:grid-cols-2 gap-4">
            <UPageCard v-for="person in section.people" :key="person.name" as="article" class="person-card" :ui="{ container: 'p-5 sm:p-5 h-full', wrapper: 'h-full', footer: 'mt-auto pt-4' }">
              <template #body>
                <UUser :name="person.name" :avatar="{ ...person.avatar, src: person.avatar.src || undefined }" size="xl" :ui="{ root: 'items-start', wrapper: 'min-w-0 flex-1' }">
                  <h3 class="person-name">{{ person.name }}</h3>
                  <p v-if="person.description" class="text-sm text-muted mt-1 leading-relaxed">{{ person.description }}</p>
                </UUser>
              </template>
              <template v-if="person.to" #footer>
                <UButton :to="person.to" target="_blank" rel="noopener noreferrer" color="neutral" variant="link" size="sm" trailing-icon="i-lucide-arrow-up-right" :aria-label="`Voir le profil de ${person.name} (nouvel onglet)`" class="px-0">Voir le profil</UButton>
              </template>
            </UPageCard>
          </UPageGrid>
        </section>

        <!-- <UPageCard variant="soft" orientation="horizontal" title="Et les activités auxquelles je souhaite faire une place ?" description="Je poursuis l’exercice avec une autre perspective : le temps de ma semaine.">
          <UButton to="/activity" trailing-icon="i-lucide-arrow-right" class="justify-center">Explorer mes activités</UButton>
        </UPageCard> -->
      </UPageBody>
    </UPage>
  </UContainer>
</template>
