import Home from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
	it("renders name", () => {
		render(<Home />);

		const heading = screen.getByRole("heading", {
			name: /zion mantey/i,
		});

		expect(heading).toBeInTheDocument();
	});
});
