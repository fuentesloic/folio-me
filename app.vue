<script setup lang="ts">
useSeoMeta({
  title: 'Loic Fuentes — App builder',
  description: 'Personal site of Loic Fuentes, app builder. Built by Alven Tech.',
  ogTitle: 'Loic Fuentes — App builder',
  ogDescription: 'Personal site of Loic Fuentes, app builder. Built by Alven Tech.',
  ogType: 'website',
})
</script>

<template>
  <div class="relative min-h-screen h-full w-full bg-black flex flex-col items-center justify-center text-white">
    <p class="font-sans text-5xl uppercase font-bold antialiase tracking-wide">
      Loic Fuentes
    </p>
    <p class="font-sans text-2xl antialiased tracking-wide">App builder</p>

    <div class="w-full flex justify-center p-8 flex flex-col items-center justify-center">
      <p class="font-sans text-md antialiased tracking-wide">Let's connect:</p>
      <div class="grid grid-cols-2 gap-4 mt-2">
        <a
          class="hover:text-indigo-500"
          href="https://github.com/fuentesloic"
          target="_blank"
        >
          <Icon 
            :height="36"
            :width="36"
            name="uil:github" />
        </a>
    
        <a
          class="hover:text-indigo-500"
          href="https://www.linkedin.com/in/fuentesloic/"
          target="_blank"
        >
          <Icon 
            :height="36"
            :width="36"
            name="uil:linkedin" />
        </a>
      </div>
    </div>

    <p class="font-sans text-md antialiased tracking-wide absolute bottom-8">
      Built by
      <a
        class="hover:text-indigo-500 underline"
        href="https://alventech.fr"
        target="_blank"
        rel="noopener"
        hreflang="fr"
        title="Alven Tech — app development studio"
      >
        Alven Tech
      </a>
    </p>
  </div>
</template>
