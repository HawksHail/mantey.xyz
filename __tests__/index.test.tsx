import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

describe("Home", () => {
	it("renders name", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /zion mantey/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
