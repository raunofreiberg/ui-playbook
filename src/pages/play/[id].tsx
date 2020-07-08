import React from 'react';
import { useRouter } from 'next/router';
import { Icon } from '../../components';

export default function Play(props) {
	const {
		query: { id },
	} = useRouter() as any;
	return (
		<>
			<article>
				<h1>Tooltip</h1>
				<p>Tooltip is a non-interactive overlay that briefly explains the function of the trigger element.</p>
				<Icon icon={id} />
			</article>
			<article>
				<h2>Functionality</h2>
				<ul>
					<li>
						Displayed when the trigger element is hovered by the mouse or when it receives keyboard focus.
					</li>
					<li>Focus remains on the trigger element while the tooltip is displayed.</li>
					<li>Dismissed with the <code>Escape</code> key or by a blur/mouseleave event.</li>
				</ul>
			</article>
			<article>
				<h2>Best practices</h2>
				<ul>
					<li>
						Do not use a tooltip for information vital to task completion. The action of the element it is
						attached to should make sense on its own.
					</li>
					<li>Make sure to provide a short and succinct label for the tooltip.</li>
					<li>
						Avoid interactive content such as buttons and links inside the tooltip. As an alternative,
						consider Popover.
					</li>
					<li>
						Displaying the tooltip too quickly on mouseover can result in accidental activations and creates
						a jarring user experience. It is advisable to add a short delay (~100ms) before displaying it.
					</li>
					<li>
						Once a tooltip is visible, interaction with any other tooltip should display immediately without
						the delay.
					</li>
					<li>
						The tooltip can have preferred positioning options, but should adjust itself dynamically based
						on collisions and available space.
					</li>
				</ul>
			</article>
			<article>
				<h2>Implementation</h2>
				<ul>
					<li>
						To avoid parent containers possibly clipping the tooltip, it is advisable to render the tooltip
						in a React Portal with fixed positioning.
					</li>
					<li>
						By default, disabled elements like <code>button</code> do not trigger mouse events. This is an
						unfortunate misinterpretation of the spec by the browsers. As a workaround, we recommend using{' '}
						<a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events">Pointer Events</a>{' '}
						(which follow the spec more closely) for disabled trigger elements.
					</li>
				</ul>
			</article>
			<article>
				<h2>Accessibility</h2>
				<p>
					The accessibility requirements for this component are defined by the{' '}
					<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip">
						WAI-ARIA Practices 1.1 for Tooltip:
					</a>
				</p>
				<ul>
					<li>
						<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-21">
							Keyboard Interaction
						</a>
					</li>
					<li>
						<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#wai-aria-roles-states-and-properties-22">
							WAI-ARIA Roles, States, and Properties
						</a>
					</li>
				</ul>
			</article>
			<article>
				<h2>Resources</h2>
				<ul>
					<li>
						<a href="https://www.w3.org/TR/wai-aria-practices-1.1/#tooltip">
							WAI-ARIA Practices 1.1 - Tooltip
						</a>
					</li>
					<li>
						<a href="https://reach.tech/tooltip/">Reach UI - Tooltip</a>
					</li>
					<li>
						<a href="https://polaris.shopify.com/components/overlays/tooltip">Shopify Polaris - Tooltip</a>
					</li>
					<li>
						<a href="https://www.appcues.com/blog/tooltips">
							Tooltips: How to use this small but mighty UI pattern correctly
						</a>
					</li>
					<li>
						<a href="https://jakearchibald.com/2017/events-and-disabled-form-fields/">
							Events and disable form fields
						</a>
					</li>
					<li>
						<a href="https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events">Pointer Events</a>
					</li>
					<li>
						<a href="https://www.nngroup.com/articles/timing-exposing-content/">
							Timing Guidelines for Exposing Hidden Content
						</a>
					</li>
				</ul>
			</article>
		</>
	);
}
