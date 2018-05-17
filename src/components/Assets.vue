<template>
    <div id="assets-container">
        <Topbar />
        <Overlay v-if="$store.state.create" />
        <Create v-if="$store.state.create" />
        <Asset v-for="asset in assets" :key="asset.id" :asset="asset" />
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
            allAssets: []
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
    }
}
</script>

<style scoped>

</style>
