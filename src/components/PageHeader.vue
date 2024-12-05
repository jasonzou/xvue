<script setup lang="ts">
import SideBarCollapse from '@/components/SideBarCollapse.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { GlobalSettings } from '@/GlobalSettings'

import { useAppConfigStore } from '@/stores/app'
import { NAvatar, NBreadcrumb, NBreadcrumbItem, NDivider, NDropdown, NGi, NGrid, NIcon, NPageHeader, NSpace, NStatistic, NTooltip } from 'naive-ui'
import { computed, defineComponent, reactive, ref, toRefs, unref } from 'vue'

import { useRoute, useRouter } from 'vue-router'

const useAppConfig = useAppConfigStore()
console.log('fdklsa')
console.log(useAppConfig.appConfig.toolbar.enableSidebarCollapse)
console.log('fdklsa')

function openSetting() {
  console.log('Open Setting')
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

<template>
  <div class="layout-header">
    <!-- 顶部菜单 -->

    <!-- 左侧菜单 -->
    <div class="layout-header-left">
      <!-- 菜单收起 -->
      <div class="layout-header-trigger layout-header-trigger-min ml-1" @click="handleMenuCollapsed">
        <SideBarCollapse v-if="useAppConfig.appConfig.toolbar.enableSidebarCollapse" class="mr-2" />
      </div>
      <!-- 刷新 -->
      <div class="layout-header-trigger layout-header-trigger-min mr-1" @click="reloadPage">
        <NIcon size="18">
          <ReloadOutlined />
        </NIcon>
      </div>
      <!-- 面包屑 -->
      <NBreadcrumb>
        <template v-for="routeItem in breadcrumbList" :key="routeItem.name === 'Redirect' ? void 0 : routeItem.name">
          <NBreadcrumbItem v-if="routeItem.meta.title">
            <NDropdown v-if="routeItem.children.length" :options="routeItem.children" @select="dropdownSelect">
              <span class="link-text">
                <component :is="routeItem.meta.icon" v-if="crumbsSetting.showIcon && routeItem.meta.icon" />
                {{ routeItem.meta.title }}
              </span>
            </NDropdown>
            <span v-else class="link-text">
              <component :is="routeItem.meta.icon" v-if="crumbsSetting.showIcon && routeItem.meta.icon" />
              {{ routeItem.meta.title }}
            </span>
          </NBreadcrumbItem>
        </template>
      </NBreadcrumb>
    </div>
    <div class="layout-header-right">
      <div v-for="item in iconList" :key="item.icon" class="layout-header-trigger layout-header-trigger-min">
        <NTooltip placement="bottom">
          <template #trigger>
            <NIcon size="18">
              <component :is="item.icon" v-on="item.eventObject || {}" />
            </NIcon>
          </template>
          <span>{{ item.tips }}</span>
        </NTooltip>
      </div>
      <!-- 切换全屏 -->
      <div class="layout-header-trigger layout-header-trigger-min">
        <NTooltip placement="bottom">
          <template #trigger>
            <NIcon size="18">
              <component :is="fullscreenIcon" @click="toggleFullScreen" />
            </NIcon>
          </template>
          <span>全屏</span>
        </NTooltip>
      </div>
      <!-- 个人中心 -->
      <div class="layout-header-trigger layout-header-trigger-min">
        <NDropdown trigger="hover" :options="avatarOptions" @select="avatarSelect">
          <div class="avatar">
            <NAvatar :src="GlobalSettings.logo">
              <template #icon>
                <UserOutlined />
              </template>
            </NAvatar>
            <NDivider vertical />
            <span>{{ username }}</span>
          </div>
        </NDropdown>
      </div>
      <!-- 设置 -->
      <div class="layout-header-trigger layout-header-trigger-min" @click="openSetting">
        <NTooltip placement="bottom-end">
          <template #trigger>
            <NIcon size="18" style="font-weight: bold">
              <SettingOutlined />
            </NIcon>
          </template>
          <span>项目配置</span>
        </NTooltip>
      </div>
    </div>
  </div>
  <!-- 项目配置 -->
  <ProjectSetting ref="drawerSetting" />
  <NPageHeader subtitle="A podcast to improve designs" @back="handleBack">
    <NGrid :cols="5">
      <NGi>
        <NStatistic label="Episodes" value="125" />
      </NGi>
      <NGi>
        <NStatistic label="Guests" value="22" />
      </NGi>
      <NGi>
        <NStatistic label="Apologies" value="36" />
      </NGi>
      <NGi>
        <NStatistic label="Topics" value="83" />
      </NGi>
      <NGi>
        <NStatistic label="Reference Links" value="2,346" />
      </NGi>
    </NGrid>
    <template #title>
      <a href="https://anyway.fm/" style="text-decoration: none; color: inherit">
        Anyway.FM
      </a>
    </template>
    <template #header>
      <NBreadcrumb>
        <NBreadcrumbItem>Podcast</NBreadcrumbItem>
        <NBreadcrumbItem>Best Collection</NBreadcrumbItem>
        <NBreadcrumbItem>Ultimate Best Collection</NBreadcrumbItem>
        <NBreadcrumbItem>Anyway.FM</NBreadcrumbItem>
      </NBreadcrumb>
    </template>
    <template #avatar>
      <NAvatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
    </template>
    <template #extra>
      <NSpace>
        <n-button>Refresh</n-button>
        <NDropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            ···
          </n-button>
        </NDropdown>
      </NSpace>
    </template>
    <template #footer>
      As of April 3, 2021
    </template>
  </NPageHeader>
</template>

  <style lang="css" scoped>
  body {
  color: #ccc;
}
</style>
