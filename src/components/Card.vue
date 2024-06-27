<template lang="">
  <div>
    <div
      class="flex flex-col shadow-md cursor-pointer w-64 h-[34rem] hover:-translate-y-1 duration-300"
    >
      <div class="inline relative group h-48">
        <img
          class="absolute rounded-t object-cover h-full w-full"
          :src="img"
          alt="Product Preview"
        />
      </div>

      <!-- Body -->
      <div class="flex flex-col bg-white rounded-b p-3 h-20 overflow-y-auto">
        <!-- Title -->
        <button
          @click = "titleClick"
          class="text-sm font-semibold text-gray-900 hover:underline truncate"
        >
          {{ countryName }}
      </button>
        <div class="grid grid-cols-2 mt-2">
          <h1 class="text-xs font-normal">CC2: {{ cca2 }}</h1>
          <h1 class="text-xs font-normal text-black">CCA3: {{ cca3 }}</h1>
        </div>
      
      </div>
      <h1 class="text-sm font-normal pl-3">Offical name :</h1>
      <div class="h-10 overflow-hidden">
        <div v-for="(value, code) in nativeName" :key="code" class="pl-5">
          <h1 class="text-sm font-normal">
            - <strong>{{ code }}</strong> : {{ value.official }}
          </h1>
        </div>
      </div>
      <h1 class="text-sm font-normal pl-3">Common name :</h1>
      <div class="h-10 overflow-hidden">
        <div v-for="(value, code) in nativeName" :key="code" class="pl-5">
          <h1 class="text-sm font-normal">
            - <strong>{{ code }}</strong> : {{ value.common }}
          </h1>
        </div>
      </div>
          <h1 class="text-sm font-normal text-black pl-3">IDD Root: {{ idd.root }}</h1>
          <h1 class="text-sm font-normal text-black pl-3">IDD Suffixes : </h1>
         <div class = "h-10 overflow-hidden">
          <div v-for="(value, code) in idd.suffixes" :key="code" class="pl-5">
          <h1 class="text-sm font-normal">
            - {{ value }}
          </h1>
        </div>
         </div>

      <h1 class="text-sm font-normal pl-3">AltSpellings :</h1>
      <div class="h-10 overflow-hidden">
        <div v-for="(value, index) in altSpellings" :key="index" class="pl-5">
          <h1 class="text-sm font-normal">
            - {{ value }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const emit = defineEmits(["selectTitle"]);
const props = defineProps({
  id: {
    type : Number,
    required : true
  },
  img: {
    type: String,
    required: true,
  },
  countryName: {
    type: String,
    required: true,
  },
  cca2: {
    type: String,
    required: true,
  },
  cca3: {
    type: String,
    required: true,
  },
  nativeName: {
    type: Object,
    required: true,
  },
  altSpellings: {
    type: Array,
    required: true,
  },
  idd: {
    type: Object,
    required: true
  }
});
const selectId = ref(0);

const titleClick = () => {
  selectId.value = props.id;
  emit('selectTitle' , selectId.value)
};
</script>
<style lang=""></style>
