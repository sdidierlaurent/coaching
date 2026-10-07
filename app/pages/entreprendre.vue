<script setup lang="ts">
useSeoMeta({
  title: 'Entreprendre en Belgique',
  description: 'Les premiers contacts, les parcours de lancement et les aides à examiner pour une activité web et de formation en Belgique.'
})

const contacts = [
  { name: 'Bruxelles · hub.info / 1819', detail: 'Information gratuite et orientation vers un guichet d’économie locale (GEL) pour préparer le projet et le plan financier.', url: 'https://hub.brussels/fr/services/information-entreprendre/' },
]

const aids = [
  { name: 'Prime Lancement · Bruxelles', amount: '60 % des dépenses admises, jusqu’à 7 500 €', detail: 'À examiner avant la création : notamment sans numéro d’entreprise et avec un accompagnement agréé. Faire valider les dépenses avant achat.', url: 'https://economie-emploi.brussels/prime-projet' },
  { name: 'Prime indépendant · Actiris', amount: 'Jusqu’à 4 000 € sur six mois', detail: 'Pour certains chercheurs d’emploi bruxellois passant à titre principal. L’avis d’opportunité doit précéder le démarrage.', url: 'https://www.actiris.brussels/fr/citoyens/devenir-independant/prime-pour-independant/' },
]
</script>

<template>
  <UContainer class="max-w-4xl pb-16">
    <UPageHeader headline="03 / Préparer mon lancement" title="Entreprendre en Belgique" description="Mes repères pour lancer une activité de création de sites et de formation IT, IA et gestion de projets." class="editorial-header" />
    <div class="space-y-10">
      <section aria-labelledby="contacts-title">
        <p class="eyebrow">Mon premier pas</p>
        <h2 id="contacts-title" class="section-title">Me faire accompagner avant de m’inscrire.</h2>
        <div class="space-y-3">
          <UCard v-for="contact in contacts" :key="contact.name">
            <h3 class="font-semibold">
              <ULink :to="contact.url" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">{{ contact.name }}</ULink>
            </h3>
            <p class="text-sm text-muted mt-2 leading-relaxed">{{ contact.detail }}</p>
          </UCard>
        </div>
      </section>

      <section aria-labelledby="statut-title">
        <h2 id="statut-title" class="section-title">Choisir le parcours adapté.</h2>
        <ul class="list-disc pl-5 space-y-3 text-muted leading-relaxed">
          <li><strong class="text-default">Si je garde un emploi :</strong> examiner le statut d’indépendant complémentaire avec une caisse sociale.</li>
          <li><strong class="text-default">Si je suis au chômage :</strong> comparer le passage à titre principal, le Tremplin-indépendants et le test en coopérative avant de démarrer. Ces parcours peuvent modifier les allocations et l’accès aux primes.</li>
          <li><strong class="text-default">Si je veux tester mes missions :</strong> explorer <ULink to="https://jobyourself.be/" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">JobYourself</ULink> ou <ULink to="https://microstart.be/" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">Microstart</ULink> à Bruxelles. Le statut <ULink to="https://smartbe.be/fr/nos-services/" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">Smart</ULink> pour travailler dans un cadre salarié à la mission.</li>
        </ul>
      </section>

      <section aria-labelledby="aides-title">
        <h2 id="aides-title" class="section-title">Les aides à examiner en priorité.</h2>
        <div class="space-y-3">
          <UCard v-for="aid in aids" :key="aid.name">
            <h3 class="font-semibold">
              <ULink :to="aid.url" target="_blank" rel="noopener noreferrer" class="text-primary underline underline-offset-4">{{ aid.name }}</ULink>
            </h3>
            <p class="font-medium text-sm mt-2">{{ aid.amount }}</p>
            <p class="text-sm text-muted mt-2 leading-relaxed">{{ aid.detail }}</p>
          </UCard>
        </div>
        <p class="text-sm text-muted mt-4 leading-relaxed">L’éligibilité et le cumul dépendent du dossier. Microstart peut aussi proposer du coaching et un microcrédit : il s’agit d’un prêt à rembourser.</p>
      </section>

      <section aria-labelledby="actions-title" class="reflection-panel">
        <p class="eyebrow">Passer à l’action</p>
        <h2 id="actions-title" class="section-title">Mes prochaines étapes.</h2>
        <ol class="list-decimal pl-5 space-y-3 text-muted leading-relaxed">
          <li>Préciser mon statut actuel, mon éventuel numéro BCE et ma date de lancement.</li>
          <li>Contacter l’organisme régional et comparer les parcours avant l’immatriculation ou les achats.</li>
          <li>Définir deux offres distinctes — création web et formation — puis tester les besoins et les prix auprès de clients potentiels.</li>
          <li>Préparer le plan financier avec un accompagnateur ; chiffrer les cotisations, la TVA et la trésorerie avec un comptable.</li>
          <li>Après validation du calendrier des aides, organiser les formalités, les contrats et la facturation électronique.</li>
        </ol>
        <p class="text-sm text-muted mt-5 leading-relaxed">Pour développer la formation : explorer les partenariats avec Technofutur TIC ou un opérateur déjà agréé. Pour apprendre à fixer mes prix et prospecter : consulter le Passeport réussite de l’efp.</p>
      </section>
    </div>
  </UContainer>
</template>
