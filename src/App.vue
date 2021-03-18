<template>
  <div id="app">
    <header class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
    <p class="h3 my-0 me-md-auto fw-normal">MIDORI-SHOP</p>
    <nav class="my-2 my-md-0 me-md-3">
    <router-link to="/" class="p-2 text-dark" > SHOP </router-link>
    <router-link to='/login' class="p-2 text-dark" > Login </router-link>
    </nav>
    <router-link to="/about" class="btn btn-outline-primary">ตระกร้าสินค้า</router-link>
    </header>
    <router-view/>
  </div>
</template>

<style>

</style>
