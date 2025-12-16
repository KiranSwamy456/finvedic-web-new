<template>
  <div class="container-fluid text-center py-5" style="background: #F3F5F4;">
    <div class="row justify-content-center">
      <div class="col-12">
        <p class="title">Student Success <i style="color: #FFCA00">Stories</i></p>
      </div>
      <div class="col-12 col-lg-6">
        <p class="description">
          Hear from our graduates who have successfully transitioned into industry roles with ScaleGrad's comprehensive training program.
        </p>
      </div>
    </div>

    <Swiper
      :slides-per-view="'auto'"
      :space-between="30"
      :grab-cursor="true"
      :loop="true"
      :rtl="true"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="h-100"
    >
      <SwiperSlide
        v-for="(item, i) in testimonials"
        :key="i"
        class="testimonial-card card border-0"
      >
        <div class="card-body h-100">
          <star-rating
            :rating="item.rating"
            read-only
            star-size="16"
            :show-rating="false"
            active-color="#FFCA00"
          />
          <p class="review-text two-line-ellipsis text-start">{{ item.text }}</p>
          <div class="d-flex align-items-center gap-3 mt-3">
            <img :src="item.photo" class="profile-img" />
            <div>
              <h6 class="m-0 fw-bold">{{ item.name }}</h6>
              <p class="m-0 small text-muted">{{ item.course }}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay"; // for autoplay module
import StarRating from "vue-star-rating";

// Images
import glance2 from "../assets/glance2.svg";
import glance3 from "../assets/glance3.svg";
import glance4 from "../assets/glance4.svg";
import glance5 from "../assets/glance5.svg";

export default {
  components: {
    Swiper,
    SwiperSlide,
    StarRating,
  },
  data() {
    return {
      testimonials: [
     
        {
          text: "Real-world projects and group discussions improved my confidence.",
          rating: 4,
          name: "Yash",
          course: "B. Tech CSE",
          photo: glance2,
        },
        {
          text: "Expert lectures, hands-on projects, and interactive sessions made learning enjoyable.",
          rating: 4,
          name: "Durga Prasad",
          course: "B. Tech CSE",
          photo: glance4,
        },
        {
          text: "Networking opportunities and 24/7 AI assistance were very helpful.",
          rating: 5,
          name: "Sandeep",
          course: "B. Tech CSE",
          photo: glance5,
        },
           {
          text: "Case studies, AI assignments, and group work were engaging. The mock interviews helped clarify my career path.",
          rating: 5,
          name: "Harsha M",
          course: "B. Tech CSE",
          photo: glance3,
        },
        //   {
        //   text: "Case studies, AI assignments, and group work were engaging. The mock interviews helped clarify my career path.",
        //   rating: 5,
        //   name: "Harsha M",
        //   course: "B. Tech CSE",
        //   photo: glance3,
        // },
       
      ],
    };
  },
};
</script>

<style scoped>
.title {
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: -4%;
  color: #141534;
  font-family: poppins, sans-serif;
}
.description {
  font-weight: 600;
  font-size: 1em;
  color: #45464E;
}
.testimonial-card {
  width: 360px;
  padding: 0 !important;
  height: 100%;
}
.review-text {
  font-size: 0.9em;
  color: #45464E;
  font-style: italic;
}
.profile-img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
}
@media (max-width: 768px) {
  .testimonial-card {
    width: 280px;
  }
}
.two-line-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
