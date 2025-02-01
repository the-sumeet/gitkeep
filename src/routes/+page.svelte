<script>
	let sidebarOpened = $state(false);
</script>

<div class="bg-white">
	<!-- Header -->
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img class="h-8 w-auto" src="/images/logo.svg" alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					onclick={() => (sidebarOpened = true)}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>
			<!--			<div class="hidden lg:flex lg:gap-x-12">-->
			<!--				<a href="#" class="text-sm/6 font-semibold text-gray-900">Product</a>-->
			<!--				<a href="#" class="text-sm/6 font-semibold text-gray-900">Features</a>-->
			<!--				<a href="#" class="text-sm/6 font-semibold text-gray-900">Marketplace</a>-->
			<!--				<a href="#" class="text-sm/6 font-semibold text-gray-900">Company</a>-->
			<!--			</div>-->
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">
				<a href="/token" class="text-sm/6 font-semibold text-gray-900"
					>Log in <span aria-hidden="true">&rarr;</span></a
				>
			</div>
		</nav>

		{#if sidebarOpened}
			<!-- Mobile menu, show/hide based on menu open state. -->
			<div class="lg:hidden" role="dialog" aria-modal="true">
				<!-- Background backdrop, show/hide based on slide-over state. -->
				<div class="fixed inset-0 z-50"></div>
				<div
					class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				>
					<div class="flex items-center justify-between">
						<a href="#" class="-m-1.5 p-1.5">
							<span class="sr-only">Your Company</span>
							<img class="h-8 w-auto" src="/images/logo.svg" alt="" />
						</a>
						<button
							onclick={() => (sidebarOpened = false)}
							type="button"
							class="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span class="sr-only">Close menu</span>
							<svg
								class="size-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="mt-6 flow-root">
						<div class="-my-6 divide-y divide-gray-500/10">
							<!--							<div class="space-y-2 py-6">-->
							<!--								<a-->
							<!--									href="#"-->
							<!--									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"-->
							<!--									>Product</a-->
							<!--								>-->
							<!--								<a-->
							<!--									href="#"-->
							<!--									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"-->
							<!--									>Features</a-->
							<!--								>-->
							<!--								<a-->
							<!--									href="#"-->
							<!--									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"-->
							<!--									>Marketplace</a-->
							<!--								>-->
							<!--								<a-->
							<!--									href="#"-->
							<!--									class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"-->
							<!--									>Company</a-->
							<!--								>-->
							<!--							</div>-->
							<div class="py-6">
								<a
									href="/token"
									class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
									>Log in</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<main class="isolate">
		<!-- Hero section -->
		<div class="relative pt-14">
			<div
				class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
			<div class="py-24 sm:py-32 lg:pb-40">
				<div class="mx-auto max-w-7xl px-6 lg:px-8">
					<div class="mx-auto max-w-2xl text-center">
						<div class="mx-auto flex justify-center w-full mb-4">
							<a
								href="https://www.producthunt.com/posts/markbook-2?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-markbook&#0045;2"
								target="_blank"
								><img
									src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=827981&theme=light&t=1738384038212"
									alt="MarkBook - Simplest&#0032;markdown&#0032;based&#0032;notes&#0032;app | Product Hunt"
									style="width: 250px; height: 54px;"
									width="250"
									height="54"
								/></a
							>
						</div>

						<h1
							class="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl"
						>
							Simplest Markdown Notes App
						</h1>
						<p class="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
							GitHub as storage, Markdown based, open-source note taking app
						</p>
						<div class="mt-10 flex items-center justify-center gap-x-6">
							<a
								href="/token"
								class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>Log In</a
							>
							<!--							<a href="#" class="text-sm/6 font-semibold text-gray-900"-->
							<!--								>Learn more <span aria-hidden="true">→</span></a-->
							<!--							>-->
						</div>
					</div>
					<div class="mt-16 flow-root sm:mt-24">
						<div
							class="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"
						>
							<img
								src="screenshot.png"
								alt="App screenshot"
								width="2432"
								height="1442"
								class="rounded-md shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
				></div>
			</div>
		</div>

		<!-- Logo cloud -->
		<!--		<div class="mx-auto max-w-7xl px-6 lg:px-8">-->
		<!--			<div-->
		<!--				class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5"-->
		<!--			>-->
		<!--				<img-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"-->
		<!--					alt="Transistor"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"-->
		<!--					alt="Reform"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"-->
		<!--					src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"-->
		<!--					alt="Tuple"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"-->
		<!--					src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"-->
		<!--					alt="SavvyCal"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--				<img-->
		<!--					class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"-->
		<!--					src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"-->
		<!--					alt="Statamic"-->
		<!--					width="158"-->
		<!--					height="48"-->
		<!--				/>-->
		<!--			</div>-->
		<!--			<div class="mt-16 flex justify-center">-->
		<!--				<p-->
		<!--					class="relative rounded-full px-4 py-1.5 text-sm/6 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20"-->
		<!--				>-->
		<!--					<span class="hidden md:inline"-->
		<!--						>Transistor saves up to $40,000 per year, per employee by working with us.</span-->
		<!--					>-->
		<!--					<a href="#" class="font-semibold text-indigo-600"-->
		<!--						><span class="absolute inset-0" aria-hidden="true"></span> Read our case study-->
		<!--						<span aria-hidden="true">&rarr;</span></a-->
		<!--					>-->
		<!--				</p>-->
		<!--			</div>-->
		<!--		</div>-->

		<!-- Feature section -->
		<div class="mx-auto 16 max-w-7xl px-6 sm:32 lg:px-8">
			<div class="mx-auto max-w-2xl lg:text-center">
				<!--				<h2 class="text-base/7 font-semibold text-indigo-600">Deploy faster</h2>-->
				<p
					class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
				>
					Everything you need in note taking app
				</p>
				<!--				<p class="mt-6 text-pretty text-lg/8 text-gray-600">-->
				<!--					Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas-->
				<!--					a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.-->
				<!--				</p>-->
			</div>
			<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
				<dl
					class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
				>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white bi bi-github"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path
										d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
									/>
								</svg>
							</div>
							Sync with GitHub
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Notes are stores as files on Private or Public GitHub repository. So, no additional
							cloud requied.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="size-6 text-white bi bi-file-earmark-code"
									viewBox="0 0 16 16"
								>
									<path
										d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
									/>
									<path
										d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"
									/>
								</svg>
							</div>
							OpenSource
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							Source code is available on GitHub. You can host your own instance or contribute to
							the project.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="size-6 text-white bi bi-markdown"
									viewBox="0 0 16 16"
								>
									<path
										d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"
									/>
									<path
										fill-rule="evenodd"
										d="M9.146 8.146a.5.5 0 0 1 .708 0L11.5 9.793l1.646-1.647a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 0-.708"
									/>
									<path
										fill-rule="evenodd"
										d="M11.5 5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5"
									/>
									<path
										d="M3.56 11V7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11z"
									/>
								</svg>
							</div>
							Markdown Support
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							No new proprietary format. Just write in Markdown and sync with GitHub.
						</dd>
					</div>
					<div class="relative pl-16">
						<dt class="text-base/7 font-semibold text-gray-900">
							<div
								class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600"
							>
								<svg
									class="size-6 text-white"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
									data-slot="icon"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33"
									/>
								</svg>
							</div>
							Free
						</dt>
						<dd class="mt-2 text-base/7 text-gray-600">
							No hidden charges. No subscription. No ads. Just use it.
						</dd>
					</div>
				</dl>
			</div>
		</div>

		<!-- Testimonial section -->
		<!--		<div class="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">-->
		<!--			<div-->
		<!--				class="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20"-->
		<!--			>-->
		<!--				<img-->
		<!--					class="absolute inset-0 size-full object-cover brightness-150 saturate-0"-->
		<!--					src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80"-->
		<!--					alt=""-->
		<!--				/>-->
		<!--				<div class="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>-->
		<!--				<div class="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">-->
		<!--					<div-->
		<!--						class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]"-->
		<!--						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"-->
		<!--					></div>-->
		<!--				</div>-->
		<!--				<div-->
		<!--					class="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"-->
		<!--					aria-hidden="true"-->
		<!--				>-->
		<!--					<div-->
		<!--						class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25"-->
		<!--						style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"-->
		<!--					></div>-->
		<!--				</div>-->
		<!--				<div class="relative mx-auto max-w-2xl lg:mx-0">-->
		<!--					<img-->
		<!--						class="h-12 w-auto"-->
		<!--						src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg"-->
		<!--						alt=""-->
		<!--					/>-->
		<!--					<figure>-->
		<!--						<blockquote class="mt-6 text-lg font-semibold text-white sm:text-xl/8">-->
		<!--							<p>-->
		<!--								“Amet amet eget scelerisque tellus sit neque faucibus non eleifend. Integer eu-->
		<!--								praesent at a. Ornare arcu gravida natoque erat et cursus tortor consequat at.-->
		<!--								Vulputate gravida sociis enim nullam ultricies habitant malesuada lorem ac.”-->
		<!--							</p>-->
		<!--						</blockquote>-->
		<!--						<figcaption class="mt-6 text-base text-white">-->
		<!--							<div class="font-semibold">Judith Black</div>-->
		<!--							<div class="mt-1">CEO of Tuple</div>-->
		<!--						</figcaption>-->
		<!--					</figure>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</div>-->

		<!-- Pricing section -->
		<!--		<div class="py-24 sm:pt-48">-->
		<!--			<div class="mx-auto max-w-7xl px-6 lg:px-8">-->
		<!--				<div class="mx-auto max-w-2xl lg:text-center">-->
		<!--					<h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>-->
		<!--					<p-->
		<!--						class="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"-->
		<!--					>-->
		<!--						Pricing that grows with you-->
		<!--					</p>-->
		<!--					<p class="mt-6 text-pretty text-lg/8 text-gray-600">-->
		<!--						Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget-->
		<!--						egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.-->
		<!--					</p>-->
		<!--				</div>-->
		<!--				<div-->
		<!--					class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"-->
		<!--				>-->
		<!--					<div-->
		<!--						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-r-none xl:p-10"-->
		<!--					>-->
		<!--						<div>-->
		<!--							<div class="flex items-center justify-between gap-x-4">-->
		<!--								<h3 id="tier-freelancer" class="text-lg/8 font-semibold text-gray-900">-->
		<!--									Freelancer-->
		<!--								</h3>-->
		<!--							</div>-->
		<!--							<p class="mt-4 text-sm/6 text-gray-600">-->
		<!--								The essentials to provide your best work for clients.-->
		<!--							</p>-->
		<!--							<p class="mt-6 flex items-baseline gap-x-1">-->
		<!--								<span class="text-4xl font-semibold tracking-tight text-gray-900">$19</span>-->
		<!--								<span class="text-sm/6 font-semibold text-gray-600">/month</span>-->
		<!--							</p>-->
		<!--							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									5 products-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Up to 1,000 subscribers-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Basic analytics-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									48-hour support response time-->
		<!--								</li>-->
		<!--							</ul>-->
		<!--						</div>-->
		<!--						<a-->
		<!--							href="#"-->
		<!--							aria-describedby="tier-freelancer"-->
		<!--							class="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--							>Buy plan</a-->
		<!--						>-->
		<!--					</div>-->
		<!--					<div-->
		<!--						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:z-10 lg:rounded-b-none xl:p-10"-->
		<!--					>-->
		<!--						<div>-->
		<!--							<div class="flex items-center justify-between gap-x-4">-->
		<!--								<h3 id="tier-startup" class="text-lg/8 font-semibold text-indigo-600">Startup</h3>-->
		<!--								<p-->
		<!--									class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600"-->
		<!--								>-->
		<!--									Most popular-->
		<!--								</p>-->
		<!--							</div>-->
		<!--							<p class="mt-4 text-sm/6 text-gray-600">-->
		<!--								A plan that scales with your rapidly growing business.-->
		<!--							</p>-->
		<!--							<p class="mt-6 flex items-baseline gap-x-1">-->
		<!--								<span class="text-4xl font-semibold tracking-tight text-gray-900">$49</span>-->
		<!--								<span class="text-sm/6 font-semibold text-gray-600">/month</span>-->
		<!--							</p>-->
		<!--							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									25 products-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Up to 10,000 subscribers-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Advanced analytics-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									24-hour support response time-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Marketing automations-->
		<!--								</li>-->
		<!--							</ul>-->
		<!--						</div>-->
		<!--						<a-->
		<!--							href="#"-->
		<!--							aria-describedby="tier-startup"-->
		<!--							class="mt-8 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--							>Buy plan</a-->
		<!--						>-->
		<!--					</div>-->
		<!--					<div-->
		<!--						class="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 lg:mt-8 lg:rounded-l-none xl:p-10"-->
		<!--					>-->
		<!--						<div>-->
		<!--							<div class="flex items-center justify-between gap-x-4">-->
		<!--								<h3 id="tier-enterprise" class="text-lg/8 font-semibold text-gray-900">-->
		<!--									Enterprise-->
		<!--								</h3>-->
		<!--							</div>-->
		<!--							<p class="mt-4 text-sm/6 text-gray-600">-->
		<!--								Dedicated support and infrastructure for your company.-->
		<!--							</p>-->
		<!--							<p class="mt-6 flex items-baseline gap-x-1">-->
		<!--								<span class="text-4xl font-semibold tracking-tight text-gray-900">$99</span>-->
		<!--								<span class="text-sm/6 font-semibold text-gray-600">/month</span>-->
		<!--							</p>-->
		<!--							<ul role="list" class="mt-8 space-y-3 text-sm/6 text-gray-600">-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Unlimited products-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Unlimited subscribers-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Advanced analytics-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									1-hour, dedicated support response time-->
		<!--								</li>-->
		<!--								<li class="flex gap-x-3">-->
		<!--									<svg-->
		<!--										class="h-6 w-5 flex-none text-indigo-600"-->
		<!--										viewBox="0 0 20 20"-->
		<!--										fill="currentColor"-->
		<!--										aria-hidden="true"-->
		<!--										data-slot="icon"-->
		<!--									>-->
		<!--										<path-->
		<!--											fill-rule="evenodd"-->
		<!--											d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"-->
		<!--											clip-rule="evenodd"-->
		<!--										/>-->
		<!--									</svg>-->
		<!--									Marketing automations-->
		<!--								</li>-->
		<!--							</ul>-->
		<!--						</div>-->
		<!--						<a-->
		<!--							href="#"-->
		<!--							aria-describedby="tier-enterprise"-->
		<!--							class="mt-8 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--							>Buy plan</a-->
		<!--						>-->
		<!--					</div>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</div>-->

		<!-- FAQs -->
		<!--		<div-->
		<!--			class="mx-auto max-w-2xl divide-y divide-gray-900/10 px-6 pb-8 sm:pb-24 sm:pt-12 lg:max-w-7xl lg:px-8 lg:pb-32"-->
		<!--		>-->
		<!--			<h2 class="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">-->
		<!--				Frequently asked questions-->
		<!--			</h2>-->
		<!--			<dl class="mt-10 space-y-8 divide-y divide-gray-900/10">-->
		<!--				<div class="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">-->
		<!--					<dt class="text-base/7 font-semibold text-gray-900 lg:col-span-5">-->
		<!--						What&#039;s the best thing about Switzerland?-->
		<!--					</dt>-->
		<!--					<dd class="mt-4 lg:col-span-7 lg:mt-0">-->
		<!--						<p class="text-base/7 text-gray-600">-->
		<!--							I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur-->
		<!--							adipisicing elit. Quas cupiditate laboriosam fugiat.-->
		<!--						</p>-->
		<!--					</dd>-->
		<!--				</div>-->

		<!--				&lt;!&ndash; More questions... &ndash;&gt;-->
		<!--			</dl>-->
		<!--		</div>-->

		<!-- CTA section -->
		<!--		<div class="relative -z-10 mt-32 px-6 lg:px-8">-->
		<!--			<div-->
		<!--				class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 transform-gpu justify-center overflow-hidden blur-3xl sm:bottom-0 sm:right-[calc(50%-6rem)] sm:top-auto sm:translate-y-0 sm:transform-gpu sm:justify-end"-->
		<!--				aria-hidden="true"-->
		<!--			>-->
		<!--				<div-->
		<!--					class="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-25"-->
		<!--					style="clip-path: polygon(73.6% 48.6%, 91.7% 88.5%, 100% 53.9%, 97.4% 18.1%, 92.5% 15.4%, 75.7% 36.3%, 55.3% 52.8%, 46.5% 50.9%, 45% 37.4%, 50.3% 13.1%, 21.3% 36.2%, 0.1% 0.1%, 5.4% 49.1%, 21.4% 36.4%, 58.9% 100%, 73.6% 48.6%)"-->
		<!--				></div>-->
		<!--			</div>-->
		<!--			<div class="mx-auto max-w-2xl text-center">-->
		<!--				<h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">-->
		<!--					Boost your productivity. Start using our app today.-->
		<!--				</h2>-->
		<!--				<p class="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600">-->
		<!--					Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua-->
		<!--					proident excepteur commodo do ea.-->
		<!--				</p>-->
		<!--				<div class="mt-10 flex items-center justify-center gap-x-6">-->
		<!--					<a-->
		<!--						href="#"-->
		<!--						class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"-->
		<!--						>Get started</a-->
		<!--					>-->
		<!--					<a href="#" class="text-sm/6 font-semibold text-gray-900"-->
		<!--						>Learn more <span aria-hidden="true">→</span></a-->
		<!--					>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--			<div-->
		<!--				class="absolute left-1/2 right-0 top-full -z-10 hidden -translate-y-1/2 transform-gpu overflow-hidden blur-3xl sm:block"-->
		<!--				aria-hidden="true"-->
		<!--			>-->
		<!--				<div-->
		<!--					class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"-->
		<!--					style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"-->
		<!--				></div>-->
		<!--			</div>-->
		<!--		</div>-->
	</main>

	<!-- Footer -->
	<!--	<footer class="relative mx-auto mt-32 max-w-7xl px-6 lg:px-8">-->
	<!--		<div class="border-t border-gray-900/10 py-16 sm:py-24 lg:py-32">-->
	<!--			<div class="xl:grid xl:grid-cols-3 xl:gap-8">-->
	<!--				<img-->
	<!--					class="h-9"-->
	<!--					src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"-->
	<!--					alt="Company name"-->
	<!--				/>-->
	<!--				<div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">-->
	<!--					<div class="md:grid md:grid-cols-2 md:gap-8">-->
	<!--						<div>-->
	<!--							<h3 class="text-sm/6 font-semibold text-gray-900">Solutions</h3>-->
	<!--							<ul role="list" class="mt-6 space-y-4">-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Hosting</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Data services</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"-->
	<!--										>Uptime monitoring</a-->
	<!--									>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"-->
	<!--										>Enterprise services</a-->
	<!--									>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Analytics</a>-->
	<!--								</li>-->
	<!--							</ul>-->
	<!--						</div>-->
	<!--						<div class="mt-10 md:mt-0">-->
	<!--							<h3 class="text-sm/6 font-semibold text-gray-900">Support</h3>-->
	<!--							<ul role="list" class="mt-6 space-y-4">-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Submit ticket</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Documentation</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Guides</a>-->
	<!--								</li>-->
	<!--							</ul>-->
	<!--						</div>-->
	<!--					</div>-->
	<!--					<div class="md:grid md:grid-cols-2 md:gap-8">-->
	<!--						<div>-->
	<!--							<h3 class="text-sm/6 font-semibold text-gray-900">Company</h3>-->
	<!--							<ul role="list" class="mt-6 space-y-4">-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">About</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Blog</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Jobs</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Press</a>-->
	<!--								</li>-->
	<!--							</ul>-->
	<!--						</div>-->
	<!--						<div class="mt-10 md:mt-0">-->
	<!--							<h3 class="text-sm/6 font-semibold text-gray-900">Legal</h3>-->
	<!--							<ul role="list" class="mt-6 space-y-4">-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900"-->
	<!--										>Terms of service</a-->
	<!--									>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">Privacy policy</a>-->
	<!--								</li>-->
	<!--								<li>-->
	<!--									<a href="#" class="text-sm/6 text-gray-600 hover:text-gray-900">License</a>-->
	<!--								</li>-->
	<!--							</ul>-->
	<!--						</div>-->
	<!--					</div>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</footer>-->

	<footer class="bg-white">
		<div class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
			<!--			<div class="flex justify-center gap-x-6 md:order-2">-->
			<!--				<a href="#" class="text-gray-600 hover:text-gray-800">-->
			<!--					<span class="sr-only">Facebook</span>-->
			<!--					<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
			<!--						<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />-->
			<!--					</svg>-->
			<!--				</a>-->
			<!--				<a href="#" class="text-gray-600 hover:text-gray-800">-->
			<!--					<span class="sr-only">Instagram</span>-->
			<!--					<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
			<!--						<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />-->
			<!--					</svg>-->
			<!--				</a>-->
			<!--				<a href="#" class="text-gray-600 hover:text-gray-800">-->
			<!--					<span class="sr-only">X</span>-->
			<!--					<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
			<!--						<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />-->
			<!--					</svg>-->
			<!--				</a>-->
			<!--				<a href="#" class="text-gray-600 hover:text-gray-800">-->
			<!--					<span class="sr-only">GitHub</span>-->
			<!--					<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
			<!--						<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />-->
			<!--					</svg>-->
			<!--				</a>-->
			<!--				<a href="#" class="text-gray-600 hover:text-gray-800">-->
			<!--					<span class="sr-only">YouTube</span>-->
			<!--					<svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">-->
			<!--						<path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />-->
			<!--					</svg>-->
			<!--				</a>-->
			<!--			</div>-->
			<p class="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
				&copy; 2025 MarkBook, Inc. All rights reserved.
			</p>
		</div>
	</footer>
</div>
