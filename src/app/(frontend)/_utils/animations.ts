export const animations = {
	fadeScaleUp: {
		initial: { y: "48px", opacity: 0, scale: 0.9 },
		animate: { y: "0", opacity: 1, scale: 1 },
		exit: { y: "48px", opacity: 0, scale: 0.9 },
	},
	slideFromLeft: {
		initial: { marginLeft: "-60px" },
		animate: { marginLeft: "0px" },
		exit: { marginLeft: "-60px" },
	},
}
