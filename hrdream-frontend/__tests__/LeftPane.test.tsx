
import {render ,screen} from '@testing-library/react';
import LeftPane from '@/components/auth/LeftPane';
import "@testing-library/jest-dom";

describe('LeftPane',() => {
    it('should render the left pane',() => {
        render(<LeftPane />);
        expect(screen.getByTestId('left-pane')).toBeInTheDocument();
    });

    test("renders brand name and logo", () => {
        render(<LeftPane />);
        expect(screen.getByTestId("brand")).toBeInTheDocument();
        expect(screen.getByTestId("brand-logo")).toBeInTheDocument();
        expect(screen.getByTestId("brand-name")).toHaveTextContent("HRdream");
    });

    test("renders plan details section", () => {
        render(<LeftPane />);
        expect(screen.getByTestId("plan-details")).toBeInTheDocument();
        expect(screen.getByTestId("plan-title")).toHaveTextContent("Plan includes");
    });

    it("renders list items correctly",() => {
        render(<LeftPane />);
        const items = [
            "Unlimited employee uploads",
            "Free forever",
            "Full author permissions",
            "Pro tips",
        ];

        items.forEach((item,index) => {
            expect(screen.getByTestId(`plan-item-${index}`)).toBeInTheDocument();
            expect(screen.getByText(item)).toBeInTheDocument();
        });

    })
})