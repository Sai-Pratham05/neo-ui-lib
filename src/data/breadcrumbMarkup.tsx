const breadcrumbMarkup = () => {
  return `
<nav aria-label="breadcrumb">
  <ol style="display: flex; align-items: center; column-gap: 0.5rem; color: #6B7280;">
    <li style="display: flex; align-items: center;">
      <a href="#" style="text-decoration: none; color: black; border: 2px solid black; padding: 0.25rem 0.75rem; background-color: #FDE68A; box-shadow: 2px 2px 0px rgba(0,0,0,1);">
        Home
      </a>
    </li>
    <li style="display: flex; align-items: center;">
      <span style="margin-left: 0.5rem; margin-right: 0.5rem; user-select: none;">&gt;</span>
      <a href="#" style="text-decoration: none; color: black; border: 2px solid black; padding: 0.25rem 0.75rem; background-color: #FDE68A; box-shadow: 2px 2px 0px rgba(0,0,0,1);">
        Category
      </a>
    </li>
    <li style="display: flex; align-items: center;">
      <span style="margin-left: 0.5rem; margin-right: 0.5rem; user-select: none;">&gt;</span>
      <span style="font-weight: 600; color: black;" aria-current="page">
        Current Page
      </span>
    </li>
  </ol>
</nav>
`;
};

export default breadcrumbMarkup;
