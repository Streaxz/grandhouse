import {ReactNode} from "react";

export interface IRoundFeatures {
		children: ReactNode;
}
export const RoundFeatures = ({children}: IRoundFeatures) => {
		return (
			<div className={'roundedFeaturesContainer'}>
					{children}
		</div>
		)
}