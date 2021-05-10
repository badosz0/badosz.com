import { Container } from "~/components/ui/Container";

export function HomePage() {
	return (
		<Container>
			<div className="flex justify-center">
				<div className="flex flex-col mt-10">
					<div className="text-main text-center">
						<div className="text-5xl font-extrabold">
							Bartosz Król
						</div>
						<div className="text-2xl flex justify-between">
							{"I code, most of the time".split(" ").map((e) => (
								<span>{e}</span>
							))}
						</div>
					</div>

					<div className=""></div>
				</div>
			</div>
		</Container>
	);
}
