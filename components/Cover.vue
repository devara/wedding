<template>
  <div class="w-full h-screen">
    <div
      class="relative w-full h-full bg-cover bg-center flex flex-col gap-4 md:items-center md:justify-center cover"
    >
      <div class="z-10 absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        class="z-20 flex flex-col items-center justify-center text-dark-basic-primary px-6 text-center text-sm md:text-base mt-10 md:mt-0"
      >
        <div class="mb-8">
          <nuxt-img
            :src="`w_80/images/wedding/cover-icon.png`"
            width="80"
            loading="lazy"
          />
        </div>
        <h4 class="font-dancing text-2xl">The Wedding of</h4>
        <h1 class="py-6 font-cookie text-5xl">Lisda & Deva</h1>
        <div class="mb-2">
          Hadir secara virtual melalui siaran langsung instagram:
        </div>
        <button
          class="rounded-md bg-pink-600 text-sm px-4 py-2 flex items-center"
          @click.prevent="toInstagram"
        >
          <fa :icon="['fab', 'instagram']" />&nbsp;&nbsp;@lisdamei
        </button>

        <h4 class="mt-8 subtitle-1">Kepada Bapak/Ibu/Saudara/i</h4>
        <h3
          class="mt-4 pb-2 m-auto capitalize border-b w-full max-w-xs font-semibold"
        >
          {{ person }}
        </h3>
        <h4 class="mt-4">
          Mohon maaf apabila terdapat kesalahan pada penulisan nama/gelar
        </h4>
      </div>

      <div
        v-if="!opened"
        class="z-20 absolute w-1/2 m-auto inset-x-0 bottom-20 flex justify-center"
        @click.prevent="$emit('onOpen')"
      >
        <button
          class="bg-dark-accent-primary text-dark-basic-primary rounded-md py-2 px-4 capitalize text-sm"
        >
          <fa :icon="['fas', 'envelope-open']" />&nbsp;&nbsp;buka undangan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCover',

  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    person() {
      if (this.$route.query.to) {
        const name = this.$route.query.to.split('-').join(' ')

        return name
      }

      return ''
    }
  },

  methods: {
    toInstagram() {
      window.open('https://instagram.com/lisdamei', '_blank')
    }
  }
}
</script>
