<template>
    <div>
        <p class="mt-3">{{texto}}: {{valor}}</p>
    </div>
</template>

<script>
export default {
    name: "textoValor",
    props: {
        texto: String,
        valor: String
    }
}
</script>