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
  max-width: 50%;
}
.level-right {
  flex-grow: 1;
}

.level-right .image:first-child {
  margin-right: 7px;
}

</style>

