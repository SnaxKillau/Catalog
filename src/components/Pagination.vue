<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="flex flex-1 items-center justify-between">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <button
            @click="prev"
            :disabled="prevDisable"
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Previous</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
          <button
            class="relative inline-flex items-center px-4 py-2 text-gray-900 text-sm font-semibold ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
            :class="{ 'bg-blue-700 text-white': selectPage == index }"
            v-for="(num, index) in dataLength / 25"
            @click="select(index)"
          >
            {{ num }}
          </button>
          <button
            @click="next"
            :disabled="nextDisable"
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span class="sr-only">Next</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineExpose } from "vue";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/20/solid";
const selectPage = ref(0);
const emit = defineEmits(["nextPage", "currentPage"]);
const props = defineProps({
  dataLength: {
    type: Number,
    require: true,
  },
});
const nextDisable = ref(false);
const prevDisable = ref(true);
watch(selectPage, (newValue) => {
  if (newValue < 1) {
    prevDisable.value = true;
  } else if (newValue > 8) {
    nextDisable.value = true;
  } else {
    nextDisable.value = false;
    prevDisable.value = false;
  }
});
const next = () => {
  selectPage.value += 1;
  emit("nextPage");
};
const prev = () => {
  selectPage.value -= 1;
  emit("prevPage");
};
const select = (index) => {
  selectPage.value = index;
  emit("currentPage", index);
};
defineExpose({
  selectPage
})
</script>
