<!-- 多级嵌套菜单 -->
<template>
	<template v-for="val in chils">
		<a-sub-menu :index="val.path" :key="val.path" v-if="val.children && val.children.length > 0">
			<!-- <template #icon>
        <MailOutlined />
			</template>-->
			<template #title>{{val.meta.title}}</template>
			<sub-item :chil="val.children" />
		</a-sub-menu>
		<template v-else>
			<a-menu-item :index="val.path" :key="val.path">
				<router-link :to="val.path">{{val.meta.title}}</router-link>
			</a-menu-item>
		</template>
	</template>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
export default defineComponent({
	name: 'navMenuSubItem',
	props: {
		chil: {
			type: Array,
			default: () => [],
		},
	},
	setup(props) {
		// 获取父级菜单数据
		const chils = computed(() => {
			return <any>props.chil;
		});
		return {
			chils,
		};
	},
});
</script>
