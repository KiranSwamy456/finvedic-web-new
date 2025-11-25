<template>
    <div class="card rounded-4 border-0 rounded-4 h-100">
        <div class="card-body p-2 h-100">
            <img :src="item.image" class="image"/>
            <div class="d-flex justify-content-between align-items-center box">
                <span class="title">
                    {{ item.title }}
                    <span class="year">{{ item.year }}<span class="sup">{{ item.extension }}</span> {{ item.year ? 'Year' : '' }}</span>
                </span>
                <span class="badge border">{{ item.hours }}</span>
            </div>
            <div class="description">{{ item.description }}</div>

                <ul class="list-group pt-3">
                <li class="list-group-item"><img :src="s1000016517" />&nbsp;&nbsp;{{ item.keys[0] }}</li>
                <li class="list-group-item"><img :src="s1000016518" />&nbsp;&nbsp;{{ item.keys[1] }}</li>
            </ul>
            <router-link class="link rounded-pill  mt-3" v-if="item.enableRedirect" :to="item.link">
                View Curriculum <img :src="s1000016186"/>
            </router-link> 
        </div>
    </div>
</template>
<script>
import s1000016517 from "../assets/1000016517.svg";
import s1000016518 from "../assets/1000016518.svg";
import s1000016186 from "../assets/1000016186.svg";
    export default {
        props: {
            item: {
                default: {},
                type: Object
            }
        },
        data() {
            return {
                s1000016517: s1000016517,
                s1000016518: s1000016518,
                s1000016186: s1000016186
            }
        }
    }
</script>
<style scoped>
        .card {
            background: #F3F5F4;
        }
        .image {
            width: 100%;
        }
        .box {
            background: #2528CB;
            padding: 6px;
            color: #fff;
            margin: 10px 0px;
            border-radius: 8px;
        }
        .title {
            font-size: 1rem;
            font-weight: 600;
        }
        .year {
            font-size: 0.8em;
        }
        .year .sup {
            font-size: 0.6em;    /* make it smaller */
            vertical-align: super;  /* lift it upward */
            margin-left: 2px;
        }
        .badge {
            color: #FFCA00;
        }
        .description {
            font-size: 1rem;
            color: #4B5563;
        }
        .list-group-item {
            color: #45464E;
            font-size: 1em;
            background: transparent;
            border: none;
            padding-left: 0px!important;
            padding-top: 2px!important;
            img {
                width: 14px
            }
        }
        .link {
            display: inline-flex;
            align-items: center;
            img {
                width: 24px;
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
            .title {
                font-size: 1rem;
                font-weight: 600;
            }
            .year {
                font-size: 0.8em;
            }
            .badge {
                color: #FFCA00;
            }
            .description {
                font-size: 18px;
                color: #4B5563;
                line-height: 24px;
                font-weight: 500;
            }
            .list-group-item {
                color: #45464E;
                font-size: 1em;
                background: transparent;
                border: none;
                padding-left: 0px!important;
                padding-top: 2px!important;
                img {
                    width: 14px
                }
            }
            .link {
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

        }
</style>