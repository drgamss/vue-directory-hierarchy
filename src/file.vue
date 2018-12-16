<template>
    <div class="file">
        <span class='dots'>..........</span>
        <img class='file-icon' :src="fileType(fileName)" alt="">
        <a class='link' :href="link">{{ fileName }}</a>
    </div>
</template>
<script>
export default {
    props: ['fileName', 'link'],
    methods: {
        fileType: function(str){
            var imgSrc = '';
            var fileType = str.split('.')[1];
            switch(fileType) {
                case "xls":
                    imgSrc = 'http://vueland.com/images/displayImages/loader_images/t1BI8.png';
                    break;
                case "doc":
                    imgSrc = 'http://vueland.com/images/displayImages/loader_images/awCk2.png';
                    break;
                case "pdf":
                    imgSrc = 'http://vueland.com/images/displayImages/loader_images/WLuO5.gif';
                    break;                    
                default:
                    imgSrc = 'http://vueland.com/images/displayImages/loader_images/1REcz.png';
            }
            return imgSrc;
        }
    }
}
</script>
<style lang='scss'>
.file {
    padding: 10px 10px 10px 0;
    border-radius: 5px;
    position: relative;    
    .dots {
        color: #cccccc;
        position: absolute;
        top: 11px;
    }
    .link {
        margin-left: 10px;
    }
    img {
        vertical-align: middle;
        display: inline-block;
        margin-left: 42px;
    }
}
</style>

