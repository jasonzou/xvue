<script setup lang="ts">


defineProps<{ collapsed: boolean }>()

</script>

<template>
    <div class="page-footer">
        <div class="page-footer-link">
            <a href="https://github.com/jasonzou/xvue" target="_blank"> 官网 </a>
            <a href="https://github.com/jasonzou/xvue" target="_blank"> 社区 </a>
            <a href="https://github.com/jasonzou/xvue/issues" target="_blank"> 交流 </a>
        </div>
        <div class="copyright"> &copy xvue 0.0.1 · Made by Jason Zou</div>
    </div>
</template>



<style lang="css" scoped>
.page-footer {
    padding: 0 16px;
    text-align: center;

    a {
        font-size: 14px;
        color: #808695;
        transition: all 0.2s ease-in-out;

    }

    a:hover {
        color: #515a6e;
    }

    a:link {
        /* display: flex; */
        justify-content: center;
        margin-bottom: 8px;

        a:not(:last-child) {
            margin-right: 40px;
        }
    }

    .copyright {
        color: #808695;
        font-size: 14px;
    }
}
</style>