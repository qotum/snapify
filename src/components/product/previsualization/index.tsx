import Button from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { css, cx } from "@styled-system/css";
import PrevisualizationCard from "./card";
import { defaultOptions, defaultVideo } from "@/constants/default-video";
import type { Widget } from "..";
import Select from "@/components/ui/select";

type ProductPrevisualizationProps = {
	className?: string;
	activeWidgets: Widget[];
};

const ProductPrevisualization: React.FC<ProductPrevisualizationProps> = ({
	className,
	activeWidgets,
}: ProductPrevisualizationProps) => {
	return (
		<div
			className={cx(
				css({
					position: "relative",
					display: "flex",
					flexDirection: "column",
					borderRadius: "8px",
					overflow: "hidden",
					minHeight: "560px",
				}),
				"background-png-like",
				className,
			)}
		>
			<div
				className={css({
					display: "flex",
					justifyContent: "space-between",
					padding: "15px 20px 0 20px",
					alignItems: "center",
					zIndex: 1,
				})}
			>
				<h3
					className={css({
						fontSize: "22px",
						fontWeight: "semibold",
					})}
				>
					Prévisualisation
				</h3>

				<Button prefix={<Icon icon={"external"} size={16} />} />
			</div>

			<div
				className={css({
					position: "absolute",
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				})}
			>
				<PrevisualizationCard
					video={defaultVideo}
					options={{
						...defaultOptions,
						activeWidgets,
					}}
				/>
			</div>

			<div
				className={css({
					position: "absolute",
					width: "100%",
					left: 0,
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "10px",
					bg: "rgba(15, 15, 15, 0.15)",
					borderBottomRadius: "8px",
					py: "20px",
					zIndex: 1,
				})}
			>
				<Select
					className={css({
						width: "max-content",
					})}
				>
					<option>1x</option>
					<option>2x</option>
					<option>3x</option>
					<option>Puff</option>
				</Select>

				<Select
					className={css({
						width: "max-content",
					})}
				>
					<option>PNG</option>
					<option>JPG</option>
					<option>WEBP</option>
				</Select>

				<Button prefix={<Icon icon="download" size={16} />} color="secondary">
					Télécharger
				</Button>

				<Button prefix={<Icon icon="copy" size={16} />} withoutBorder>
					Copier
				</Button>
			</div>
		</div>
	);
};

export default ProductPrevisualization;
