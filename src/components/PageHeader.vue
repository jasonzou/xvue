<template>




<div class="layout-header">
    <!--顶部菜单-->
    <div
      class="layout-header-left"
      v-if="navMode === 'horizontal' || (navMode === 'horizontal-mix' && mixMenu)"
    >
      <div class="logo" v-if="navMode === 'horizontal'">
        <img :src="GlobalSettings.logo" alt="" />
        <h2 v-show="!collapsed" class="title">{{ GlobalSettings.title }}</h2>
      </div>
      <AsideMenu
        :collapsed="collapsed"
        v-model:location="getMenuLocation"
        :inverted="getInverted"
        mode="horizontal"
      />
    </div>
    <!--左侧菜单-->
    <div class="layout-header-left" v-else>
      <!-- 菜单收起 -->
      <div
        class="ml-1 layout-header-trigger layout-header-trigger-min"
        @click="handleMenuCollapsed"
      >
        <n-icon size="18" v-if="collapsed">
          <MenuUnfoldOutlined />
        </n-icon>
        <n-icon size="18" v-else>
          <MenuFoldOutlined />
        </n-icon>
      </div>
      <!-- 刷新 -->
      <div
        class="mr-1 layout-header-trigger layout-header-trigger-min"
        v-if="headerSetting.isReload"
        @click="reloadPage"
      >
        <n-icon size="18">
          <ReloadOutlined />
        </n-icon>
      </div>
      <!-- 面包屑 -->
      <n-breadcrumb v-if="crumbsSetting.show">
        <template
          v-for="routeItem in breadcrumbList"
          :key="routeItem.name === 'Redirect' ? void 0 : routeItem.name"
        >
          <n-breadcrumb-item v-if="routeItem.meta.title">
            <n-dropdown
              v-if="routeItem.children.length"
              :options="routeItem.children"
              @select="dropdownSelect"
            >
              <span class="link-text">
                <component
                  v-if="crumbsSetting.showIcon && routeItem.meta.icon"
                  :is="routeItem.meta.icon"
                />
                {{ routeItem.meta.title }}
              </span>
            </n-dropdown>
            <span class="link-text" v-else>
              <component
                v-if="crumbsSetting.showIcon && routeItem.meta.icon"
                :is="routeItem.meta.icon"
              />
              {{ routeItem.meta.title }}
            </span>
          </n-breadcrumb-item>
        </template>
      </n-breadcrumb>
    </div>
    <div class="layout-header-right">
      <div
        class="layout-header-trigger layout-header-trigger-min"
        v-for="item in iconList"
        :key="item.icon"
      >
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="18">
              <component :is="item.icon" v-on="item.eventObject || {}" />
            </n-icon>
          </template>
          <span>{{ item.tips }}</span>
        </n-tooltip>
      </div>
      <!--切换全屏-->
      <div class="layout-header-trigger layout-header-trigger-min">
        <n-tooltip placement="bottom">
          <template #trigger>
            <n-icon size="18">
              <component :is="fullscreenIcon" @click="toggleFullScreen" />
            </n-icon>
          </template>
          <span>全屏</span>
        </n-tooltip>
      </div>
      <!-- 个人中心 -->
      <div class="layout-header-trigger layout-header-trigger-min">
        <n-dropdown trigger="hover" @select="avatarSelect" :options="avatarOptions">
          <div class="avatar">
            <n-avatar :src="GlobalSettings.logo">
              <template #icon>
                <UserOutlined />
              </template>
            </n-avatar>
            <n-divider vertical />
            <span>{{ username }}</span>
          </div>
        </n-dropdown>
      </div>
      <!--设置-->
      <div class="layout-header-trigger layout-header-trigger-min" @click="openSetting">
        <n-tooltip placement="bottom-end">
          <template #trigger>
            <n-icon size="18" style="font-weight: bold">
              <SettingOutlined />
            </n-icon>
          </template>
          <span>项目配置</span>
        </n-tooltip>
      </div>
    </div>
  </div>
  <!--项目配置-->
  <ProjectSetting ref="drawerSetting" />
    <n-page-header subtitle="A podcast to improve designs" @back="handleBack">
    <n-grid :cols="5">
      <n-gi>
        <n-statistic label="Episodes" value="125" />
      </n-gi>
      <n-gi>
        <n-statistic label="Guests" value="22" />
      </n-gi>
      <n-gi>
        <n-statistic label="Apologies" value="36" />
      </n-gi>
      <n-gi>
        <n-statistic label="Topics" value="83" />
      </n-gi>
      <n-gi>
        <n-statistic label="Reference Links" value="2,346" />
      </n-gi>
    </n-grid>
    <template #title>
      <a
        href="https://anyway.fm/"
        style="text-decoration: none; color: inherit"
      >
        Anyway.FM
      </a>
    </template>
    <template #header>
      <n-breadcrumb>
        <n-breadcrumb-item>Podcast</n-breadcrumb-item>
        <n-breadcrumb-item>Best Collection</n-breadcrumb-item>
        <n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
        <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
      </n-breadcrumb>
    </template>
    <template #avatar>
      <n-avatar
        src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
      />
    </template>
    <template #extra>
      <n-space>
        <n-button>Refresh</n-button>
        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            ···
          </n-button>
        </n-dropdown>
      </n-space>
    </template>
    <template #footer>
      As of April 3, 2021
    </template>
  </n-page-header>

  </template>
  
<script setup lang="ts">
  import { defineComponent, reactive, toRefs, ref, computed, unref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import { NDropdown, NSpace, NIcon, NTooltip, NDivider, NAvatar, NPageHeader, NGrid, NGi, NStatistic, NBreadcrumb, NBreadcrumbItem} from 'naive-ui';

  import GlobalSettings from '@/GlobalSettings.ts'

    function openSetting(){
        console.log("Open Setting")
    }
    const collapsed = false
    const inverted = false
    const navMode = 'horizontal'
    // import components from './components';
    // import { NDialogProvider, useDialog, useMessage } from 'naive-ui';
    // import { TABS_ROUTES } from '@/store/mutation-types';
    // import { useUserStore } from '@/store/modules/user';
    // import { useScreenLockStore } from '@/store/modules/screenLock';
    // import ProjectSetting from './ProjectSetting.vue';
    // import { AsideMenu } from '@/layout/components/Menu';
    // import { useProjectSetting } from '@/hooks/setting/useProjectSetting';
    // import { websiteConfig } from '@/config/website.config';
  
    // export default defineComponent({
    //   name: 'PageHeader',
    //   components: { ...components, NDialogProvider, ProjectSetting, AsideMenu },
    //   props: {
    //     collapsed: {
    //       type: Boolean,
    //     },
    //     inverted: {
    //       type: Boolean,
    //     },
    //   },
    //   emits: ['update:collapsed'],
    //   setup(props, { emit }) {
    //     const userStore = useUserStore();
    //     const useLockscreen = useScreenLockStore();
    //     const message = useMessage();
    //     const dialog = useDialog();
    //     const { navMode, navTheme, headerSetting, menuSetting, crumbsSetting } = useProjectSetting();
  
    //     const drawerSetting = ref();
  
    //     const state = reactive({
    //       username: userStore?.info?.username ?? '',
    //       fullscreenIcon: 'FullscreenOutlined',
    //       navMode,
    //       navTheme,
    //       headerSetting,
    //       crumbsSetting,
    //     });
  
    //     const getInverted = computed(() => {
    //       return ['light', 'header-dark'].includes(unref(navTheme))
    //         ? props.inverted
    //         : !props.inverted;
    //     });
  
    //     const mixMenu = computed(() => {
    //       return unref(menuSetting).mixMenu;
    //     });
  
    //     const getChangeStyle = computed(() => {
    //       const { collapsed } = props;
    //       const { minMenuWidth, menuWidth } = unref(menuSetting);
    //       return {
    //         left: collapsed ? `${minMenuWidth}px` : `${menuWidth}px`,
    //         width: `calc(100% - ${collapsed ? `${minMenuWidth}px` : `${menuWidth}px`})`,
    //       };
    //     });
  
    //     const getMenuLocation = computed(() => {
    //       return 'header';
    //     });
  
    //     const router = useRouter();
    //     const route = useRoute();
  
    //     const generator: any = (routerMap) => {
    //       return routerMap.map((item) => {
    //         const currentMenu = {
    //           ...item,
    //           label: item.meta.title,
    //           key: item.name,
    //           disabled: item.path === '/',
    //         };
    //         // 是否有子菜单，并递归处理
    //         if (item.children && item.children.length > 0) {
    //           // Recursion
    //           currentMenu.children = generator(item.children, currentMenu);
    //         }
    //         return currentMenu;
    //       });
    //     };
  
    //     const breadcrumbList = computed(() => {
    //       return generator(route.matched);
    //     });
  
    //     const dropdownSelect = (key) => {
    //       router.push({ name: key });
    //     };
  
    //     // 刷新页面
    //     const reloadPage = () => {
    //       router.push({
    //         path: '/redirect' + unref(route).fullPath,
    //       });
    //     };
  
    //     // 退出登录
    //     const doLogout = () => {
    //       dialog.info({
    //         title: '提示',
    //         content: '您确定要退出登录吗',
    //         positiveText: '确定',
    //         negativeText: '取消',
    //         onPositiveClick: () => {
    //           userStore.logout().then(() => {
    //             message.success('成功退出登录');
    //             // 移除标签页
    //             localStorage.removeItem(TABS_ROUTES);
    //             router
    //               .replace({
    //                 name: 'Login',
    //                 query: {
    //                   redirect: route.fullPath,
    //                 },
    //               })
    //               .finally(() => location.reload());
    //           });
    //         },
    //         onNegativeClick: () => {},
    //       });
    //     };
  
    //     // 切换全屏图标
    //     const toggleFullscreenIcon = () =>
    //       (state.fullscreenIcon =
    //         document.fullscreenElement !== null ? 'FullscreenExitOutlined' : 'FullscreenOutlined');
  
    //     // 监听全屏切换事件
    //     document.addEventListener('fullscreenchange', toggleFullscreenIcon);
  
    //     // 全屏切换
    //     const toggleFullScreen = () => {
    //       if (!document.fullscreenElement) {
    //         document.documentElement.requestFullscreen();
    //       } else {
    //         if (document.exitFullscreen) {
    //           document.exitFullscreen();
    //         }
    //       }
    //     };
  
    //     // 图标列表
    //     const iconList = [
    //       {
    //         icon: 'SearchOutlined',
    //         tips: '搜索',
    //       },
    //       {
    //         icon: 'GithubOutlined',
    //         tips: 'github',
    //         eventObject: {
    //           click: () => window.open('https://github.com/jekip/naive-ui-admin'),
    //         },
    //       },
    //       {
    //         icon: 'LockOutlined',
    //         tips: '锁屏',
    //         eventObject: {
    //           click: () => useLockscreen.setLock(true),
    //         },
    //       },
    //     ];
    //     const avatarOptions = [
    //       {
    //         label: '个人设置',
    //         key: 1,
    //       },
    //       {
    //         label: '退出登录',
    //         key: 2,
    //       },
    //     ];
  
    //     //头像下拉菜单
    //     const avatarSelect = (key) => {
    //       switch (key) {
    //         case 1:
    //           router.push({ name: 'Setting' });
    //           break;
    //         case 2:
    //           doLogout();
    //           break;
    //       }
    //     };
  
    //     function openSetting() {
    //       const { openDrawer } = drawerSetting.value;
    //       openDrawer();
    //     }
  
    //     function handleMenuCollapsed() {
    //       emit('update:collapsed', !props.collapsed);
    //     }
  
    //     return {
    //       ...toRefs(state),
    //       iconList,
    //       toggleFullScreen,
    //       doLogout,
    //       route,
    //       dropdownSelect,
    //       avatarOptions,
    //       getChangeStyle,
    //       avatarSelect,
    //       breadcrumbList,
    //       reloadPage,
    //       drawerSetting,
    //       openSetting,
    //       getInverted,
    //       getMenuLocation,
    //       mixMenu,
    //       websiteConfig,
    //       handleMenuCollapsed,
    //     };
    //   },
    // });
  </script>
  
  <style lang="css" scoped>
  body {
    color: #ccc
  }
  </style>