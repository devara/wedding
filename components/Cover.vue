<template>
  <div id="cover-page" class="w-full">
    <div
      id="cover-main"
      class="relative w-full h-full bg-cover bg-center flex flex-col gap-4 items-center justify-center cover"
    >
      <div class="z-10 absolute inset-0 bg-black bg-opacity-40"></div>

      <div
        id="cover-content"
        class="z-20 flex flex-col items-center justify-center text-dark-basic-primary px-6 text-center text-xs md:text-base mt-8 md:mt-0"
      >
        <div class="mb-8">
          <nuxt-img
            :src="`w_80/images/wedding/cover-icon.png`"
            width="80"
            loading="lazy"
          />
        </div>
        <h4 class="font-lobster text-xl md:text-2xl">The Wedding of</h4>
        <h1 class="font-cookie text-6xl mb-4">Lisda & Deva</h1>
        <div class="mb-2">
          Hadir secara virtual melalui siaran langsung instagram:
        </div>
        <button
          class="rounded-md bg-pink-600 text-sm px-4 py-2 flex items-center"
          @click.prevent="toInstagram"
        >
          <fa :icon="['fab', 'instagram']" />&nbsp;&nbsp;lisdamei
        </button>

        <h4 class="mt-8 subtitle-1">Kepada Bapak/Ibu/Saudara/i</h4>
        <h3
          class="mt-4 pb-2 m-auto capitalize border-b w-full max-w-xs font-semibold text-base"
        >
          {{ person }}
        </h3>
        <h4 class="mt-4">
          Mohon maaf apabila terdapat kesalahan pada penulisan nama/gelar
        </h4>
        <div
          v-if="!opened"
          id="button-open"
          class="z-20 flex justify-center mt-4 lg:mt-12"
          @click.prevent="$emit('onOpen')"
        >
          <button
            class="bg-yellow-800 text-dark-basic-primary rounded-md py-2 px-4 capitalize text-sm font-semibold"
          >
            <fa :icon="['fas', 'envelope-open']" />&nbsp;&nbsp;buka undangan
          </button>
        </div>
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

  mounted() {
    this.calculateHeight()

    const portrait = window.matchMedia('(orientation: portrait)')
    portrait.addEventListener('change', this.recalculateHeight, true)

    // window.addEventListener('resize', this.recalculateHeight, true)
  },

  methods: {
    toInstagram() {
      window.open('https://instagram.com/lisdamei', '_blank')
    },

    calculateHeight() {
      const cover = document.getElementById('cover-page')
      if (window.innerHeight > 550) {
        cover.style.height = '100vh'
        document
          .getElementById('cover-main')
          .classList.add('justify-center', 'items-center')

        document.getElementById('cover-content').classList.remove('mt-8')

        setTimeout(() => {
          cover.style.height = window.innerHeight + 'px'
        }, 400)
      } else {
        cover.style.height = '600px'
        document.getElementById('button-open').classList.remove('absolute')
      }
    },

    recalculateHeight(e) {
      const cover = document.getElementById('cover-page')
      if (window.innerHeight > 550) {
        cover.style.height = window.innerHeight + 'px'
        document
          .getElementById('cover-main')
          .classList.add('justify-center', 'items-center')

        document.getElementById('cover-content').classList.remove('mt-8')
        // document.getElementById('button-open').classList.add('absolute')
      }
      // if (e.matches) {
      //   cover.style.height = window.innerHeight + 'px'
      //   document.getElementById('button-open').classList.add('absolute')
      // } else if (!e.matches && window.innerHeight > 550) {
      //   cover.style.height = window.innerHeight + 'px'
      //   document.getElementById('button-open').classList.add('absolute')
      // }
    }
  }
}
</script>
