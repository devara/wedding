<template>
  <div class="z-40 fixed top-1/3 right-0">
    <div
      class="py-2 px-2 bg-gray-400 shadow-xl rounded-tl-lg rounded-bl-lg flex flex-col justify-center items-center gap-2 text-dark-basic-primary"
    >
      <div
        v-for="(nav, i) in navs"
        :key="i"
        class="cursor-pointer"
        @click.prevent="toSection(nav.section)"
      >
        <fa :icon="nav.icon" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VSidenav',

  computed: {
    navs() {
      return [
        {
          icon: ['fas', 'heart'],
          section: 'pengantin'
        },
        {
          icon: ['fas', 'calendar'],
          section: 'event'
        },
        {
          icon: ['fas', 'image'],
          section: 'gallery'
        },
        {
          icon: ['fas', 'gift'],
          section: 'gift'
        }
      ]
    }
  },

  methods: {
    toSection(section) {
      const element = document.querySelector(`#${section}`)
      if (element)
        element.scrollIntoView({
          behavior: 'smooth'
        })
    }
  }
}
</script>
