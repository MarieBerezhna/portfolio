<template>
    <div class="modal" tabindex="-1" role="dialog" >
  <div class="modal-dialog" role="document" :style="'top: 15vh; background-color:' + $store.state.secondary_color">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closeModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer mx-auto">
          <MainButton text="Close" @click.native="closeModal($event)" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
    export default {
        name: 'ModalWindow',
        components: {
            MainButton: () => import('@/components/utils/MainButton.vue')
        },
        methods: {
            closeModal () {
                $('.modal').fadeOut()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
       
           background-color: rgba(12, 13, 13, 0.5) !important;
        .modal-content{
            background-color: unset;
        }
    }
</style>