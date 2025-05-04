<script lang="ts">
	import { browserLink } from '$lib';
</script>

<svelte:head>
	<meta http-equiv="refresh" content={`0; url=${browserLink}`} />
</svelte:head>

<p>
	Đang chuyển hướng bạn đến Browser của GDVNPS. Nếu có sự cố, hãy bấm vào link này: <a
		href={browserLink}>{browserLink}</a
	>
</p>
