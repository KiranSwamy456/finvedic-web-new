<template>
    <div class="container-fluid">
        <div class="container">
            <Navbar colored="true"/>

            <div class="py-lg-5 py-4">
                <iframe
                    style="aspect-ratio: 3/1.3;"
                    class="rounded-4"
                    width="100%"
                    src="https://www.youtube.com/embed/liVEpw66i7Y?si=IPllk3hZnkum_mUY"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                />
            </div>

            <div class="exposer-title text-center">Over Program</div>
            <div class="custom-grid py-4">
                <div v-for="item in programs">
                    <Card :item="item"/>
                </div>
            </div>

            <div class="row py-5 g-3">
                <div class="col-12 col-lg-7 itemStyle py-3">
                    <div class="row" v-for="item in items">
                        <div class="col-12 col-lg-4">
                            <img :src="item.image" class="w-100"/>
                        </div>
                        <div class="col-12 col-lg-8 py-2 pb-4">
                            <div class="title">{{ item.title }}</div>
                            <div class="description">{{ item.description }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-5">
                    <div class="card form-style border-none rounded-4">
                        <div class="card-body py-4">
                            <div class="title pb-4">Book a Live Class, For Free!</div>

                            <label class="form-label">Your Topic of Interest*</label>
                            <select class="form-select p-2">
                                <option>Select Program</option>
                            </select>
                            <input class="form-control py-2" placeholder="Enter Name" type="text"/>
                            <input class="form-control py-2" placeholder="Enter Email" type="email"/>
                            <div class="d-flex">
                                <select class="form-select py-2 me-2 mt-0" style="width: 100px">
                                    <option value="+91">+91</option>
                                </select>
                                <input class="form-control py-2 mt-0" placeholder="Enter Phone" type="number"/>
                            </div>
                            <button class="btn w-100 text-white py-2" style="background: #2528CB; font-weight: 400">Book Free Live Class</button>
                        </div>
                    </div>
                    <div class="row border rounded-4 mx-2 mt-3 py-0 py-2">
                        <div class="col-5 text-center border-end">
                            <div class="card-number">40+</div>
                            <div class="card-label">DeepTech & FinTech Courses</div>
                        </div>
                        <div class="col text-center p-3 border-end">
                            <div class="card-number">2000+</div>
                            <div class="card-label">Students</div>
                        </div>
                        <div class="col text-center p-3">
                            <div class="card-number">10+</div>
                            <div class="card-label">Corporates</div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import Card from "@/components/Card.vue";
import courseImage from "../../assets/2ndYear.svg";
import year1stYear from "../../assets/1stYear.svg";
import year3rd from "../../assets/3rdYear.svg";
import finalYear from "../../assets/finalYear.svg"
export default {
    components: {
        Card,
        Navbar
    },
    data() {
        return {
            courseImage: courseImage,
            programs: [
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
                {
                    image: courseImage,
                    title: 'Core',
                    hours: '120 Hours',
                    description:"Advanced full-stack development with hands-on projects in front-end, back-end.",
                    keys: ['Full-stack Apps', 'Advanced level'],
                },
            ],
            items: [
                {
                    image: finalYear,
                    title: 'Core',
                    description: 'Advanced full-stack development with hands-on projects in front-end, back-end.Advanced full-stack development with hands-on projects in front-end, back-end.'
                },
                {
                    image: year1stYear,
                    title: 'MasterTrack',
                    description: 'Cloud-native applications and FinTech specializationCloud-native applications and FinTech specialization'
                },
                {
                    image: courseImage,
                    title: 'ProEdge',
                    description: 'Professional-grade development with DevOps and cloud technologies'
                }
            ]
        }
    }
}
</script>
<style scoped>
    .exposer-title {
        font-size:  2.8rem;
        color: #141534;
        line-height: 3rem;
        font-weight: 600;
        padding-bottom: 20px
    }
    .custom-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
    }
    .itemStyle {
        img {
            width: 100%;
        }
        .title {
            padding-top: 16px;
            font-size: 24px;
            font-weight: 600;
            color: #2528CB
        }
        .description {
            font-size: 18px;
            font-weight: 500;
            color:#4B5563
        }
    }

    .form-style {
        box-shadow: 0px 0px 14px 2px #0000000F;
        border: 0px;
        .title {
            font-size: 24px;
            font-weight: 600;
            color: #333333;
        }
        .form-control, .form-select {
            background: #FAFAFA;
            margin: 16px 0px;
            font-size: 14px
        }
    }

    .card-number {
        color: #2528CB;
        font-size: 1.2rem;
        font-weight: 700;
    }
    .card-label {
        font-size: 1rem;
        color: #14CEC3;
        font-weight: 600;
    }
    @media only screen and (max-width: 767px) {
         .exposer-title {
            font-size: 24px;
            line-height: 32px;
        }
        .custom-grid {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 20px;
        }

        .itemStyle {
            img {
                width: 100%;
            }
            .title {
                font-size: 24px;
                font-weight: 400;
                color: #2528CB
            }
            .description {
                font-size: 13px;
                font-weight: 400;
                color:#4B5563
            }
        }

        .card-number {
            color: #2528CB;
            font-size: 1.2rem;
            font-weight: 700;
        }
        .card-label {
            font-size: 14px;
            color: #14CEC3;
            font-weight: 600;
        }
    }
    
</style>