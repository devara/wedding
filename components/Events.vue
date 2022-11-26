<template>
  <div class="w-full">
    <div class="cover-event relative flex bg-cover bg-center min-h-70vh py-16">
      <div class="z-10 absolute inset-0 bg-black bg-opacity-40"></div>
      <div
        class="z-20 flex flex-col justify-center items-center w-full text-dark-basic-primary px-2 lg:px-6 text-center"
      >
        <span class="text-2xl md:text-3xl tracking-widest"
          >بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span
        >
        <div class="font-cookie py-6 text-5xl text-green-500">
          Akad Nikah dan Syukuran Pernikahan
        </div>
        <span class="text-sm md:text-base"
          >INSHA ALLAH AKAN DISELENGGARAKAN PADA:</span
        >
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-8 mt-6"
        >
          <div
            v-for="(list, i) in eventList"
            :key="i"
            class="w-80 md:w-1/2 lg:w-96 bg-white bg-opacity-10 border-2 border-solid border-white rounded-t-100% px-4 py-8 md:px-8 md:py-8 flex flex-col justify-center items-center"
          >
            <h3
              class="w-4/5 mx-auto pb-4 mb-4 text-center border-b border-solid font-bold"
            >
              {{ list.title }}
            </h3>
            <div class="flex flex-col gap-2">
              <div
                v-for="(detail, ind) in list.details"
                :key="ind"
                class="flex flex-row items-center gap-4 text-sm md:text-base"
              >
                <fa :icon="detail.icon" />
                <span class="mr-2">{{ detail.desc }}</span>
              </div>
            </div>
          </div>
        </div>
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
          title: 'AKAD NIKAH',
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
          title: 'RESEPSI',
          details: [
            {
              icon: ['fas', 'clock'],
              desc: '10.00 WIB - selesai'
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
  }
}
</script>
