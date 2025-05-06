<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import Icon from '$lib/components/Icon.svelte';

	import { GEODE_DOWNLOAD_URL_ANDROID } from '$lib';
</script>

<Box>
	<div class="flex items-center">
		<Icon icon="android" size={48} className="pr-3.5" />
		<h1 class="my-2.5 text-left text-xl font-bold text-slate-300">Geode cho Android</h1>
	</div>
	<p class="pb-3.5 leading-[1.8] text-slate-300/98">
		Tải xuống Geode cho <strong>Android</strong>.
	</p>
	<div>
		<DownloadButton href={GEODE_DOWNLOAD_URL_ANDROID}>Tải xuống</DownloadButton>
	</div>
</Box>
