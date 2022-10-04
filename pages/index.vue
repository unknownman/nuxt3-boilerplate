<template>
    <div class="light">
        <ui-card max-w-md>
            <ui-card-image src="https://flowbite.com/docs/images/blog/image-1.jpg"></ui-card-image>
            <ui-card-title>Title come here</ui-card-title>
            <ui-card-section>Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
                chronological order.
            </ui-card-section>
            <ui-card-action>
                <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button" @click="onShowDrawer" aria-controls="drawer-example">
                    Show drawer
                </button>
                <button
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button" @click="onShowDrawer" aria-controls="drawer-example">
                    Show drawer
                </button>
                <div>asd</div>
            </ui-card-action>
        </ui-card>
    </div>

    <ui-drawer v-model="drawer"></ui-drawer>
</template>
<script setup>
const drawer = ref(false)

function onShowDrawer () {
    drawer.value = !drawer.value || false
}
</script>