<script lang="ts">
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';
	import PageLayout from '$lib/layouts/PageLayout.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';

	const faqs = [
		{
			category: 'Về GDVNPS',
			questions: [
				{
					hashLink: 'gdvnps-co-phai-la-mot-phan-chinh-thuc-cua-gd',
					question: 'GDVNPS có phải là một phần chính thức của GD?',
					answer:
						'Không, GDVNPS chỉ là một **server GDPS** và **không liên quan** gì đến Geometry Dash của RobTop Games.'
				},
				{
					hashLink: 'ai-da-tao-ra-gdvnps',
					question: 'Ai đã tạo ra GDVNPS?',
					answer:
						'GDVNPS được **tạo ra và phát triển** bởi: [vradient](https://github.com/TacoEnjoyer/), [thxhtrxn](https://github.com/thxhtrxn/) và [Lamnhiem](https://discord.com/users/751325704448376852).'
				}
			]
		},
		{
			category: 'Thông tin trong GDVNPS',
			questions: [
				{
					hashLink: 'quen-mat-khau',
					question: 'Tôi quên mật khẩu, tôi phải làm thế nào để khôi phục lại mật khẩu?',
					answer:
						'Các bạn có thể liên hệ với **Team Moderator** trên [server Discord](https://discord.gg/SmBs7xGSWM) để họ giúp đỡ bạn **đổi mật khẩu**.'
				},
				{
					hashLink: 'he-thong-rating',
					question: 'Hệ thống rating trong game',
					answer:
						'Để levels của bạn được **rated** trong GDVNPS, levels của bạn cần đạt các tiêu chí sau đây:\n\n- **Thứ nhất:** Đối với những levels để đạt được **Rated**, layout của nó phải hay, đặc biệt, có một chút visual cũng được, không nhất thiết phải trang trí nó và bạn nhận lại Rated level.\n- **Thứ hai:** Đối với những levels để đạt được **Featured**, levels của bạn cần có trang trí.\n- **Thứ ba:** Đối với những levels để đạt được **Epic**, levels của bạn cần phải có layout hay, trang chí một chút.\n- **Thứ tư:** Đối với những levels để đạt được **Legendary**, levels của bạn yêu cầu phải được trang trí đẹp.\n- **Thứ năm:** Đối với những levels để đạt được **Mythic**, đây là mức độ rate cuối cùng của game cho nên trang trí, visual và gần như mọi thứ phải đẹp và hoàn hảo.\n\n**ĐỂ LEVEL CỦA BẠN ĐƯỢC RATE, BẠN CẦN BUILD NÓ DÀI HƠN 10 GIÂY HOẶC BẰNG**\n\n\n\nNgoài các tiêu chuẩn cho từng bậc ratings riêng lẻ (từ rate đến mythic), chúng tôi có những điều cần xem xét trước khi quyết định rate, bất kể chất lượng. Những điều này bao gồm nhưng không giới hạn ở:\n\n- **Level gốc hoặc được inspired từ các level khác**: **Không khuyến khích COPY Ý TƯỞNG** dưới bất kỳ hình thức nào. Cảm hứng không nằm trong phạm vi copy ý tưởng level / ăn cắp level, mặc dù điều này tạo ra một vòng lặp ý tưởng. Các level sẽ được thực hiện theo từng trường hợp cụ thể: Các **bản remake của level gốc** và sẽ **không được rate**, nhưng các bản làm lại gốc (hoặc **bản remake của một level**) có khả năng rate nếu được.\n- **Playable Gameplay:** Tất nhiên, gameplay công bằng và fun sẽ được ưu tiên. Về mặt chủ quan, điều này tùy thuộc vào mod và elder mod có rate level hay không. Khách quan mà nói, gameplay **không nên** đầy lỗi (kể cả CBF bug) hoặc **không được** cố tình làm cho game trở nên không công bằng và/hoặc mất cân bằng. Một level có gameplay **"Krmal phiên bản người Việt"** không cải thiện được chính level của nó.'
				}
			]
		}
	];
</script>

<MetaBuilder
	title="Các Câu Hỏi Thường Gặp"
	desc="Trang trả lời các câu hỏi thường gặp (FAQ) liên quan đến GDVNPS"
/>

{#snippet headerFAQSectionText(text: string)}
	<h2
		class="mt-5 bg-gradient-to-tr from-orange-400 to-yellow-400 bg-clip-text text-left text-2xl font-bold text-transparent"
	>
		{text}
	</h2>
{/snippet}

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-14 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<h1
			class="w-full text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold lg:text-[2.81rem]/[1.2]"
		>
			<span class="text-slate-300">Các câu hỏi</span>
			<span
				class="bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
				>thường gặp</span
			>
		</h1>
	</section>
	<section class="flex items-center justify-center">
		<div class="flex w-full max-w-2xl flex-col flex-nowrap items-stretch gap-4">
			{#each faqs as { category, questions }}
				<h2 class="mt-5 text-2xl font-bold text-orange-400">{category}</h2>
				{#each questions as { hashLink, question, answer }}
					<article id={hashLink}>
						<h3>{question}</h3>
						<div class="markdown leading-[1.72]"><SvelteMarkdown source={answer} /></div>
					</article>
				{/each}
			{/each}
		</div>
	</section>
</PageLayout>

<style lang="scss">
	@reference "$lib/assets/app.css";

	* {
		@apply scroll-smooth;
	}

	article {
		h3 {
			@apply mb-1 text-xl font-semibold text-orange-400;
		}

		@apply rounded-xl bg-[#1f1e33]/50 p-5;
	}
	.markdown {
		@apply mt-2.5 border-l-4 border-amber-600 pl-5;
	}
</style>
