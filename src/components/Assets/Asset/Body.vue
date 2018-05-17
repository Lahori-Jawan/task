<template>
    <div class="level is-mobile">
        <div class="level-left">
            <slot  name="content"></slot>
        </div>
        <div class="level-right">
            <slot name="levels"></slot>
        </div>
    </div>
</template>

<style>

.level-left {
  flex-grow: 1;
}
.level-right {
    flex-grow: 1;
}
</style>

