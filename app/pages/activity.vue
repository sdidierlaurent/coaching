<template>
   <UProgressGroup size="xl" :items="items" class="w-96" :max="168" />

   <h4>Social</h4>
   <ul>
    <li>Papa</li>
    <li>Famille</li>
    <li>Amis</li>
    <li>Vie sentimentale</li>
   </ul>
  <!-- Papa -->
  <div v-if="papa">
    {{papa.label}}({{papa.value}} h / sem.): <USlider v-model="papa.value" />
  </div>
  <h4>Loisirs</h4>
  <ul>
    <li>Jeu de rôle</li>
    <li>Écriture</li>
    <li>Lecture</li>
    <li>Sorties culturelles / spectacles</li>
  </ul>
  <h4>Santé & bien être</h4>
  <ul>
    <li>Santé mentale</li>
    <li>Sport, Activité physique</li>
    <li>Repos / dormir</li>
  </ul>
  <!-- travail -->
 <h4>Travail</h4>
  <div v-if="travail">
    Sécurité -> Risque
    <URadioGroup color="primary" :items="radio" v-model="travail.value" />
    Travail({{travail.value}} h / sem.): <USlider v-model="travail.value" :min="32" :max="56" :step="6"/>
  </div>
  <h4>Corvées</h4>
  <ul>
    <li>Quotidien (ménage, administratif personnel…)</li>
  </ul>
</template>

<script setup lang="ts">
import type { ProgressGroupItem, RadioGroupItem } from '@nuxt/ui'

const radio = ref<RadioGroupItem[]>([
  {
    label: '4/5',
    value: '32',
  },
  {
    label: 'Plein temps',
    value: '38',
  },
  {
    label: 'Entrepreneur',
    value: '50',
  }
])

const items = ref<ProgressGroupItem[]>([
  {
    label: 'Travail',
    value: 32,
    color: '#d63031'
  },
  {
    label: 'Jeu de rôle',
    value: 2,
    color: '#0984e3'
  },
  {
    label: 'Écriture',
    value: 1.5,
    color: '#6c5ce7'
  },
    {
    label: 'Papa',
    value: 14,
    color: '#55efc4'
  },
  {
    label: 'Famille',
    value: 10,
    color: '#00b894'
  },
    {
    label: 'Vie sentimentale',
    value: 14,
    color: '#00b894'
  },
  {
    label: 'Santé mentale',
    value: 1,
    color: '#e17055'
  },
  {
    label: 'Sport, Activité physique',
    value: 1,
    color: '#fab1a0'
  },
  {
    label: 'Sorties culturelles / spectacles',
    value: 1,
    color: '#81ecec'
  },
  {
    label: 'Amis',
    value: 4,
    color: '#00cec9'
  },
  {
    label: 'Repos / dormir',
    value: 40,
    color: '#636e72'
  },
  {
    label: 'Quotidien (ménage, administratif personnel etc)',
    value: 21,
    color: '#ffeaa7'
  },
])

  const travail = Array
    .from((items.value))
    .find( i => i.label === 'Travail')

  const papa = Array
    .from((items.value))
    .find( i => i.label === 'Papa')

  const maman = Array
    .from((items.value))
    .find( i => i.label === 'Papa')
</script>

<style>

</style>