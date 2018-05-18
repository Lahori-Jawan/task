<template>
    <article id="topbar" :style="[$store.state.create ? color2: color1]">
        <div class="media container is-tablet">
          <figure class="media-left" @click="$store.commit('TOGGLE_CREATE')">
              <img :src="getShape" alt="Hamburger logo">
          </figure>
          <div class="media-content">
              <div class="content">
                  Assets
              </div>
          </div>
          <div class="media-right">
              <img src="@/assets/search.svg" alt="Search logo">
          </div>
        </div>
    </article>
</template>

<script>
export default {
    data () {
        return {
            shape1: 'hamburger',
            shape2: 'close',
            color1: { background: '#3A538E'},
            color2: { background: '#6AB344'}
        }
    },
    computed: {
        getShape () {
            return this.$store.state.create ? require(`@/assets/${this.shape2}.svg`) : require(`@/assets/${this.shape1}.svg`)
        }
    },
}
</script>

<style scoped>
    .media {
        padding: 5px 15px 0;
        height: 60px;
        align-items: center;
        color: #fff;
        font-size: 14px;
        font-weight: 300;
        font-family: Roboto;
        font-style: normal;
    }

    .media-left {
        cursor: pointer;
    }

    .media-content {
        text-align: center;
        align-self: flex-end;
        padding-bottom: 5px;
    }

    .content {
        color: #dadada;
    }

</style>
