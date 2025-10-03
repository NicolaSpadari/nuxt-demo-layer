export default defineAppConfig({
	ui: {
		colors: {
			primary: "petrol-blue",
			secondary: "sky",
			support: "warm-gray",
			burgundy: "burgundy",
			lemon: "lemon",
			info: "info",
			success: "success",
			warning: "warning",
			error: "error",
		},
		input: {
			slots: {
				root: "w-full"
			}
		},
		select: {
			slots: {
				base: "w-full"
			}
		},
		tabs: {
			slots: {
				trigger: "flex-1"
			}
		},
		button: {
			slots: {
				base: "cursor-pointer"
			},
			compoundVariants: [
				{
					color: "secondary",
					variant: "solid",
					class: "text-secondary-900 bg-secondary-200"
				}
			]
		}
	}
});
