<script setup>
import Card from "@components/Card.vue"
import userImg from "@components/userImg.vue"
import { provide, reactive, ref } from "vue"
import { useStore } from "vuex"
import { useRoute } from "vue-router"
import { stringify } from 'qs' // 引入qs模块，用来序列化post类型的数据
import http from "@http"
provide("showheader", true)
provide("showfooter", true)
provide("bodysrcoll", true)

const store = useStore()

const postData = reactive({
    context: "",
    resource: {
        img: null,
        imgUrl: null,
        video: null,
        videoUrl: null
    }
})

// 将 img 转成 base64， 通过canvas
const getBase64Image = () => {
    let canvas = document.createElement("canvas")
    let img = document.getElementById("postImg")
    canvas.width = img.width;
    canvas.height = img.height;
    canvas.getContext("2d").drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png")
    return dataURL
}

const changeImgPath = (e) => {
    // postData.resource.img = e.target.files[0]
    console.log(e)
    postData.resource.img = e.target.files[0]
    postData.resource.imgUrl = URL.createObjectURL(postData.resource.img)
}

const changeVideoPath = (e) => {
    // postData.resource.video = e.target.files[0]
    console.log(e.target.files[0])
    postData.resource.video = e.target.files[0]
    postData.resource.videoUrl = URL.createObjectURL(postData.resource.video)
}

const closeThisCard = () => {
    store.commit('closeActivePid')
}

const sendThisPost =  async () => {
    if (postData.context != "") {
        const res = await http.post(`/post`, stringify({
            context: postData.context,
            img: (postData.resource.img == null ? null: getBase64Image())
        }))
        console.log(res.data)
        if (res.data.code == 105) {
            // OK go back to the previous page
            store.commit('closeActivePid')
        }else{
            postData.context += " \n !!! 发送失败！！！"
        }
        
    }
}



</script>

<template>
    <Card>
        <template v-slot:header>
            <div
                class="w-100 my-2 d-flex flex-row justify-content-center align-items-center position-relative"
            >
                <p class="h3 mb-0">New Post</p>
                <icon
                    @click="closeThisCard"
                    class="position-absolute mx-0 active"
                    style="left: 0;"
                    name="close-danger"
                    iconType="svg"
                    width="1.6rem"
                />
                <icon
                    @click="sendThisPost"
                    class="position-absolute mx-0 active"
                    style="right: 0;"
                    name="send"
                    iconType="svg"
                    width="1.6rem"
                />
            </div>
        </template>
        <template v-slot:body>
            <div class="d-flex flex-column h-100">
                <textarea
                    v-model="postData.context"
                    class="form-control w-100 h-100"
                    name
                    id
                    cols="30"
                    rows="10"
                    placeholder="Write something you will to share..."
                ></textarea>
                <div class="d-flex flex-row w-100 align-items-center justify-content-around">
                    <img
                    id="postImg"
                        v-show="postData.resource.imgUrl"
                        :src="postData.resource.imgUrl"
                        alt
                        style="width: 8rem;height: 8rem;"
                        class="mx-0"
                    />
                    <video
                        v-show="postData.resource.videoUrl"
                        :src="postData.resource.videoUrl"
                        style="width: 8rem;height: 8rem;"
                    ></video>
                </div>
            </div>
        </template>
        <template v-slot:footer>
            <div class="d-flex flex-row justify-content-around">
                <div class="position-relative">
                    <input
                        @change="changeImgPath"
                        type="file"
                        accept="image/*"
                        capture="camera"
                        class="position-absolute"
                        style="left: 0;top:0;width:1.5rem;opacity: 0;"
                    />
                    <i class="bi bi-images fs-1"></i>
                </div>
                <div class="position-relative">
                    <input
                        @change="changeVideoPath"
                        type="file"
                        accept="video/*"
                        capture="camcorder"
                        class="position-absolute"
                        style="left: 0;top:0;width:1.5rem;opacity: 0;"
                    />
                    <i class="bi bi-camera-video fs-1"></i>
                </div>

                <i class="bi bi-emoji-smile fs-1"></i>
                <i class="bi bi-link-45deg fs-1"></i>
            </div>
        </template>
    </Card>

    <!-- Modal -->
    <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">...</div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template> 


<style scoped>
img {
    margin-right: 2rem;
    margin-left: 2rem;
    /* padding: 1rem; */
}

textarea {
    resize: none;
    border-width: 0;
}
</style>