<template>
   <div class="ui-block">

        <article class="hentry post">

            <div class="post__author author vcard inline-items">
                <img src="img/avatar10-sm.jpg" alt="author">

                <div class="author-date">
                    <a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                    <div class="post__date">
                        <time class="published" datetime="2004-07-24T18:18">
                            9 hours ago
                        </time>
                    </div>
                </div>

                <div class="more">
                    <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                    <ul class="more-dropdown">
                        <li>
                            <a href="#">Edit Post</a>
                        </li>
                        <li>
                            <a href="#">Delete Post</a>
                        </li>
                        <li>
                            <a href="#">Turn Off Notifications</a>
                        </li>
                        <li>
                            <a href="#">Select as Featured</a>
                        </li>
                    </ul>
                </div>

            </div>

            <candorism-video v-if="post.type === 'video'"></candorism-video>
            <p v-if="post.type === 'post'">{{post.message}}</p>

            <div class="post-additional-info inline-items">

                <a href="#" class="post-add-icon inline-items">
                    <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>24</span>
                </a>

                <ul class="friends-harmonic">
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic7.jpg" alt="friend">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic8.jpg" alt="friend">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic9.jpg" alt="friend">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic10.jpg" alt="friend">
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="img/friend-harmonic11.jpg" alt="friend">
                        </a>
                    </li>
                </ul>

                <div class="names-people-likes">
                    <a href="#">You</a>, <a href="#">Elaine</a> and
                    <br>22 more liked this
                </div>


                <div class="comments-shared">
                    <a href="#" class="post-add-icon inline-items">
                        <svg class="olymp-speech-balloon-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use></svg>
                        <span>17</span>
                    </a>

                    <a href="#" class="post-add-icon inline-items">
                        <svg class="olymp-share-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                        <span>24</span>
                    </a>
                </div>
            </div>
            <div class="control-block-button post-control-button">
                <a href="#" class="btn btn-control">
                    <svg class="olymp-like-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use></svg>
                </a>
                <a href="#" class="btn btn-control">
                    <svg class="olymp-comments-post-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use></svg>
                </a>
                <a href="#" class="btn btn-control">
                    <svg class="olymp-share-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use></svg>
                </a>
            </div>
        </article>
        <ul class="comments-list">
            <li v-for="comment in post.comments" v-bind:key="comment.id">
                <div class="post__author author vcard inline-items">
                    <img v-bind:src="comment.author.photoUrl" alt="author">

                    <div class="author-date">
                        <a class="h6 post__author-name fn" v-bind:href="comment.author.profileUrl">{{comment.author.name}}</a>
                        <div class="post__date">
                            <time class="published" v-bind:datetime="comment.published">
                                38 mins ago
                            </time>
                        </div>
                    </div>

                    <a href="#" class="more"><svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg></a>

                </div>

                <p>{{comment.message}}</p>

                <a href="#" class="post-add-icon inline-items">
                    <svg class="olymp-heart-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use></svg>
                    <span>3</span>
                </a>
                <a href="#" class="reply">Reply</a>
            </li>
        </ul>

        
        <a href="#" class="more-comments">View more comments <span>+</span></a>
        <candorism-post-comment></candorism-post-comment>
    </div>
</template>
<script>
import Vue from "vue";

const postMessage = () => import(/*webpackChunkName: "post-message"*/ "./post.vue");
const postVideo = () => import(/*webpackChunkName: "post-video"*/ "./post-video.vue");
const postComment = () => import(/*webpackChunkName: "post-comment"*/ "./post-comment.vue");

export default Vue.extend({
    data: function() {
        return {
           post: {
               type: "post",
               message: "lorem ipsum",
               comments: [
                   {
                       id: 0,
                       author: {
                           name: "James Spiegel",
                           photoUrl: "img/author-page.jpg",
                           profileUrl: "02-ProfilePage.html",
                       },
                       published: "2004-07-24T18:18",
                       message: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.",
                       likes: 8,
                   },
                   {
                       id: 1,
                       author: {
                           name: "Mathilda Brinker",
                           photoUrl: "img/avatar1-sm.jpg",
                           profileUrl: "02-ProfilePage.html",
                       },
                       published: "2004-07-24T18:18",
                       message: `Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum
                    quia dolor sit amet, consectetur adipisci velit en lorem ipsum duis aute irure dolor in reprehenderit in voluptate velit esse cillum.`,
                       likes: 8,
                   }
               ],
           }
        }
    },
    components: {
        "candorism-message": postMessage,
        "candorism-video": postVideo,
        "candorism-post-comment": postComment,
    }
  
});
</script>

