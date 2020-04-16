<template>
    <div class="bg-primary text-white text-center m-2 p-3">
        <h3>Produkt: {{ name | reverse | capitalize }}</h3>
        <h3>Cena: {{ lowTotalPrice.toFixed((2)) }} zł (niższa stawka)</h3>
        <h3>Cena: {{ highTotalPrice | currency }} (wyższa stawka)</h3>
        <h3>Cena: {{ getTotalPrice(0) | currency(3) }} (zerowa stawka)</h3>
    </div>
</template>

<script>


    export default {
        name: 'MyComponent',
        data: function () {
            return {
                name: "Kamizelka ratunkowa",
                price: 48.95,
                lowTaxRate: 12,
                highTaxRate: 20
            }
        },
        computed: {
            lowTotalPrice: function () {
                return this.getTotalPrice(this.lowTaxRate)
            },
            highTotalPrice: function () {
                return this.getTotalPrice(this.highTaxRate)
            }
        },
        methods: {
            getTotalPrice(taxRate) {
                return this.price + (this.price * (taxRate / 100));
            }
        },
        filters: {
            currency(value, places) {
                return new Intl.NumberFormat("pl-PL",
                    {
                        style: "currency",
                        currency: "PLN",
                        minimumFractionDigits: places || 2,
                        maximumFractionDigits: places || 2
                    }).format(value)
            },
            capitalize(value) {
                return value[0].toUpperCase() + value.slice(1);
            },
            reverse(value) {
                return value.split("").reverse().join("");
            }
        }
    }
</script>
