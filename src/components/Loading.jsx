import { css } from 'emotion';

const loadStyles = css`
	color: hotpink;
	animation: blink 0.9s cubic-bezier(0.645, 0.045, 0.355, 1) infinite both;

	@keyframes blink {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.2;
		}
		100% {
			opacity: 1;
		}
	}
`;

export function Loading() {
	return (
		<>
			<span class={loadStyles}>Jobs are loading...</span>
		</>
	);
}
