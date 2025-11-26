<template>
    <div class="container-fluid ScaleGrad-bg pt-4 pt-md-5">
        
        <div class="row justify-content-center">
            <div class="col-12">
                <p class="title">ScaleGrad <i style="color: #FFCA00"> Boosters</i></p>
            </div>
            <div class="col-12 col-md-6 description">
                ScaleGrad Boosters are focused, one-hour power sessions designed to quickly strengthen key skills and keep students on a fast track to industry readiness.
            </div>
        </div>
        
       
        <div class="container py-4 py-md-5">
            <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
                <Slide v-for="image in images" :key="image.id">
                    <template #default="{ currentIndex, isActive }">
                        <div
                            :class="['thumbnail', { 'is-active': isActive }]"
                            @click="slideTo(currentIndex)"
                        >
                            <img :src="image.navigator" alt="Thumbnail Image" class="thumbnail-image" />
                        </div>
                    </template>
                </Slide>
            </Carousel>
            <br>
            <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide">
                <Slide v-for="image in images" :key="image.id">
                    <div class="row px-lg-5 px-sm-0">
                        <div class="col-12 col-lg-7">
                            <img :src="image.url" alt="Gallery Image" class="gallery-image" />
                        </div>
                        <div class="col-12 col-lg-5 text-lg-start text-sm-center pt-4 pt-md-2">
                            <p class="carousal-title">Hackathon <i style="color: #0F268E">Online</i></p>
                            <p class="carousal-description">A coding hackathon where students solve real-world challenges and showcase innovation.</p>
                            <a class="carousal-link rounded-pill">View Curriculum <img :src="s1000016186"/></a>
                        </div>
                    </div>
                    <!-- -->
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>
<script>
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
// import bootcamps from "../assets/ScalGuardBoostars/bootcamps.svg";
import bootcamps  from '../assets/ScalGuardBoostars/bootcamps.svg';
 import bootcampsCard  from '../assets/ScalGuardBoostars/bootcampsCard.svg';
 import GroupDiscussion  from '../assets/ScalGuardBoostars/GroupDiscussion.svg';
 import groupDiscussionCard  from '../assets/ScalGuardBoostars/groupDiscussionsCard.svg';
 import hackathons  from '../assets/ScalGuardBoostars/hackathons.svg';
 import hackathuonCard  from '../assets/ScalGuardBoostars/hackathuonCard.svg';
 import masterClass  from '../assets/ScalGuardBoostars/masterClass.svg';
 import MasterClassCard  from '../assets/ScalGuardBoostars/MasterClassCard.svg';
 import seminarCardCard  from '../assets/ScalGuardBoostars/seminarCard.svg';
 import seminars  from '../assets/ScalGuardBoostars/seminars.svg';
 import s1000016186 from "../assets/1000016186.svg"

export default {
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation
    },
    data() {
        return {
            s1000016186: s1000016186,
            currentSlide: 0,
            galleryConfig: {
                itemsToShow: 1,
                wrapAround: true,
                slideEffect: 'fade',
                mouseDrag: false,
                touchDrag: false,
                height: 320,
            },
            thumbnailsConfig: {
                itemsToShow: 5,
                wrapAround: true,
                touchDrag: false,
                gap: 10,
            },
            images: [
                {
                    navigator: bootcamps,
                    url: bootcampsCard
                },
                {
                    navigator: GroupDiscussion,
                    url: groupDiscussionCard
                },
                {
                    navigator: hackathons,
                    url: hackathuonCard
                },
                {
                    navigator: masterClass,
                    url: MasterClassCard
                },
                {
                    navigator: seminars,
                    url: seminarCardCard
                }
            ]
        }
    }
}
</script>
<style scoped>
    .ScaleGrad-bg {
        background: url("../assets/ScalGuardBoostars/1000016751.svg");
        background-size: cover 100%;
        background-position: top center;
        background-repeat: no-repeat;
        border: none;
        text-align: center;
    }
    .title {
        font-weight: 600;
        font-size: 2.5rem;
        letter-spacing: -4%;
        color: #fff;
        font-family: poppins, sans-serif;
    }
    .description {
        font-size: 1em;
        color: #E0E0E0;
        font-weight: 600;
         font-family: poppins, sans-serif;
    }

    .carousel {
        --vc-nav-background: rgba(255, 255, 255, 0.7);
        --vc-nav-border-radius: 100%;
    }

    img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .gallery-image {
        border-radius: 16px;
        box-shadow: 0px 0px 14px 2px #00000012;
    }

    #thumbnails {
        margin-top: 10px;
    }

    .thumbnail {
        height: 100%;
        /* width: 100%; */
        cursor: pointer;
        opacity: 0.9;
        transform:scale(0.8);
        transition: opacity 0.3s ease-in-out;
    }

    .thumbnail.is-active {
        opacity: 1;
        transform: scale(1);
    }
    .thumbnail:hover {
        opacity: 1;
    }
    .carousal-title {
        font-weight: 700;
        color: #141534;
        font-size: 1.6em;
    }
    .carousal-description {
        font-weight: 500;
        color: #45464E;
        font-size: 1em;
    }
    .carousal-link {
        display: inline-flex;
        align-items: center;
        img {
            width: 30px;
            margin-left: 40px;
        }
        background: #14CEC3;
        color: #fff;
        font-weight: 600;
        font-size: 1rem;
        text-decoration: none;
        padding: 6px 6px 6px 16px;
    }

    @media only screen and (max-width: 767px) {
        .ScaleGrad-bg {
            background-size: 1000% 45%;
            background-position: top;
            /* background-repeat: no-repeat;
            border: none;
            text-align: center; */
        }
        .title, .carousal-title {
            font-size: 28px;
        }  
        .description, .carousal-description {
            font-size: 14px;
             font-family: poppins, sans-serif;
        } 
        .carousal-link {
            img {
                width: 20px;
                margin-left: 20px;
            }
            font-size: 14px;
            padding: 6px 6px 6px 16px;
        }
        
    }
</style>