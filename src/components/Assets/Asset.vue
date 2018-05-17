<template>
    <div class="asset container is-tablet">
        <Headr>
            {{ asset.name }}
        </Headr>
        <Body>
            <ul slot="content">
                <li v-for="(value, key, index) in asset" :key="`${value}-${key}-${index}`" v-if="key !== 'name'">
                    - {{ key }}: {{ value }}
                </li>
            </ul>
            <template slot="levels">
                <!-- <div class="level-item">
                    <div class="image">
                        <img :src="getLevel" alt="">
                    </div>
                </div> -->
                <div class="level-item">
                    <div class="image">
                        <img :src="getLevel" alt="">
                    </div>
                    <div class="image">
                        <img :src="getDosing" alt="">
                    </div>
                </div>
            </template>
        </Body>
    </div>
</template>

<script>
import Header from './Asset/Header'
import Body from './Asset/Body'

export default {
    props: {
        asset: {
            type: Object,
            required: true
        }
    },
    computed: {
        getLevel () {
            return this.asset.level > 50 ? require('@/assets/level-high.svg') : require('@/assets/level-low.svg')
        },
        getDosing () {
            return this.asset.dosing > 50 ? require('@/assets/dosing-high.svg') : require('@/assets/dosing-low.svg')
        }
    },
    components: {
        'Headr': Header,
        Body
    }
}
</script>

<style>

.asset {
  z-index: -2;
    font-size: 14px;
    font-family: Roboto;
}

.asset ul {
    padding: 10px .75rem 20px;
}

.asset li {
    color: #000;
    list-style: none;
    font-weight: bold;
    margin-top: 0 !important;
    text-transform: capitalize;
}

</style>
