<template>
  <div
    id="pengantin"
    class="w-full py-24 px-4 bg-dark-background-main text-dark-basic-main"
  >
    <div class="flex flex-col gap-6 justify-center items-center mb-16">
      <div class="font-cookie text-4xl md:text-5xl text-center">
        Assalamualaikum Wr. Wb
      </div>
      <div
        class="font-lobster text-xl lg:text-2xl text-center md:w-4/5 lg:w-1/2"
      >
        Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah
        Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa
        Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
        keberkahan.
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12">
      <div v-for="(pengantin, i) in pengantins" :key="i" class="text-center">
        <div
          class="w-40 h-40 rounded-full inline-flex justify-center align-middle mb-2"
        >
          <nuxt-img
            class="rounded-full shadow-xl"
            :src="pengantin.photo"
            loading="lazy"
          />
        </div>
        <div class="font-cookie font-medium text-4xl">
          {{ pengantin.name }}
        </div>
        <div class="flex items-center justify-center w-full my-4">
          <div class="border-t border-solid border-dark-basic-main w-8"></div>
          <div class="mx-2">Calon Mempelai {{ pengantin.gender }}</div>
          <div class="border-t border-solid border-dark-basic-main w-8"></div>
        </div>
        <p>{{ pengantin.parent }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VGroomBride',

  computed: {
    pengantins() {
      return [
        {
          name: 'Lisda Meilinda',
          photo: 'f_jpg/images/wedding/lisda.jpg',
          gender: 'Wanita',
          parent: 'Putri pertama Bapak Samsudin & Ibu Warsiati'
        },
        {
          name: 'Devara Eko Katon Mahardika',
          photo: 'f_jpg/images/wedding/deva.jpg',
          gender: 'Laki-laki',
          parent: 'Putra pertama Bapak Sungkowo & Ibu Sumilah'
        }
      ]
    }
  }
}
</script>
