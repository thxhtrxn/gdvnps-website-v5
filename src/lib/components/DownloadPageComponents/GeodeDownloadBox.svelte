<script lang="ts">
	import Box from '../Box.svelte';
	import DownloadButton from './DownloadButton.svelte';
	import Icon from '../Icon.svelte';
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
		<DownloadButton
			href="https://github.com/TacoEnjoyer/gdvnps/releases/download/geode/geode-launcher-v1.4.2-gdvnps-build.apk"
			>Tải xuống</DownloadButton
		>
	</div>
</Box>
