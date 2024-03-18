<script setup>


</script>
<template>
<div>
    <form @:submit.prevent=" $emit('addTodo', { todo , date, clear })">
        <div class="">
            <label for="todo">insert todo :</label>
            <input type="text" v-model="todo" id="todo" placeholder="todo task" required>
            <label for="date"> deadline :</label>
            <input type="date" v-model="date" id="date" required>
        </div>
     
    </form>
</div>
</template>

<style></style>
