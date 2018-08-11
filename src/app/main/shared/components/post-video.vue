<template>
        <div>
            <p>{{video.message}}</p>

            <div class="post-video">
                <div class="video-thumb">
                    <img v-bind:src="video.thumbnail" alt="photo">
                    <a v-bind:href="video.url" class="play-video">
                        <svg class="olymp-play-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use></svg>
                    </a>
                </div>

                <div class="video-content">
                    <a href="#" class="h4 title">{{video.title}}</a>
                    <p>
                      {{video.comment}}
                    </p>
                    <a v-bind:href="video.linkSite.url" class="link-site">{{video.linkSite.title}}</a>
                </div>
            </div>
        </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
   
    data: function(){
        return {
            video: {
                message: `Hey <a href="#">Cindi</a>, you should really check out this new song by Iron Maid. The next time they come to the city we should totally go!`,
                thumbnail: "img/video-youtube1.jpg",
                url: 'https://youtube.com/watch?v=excVFQ2TWig',
                title: "Iron Maid - ChillGroves",
                comment: `Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua...`,
                linkSite: {
                    url: "http://www.youtube.com",
                    title: "YOUTUBE.COM"
                },

            }
        }
    }
});
</script>

