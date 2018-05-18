<template>
    <div id="assets-container">
        <Topbar />
        <Overlay v-if="$store.state.create" />
        <Create v-if="$store.state.create" />
        <Asset :class="{'updated': addClass}"  v-for="asset in assets" :key="asset.id" :asset="asset" />
    </div>
</template>

<script>
import Topbar from './Assets/Topbar'
import Asset from './Assets/Asset'
import Overlay from './Overlay'
import Create from './Create'

import Assets from '@/graphql/Assets.gql'

export default {
    data () {
        return {
            allAssets: [],
            addClass: false
        }
    },
    apollo: {
        assets: {
            prefetch: true,
            query: Assets,
            result ({data: {assets}, loading}) {
                console.log('assets', assets)
                this.allAssets = assets
            }
        }
    },
    components: {
        Topbar,
        Asset,
        Create,
        Overlay
    },
    updated () {
      setTimeout(() => {
        if(this.$store.state.scroll) this.$el.lastChild.style.background = '#ff63473b'
      },1200)
      setTimeout(() => {
        this.$el.lastChild.style.background = 'transparent'
        this.$store.commit('RESET_SCROLL')
      }, 2500);
    }
}
</script>
