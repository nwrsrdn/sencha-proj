<template>
  <div id="home">
    <NavBarComponent/>
    <GridComponent/>
  </div>
</template>

<script>
import NavBarComponent from '@/components/templates/NavBarComponent.vue'
import GridComponent from '@/components/data-visualization/GridComponent.vue'

export default {
  name: 'Home',
  components: {
    'NavBarComponent': NavBarComponent,
    'GridComponent': GridComponent,
  }
}
</script>
