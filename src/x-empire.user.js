// ==UserScript==
// @name         X Empire [SmartBot]
// @namespace    https://smartbot.black/
// @version      1.1.0
// @description  Bot for playing x-empire in telegram
// @author       Smartbot Team
// @match        https://game.muskempire.io/*
// @icon         https://game.muskempire.io/favicon-32x32.png
// @grant        none
// ==/UserScript==

(async () => {
	const fakeUserAgent =
		"Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1";

	const fakeUserAgentData = {
		brands: [
			{ brand: "Apple", version: "14" },
			{ brand: "Safari", version: "604.1" },
		],
		mobile: true,
		platform: "iOS",
	};

	Object.defineProperty(navigator, "userAgent", {
		get: () => fakeUserAgent,
	});

	Object.defineProperty(navigator, "userAgentData", {
		get: () => fakeUserAgentData,
	});

	Object.defineProperty(navigator, "platform", {
		get: () => "iPhone",
	});

	const getEnergy = () =>
		Number.parseInt(
			document
				.querySelector(".battery")
				?.nextSibling?.innerText?.replace(",", "") ?? 1000,
		);

	const getRandomInt = (min, max) =>
		Math.floor(Math.random() * (max - min + 1)) + min;

	const emulateMobileTapOnImage = async (image) => {
		const rect = image.getBoundingClientRect();

		const x = Math.floor(Math.random() * rect.width) + rect.left;
		const y = Math.floor(Math.random() * rect.height) + rect.top;
		console.log("x,y", x, y);

		const pointerdownEvent = new PointerEvent("pointerdown", {
			bubbles: true,
			cancelable: true,
			pointerId: Date.now(),
			clientX: x,
			clientY: y,
			pointerType: "touch",
			pressure: 0.5,
			isPrimary: true,
		});

		const pointermoveEvent = new PointerEvent("pointermove", {
			bubbles: true,
			cancelable: true,
			pointerId: Date.now(),
			clientX: x,
			clientY: y,
			pointerType: "touch",
			pressure: 0.5,
			isPrimary: true,
		});

		const pointerupEvent = new PointerEvent("pointerup", {
			bubbles: true,
			cancelable: true,
			pointerId: Date.now(),
			clientX: x,
			clientY: y,
			pointerType: "touch",
			pressure: 0,
			isPrimary: true,
		});

		image.dispatchEvent(pointerdownEvent);
		await new Promise((res) => setTimeout(res, getRandomInt(10, 500)));
		image.dispatchEvent(pointermoveEvent);
		image.dispatchEvent(pointerupEvent);
	};

	while (true) {
		try {
			[...document.querySelectorAll("span")]
				.find((button) => button.innerText.includes("Claim"))
				?.click();

			const currentEnergy = getEnergy();

			if (currentEnergy > getRandomInt(10, 200)) {
				await emulateMobileTapOnImage(document.querySelector("#oreol"));
			} else {
				await new Promise((res) =>
					setTimeout(res, getRandomInt(1, 10) * 60 * 1e3),
				);
			}
		} catch (error) {
			console.error(error);
			await new Promise((res) => setTimeout(res, 1e4));
		}
	}
})();
