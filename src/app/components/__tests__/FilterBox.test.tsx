import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // for extra matchers like toBeInTheDocument
import FilterBox from "../FilterBox"; // adjust import path as needed
import { IFilterConfig } from "../../interfaces/IFilterConfig"; // adjust import path

describe("FilterBox component", () => {
  const mockOnFilterConfigChanged = jest.fn();

  const defaultFilterConfig: IFilterConfig = {
    maxresults: 20,
    distance: 30,
    connectiontypeid: ["25", "2"], // Type2 and CHAdeMO
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the default values from initFilterConfig", () => {
    render(
      <FilterBox
        initFilterConfig={defaultFilterConfig}
        onFilterConfigChanged={mockOnFilterConfigChanged}
      />
    );
    // Check dropdown for # of stations displayed
    expect(screen.getByDisplayValue("20")).toBeInTheDocument();

    // Check radius input
    expect(screen.getByDisplayValue("30")).toBeInTheDocument();

    // Check checkboxes for connection types
    const type2Checkbox = screen.getByLabelText("Type 2") as HTMLInputElement;
    const chademoCheckbox = screen.getByLabelText(
      "CHAdeMO"
    ) as HTMLInputElement;
    const ccsCheckbox = screen.getByLabelText("CCS") as HTMLInputElement;

    expect(type2Checkbox.checked).toBe(true); // "25"
    expect(chademoCheckbox.checked).toBe(true); // "2"
    expect(ccsCheckbox.checked).toBe(false); // "33"
  });

  it("updates the onFilterConfigChanged when changing the number of results", () => {
    render(
      <FilterBox
        initFilterConfig={defaultFilterConfig}
        onFilterConfigChanged={mockOnFilterConfigChanged}
      />
    );

    // Change the select value to 50
    const selectElement = screen.getByDisplayValue("20");
    fireEvent.change(selectElement, { target: { value: "50" } });

    // Expect callback to have been called with updated filter config
    expect(mockOnFilterConfigChanged).toHaveBeenCalledWith({
      maxresults: 50,
      distance: 30,
      connectiontypeid: ["25", "2"],
    });
  });

  it("toggles connection type checkboxes and updates config", () => {
    render(
      <FilterBox
        initFilterConfig={defaultFilterConfig}
        onFilterConfigChanged={mockOnFilterConfigChanged}
      />
    );
    const ccsCheckbox = screen.getByLabelText("CCS") as HTMLInputElement;
    // Click the CCS checkbox to add "33" to connectiontypeid
    fireEvent.click(ccsCheckbox);

    expect(mockOnFilterConfigChanged).toHaveBeenCalledWith({
      maxresults: 20,
      distance: 30,
      connectiontypeid: ["25", "2", "33"], // CCS added
    });
  });

  it("updates radius and calls onFilterConfigChanged", () => {
    render(
      <FilterBox
        initFilterConfig={defaultFilterConfig}
        onFilterConfigChanged={mockOnFilterConfigChanged}
      />
    );
    const radiusInput = screen.getByDisplayValue("30");
    fireEvent.change(radiusInput, { target: { value: "40" } });

    expect(mockOnFilterConfigChanged).toHaveBeenCalledWith({
      maxresults: 20,
      distance: 40,
      connectiontypeid: ["25", "2"],
    });
  });
});
