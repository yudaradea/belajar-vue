<script setup>
import { ref } from 'vue';

const expression = ref(''); // Menyimpan seluruh ekspresi
const display = ref('0'); // Menampilkan hasil atau angka terakhir

function inputNumber(num) {
  // Jika hasil terakhir sudah keluar, mulai ekspresi baru
  if (display.value !== '0' && /[=]/.test(expression.value)) {
    expression.value = '';
    display.value = '0';
  }
  expression.value += num;
  display.value = expression.value;
}

function inputOperator(op) {
  // Jangan tambah operator jika ekspresi masih kosong
  if (expression.value === '') return;
  // Cegah dua operator berturut-turut
  if (/[+\-*/%]$/.test(expression.value)) {
    expression.value = expression.value.slice(0, -1) + op;
  } else {
    expression.value += op;
  }
  display.value = expression.value;
}

function calculate() {
  try {
    // Jangan evaluasi jika ekspresi diakhiri operator
    if (/[+\-*/%]$/.test(expression.value)) return;
    // Evaluasi ekspresi
    // eslint-disable-next-line no-eval
    let result = eval(expression.value);
    display.value = String(result);
    expression.value = display.value; // Tanda sudah dihitung
  } catch {
    display.value = 'Err';
  }
}

function clearAll() {
  expression.value = '';
  display.value = '0';
}
</script>

<template>
  <div
    class="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"
  >
    <div class="w-full max-w-xs p-6 bg-gray-900 shadow-2xl rounded-2xl">
      <p
        class="h-12 mb-4 text-2xl font-bold tracking-widest text-right text-white select-none"
      >
        {{ display }}
      </p>
      <div class="grid grid-cols-4 gap-3">
        <button
          @click="clearAll"
          class="col-span-2 py-3 text-lg font-bold text-white transition bg-red-500 rounded-lg shadow hover:bg-red-600"
        >
          C
        </button>
        <button
          @click="inputOperator('%')"
          class="py-3 text-lg font-bold text-yellow-400 transition bg-gray-700 rounded-lg shadow hover:bg-gray-600"
        >
          %
        </button>
        <button
          @click="inputOperator('/')"
          class="py-3 text-lg font-bold text-yellow-400 transition bg-gray-700 rounded-lg shadow hover:bg-gray-600"
        >
          /
        </button>
        <button
          @click="inputNumber('7')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          7
        </button>
        <button
          @click="inputNumber('8')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          8
        </button>
        <button
          @click="inputNumber('9')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          9
        </button>
        <button
          @click="inputOperator('*')"
          class="py-3 text-lg font-bold text-yellow-400 transition bg-gray-700 rounded-lg shadow hover:bg-gray-600"
        >
          *
        </button>
        <button
          @click="inputNumber('4')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          4
        </button>
        <button
          @click="inputNumber('5')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          5
        </button>
        <button
          @click="inputNumber('6')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          6
        </button>
        <button
          @click="inputOperator('-')"
          class="py-3 text-lg font-bold text-yellow-400 transition bg-gray-700 rounded-lg shadow hover:bg-gray-600"
        >
          -
        </button>
        <button
          @click="inputNumber('1')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          1
        </button>
        <button
          @click="inputNumber('2')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          2
        </button>
        <button
          @click="inputNumber('3')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          3
        </button>
        <button
          @click="inputOperator('+')"
          class="py-3 text-lg font-bold text-yellow-400 transition bg-gray-700 rounded-lg shadow hover:bg-gray-600"
        >
          +
        </button>
        <button
          @click="inputNumber('0')"
          class="col-span-2 py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          0
        </button>
        <button
          @click="inputNumber('.')"
          class="py-3 text-lg font-bold text-white transition bg-gray-800 rounded-lg shadow hover:bg-gray-700"
        >
          .
        </button>
        <button
          @click="calculate"
          class="py-3 text-lg font-bold text-gray-900 transition bg-yellow-400 rounded-lg shadow hover:bg-yellow-300"
        >
          =
        </button>
      </div>
    </div>
  </div>
</template>
