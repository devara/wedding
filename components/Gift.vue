<template>
  <div id="gift" class="min-h-70vh py-20">
    <div
      class="flex flex-col gap-8 justify-center items-center mb-12 px-4 text-center"
    >
      <div class="font-cookie text-5xl text-green-600">Wedding Gift</div>
      <div class="font-medium w-4/5 md:w-2/5 mx-auto">
        Bagi Keluarga dan Sahabat yang ingin mengirimkan hadiah, silakan
        mengirimkannya melalui:
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-8 px-6 lg:px-12"
    >
      <div
        v-for="(list, i) in lists"
        :key="i"
        class="bg-white shadow-xl p-8 w-full lg:w-3/5 xl:w-2/5 text-center flex flex-col justify-center items-center gap-2 rounded-lg"
      >
        <nuxt-img :src="list.icon" loading="lazy" />
        <span>Silakan transfer ke rekening a.n {{ list.person }}</span>
        <button
          class="py-2 px-4 bg-dark-accent-primary text-dark-basic-primary rounded-md text-xs"
          @click.prevent="copyRek(i, list.norek)"
        >
          <fa :icon="['fas', 'copy']" />
          {{ list.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VGift',

  data() {
    return {
      lists: [
        {
          name: 'BCA',
          icon: 'w_200/images/wedding/bca.png',
          person: 'Lisda Meilinda',
          norek: '6820694412',
          text: 'Copy no Rekening'
        },
        {
          name: 'Mandiri',
          icon: 'w_200/images/wedding/mandiri.png',
          person: 'Devara Eko K M',
          norek: '9000045661361',
          text: 'Copy no Rekening'
        }
      ]
    }
  },

  methods: {
    copyRek(index, value) {
      navigator.clipboard.writeText(value)
      this.lists[index].text = 'Copied'

      setTimeout(() => {
        this.lists[index].text = 'Copy no Rekening'
      }, 1500)
    }
  }
}
</script>
