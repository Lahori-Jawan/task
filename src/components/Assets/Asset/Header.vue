<template>
    <article class="media asset-header">
        <a href="/" class="wellhead media-left">
            wellhead icon
        </a>
        <div class="media-content">
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </article>
</template>

<style>
.media.asset-header {
    margin-top: 0;
    padding: 5px 10px;
    color: #343B4C;
    align-items: center;
    background: #EEF2F4;
}

.wellhead {
  display: block;
  text-indent: -9999px;
  width: 36px;
  height: 36px;
  background: url(../../../assets/wellhead.svg);
  background: no-repeat contain;
}

</style>
