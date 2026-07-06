"use client";

import { useId, useState } from "react";

export type ArticleBlock = { type: "q" | "p" | "h"; text: string };

export type ArticleVersion = {
	lang: string;
	label: string;
	title?: string;
	blocks: ArticleBlock[];
};

export function NewsArticle({
	versions,
	previewCount = 3,
}: {
	versions: ArticleVersion[];
	previewCount?: number;
}) {
	const [active, setActive] = useState(0);
	const [expanded, setExpanded] = useState(false);
	const bodyId = useId();

	const version = versions[active] ?? versions[0];
	const collapsible = version.blocks.length > previewCount;
	const visible =
		collapsible && !expanded
			? version.blocks.slice(0, previewCount)
			: version.blocks;

	return (
		<div className="news-article">
			{versions.length > 1 ? (
				<div
					className="news-article__langs"
					role="tablist"
					aria-label="Language"
				>
					{versions.map((v, index) => (
						<button
							key={v.lang}
							type="button"
							role="tab"
							aria-selected={index === active}
							className={`news-lang-tab${
								index === active ? " news-lang-tab--active" : ""
							}`}
							onClick={() => {
								setActive(index);
								setExpanded(false);
							}}
						>
							{v.label}
						</button>
					))}
				</div>
			) : null}

			{version.title ? (
				<h3 className="news-card__title news-article__title">
					{version.title}
				</h3>
			) : null}

			<div id={bodyId} className="news-article__body">
				{visible.map((block, index) => {
					const key = `${block.text}-${index}`;
					if (block.type === "h") {
						return (
							<h4 key={key} className="news-article__h">
								{block.text}
							</h4>
						);
					}
					if (block.type === "q") {
						return (
							<p key={key} className="news-article__q">
								{block.text}
							</p>
						);
					}
					return <p key={key}>{block.text}</p>;
				})}
			</div>

			{collapsible ? (
				<button
					type="button"
					className="news-article__toggle"
					aria-expanded={expanded}
					aria-controls={bodyId}
					onClick={() => setExpanded((value) => !value)}
				>
					{expanded ? "Show less" : "Read the full article"}
				</button>
			) : null}
		</div>
	);
}
