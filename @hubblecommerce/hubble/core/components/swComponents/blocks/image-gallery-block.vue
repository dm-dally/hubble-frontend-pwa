<template>
    <div>
        <div class="col-12">
            <component :is="getSlot" :content="getContentByPosition(content.slots, 'imageGallery')" />
        </div>
    </div>
</template>

<script>
import { blockMixins } from '../helper';

export default {
    name: 'ImageSliderBlock',
    mixins: [blockMixins],

    computed: {
        getSlot() {
            return this.getSlotByPosition(this.content.slots, 'imageGallery');
        },
    },
};
</script>

<style scoped></style>
