<template>
    <div id="create-container">
        <article class="media asset-header">
            <a class="new media-left" @click="showForm = true">
                new icon
            </a>
            <div class="media-content">
                <p class="title">
                    Create new Asset
                </p>
                <p class="subtitle">
                    Add new Asset
                </p>
            </div>
        </article>
        <div class="content copyrights">
            <div class="has-text-centered">
                Dataharmonics @ All rights reserved 2018.
            </div>
        </div>

        <AssetCreateForm v-if="showForm" v-on:close="showForm = false"></AssetCreateForm>
    </div>
</template>

<script>

import AssetCreateForm from './AssetCreateForm'

export default {
    data() {
      return {
        showForm: false
      }
    },
    components: {
        AssetCreateForm
    }
}
</script>

<style scoped>
#create-container {
    position: absolute;
    width: 100%;
    z-index: 9;
    height: 100%;
}
.media.asset-header {
    height: 59px;
    margin-top: 0;
    padding: 5px 10px;
    color: #343B4C;
    align-items: center;
    background: #F1F1F1;
}

.media-left {
    margin-right: .5rem;
}

.media-content {
    font-family: Roboto !important;
}

.new {
    display: block;
    text-indent: -9999px;
    width: 28px;
    height: 27px;
    background: url(../assets/new.svg) no-repeat center;
}

.title {
    font-size: 14px;
    color: #343B4C;
    margin-bottom: 1.25rem;
}

.subtitle {
    color: #343B4C;
    font-size: 11px;
}

.copyrights {
    height: 24px;
    display: flex;
    margin-bottom: 0 !important;
    background: #f1f1f1;
    flex-direction: column;
    justify-content: center;
}

.has-text-centered {
    border-top: 1px solid #E3E3E4;
    padding: 0 10px;
    font-size: 12px;
    color: #A8A8A8;
    font-family: Robo;
}

</style>
