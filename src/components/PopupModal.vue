<template>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="closeDailog">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative h-[80vh] transform overflow-y-scroll rounded-lg bg-white text-left shadow-xl transition-all sm:my-8"
            >
              <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div class="">
                  <img :src="seleted.flags.png" class="w-screen sm:w-[50vw] h-80" />
                  <div class="grid grid-cols-2 mt-2 ml-2">
                    <h1 class="text-sm font-medium text-gray-900 truncate">
                      <strong>Common Name :</strong> {{ seleted.name.common }}
                    </h1>
                    <h1 class="text-sm font-medium text-gray-900 truncate">
                      <strong>Official Name :</strong>
                      {{ seleted.name.official }}
                    </h1>
                    <h1 class="text-sm font-medium text-gray-900 truncate">
                    <strong>Flag :</strong> {{ seleted.flag }}
                  </h1>
                  </div>
                </div>
                <div class="grid grid-cols-3 mt-1 ml-2">
                  <h1 class="text-sm font-medium text-gray-900 truncate">
                    <strong>CCA2 :</strong> {{ seleted.cca2 }}
                  </h1>
                  <h1 class="text-sm font-medium text-gray-900 truncate">
                    <strong>CCN3 :</strong> {{ seleted.ccn3 }}
                  </h1>
                  <h1 class="text-sm font-medium text-gray-900 truncate">
                    <strong>CCA3 :</strong> {{ seleted.cca3 }}
                  </h1>
                </div>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Independent :</strong> {{ seleted.independent }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Status :</strong> {{ seleted.status }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>unMember :</strong> {{ seleted.unMember }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Region :</strong> {{ seleted.region }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>SubRegion :</strong> {{ seleted.subregion }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Latlng :</strong> {{ seleted.latlng }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Landlocked : </strong>{{ seleted.landlocked }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Area : </strong>{{ seleted.area }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>Population </strong>: {{ seleted.population }}
                </h1>
                <h1
                  class="text-sm font-medium mt-1 pl-2 text-gray-900 truncate"
                >
                  <strong>StartOfWeek </strong>: {{ seleted.startOfWeek }}
                </h1>
                <h1
                  class="text-sm font-medium ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Native-Name :</strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.name.nativeName"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">
                    - <strong>{{ index }}</strong> : {{ value.official }}
                  </h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Capital : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.capital"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-medium ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Car :</strong>
                </h1>
                <h1 class="text-sm pl-5 font-bold">- Sign:</h1>
                <div
                  v-for="(value, index) in seleted.car.signs"
                  :key="index"
                  class="pl-5"
                >
                <h1 class="text-sm font-normal pl-5">- {{ value }}</h1>                  
                </div>
                <h1
                  class="text-sm font-medium mt-1 pl-5 text-gray-900 truncate"
                >
                  <strong>- Side : </strong>{{ seleted.car.side }}
                </h1>
                <h1
                  class="text-sm font-medium ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Timezones :</strong></h1>
                  <div
                  v-for="(value, index) in seleted.timezones"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
              
                <h1
                  class="text-sm font-medium ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Continents :</strong></h1>
                  <div
                  v-for="(value, index) in seleted.continents"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-medium ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>CoatOfArms :</strong></h1>
                <div class = "grid grid-cols-1 md:grid-cols-6">
                  <div
                  v-for="(value, index) in seleted.coatOfArms"
                  :key="index"
                  class="pl-5"
                >
                  <img :src="value" class=" w-14">
                </div>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>TLD : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.tld"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Currencies :</strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.currencies"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">
                    - <strong>{{ index }}</strong> : {{ value.name }}
                  </h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>IDD : </strong>
                </h1>
                <h1 class="text-sm font-normal pl-5">
                  - root : {{ seleted.idd.root }}
                </h1>
                <h1 class="text-sm font-normal pl-5">- suffixes :</h1>
                <div
                  v-for="(value, index) in seleted.idd.suffixes"
                  class="pl-10"
                  :key="index"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>AltSpellings : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.altSpellings"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Map : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.maps"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- <strong>{{ index }} :</strong> <a :href="value" class=" text-blue-600 underline">{{ value }}</a></h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>capitalInfo : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.capitalInfo"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- {{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>PostalCode : </strong>
                </h1> 
                <div
                  v-for="(value, index) in seleted.postalCode"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">- <strong>{{ index }} :</strong>{{ value }}</h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Languages : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.languages"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">
                    - <strong>{{ index }}</strong> : {{ value }}
                  </h1>
                </div>
                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Demonyms : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.demonyms"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">
                    - <strong>{{ index }}</strong> :
                  </h1>
                  <div
                  v-for="(demon, newIndex) in value"
                  :key="newIndex"
                  class="pl-5"
                >
                <h1 class="text-sm font-normal">
                    - <strong>{{ newIndex }}</strong> : {{ demon }}
                  </h1>
              
              </div>
                </div>

                <h1
                  class="text-sm font-normal ml-2 mt-1 text-gray-900 truncate"
                >
                  <strong>Translations : </strong>
                </h1>
                <div
                  v-for="(value, index) in seleted.translations"
                  :key="index"
                  class="pl-5"
                >
                  <h1 class="text-sm font-normal">
                    - <strong>{{ index }}</strong> :
                  </h1>
                  <h1 class="text-sm font-normal pl-5">
                    - <strong>offical</strong> : {{ value.official }}
                  </h1>
                  <h1 class="text-sm font-normal pl-5">
                    - <strong>common</strong> : {{ value.common }}
                  </h1>
                </div>
              
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["close"]);
const props = defineProps({
  seleted: {
    type: Object,
    required: true,
  },
});
const open = ref(true);
const closeDailog = () => {
  emit("close");
};
console.log(props.seleted.name);
</script>
