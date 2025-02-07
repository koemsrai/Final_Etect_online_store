<template>
    <div class="d-block d-lg-none container-fluid bg-pink-700 fixed-bottom font-poppins">
        <ul class="d-flex justify-content-between nav">
            <li>
                <RouterLink to="/" class="d-grid align-items-center text-light text-decoration-none py-2">
                    <i class="bi bi-house-gear-fill text-center fs-4"></i>
                    <p class="m-0">Home</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/about" class="d-grid align-items-center text-light text-decoration-none py-2">
                    <i class="bi bi-microsoft text-center fs-4"></i>
                    <p class="m-0">About</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/product" class="d-grid align-items-center text-light text-decoration-none py-2">
                    <i class="bi bi-basket3-fill text-center fs-4"></i>
                    <p class="m-0">All-Product</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/card" class="d-grid align-items-center text-light text-decoration-none py-2">
                    <i class="bi bi-box2-heart-fill text-center fs-4"></i>
                    <p class="m-0">Card</p>
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/profile" class="d-grid align-items-center text-light text-decoration-none py-2">
                    <i class="bi bi-person-circle text-center fs-4"></i>
                    <p class="m-0">Profile</p>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

</script>