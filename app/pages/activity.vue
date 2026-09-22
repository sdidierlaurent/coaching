<script setup lang="ts">
import { activityCategories, initialActivities, workOptions, WEEK_HOURS, formatHours } from '~/data/activities'
import type { Activity } from '~/data/activities'

useSeoMeta({ title: 'Mes activités, en couleurs', description: 'Une représentation de mes activités et de leur place dans une semaine, avec des durées provisoires ajustables.' })

const activities = useState<Activity[]>('coaching-activities', () => initialActivities.map(activity => ({ ...activity })))
const total = computed(() => activities.value.reduce((sum, activity) => sum + (activity.hours ?? 0), 0))
const remaining = computed(() => WEEK_HOURS - total.value)
const missing = computed(() => activities.value.filter(activity => activity.hours === null).length)
const categories = computed(() => activityCategories.map(category => {
  const items = activities.value.filter(activity => activity.category === category.id)
  return { ...category, items, value: items.reduce((sum, activity) => sum + (activity.hours ?? 0), 0) }
}))
const chartMax = computed(() => Math.max(WEEK_HOURS, total.value))
const chartItems = computed(() => [
  ...categories.value.map(category => ({ label: category.label, value: category.value, color: category.color })),
  ...(remaining.value > 0 ? [{ label: 'Temps non réparti', value: remaining.value, color: 'var(--chart-empty)' }] : [])
])
const wheelBackground = computed(() => {
  let position = 0
  const stops = chartItems.value.filter(item => item.value > 0).map(item => {
    const start = position
    position += item.value / chartMax.value * 100
    return `${item.color} ${start}% ${position}%`
  })
  return `conic-gradient(from -90deg, ${stops.join(', ')})`
})
const summary = [
  { id: 'vue-ensemble', label: 'Ma semaine en couleurs' },
  ...activityCategories.map(category => ({ id: category.id, label: category.label })),
  { id: 'poursuivre', label: 'Poursuivre la réflexion' }
]

function updateHours(activity: Activity, value: number | null | undefined) {
  activity.hours = typeof value === 'number' && Number.isFinite(value)
    ? Math.min(WEEK_HOURS, Math.max(0, Math.round(value * 2) / 2))
    : null
}
function resetHours() {
  activities.value = initialActivities.map(activity => ({ ...activity }))
}
</script>

<template>
  <UContainer id="haut">
    <UPageHeader headline="02 / Faire de la place" title="Mes activités, en couleurs" description="Je donne une forme aux activités que je souhaite. En ajustant leur place dans une semaine, je peux explorer une répartition et en discuter avec Sylvie." class="editorial-header">
      <div class="flex flex-wrap gap-2 mt-6">
        <UBadge color="secondary" variant="subtle" size="lg">{{ activities.length }} activités · {{ categories.length }} univers</UBadge>
        <UBadge color="warning" variant="subtle" size="lg">Durées provisoires</UBadge>
      </div>
    </UPageHeader>

    <UPage class="notebook-layout">
      <template #left><PageSommaire :items="summary" /></template>
      <UPageBody class="space-y-12">
        <section id="vue-ensemble" aria-labelledby="semaine-title">
          <p class="eyebrow">Une semaine à composer</p>
          <h2 id="semaine-title" class="section-title">Ma semaine en couleurs.</h2>
          <p class="text-muted mb-7">Chaque couleur représente un univers de ma semaine. Les durées s’additionnent sur une base de 168 heures ; elles ne définissent pas un emploi du temps.</p>
          <UCard class="week-card" :ui="{ body: 'p-6 sm:p-8' }">
            <div class="week-overview">
              <div class="week-wheel" :style="{ background: wheelBackground }" role="img" :aria-label="`${formatHours(total)} heures réparties sur ${WEEK_HOURS} heures. Détail par univers dans la légende.`">
                <div class="wheel-center"><span class="eyebrow">Ma semaine</span><strong>{{ formatHours(total) }}<small>h</small></strong><span>sur {{ WEEK_HOURS }} heures</span><UBadge :color="remaining < 0 ? 'error' : 'primary'" variant="subtle" class="mt-3">{{ remaining < 0 ? 'À rééquilibrer' : 'En exploration' }}</UBadge></div>
              </div>
              <div class="min-w-0">
                <h3 class="text-lg font-semibold mb-5">La place de chaque univers</h3>
                <UProgressGroup :items="chartItems" :max="chartMax" size="lg" :ui="{ list: 'flex-col gap-3', item: 'w-full', itemLabel: 'flex-1', itemTrailing: 'font-semibold tabular-nums text-default' }">
                  <template #item-trailing="{ item }">{{ formatHours(item.value) }} h</template>
                </UProgressGroup>
                <p class="week-balance" :class="{ 'text-error': remaining < 0 }" role="status" aria-live="polite">{{ remaining < 0 ? `${formatHours(-remaining)} h au-delà des 168 h` : `${formatHours(remaining)} h non réparties` }}</p>
                <p v-if="missing" class="text-sm text-muted mt-2">{{ missing }} activité{{ missing > 1 ? 's' : '' }} sans durée renseignée, non incluse{{ missing > 1 ? 's' : '' }} dans le total.</p>
              </div>
            </div>
          </UCard>
          <UAlert v-if="remaining < 0" color="warning" variant="subtle" icon="i-lucide-circle-alert" title="Ma répartition dépasse une semaine" description="Je peux réduire certaines durées pour revenir à 168 heures. Le cercle représente maintenant le total saisi ; le dépassement reste indiqué." class="mt-4" />
          <div class="flex flex-wrap items-center justify-between gap-3 mt-5">
            <p class="text-sm text-muted max-w-lg">Ajustements par demi-heure. Ils sont conservés pendant la navigation, puis réinitialisés au rechargement.</p>
            <UButton color="neutral" variant="outline" icon="i-lucide-rotate-ccw" size="sm" @click="resetHours">Revenir aux durées de départ</UButton>
          </div>
        </section>

        <section v-for="category in categories" :id="category.id" :key="category.id" :aria-labelledby="`${category.id}-title`" class="activity-section" :style="{ '--category-color': category.color }">
          <div class="section-heading">
            <div class="section-icon"><UIcon :name="category.icon" class="size-6" /></div>
            <div class="flex-1 min-w-0"><h2 :id="`${category.id}-title`" class="category-title">{{ category.label }}</h2><p class="text-sm text-muted mt-1">{{ category.caption }}</p></div>
            <UBadge color="neutral" variant="subtle" size="lg" class="shrink-0 tabular-nums">{{ formatHours(category.value) }} h</UBadge>
          </div>
          <UCard :ui="{ body: 'p-0 sm:p-0 divide-y divide-default' }" class="activity-card">
            <article v-for="activity in category.items" :key="activity.id" class="activity-row">
              <div class="activity-row-heading">
                <h3 :id="`activity-${activity.id}`" class="font-semibold">{{ activity.label }}</h3>
                <div class="flex items-center gap-2 shrink-0">
                  <UInputNumber :model-value="activity.hours" :min="0" :max="WEEK_HOURS" :step="0.5" locale="fr-BE" placeholder="À définir" :aria-labelledby="`activity-${activity.id}`" :aria-describedby="`unit-${activity.id}`" class="w-32" @update:model-value="updateHours(activity, $event)" />
                  <span :id="`unit-${activity.id}`" class="text-xs text-muted">h / sem.</span>
                </div>
              </div>
              <template v-if="activity.id === 'travail'">
                <URadioGroup :model-value="activity.hours ?? undefined" :items="workOptions" legend="Mes repères de temps de travail" variant="card" orientation="horizontal" class="mb-6" :ui="{ fieldset: 'flex-col sm:flex-row', item: 'flex-1' }" @update:model-value="updateHours(activity, $event)" />
                <p class="text-sm text-muted mb-5">Ces trois repères reprennent mes valeurs de travail provisoires. Je peux aussi choisir une autre durée.</p>
              </template>
              <USlider v-if="activity.hours !== null" :model-value="activity.hours" :min="0" :max="WEEK_HOURS" :step="0.5" :aria-labelledby="`activity-${activity.id}`" :aria-valuetext="`${formatHours(activity.hours)} heures par semaine`" :ui="{ range: 'bg-(--category-color)', thumb: 'ring-(--category-color)' }" @update:model-value="updateHours(activity, $event)" />
              <p v-else class="text-sm text-muted">Durée à définir. Je peux la renseigner dans le champ ci-dessus.</p>
            </article>
          </UCard>
        </section>

        <section id="poursuivre" aria-labelledby="poursuivre-title" class="reflection-panel">
          <p class="eyebrow">Pour poursuivre avec Sylvie</p>
          <h2 id="poursuivre-title" class="section-title">Ce que cette vue m’aide à questionner.</h2>
          <p class="context-copy">Quelle place ai-je envie de donner à chaque activité ? Quelles durées restent à préciser ? Je peux utiliser cette représentation comme point de départ de notre échange, puis revenir aux personnes ressources qui composent l’autre volet de l’exercice.</p>
          <UButton to="/people" class="mt-6" variant="outline" trailing-icon="i-lucide-arrow-right">Revenir à mes personnes ressources</UButton>
        </section>
      </UPageBody>
    </UPage>
  </UContainer>
</template>
