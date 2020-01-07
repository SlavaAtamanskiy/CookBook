<template>
    <div class="flex h-full">
      <div class="flex justify-center items-start pt-16 bg-gray-200 w-full">
         <div class="flex flex-col justify-center">
          <div class="flex">
            <div class="quarter-circle quarter-circle-top-left h-32 w-32">Users</div>
            <div class="quarter-circle quarter-circle-top-right h-32 w-32">Categories</div>
          </div>
          <div class="absolute translate-x-105per bg-gray-200 rounded-full z-20 h-16 w-16"></div>
          <div class="flex">
            <div class="quarter-circle quarter-circle-bottom-left h-32 w-32">Dishes</div>
            <div class="quarter-circle quarter-circle-bottom-right h-32 w-32">Ingrediens</div>
          </div>
        </div>
      </div>
      <div class="bg-orange-600 w-full">
      
      </div> 
    </div>
</template>

<style scoped>
  
       
    .quarter-circle {
       text-align: center;
       line-height: 100px;
    }

   .quarter-circle:hover {
      box-shadow:  0px 0px 16px 1px rgba(0,0,0,0.75);
      cursor: pointer;
      z-index: 3;
   }

   .quarter-circle-top-left{
     border-radius: 100% 0 0 0;
     background: #c00;
   }
   .quarter-circle-top-right{
        background: #fc98fc;
     border-radius: 0 100% 0 0;
   }
   .quarter-circle-bottom-left{
      background: greenyellow;
     border-radius: 0 0 0 100%;
   }
   .quarter-circle-bottom-right{
      background: lightblue;
      border-radius: 0 0 100% 0;
   }

   .quarter-circle-bottom-right:hover {
      background-image: radial-gradient(circle at top left, white 10%, lightblue);
   }

   .quarter-circle-bottom-left:hover {
      background-image: radial-gradient(circle at top right, white 10%, greenyellow);
   }

   .quarter-circle-top-right:hover {
      background-image: radial-gradient(circle at bottom left, white 10%, #fc98fc);
   }

   .quarter-circle-top-left:hover {
      background-image: radial-gradient(circle at bottom right, white 10%, #c00);
   }


</style>
