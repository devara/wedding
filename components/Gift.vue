<template>
  <div
    id="gift"
    class="min-h-70vh py-20 font-lobster bg-dark-background-main text-dark-basic-main"
  >
    <div
      class="flex flex-col gap-8 justify-center items-center mb-12 px-4 text-center"
    >
      <div class="font-cookie text-5xl">Wedding Gift</div>
      <div class="text-xl lg:text-2xl text-center md:w-4/5 lg:w-1/2">
        Bagi Keluarga maupun Sahabat apabila ingin mengirimkan hadiah kepada
        kami, dapat mengirimkannya melalui:
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row justify-center items-center gap-8 px-6 lg:px-12 font-poppins text-dark-background-main"
    >
      <div
        v-for="(list, i) in lists"
        :key="i"
        class="bg-white shadow-xl p-8 w-full lg:w-3/5 xl:w-2/5 text-center flex flex-col justify-center items-center gap-2 rounded-lg"
      >
        <nuxt-img :src="list.icon" loading="lazy" />
        <span>No. Rekening: {{ list.norek }}</span>
        <span>Silakan transfer ke rekening a.n {{ list.person }}</span>
        <button
          class="py-2 px-4 bg-yellow-800 text-dark-basic-primary rounded-md text-xs"
          @click.prevent="copyRek(i, list.norek)"
        >
          <fa :icon="['fas', 'copy']" />
          {{ list.text }}
        </button>
      </div>
    </div>
    <div
      class="flex flex-col md:flex-row gap-8 items-center justify-center px-6 mt-16"
    >
      <div
        v-for="(gift, i) in gifts"
        :key="i"
        class="bg-white shadow-xl flex flex-col justify-center items-center gap-2 p-8 w-full lg:w-3/5 xl:w-2/5 text-center rounded-lg"
      >
        <div class="text-6xl text-yellow-800">
          <fa :icon="['fas', 'gift']" />
        </div>
        <span class="px-4 text-xl lg:text-2xl">{{ gift.person }}</span>
        <span class="text-sm font-poppins font-medium">{{ gift.address }}</span>
        <button
          class="py-2 px-4 bg-yellow-800 text-dark-basic-primary rounded-md text-xs font-poppins"
          @click.prevent="copyAlamat(i, gift.address)"
        >
          <fa :icon="gift.icon" />
          {{ gift.text }}
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
      ],
      gifts: [
        {
          name: 'Gift Lisda',
          icon: ['fas', 'gift'],
          person: 'Lisda Meilinda',
          address:
            'Kp. Leuweungkolot, Jl. Kelapa Dua No.50, RT.1 RW.3 Giri Mulya, Cibungbulang, Kab. Bogor',
          text: 'Copy Alamat'
        },
        {
          name: 'Gift Deva',
          icon: ['fas', 'gift'],
          person: 'Devara Eko K M',
          address:
            'Gg Podang no. 231 Pasekan RT.07 RW.40 Maguwoharjo, Depok, Kab. Sleman (maps ke Pawon Maguwo)',
          text: 'Copy Alamat'
        }
      ],
      address:
        'Kp. Leuweungkolot, Jl. Kelapa Dua No.50, RT.1 RW.3 Giri Mulya, Cibungbulang, Kab. Bogor',
      addressLabel: 'Copy Alamat'
    }
  },

  methods: {
    copyRek(index, value) {
      navigator.clipboard.writeText(value)
      this.lists[index].text = 'Copied'

      setTimeout(() => {
        this.lists[index].text = 'Copy no Rekening'
      }, 1500)
    },

    copyAlamat(index, value) {
      navigator.clipboard.writeText(value)
      this.gifts[index].text = 'Copied'

      setTimeout(() => {
        this.gifts[index].text = 'Copy Alamat'
      }, 1500)
    }
  }
}
</script>
