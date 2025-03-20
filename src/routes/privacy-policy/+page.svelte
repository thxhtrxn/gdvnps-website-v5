<script lang="ts">
	import PageLayout from '$lib/layouts/PageLayout.svelte';
	import MetaBuilder from '$lib/utils/MetaBuilder.svelte';

	import BlurLightFilter from '$lib/components/BlurLightFilter.svelte';
</script>

<MetaBuilder title="Chính sách bảo mật" desc="Chính sách bảo mật của GDVNPS" />

<BlurLightFilter />
<PageLayout>
	<section
		class="mx-auto mt-14 mb-1 flex w-full flex-col items-center justify-center gap-5 px-3.5 sm:max-w-screen-md sm:px-7 md:mt-16 md:gap-6 lg:mt-20 lg:gap-7"
	>
		<h1
			class="w-full bg-gradient-to-tr from-red-500/95 via-orange-500 to-yellow-500 bg-clip-text text-center font-(family-name:--font-be-vn-pro) text-4xl/[1.2] font-extrabold text-transparent lg:text-[2.81rem]/[1.2]"
		>
			Chính sách bảo mật
		</h1>
		<p
			class="z-30 text-center text-base leading-[1.85] font-normal tracking-wide text-slate-300/90 lg:text-lg"
		>
			Cập nhật lần cuối 19/2/2025 (dd/mm/yyyy)
		</p>
		<section>
			<section class="mt-3">
				<h2 class="pt-12 text-4xl font-bold text-slate-300">Thông tin chúng tôi thu thập</h2>
				<p class="mt-2.5 text-base leading-[1.75] text-slate-300">
					Chúng tôi có thể thu thập thông tin cá nhân như tên, địa chỉ email và bất kỳ thông tin nào
					khác mà bạn tự nguyện cung cấp khi đăng ký nhận bản tin, tham gia thảo luận hoặc liên hệ
					với chúng tôi qua trang web của chúng tôi.
				</p>
				<h2 class="pt-12 text-4xl font-bold text-slate-300">
					Chúng tôi sử dụng thông tin của bạn như thế nào
				</h2>
				<p class="mt-2.5 text-base leading-[1.75] text-slate-300">
					Thông tin chúng tôi thu thập được sử dụng để cải thiện trang web của chúng tôi, trả lời
					các câu hỏi của bạn, gửi cho bạn các bản cập nhật và cung cấp trải nghiệm được cá nhân
					hóa. Chúng tôi không chia sẻ thông tin của bạn với bên thứ ba trừ khi cần thiết để cung
					cấp dịch vụ của chúng tôi hoặc theo yêu cầu của pháp luật.
				</p>
			</section>
		</section>
	</section></PageLayout
>
