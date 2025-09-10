<script setup>
import { ref, computed } from 'vue';
const name = ref('Yuda');
const loggedIn = ref(false);
const items = ref(['Item 1', 'Item 2', 'Item 3']);
const count = ref(0);

const angka1 = ref(0);
const angka2 = ref(0);
const operasi = ref('+');
const hasil = ref(0);

function hitung() {
  switch (operasi.value) {
    case '+':
      hasil.value = angka1.value + angka2.value;
      break;
    case '-':
      hasil.value = angka1.value - angka2.value;
      break;
    case '*':
      hasil.value = angka1.value * angka2.value;
      break;
    case '/':
      hasil.value = angka2.value !== 0 ? angka1.value / angka2.value : 0;
      break;
    default:
      hasil.value = 0;
  }
}
</script>

<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold underline">Hello {{ name }}!</h1>
    <input type="text" v-model="name" class="p-2 mt-4 border" />
  </div>

  <div class="p-4">
    <p v-if="loggedIn">Selamat datang, User!</p>
    <p v-else>Silakan login dulu</p>

    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>

  <div class="p-4">
    <p class="text-xl">Count: {{ count }}</p>
    <div class="space-x-2">
      <button @click="count++" class="px-4 py-2 text-white bg-blue-500 rounded">
        Increment
      </button>
      <button @click="count--" class="px-4 py-2 text-white bg-red-500 rounded">
        Decrement
      </button>
    </div>
  </div>

  <div class="p-4">
    <h2 class="mb-4 text-2xl font-bold">Kalkulator Sederhana</h2>
    <input
      type="number"
      v-model.number="angka1"
      class="p-2 mr-2 border"
      placeholder="Angka 1"
    />
    <select v-model="operasi" class="p-2 mr-2 border">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input
      type="number"
      v-model.number="angka2"
      class="p-2 mr-2 border"
      placeholder="Angka 2"
    />
    <button @click="hitung" class="px-4 py-2 text-white bg-blue-500 rounded">
      =
    </button>
    <span class="ml-4 text-xl font-bold">Hasil: {{ hasil }}</span>
  </div>
</template>
