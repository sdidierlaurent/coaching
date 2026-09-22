<script setup lang="ts">
  import { am, admin, front, pm, design, back, training, mentor, inspi } from '~/data/people'

</script>

<template>
    <UContainer>
      <UPage>
        <UPageHeader title="Personnes ressource" />
        <UPageBody>
            <UPageHeader title="Prospection / Account manager" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in am"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          <UPageHeader title="Administratif" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in admin"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          <UPageHeader title="Développeur front-end" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in front"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          <UPageHeader title="Project manager" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in pm"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          <UPageHeader title="Design" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in design"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          <UPageHeader title="Développeur back-end" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in back"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

            <UPageHeader title="Formation / Coaching" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in training"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

            <UPageHeader title="Mentor" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in mentor"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

            <UPageHeader title="Inspiration" />
            <UPageList>
                <UPageCard
                v-for="(user, index) in inspi"
                :key="index"
                variant="ghost"
                :to="user.to"
                target="'_blank'"
                >
                <template #body>
                    <UUser :name="user.name" :description="user.description" :avatar="user.avatar" size="xl" class="relative" />
                </template>
                </UPageCard>
            </UPageList>
            <USeparator />

          </UPageBody>
      </UPage>
    </UContainer>
</template>