<script lang="ts">
	let { avatar }: { avatar: string | null } = $props();
	let accountDropdownOpened = $state(false);
	let mobileMenuOpened = $state(false);
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<button
						onclick={() => (mobileMenuOpened = !mobileMenuOpened)}
						type="button"
						class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
						aria-controls="mobile-menu"
						aria-expanded="false"
					>
						<span class="absolute -inset-0.5"></span>
						<span class="sr-only">Open main menu</span>
						<!--
                Icon when menu is closed.
  
                Menu open: "hidden", Menu closed: "block"
              -->
						<svg
							class="block size-6"
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
						<!--
                Icon when menu is open.
  
                Menu open: "block", Menu closed: "hidden"
              -->
						<svg
							class="hidden size-6"
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
				<div class="flex shrink-0 items-center">
					<img
						class="h-8 w-auto"
						src="/images/logo.svg"
						alt="Your Company"
					/>
				</div>
				<div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
					<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
					<!-- <a
						href="#"
						class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
						aria-current="page">Dashboard</a
					>
					<a
						href="#"
						class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
						>Team</a
					> -->
				</div>
			</div>
			<div class="flex items-center">
				<div class="shrink-0">
					<button
						type="button"
						class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
					>
						<svg
							class="-ml-0.5 size-5"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-slot="icon"
						>
							<path
								d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
							/>
						</svg>
						New Note
					</button>
				</div>
				<div class="hidden md:ml-4 md:flex md:shrink-0 md:items-center">
					
					<!-- Notification -->
					<!-- <button
						type="button"
						class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					>
						<span class="absolute -inset-1.5"></span>
						<span class="sr-only">View notifications</span>
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
								d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
							/>
						</svg>
					</button> -->

					<!-- Profile dropdown -->
					<div class="relative ml-3">
						<div>
							<button
								onclick={() => (accountDropdownOpened = !accountDropdownOpened)}
								type="button"
								class="relative flex rounded-full bg-gray-800 text-sm
								{/* This is because I'm not able to get icon in full cirlce and hence the ring was being in ellipse shape */ avatar
									? 'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
									: ''}"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="absolute -inset-1.5"></span>
								<span class="sr-only">Open user menu</span>
								{#if avatar}
									<img class="size-8 rounded-full" src={avatar} alt="" />
								{:else}
									<div class="rounded-full">
										<i class=" text-gray-400 p-1 text-2xl bi bi-person-circle"></i>
									</div>
								{/if}
							</button>
						</div>

						<!--
                Dropdown menu, show/hide based on menu state.
  
                Entering: "transition ease-out duration-200"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
						{#if accountDropdownOpened}
							<div
								class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
							>
								<!-- Active: "bg-gray-100 outline-none", Not Active: "" -->
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Your Profile</a
								>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1">Settings</a
								>
								<a
									href="#"
									class="block px-4 py-2 text-sm text-gray-700"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-2">Sign out</a
								>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	 {#if mobileMenuOpened}
	<div class="md:hidden" id="mobile-menu">
		<div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
			<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
			<!-- <a
				href="#"
				class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
				aria-current="page">Dashboard</a
			>
			<a
				href="#"
				class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
				>Team</a
			> -->
		</div>
		<div class="border-t border-gray-700 pb-3 pt-4">
			<div class="flex items-center px-5 sm:px-6">
				<!-- Account -->
				<div onclick={accountDropdownOpened = !accountDropdownOpened} class="shrink-0">
					{#if avatar}
					<img
						class="size-10 rounded-full"
						src={avatar}
						alt=""
					/>
					{/if}
					
				</div>
				<div class="ml-3">
					<div class="text-base font-medium text-white">Tom Cook</div>
					<div class="text-sm font-medium text-gray-400">tom@example.com</div>
				</div>
				<!-- View notifications -->
				<!-- <button
					type="button"
					class="relative ml-auto shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				>
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">View notifications</span>
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
							d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
						/>
					</svg>
				</button> -->
			</div>
			{#if accountDropdownOpened}
				<div class="mt-3 space-y-1 px-2 sm:px-3">
					<a
						href="#"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						>Your Profile</a
					>
					<a
						href="#"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						>Settings</a
					>
					<a
						href="#"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
						>Sign out</a
					>
				</div>
			{/if}
		</div>
	</div>
	{/if}
</nav>
