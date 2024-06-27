<template lang="">
  <div class="bg-gray-50">
    <!-- Mobile filter dialog -->
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-40 sm:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="translate-x-full"
          >
            <DialogPanel
              class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
            >
              <div class="flex items-center justify-between px-4">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  @click="open = false"
                >
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <!-- Filters -->
              <form class="mt-4">
                <Disclosure
                  as="div"
                  v-for="section in filters"
                  :key="section.name"
                  class="border-t border-gray-200 px-4 py-6"
                  v-slot="{ open }"
                >
                  <h3 class="-mx-2 -my-3 flow-root">
                    <DisclosureButton
                      class="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400"
                    >
                      <span class="font-medium text-gray-900">{{
                        section.name
                      }}</span>
                      <span class="ml-6 flex items-center">
                        <ChevronDownIcon
                          :class="[
                            open ? '-rotate-180' : 'rotate-0',
                            'h-5 w-5 transform',
                          ]"
                          aria-hidden="true"
                        />
                      </span>
                    </DisclosureButton>
                  </h3>
                  <DisclosurePanel class="pt-6">
                    <div class="space-y-6">
                      <div
                        v-for="(option, optionIdx) in section.options"
                        :key="option.value"
                        class="flex items-center"
                      >
                        <input
                          :id="`filter-${section.id}-${optionIdx}`"
                          :name="`${section.id}[]`"
                          :value="option.value"
                          @click="select(optionIdx)"
                          type="radio"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          :checked="selectedOption === optionIdx"
                        />
                        <label
                          :for="`filter-mobile-${section.id}-${optionIdx}`"
                          class="ml-3 text-sm text-gray-500"
                          >{{ option.label }}</label
                        >
                      </div>
                    </div>
                  </DisclosurePanel>
                </Disclosure>
                <input
                  placeholder = "Search by country name"
                  type="text"
                  class="w-64 h-8 pl-2 ml-7 border-2 border-gray-500 rounded-md"
                  v-model="searchTerm"
                  @input="performSearch"
                />
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <div
      class="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="py-24">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900">
          Countries Catalog
        </h1>
        <p class="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Search or View all Country
        </p>
      </div>

      <section
        aria-labelledby="filter-heading"
        class="border-t border-gray-200 py-6"
      >
        <h2 id="filter-heading" class="sr-only">Product filters</h2>

        <div class="flex items-center justify-between">
          <button
            type="button"
            class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
            @click="open = true"
          >
            Filters
          </button>

          <PopoverGroup
            class="hidden md:flex md:items-baseline md:space-x-8 ml-10"
          >
            <Popover
              as="div"
              v-for="(section, sectionIdx) in filters"
              :key="section.name"
              :id="`desktop-menu-${sectionIdx}`"
              class="relative inline-block text-left"
            >
              <div>
                <PopoverButton
                  class="group inline-flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  <span>{{ section.name }}</span>

                  <ChevronDownIcon
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </PopoverButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <PopoverPanel
                  class="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <form class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        @click="select(optionIdx)"
                        type="radio"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        :checked="selectedOption === optionIdx"
                      />
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900"
                        >{{ option.label }}</label
                      >
                    </div>
                  </form>
                </PopoverPanel>
              </transition>
            </Popover>
          </PopoverGroup>
          <input
            placeholder = "Search by country name"
            type="text"
            class="hidden md:flex w-64 h-8 pl-2 border-2 border-gray-500 rounded-md"
            v-model="searchTerm"
            @input="performSearch"
          />
        </div>
      </section>
    </div>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 mt-10">
    <div
      class="flex justify-center align-middle mt-10"
      v-for="(flag, index) in sliceFlagData"
    >
      <Card
        :key="index"
        :id="index"
        :img="flag.flags.png"
        :countryName="flag.name.official"
        :cca2="flag.cca2"
        :cca3="flag.cca3"
        :nativeName="flag.name.nativeName"
        :altSpellings="flag.altSpellings"
        :idd="flag.idd"
        @selectTitle="selectTitle"
      />
    </div>
    <Pagination
      @nextPage="nextPage"
      @prevPage="prevPage"
      @currentPage="currentPage"
      :dataLength="flagArraySize"
      v-if="flagArraySize > 0"
      v-show="pageOpen"
      ref="childRef"
    />
    <PopupModal
      v-if="seleted != null"
      ref="childrenRef"
      :seleted="seleted"
      @close="close"
    />
  </div>
</template>
<script setup>
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import Card from "./components/Card.vue";
import Pagination from "./components/Pagination.vue";
import PopupModal from "./components/PopupModal.vue";
import Fuse from "fuse.js";
import axios from "axios";
import { onMounted, watch, ref, computed } from "vue";
const flagData = ref();
const sliceFlagData = ref();
const sortOptions = [
  { name: "Most Popular", href: "#" },
  { name: "Best Rating", href: "#" },
  { name: "Newest", href: "#" },
];
const selectedOption = ref(0);
const filters = [
  {
    id: "Sort",
    name: "Sort By",
    options: [
      { value: "ASC", label: "ASC" },
      { value: "DESC", label: "DSCE" },
    ],
  },
];

const select = (value) => {
  if (value == 0) {
    ascSort();
    selectedOption.value = 0;
  } else {
    selectedOption.value = 1;
    dsceSort();
  }
};

const open = ref(true);
const pageNum = ref(0);
const startNum = ref(0);
const flagArraySize = ref(0);
const dsce = ref(false);
const childRef = ref(null);
const childrenRef = ref(null);
const seleted = ref(null);
const searchTerm = ref("");
const pageOpen = ref(true);
let fuse = null;

onMounted(() => {
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((res) => {
      flagArraySize.value = res.data.length;
      flagData.value = res.data.sort((firstEle, secondEle) => {
        if (firstEle.name.official < secondEle.name.official) {
          return -1;
        }
        if (firstEle.name.official > secondEle.name.official) {
          return 1;
        }
        return 0;
      });
      sliceFlagData.value = res.data.slice(25 * pageNum, 25);
    })
    .catch((e) => {
      console.log(e);
    });
});
const dsceSort = () => {
  if (!dsce.value) {
    sliceFlagData.value = flagData.value.reverse().slice(25 * pageNum, 25);
    dsce.value = true;
    pageNum.value = 0;
    childRef.value.selectPage = 0;
  }
};
const ascSort = () => {
  if (dsce.value) {
    sliceFlagData.value = flagData.value.reverse().slice(25 * pageNum, 25);
    dsce.value = false;
    pageNum.value = 0;
    childRef.value.selectPage = 0;
  }
};
const nextPage = () => {
  pageNum.value += 1;
};
const prevPage = () => {
  pageNum.value -= 1;
};
const currentPage = (current) => {
  pageNum.value = current;
};
watch(pageNum, () => {
  startNum.value = 25 * pageNum.value;
  sliceFlagData.value = flagData.value.slice(
    startNum.value,
    startNum.value + 25
  );
});
const selectTitle = (id) => {
  seleted.value = sliceFlagData.value[id];
};
const close = () => {
  seleted.value = null;
};
// const options = {
//   keys: ['name.common'],
//   threshold: 0.4,
// };
// const performSearch = () => {
//   if (!fuse) {
//     fuse = new Fuse(flagData.value, options);
//   }
//   const results = fuse.search(searchTerm.value)
//   sliceFlagData.value = []
//   sliceFlagData.value = results.map(item => item.item).slice(25 * pageNum, 25)
//   if(searchTerm.value == ''){
//     sliceFlagData.value = flagData.value.slice(25 * pageNum, 25);
//   }
// }
const performSearch = computed(() => {
  pageOpen.value = false;
  const results = flagData.value.filter((flagObj) => {
    const flag = flagObj.name.common.toLowerCase();
    const searchStr = searchTerm.value.toLowerCase();

    if (flag.startsWith(searchStr)) return true;

    const test = flag.slice(0, searchStr.length).split("");
    let diffs = 0;

    test.forEach((letter, i) => {
      if (letter !== searchStr[i]) diffs++;
    });

    if (diffs > 2) return false;
    return true;
  });
  sliceFlagData.value = results;
  if (searchTerm.value == "") {
    pageOpen.value = true;
    sliceFlagData.value = flagData.value.slice(25 * pageNum, 25);
  }
});
</script>
<style lang=""></style>
