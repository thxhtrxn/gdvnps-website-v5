<script lang="ts">
	import { dashboardLink } from '$lib';
</script>

<svelte:head>
	<meta http-equiv="refresh" content={`0; url=${dashboardLink}`} />
</svelte:head>

<p>
	Đang chuyển hướng bạn đến Dashboard của GDVNPS. Nếu có sự cố, hãy bấm vào link này: <a
		href={dashboardLink}>{dashboardLink}</a
	>
</p>
