<template>
  <div class="font-poppins">
    <div class="w-full h-screen">
      <div
        class="relative w-full h-full bg-cover bg-center flex flex-col gap-4 items-center justify-center cover"
      >
        <div class="z-10 absolute inset-0 bg-black bg-opacity-40"></div>

        <div
          class="z-20 flex flex-col items-center justify-center text-dark-basic-primary px-6 text-center"
        >
          <div class="mb-8">
            <img
              :src="`${assetsURL}w_80/images/wedding/cover-icon.png`"
              max-width="80"
            />
          </div>
          <h4>The Wedding of</h4>
          <h1 class="py-6 font-cookie text-5xl">Lisda & Deva</h1>
          <div class="mb-2 body-2">
            Hadir secara virtual melalui siaran langsung instagram:
          </div>
          <button class="rounded-md bg-pink-500 text-sm px-4 py-2">
            &nbsp;&nbsp;@lisdamei
          </button>

          <h4 class="mt-8 subtitle-1">Kepada Bapak/Ibu/Saudara/i</h4>
          <h3
            class="mt-4 pb-2 m-auto dear-person capitalize border-b w-full max-w-xs"
          >
            {{ person }}
          </h3>
          <h4 class="mt-4">
            Mohon maaf apabila terdapat kesalahan pada penulisan nama/gelar
          </h4>
        </div>

        <div
          v-if="!opened"
          class="z-20 absolute w-1/2 m-auto inset-x-0 bottom-8 flex justify-center"
          @click.prevent="openInvitation"
        >
          <button
            class="bg-dark-accent-primary text-dark-basic-primary rounded-md py-2 px-4 capitalize text-sm"
          >
            buka undangan
          </button>
        </div>
      </div>
    </div>

    <template v-if="opened">
      <GroomBride />
      <Events />
      <Protocol />
      <Galeries />
      <Quotes />
      <Thankyou />
    </template>
  </div>
</template>

<script>
export default {
  name: 'VIndex',

  data() {
    return {
      assetsURL: 'https://res.cloudinary.com/devaraeko/image/upload/',
      opened: false
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
    openInvitation() {
      this.opened = true
      this.$nextTick(() => {
        setTimeout(() => {
          const element = document.querySelector('#pengantin')
          element.scrollIntoView({
            behavior: 'smooth'
          })
        }, 200)
      })
    }
  }
}
</script>
