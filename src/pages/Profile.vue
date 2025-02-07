<template>
<div class="container bg-pink-700 font-poppins mt-4 my-3 rounded-3">
    <div class="row ">
        <div class="col-lg-3 col-md-4 bg-pink-600 font-poppins text-center py-4 d-none d-lg-block sidebar-profile border-2 rounded-3">
            <div class="d-flex flex-column align-items-center">
                <div class="rounded-circle overflow-hidden bg-light" style="width: 100px; height: 100px;">
                    <img src="../assets/user.avif" alt="Profile" class="w-100 h-100 object-fit-cover">
                </div>
                <h3 class="text-light font-weight-bold mt-3 mb-1">My Profile</h3>
                <h6 class="text-light">KS Online Shop</h6>
            </div>
            <div class="mt-3">
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="#">
                    <i class="bi bi-wallet-fill mx-2"></i> My Wallet
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="#">
                    <i class="bi bi-person-fill-add mx-2"></i> My Rewards
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="#">
                    <i class="bi bi-bag-heart-fill mx-2"></i> My Orders
                </a>
            </div>
            <button class="btn btn-light bg-primary border-1 rounded-1 w-100 mt-3">
                <i class="bi bi-exclamation-circle p-3"></i> Personal Information
            </button>
            <div class="mt-3">
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="#">
                    <i class="bi bi-award mx-2"></i> Rewards
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="#">
                    <i class="bi bi-geo-alt-fill mx-2"></i> Address
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="">
                    <i class="bi bi-credit-card-fill mx-2"></i> Payment Methods
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="">
                    <i class="bi bi-gear mx-2"></i> Contact Preference
                </a>
                <a class="text-light text-decoration-none d-flex align-items-center my-2" href="">
                    <i class="bi bi-whatsapp mx-2"></i> Social Networks
                </a>
            </div>
            <RouterLink to="/" class="w-100 mt-3">
                <button class="btn btn-light     w-100">
                    <i class="bi bi-box-arrow-left px-2"></i> Sign Out
                </button>
            </RouterLink>
        </div>
        <div class="col-md-12 col-lg-9 p-4 m-0 ">
            <div class="d-flex align-items-center d-none d-md-flex d-lg-flex d-md-none">
            <div class="rounded-circle bg-success overflow-hidden d-flex m-2" style="width: 80px; height: 80px;">
                <img src="../assets/security.png" alt="Security" class="w-100 h-100 object-fit-cover">
            </div>
            <div class="text-light  ">
                <h1 class="fs-2">Personal Information</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            </div>
            <div class="d-flex flex-column align-items-center d-ms-flex  d-lg-none">
                <div class="rounded-circle overflow-hidden bg-light" style="width: 100px; height: 100px;">
                    <img src="../assets/user.avif" alt="Profile" class="w-100 h-100 object-fit-cover">
                </div>
                <h3 class="text-light font-weight-bold mt-3 mb-1">My Profile</h3>
                <h6 class="text-light ">KS Online Shop</h6>
            </div>
            <div class="row g-3 m-0">
                <div class="col-md-6">
                    <label class="form-label text-light">First Name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label text-light">Last Name</label>
                    <input type="text" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label text-light">Email</label>
                    <input type="email" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label text-light">Password</label>
                    <input type="password" class="form-control">
                </div>
                <div class="col-md-6">
                    <label class="form-label text-light">Phone Number</label>
                    <input type="text" class="form-control" placeholder="Enter your phone">
                </div>
                <div class="col-md-6">
                    <label class="form-label text-light">Date Of Brith</label>
                    <input type="date" class="form-control">
                </div>
                <div class="col-md-12">
                    <label class="form-label text-light">Gender</label>
                    <div class="btn-group w-100">
                    <input type="radio" class="btn-check" name="gender" id="" checked>
                    <label class="btn btn-outline-light" for="male">Male</label>
                    <input type="radio" class="btn-check" name="gender" id="">
                    <label class="btn btn-outline-light" for="female">Female</label>
                    </div>
                </div>
                <div class="col-md-12 text-light font-poppins">
                    <p>In order to access some features of the Service. You will have to fill out your account details.</p>
                    <p>You may use it for buying thing also for shipping process for more details <a href="">click here.</a></p>
                </div>
                <div class="col-md-12 d-flex gap-2 mt-3 ">
                    <button class="btn btn-light">Save</button>
                    <button class="btn btn-light">Cancel</button>
                </div>
                <RouterLink to="/" class="w-100 mt-3 d-block d-lg-none">
                    <button class="btn btn-light     w-100">
                        <i class="bi bi-box-arrow-left px-2"></i> Sign Out
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
</div>
</template>


<script setup></script>

<style lang="scss" scoped>
    .card {
    border-radius: 10px;
    background: #f8f9fa;
    }
    @media (max-width: 720px) {
        .sidebar-profile{
            display:none !important;
        }
    }
    .btn:hover{
        background-color: rgb(51, 51, 242);
    }
</style>






