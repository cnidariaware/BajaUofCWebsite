import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

/**
 * @param {String} titleText - The text to dispaly in the banner as a title
 * @param {String} subtitleText - The text below the banner text you want
 * @param {String} imgUrl - The url to the image you want as the banner, by default this will be a lorem picsum
 * @param {String} imgAlt - The alt text for the image banner, this is required for good search results
 * @description The way to update the banner from the child
 * @example ```js
    RouteComponent {
        return (
		    <>
			    <UpdateBanner
                    updatedTitleText="UCalgary Bajaa"
                    updatedSubtitleText="HelloDAAAA"
                    updatedImgUrl="https://picsum.photos/200"
                    updatetdImgAlt="Lorem Picsum"
			    />
    // --snip--
    ```
 * @author Brock <darkicewolf50@gmail.com>
 */
export default function UpdateBanner({
	updatedTitleText = "UCalgary Baja",
	updatedSubtitleText = "Hello",
	updatedImgUrl = "https://picsum.photos/200",
	updatedImgAlt = "Lorem picsum",
}) {
	const context = useOutletContext();
	const updateBanner = context.setBannerInfo;
	useEffect(() => {
		updateBanner({
			titleText: updatedTitleText,
			subtitleText: updatedSubtitleText,
			imgUrl: updatedImgUrl,
			imgAlt: updatedImgAlt,
		});
	}, [
		updatedTitleText,
		updatedSubtitleText,
		updatedImgUrl,
		updatedImgAlt,
		updateBanner,
	]);
	return <></>;
}
