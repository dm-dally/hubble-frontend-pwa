<template>
    <div class="row">
        <div class="col-12">
            <component :is="getSlot" :content="getContentByPosition(content.slots, 'content')" />
        </div>
    </div>
</template>

<script>
import { blockMixins } from '../helper';

export default {
    name: 'SidebarFilterBlock',

    mixins: [blockMixins],

    computed: {
        getSlot() {
            return this.getSlotByPosition(this.content.slots, 'content');
        },
    },
};
</script>

<style lang="scss">
.cms-block-sidebar-filter {
    overflow: visible;
}
</style>
