<template>
    <div>
        <p>{{fechaEvento}}</p>
        <p>{{rp}}</p>
        <p>{{tipoEvento}}</p>
    </div>
</template>

<script>
export default {
    name: "evento",
    props: {
        fechaEvento: Date,
        rp: Number,
        tipoEvento: String
    }
}
</script>