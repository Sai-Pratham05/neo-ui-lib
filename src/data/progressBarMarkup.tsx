const progressBarMarkup = (): string => {
  const currentValue = 70;
  const roundedClass = "full"; // or "md" or "none"
  const colorName = "lime"; // Example color

  // Simplified color mapping for example
  const colorStyles: { [key: string]: string } = {
    lime: "#A3E635",
    pink: "#EC4899",
    cyan: "#22D3EE",
    // Add other colors as needed
  };
  const bgColor = colorStyles[colorName] || "#A3E635"; // Default to lime

  let borderRadiusStyle = "border-radius: 9999px;"; // for rounded="full"
  if (roundedClass === "md") {
    borderRadiusStyle = "border-radius: 0.375rem;";
  } else if (roundedClass === "none") {
    borderRadiusStyle = "border-radius: 0px;";
  }

  return `
<div style="width: 100%; background-color: #E5E7EB; border: 2px solid black; ${borderRadiusStyle} overflow: hidden; box-shadow: 2px 2px 0px rgba(0,0,0,1);">
  <div
    style="width: ${currentValue}%; background-color: ${bgColor}; height: 1.5rem; text-align: center; line-height: 1.5rem; color: black; font-weight: bold; transition: width 0.3s ease-in-out; ${borderRadiusStyle}"
  >
    ${currentValue}%
  </div>
</div>
`;
};

export default progressBarMarkup;
