<template>
  <div class="container-fluid">
    <div class="container">
      <!-- ✅ Navbar Kept As It Is -->
      <!-- <Navbar colored="true" /> -->

      <!-- ✅ Centered Form Layout -->
      <div class="row justify-content-center align-items-center min-vh-100">
        <div class="col-12 col-lg-6">
          <div class="card form-style border-0 rounded-4">
            <div class="card-body p-4 p-lg-5">
              <div class="title text-center pb-4">
                Registration Form
              </div>

              <!-- ✅ NAME -->
              <div class="position-relative mb-3">
                <input
                  class="form-control py-2"
                  v-model="form.name"
                  placeholder="Enter Name"
                  type="text"
                  :class="{ 'is-invalid': submitted && !form.name }"
                />
                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
              </div>

              <!-- ✅ YEAR & SEMESTER -->
              <div class="position-relative mb-3">
                <select
                  class="form-select p-2"
                  v-model="form.year"
                  :class="{ 'is-invalid': submitted && !form.year }"
                >
                  <option disabled value="">Select Year & Semester</option>
                  <option>1st Year - 1st Semester</option>
                  <option>1st Year - 2nd Semester</option>
                  <option>2nd Year - 1st Semester</option>
                  <option>2nd Year - 2nd Semester</option>
                  <option>3rd Year - 1st Semester</option>
                  <option>3rd Year - 2nd Semester</option>
                  <option>4th Year - 4th Semester</option>
                </select>
                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
              </div>

              <!-- ✅ BRANCH (Mapped to query field) -->
              <div class="position-relative mb-3">
                <input
                  class="form-control py-2"
                  v-model="form.query"
                  placeholder="Enter Your Branch"
                  type="text"
                />
              </div>

              <!-- ✅ EMAIL -->
              <div class="position-relative mb-3">
                <input
                  class="form-control py-2"
                  v-model="form.email"
                  placeholder="Enter Email"
                  type="email"
                  :class="{ 'is-invalid': submitted && !form.email }"
                />
                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-3">*</span>
              </div>

              <!-- ✅ PHONE -->
              <div class="position-relative mb-4">
                <div class="d-flex">
                  <select
                    class="form-select py-2 me-2"
                    style="width: 90px"
                    v-model="form.countryCode"
                  >
                    <option value="+91">+91</option>
                  </select>

                  <input
                    class="form-control py-2"
                    v-model="form.phone"
                    placeholder="Enter Phone Number"
                    type="number"
                    :class="{ 'is-invalid': submitted && !form.phone }"
                  />
                </div>
                <span class="text-danger position-absolute top-50 end-0 translate-middle-y me-2">*</span>
              </div>

              <!-- ✅ SUBMIT -->
              <button
                class="btn w-100 text-white py-2"
                style="background: #2528CB; font-weight: 500"
                @click="submitForm"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import axios from "axios";

export default {
  components: {
    Navbar
  },

  data() {
    return {
      submitted: false,

      form: {
        year: "",
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        query: "" // ✅ used as Branch
      }
    };
  },

  methods: {
    async submitForm() {
      this.submitted = true;

      if (
        !this.form.year ||
        !this.form.name ||
        !this.form.email ||
        !this.form.phone
      ) {
        alert("Please fill all required fields ❗");
        return;
      }

      if (this.form.phone.length < 10) {
        alert("Enter a valid 10-digit phone number ❗");
        return;
      }

      const payload = {
        year: this.form.year,
        name: this.form.name,
        email: this.form.email,
        phone: this.form.countryCode + this.form.phone,
        query: this.form.query // ✅ Branch goes here
      };

      try {
        await axios.post(
          "https://fnbackendprod.finvedic.in/api/book-class",
          payload
        );

        alert("Form submitted successfully ✅");

        this.form = {
          year: "",
          name: "",
          email: "",
          countryCode: "+91",
          phone: "",
          query: ""
        };

        this.submitted = false;
      } catch (error) {
        console.error("API Error:", error);
        alert("Something went wrong ❌");
      }
    }
  }
};
</script>

<style scoped>
.form-style {
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
  background: white;
}

.form-style .title {
  font-size: 26px;
  font-weight: 600;
  color: #2528CB;
}

.form-style .form-control,
.form-style .form-select {
  background: #FAFAFA;
  border-radius: 10px;
  font-size: 14px;
  border: 1px solid #E5E7EB;
}

button {
  border-radius: 10px;
}

@media (max-width: 767px) {
  .form-style .title {
    font-size: 22px;
  }
}
</style>
