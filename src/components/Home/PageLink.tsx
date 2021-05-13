interface Props {
	name: string;
}

export function PageLink({ name }: Props) {
	return (
		<div className="cursor-pointer hover:underline select-none ">
			{name}
		</div>
	);
}
