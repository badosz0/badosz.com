import Link from "next/link";
import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
	name: string;
	children: ReactNode;
	image: string;
	color: string;
	links?: [string, string][];
}

export function Project({ name, image, color, children, links }: Props) {
	return (
		<div className="flex flex-col space-y-4">
			<div className={`p-4 ${color}`}>
				<img src={image} className="rounded-sm" />
			</div>
			<div className="flex flex-col space-y-2">
				<div className="text-xl font-semibold">{name}</div>
				<div className="text-justify">{children}</div>
				<div className="flex justify-end">
					{links?.map((link) => (
						<span className="text-grayed text-sm">
							{link[1] == "#" ? (
								link[0]
							) : (
								<Link href={link[1]}>
									<a target={link[1] == "#" ? "" : "_blank"}>
										{link[0]}{" "}
										<FontAwesomeIcon
											icon={faExternalLinkAlt}
										/>
									</a>
								</Link>
							)}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
