<script lang="ts">
	import { discordLink } from '$lib';
</script>

<svelte:head>
	<meta http-equiv="refresh" content={`0; url=${discordLink}`} />
</svelte:head>
<p>
	Đang chuyển hướng bạn đến server Discord của GDVNPS. Nếu có sự cố, hãy bấm vào link này: <a
		href={discordLink}>{discordLink}</a
	>
</p>
