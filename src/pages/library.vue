<script setup lang="ts">
// import Header from "@/components/c/Header.vue";
// import { ezHeaderStore } from "@/stores/header";
import { computed } from "vue";
import { storeToRefs } from "pinia";

const headerStore = ezHeaderStore();
const { header } = storeToRefs(headerStore);

const getHeader = () => {
  headerStore.getHeader().then((header) => {
    console.log("got a header =>", header);
  });
};

// get the header
getHeader();

const myActiveHeader = computed(() => {
  return header.value;
});

const UpdateHeader = () => {
  headerStore.updateHeader(myActiveHeader.value).then((result) => {
    console.log("updated ?", result);
    if (result == true) {
      // updaet current activeHeader.value.
      ElNotification.success({
        title: "Success",
        message: "The header has been updated successfully! ",
        offset: 100,
      });
      getHeader();
    } else {
      ElNotification.error({
        title: "Error",
        message:
          "The header is not changed! Something is wrong to prevent the upate! ",
        offset: 100,
      });
    }
  });
};
</script>

<template>
  <Header></Header>
  <main>
    <div class="p-12">
      <h1>This is the current config.txt file.</h1>
      <div class="flex">
        <el-form
          :model="myActiveHeader"
          label-position="right"
          class="w-full"
          label-width="150px"
        >
          <el-form-item label="Current config.txt">
            <el-input
              v-model="myActiveHeader.config"
              type="textarea"
              :rows="45"
            />
          </el-form-item>
          <el-row class="text-center justify-center">
            <span>
              <el-button type="primary" @click="UpdateHeader"
                >Genereate a new config.txt</el-button
              >
            </span>
          </el-row>
        </el-form>
      </div>
    </div>
  </main>
  <!-- <Footer></Footer> -->
</template>
