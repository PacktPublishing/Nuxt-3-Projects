<template>
	<UContainer>
		<UCard>
			<div> {{ $t('welcome') }} </div>

			<div>
				{{ locale }}
			</div>

			<USelectMenu v-model="locale" :options="locales"></USelectMenu>
		</UCard>
	</UContainer>
</template>

<script setup>
	const { locale, locales } = useTranslation()
</script>
