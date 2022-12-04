<template>
  <div
    class="w-full min-h-70vh bg-dark-background-main text-dark-basic-main py-24 font-lobster"
  >
    <div
      class="flex flex-col gap-8 justify-center items-center mb-12 px-4 text-center"
    >
      <div class="font-cookie text-5xl">Protokol Kesehatan & Anjuran</div>
      <div class="text-xl lg:text-2xl text-center md:w-4/5 lg:w-1/2">
        Untuk mematuhi himbauan pemerintah dalam pencegahan penyebaran Covid-19,
        maka diharapkan Bapak/Ibu/Saudara/Sahabat/i tamu undangan untuk :
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(list, i) in lists"
        :key="i"
        class="flex flex-col justify-around items-center gap-2 py-4 px-2 text-center"
      >
        <div
          class="w-24 h-24 rounded-full inline-flex justify-center align-middle"
        >
          <nuxt-img
            class="rounded-full"
            :src="`w_96/images/wedding/protocols/${list.icon}`"
            loading="lazy"
          />
        </div>
        <div class="font-bold text-lg">
          {{ list.title }}
        </div>
        <div class="text-sm font-poppins">{{ list.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VProtocol',

  computed: {
    lists() {
      return [
        {
          title: 'Gunakan Masker',
          icon: 'use-masker.png',
          desc: 'Pakai masker sebelum memasuki gedung acara'
        },
        {
          title: 'Jaga Jarak',
          icon: 'social-distance.png',
          desc: 'Jaga jarak minimal 2m dengan orang lain'
        },
        {
          title: 'Gunakan Handsanitizer',
          icon: 'use-handsanitizer.png',
          desc: 'Gunakanlah handsanitizer secara berkala'
        },
        {
          title: 'Cuci Tangan',
          icon: 'hand-wash.png',
          desc: 'Cuci tangan yang bersih'
        },
        {
          title: 'Hindari Kerumunan',
          icon: 'avoid-crowd.png',
          desc: 'Hindari kerumunan untuk mencegah penyebaran covid'
        },
        {
          title: 'Tidak Bersalaman',
          icon: 'avoid-handshake.png',
          desc: 'Diusahakan untuk tidak bersalaman'
        }
      ]
    }
  }
}
</script>
