const breadcrumbMarkup = () => {
  return `
<Breadcrumb
  items={[
    { label: 'Home', to: '/' },
    { label: 'Category', to: '/category' },
    { label: 'Current Page', to: '/category/current' },
  ]}
  separator=">"
/>
`;
};

export default breadcrumbMarkup; 