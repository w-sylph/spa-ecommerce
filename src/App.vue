<template>
    <v-app>
        <app-bar></app-bar>

        <v-content>
            <router-view></router-view>
        </v-content>
        <alert></alert>
    </v-app>
</template>

<script>
import AppBar from './partials/AppBar.vue';
import Products from './json/products.json';

export default {
    mounted() {
        this.setup();
    },

    methods: {
        setup() {
            let items = Products.data;
            let result = [];

            items.forEach(item => {
                if (!item.parent_id) {
                    let brands = items.filter(obj => { return obj.parent_id === item.id; });
                    let brands_with_products = [];

                    brands.forEach(brand => {
                        brand.products = items.filter(product => { return product.parent_id === brand.id });
                        brands_with_products.push(brand);
                    });

                    item.brands = brands_with_products;

                    result.push(item);
                }
            });

            this.$store.commit('resources/set', result);
        },
    },

    name: 'App',
    components: {
        'app-bar': AppBar,
    },
};
</script>
