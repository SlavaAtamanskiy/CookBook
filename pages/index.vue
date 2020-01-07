<template>
  <div class="flex flex-col h-screen">
    <div class="flex w-full h-12">
     <div class="flex justify-center items-center bg-gray-200 h-full w-full">
        <span class="font-extrabold text-2xl text-orange-600">Cook Book</span>
     </div>
     <div class="flex justify-center items-center bg-orange-600 h-full w-full">
         <nuxt-link to="/">Home</nuxt-link>
         <nuxt-link to="/ingredients">Ingredients</nuxt-link>
     </div>     
    </div>
    <nuxt-child/>
  </div>
</template>

