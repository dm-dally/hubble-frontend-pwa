<template>
    <div :class="elementClass">
        <tabs v-if="product">
            <tab name="Description">
                <h3 v-text="product.name" />
                <div v-text="product.description" />
            </tab>
            <tab name="Reviews" class="tab-reviews">
                <reviews :reviews="reviews.elements" :product-id="product.id" :rating-average="ratingAverage" />
            </tab>
        </tabs>
    </div>
</template>

<script>
import { slotMixins } from '../helper';
import { mappingProduct } from '@/utils/api-mapping-helper';

export default {
    name: 'ProductDescriptionReviewsSlot',
    mixins: [slotMixins],

    computed: {
        product() {
            return this.content && this.content.data && this.content.data.product && mappingProduct({ product: this.content.data.product });
        },
        reviews() {
            return this.content && this.content.data && this.content.data.reviews;
        },
        ratingAverage() {
            if (!this.reviews || !this.reviews.elements.length) return 0;

            const average = this.reviews.matrix.pointSum / this.reviews.matrix.totalReviewCount;
            if (average % 1 > 0) return parseFloat(average.toFixed(1));

            return average;
        },
    },
};
</script>
