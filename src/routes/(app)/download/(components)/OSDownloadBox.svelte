<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import type { KnownIcon } from '$lib';
	import Icon from '$lib/components/Icon.svelte';

	interface OSDownloadBoxPropsType {
		OS_name: string;
		OS_icon: KnownIcon;
		OS_downloadLink: string | undefined;
	}

	let { OS_name, OS_icon, OS_downloadLink }: OSDownloadBoxPropsType = $props();
</script>

<Box>
	<div class="flex items-center">
		<Icon icon={OS_icon} size={48} className="pr-3.5" />
		<h1 class="my-2.5 text-left text-xl font-bold text-slate-300">
			{OS_name}
		</h1>
	</div>
	<p class="pb-3.5 leading-[1.8] text-slate-300/98">
		Tải xuống GDVNPS cho <strong>{OS_name}</strong>.
	</p>
	<div>
		<DownloadButton href={OS_downloadLink}>Tải xuống</DownloadButton>
	</div>
</Box>
