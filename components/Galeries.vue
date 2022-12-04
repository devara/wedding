<template>
  <div id="gallery" class="w-full min-h-70vh bg-gray-100 py-20">
    <div class="flex flex-col gap-8 justify-center items-center mb-12">
      <div class="font-cookie text-5xl text-yellow-800">Galeri Foto</div>
      <div class="font-semibold">Powered by Cloudinary Media Widget</div>
    </div>
    <div class="px-6 md:w-4/5 mx-auto">
      <div id="photo-gallery"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VGalleries',

  mounted() {
    this.renderGallery()
  },

  methods: {
    renderGallery() {
      this.$nextTick(() => {
        setTimeout(() => {
          /* eslint-disable */
          const cloudName = 'devaraeko'
          const photoGallery = cloudinary.galleryWidget({
            container: '#photo-gallery',
            cloudName: cloudName,
            mediaAssets: [
              {
                tag: 'deva-lisda',
                mediaType: 'image',
                transformation: {
                  fetch_format: 'jpg'
                }
              }
            ],
            aspectRatio: '16:9',
            transition: 'fade',
            zoomProps: {
              type: 'popup',
              steps: 3
            },
            carouselLocation: 'top',
            thumbnailProps: {
              width: 100,
              height: 70
            }
          })

          photoGallery.render()
        }, 1000)
      })
    }
  }
}
</script>
