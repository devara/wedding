<template>
  <div id="event" class="w-full">
    <div
      class="cover-event relative flex flex-col justify-center items-center gap-12 bg-cover bg-center min-h-70vh py-24"
    >
      <div class="z-10 absolute inset-0 bg-black bg-opacity-40"></div>
      <div
        class="z-20 flex flex-col justify-center items-center w-full text-dark-basic-primary px-2 lg:px-6 text-center"
      >
        <span class="text-2xl md:text-3xl tracking-widest text-dark-basic-main"
          >بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span
        >
        <div class="font-cookie py-6 text-5xl">
          Akad Nikah dan Syukuran Pernikahan
        </div>
        <span class="text-lg md:text-2xl font-bold font-lobster"
          >Insha Allah akan diselenggarakan pada:</span
        >
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8 mt-6 font-lobster"
        >
          <div
            v-for="(list, i) in eventList"
            :key="i"
            class="w-80 md:w-1/2 lg:w-96 bg-white bg-opacity-10 border-2 border-solid border-white rounded-t-100% px-4 py-8 md:px-8 md:py-8 flex flex-col justify-center items-center"
          >
            <h3
              class="w-4/5 mx-auto pb-4 mb-4 text-center border-b border-solid font-bold capitalize text-2xl"
            >
              {{ list.title }}
            </h3>
            <div class="flex flex-col gap-2">
              <div
                v-for="(detail, ind) in list.details"
                :key="ind"
                class="flex flex-row items-center gap-4 text-base md:text-lg"
              >
                <fa :icon="detail.icon" />
                <span class="mr-2">{{ detail.desc }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="z-20 text-dark-basic-primary">
        <button
          class="py-2 px-4 bg-yellow-800 rounded-md"
          @click.prevent="toLocation"
        >
          Menuju lokasi Pernikahan &nbsp;
          <fa :icon="['fas', 'map-location-dot']" />
        </button>
      </div>
      <div
        class="z-20 text-white px-4 text-center flex flex-col justify-center items-center gap-2"
      >
        <div class="font-lobster text-lg">
          Anda juga dapat menghadiri acara pernikahan kami secara virtual
          melalui
        </div>
        <button
          class="rounded-md bg-pink-600 text-sm px-4 py-2 w-32"
          @click.prevent="toInstagram"
        >
          <fa :icon="['fab', 'instagram']" />&nbsp;&nbsp;lisdamei
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VEvents',

  data() {
    return {
      eventList: [
        {
          title: 'akad nikah',
          details: [
            {
              icon: ['fas', 'clock'],
              desc: '09.00 WIB',
              additional: true
            },
            {
              icon: ['fas', 'calendar'],
              desc: 'Minggu, 18 Desember 2022'
            },
            {
              icon: ['fas', 'location-dot'],
              desc: 'Kediaman mempelai wanita'
            }
          ]
        },
        {
          title: 'resepsi',
          details: [
            {
              icon: ['fas', 'clock'],
              desc: '11.00 WIB - selesai'
            },
            {
              icon: ['fas', 'calendar'],
              desc: 'Minggu, 18 Desember 2022'
            },
            {
              icon: ['fas', 'location-dot'],
              desc: 'Kediaman mempelai wanita'
            }
          ]
        }
      ]
    }
  },

  methods: {
    toLocation() {
      window.open('https://goo.gl/maps/hFTYUvkkgPB7TUG26', '_blank')
    },

    toInstagram() {
      window.open('https://instagram.com/lisdamei', '_blank')
    }
  }
}
</script>
