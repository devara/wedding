<template>
  <div class="w-full font-lobster">
    <div
      class="cover-footer relative flex flex-col gap-20 justify-center items-center bg-cover bg-center min-h-70vh"
    >
      <div class="z-10 absolute inset-0 bg-black bg-opacity-60"></div>

      <div
        class="z-20 flex flex-col justify-center items-center gap-4 text-dark-basic-primary text-center"
      >
        <div class="text-xl lg:text-2xl text-center md:w-4/5 lg:w-1/2 px-4">
          Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila
          Bapak/Ibu/Saudara/Sahabat/i berkenan hadir serta memberikan doa restu.
          <br />Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
        </div>
        <div class="font-cookie text-4xl md:text-5xl">
          Wassalamu'alaikum Wr. Wb.
        </div>
      </div>
      <div class="z-20 text-center text-white text-base lg:text-xl px-2 pb-6">
        <div class="mb-4">Kami yang berbahagia,</div>
        <div class="flex flex-row gap-8 lg:gap-16 justify-center items-center">
          <div v-for="(fam, i) in fams" :key="i">
            <span>{{ `Kel. Bpk. ${fam.ayah} & Ibu ${fam.ibu}` }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VThankyou',

  computed: {
    fams() {
      return [
        {
          name: 'Deva',
          ibu: 'Sumilah',
          ayah: 'Sungkawa'
        },
        {
          name: 'Lisda',
          ibu: 'Warsiati',
          ayah: 'Samsudin'
        }
      ]
    }
  }
}
</script>
