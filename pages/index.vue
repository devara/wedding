<template>
  <div class="font-poppins">
    <Cover :opened="open" @onOpen="openInvitation" />

    <template v-if="open">
      <GroomBride />
      <Events />
      <Protocol />
      <Galeries />
      <Quotes />
      <Thankyou />

      <div class="z-40 fixed top-5 right-5">
        <div
          class="flex justify-center items-center bg-red-500 text-dark-basic-primary w-10 h-10 md:h-12 md:w-12 rounded-full p-1 cursor-pointer"
          @click.prevent="play = !play"
        >
          <fa v-if="play" :icon="['fas', 'pause']" :size="`lg`" />
          <fa v-else :icon="['fas', 'play']" :size="`lg`" />
        </div>
        <audio
          id="song"
          loop
          src="https://docs.google.com/uc?export=download&id=1GUrctVYFWLubNBvS-TC9F3R2tIoLfH3U"
        ></audio>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'VIndex',

  data() {
    return {
      open: false,
      play: false
    }
  },

  watch: {
    play() {
      this.onOffMusic()
    }
  },

  methods: {
    openInvitation() {
      this.open = true
      this.$nextTick(() => {
        setTimeout(() => {
          const element = document.querySelector('#pengantin')
          element.scrollIntoView({
            behavior: 'smooth'
          })
          this.play = true
        }, 200)
      })
    },

    onOffMusic() {
      this.play
        ? document.getElementById('song').play()
        : document.getElementById('song').pause()
    }
  }
}
</script>
