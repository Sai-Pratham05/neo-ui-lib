const comboBoxMarkup = () => {
  return `
<ComboBox
  label="Select a fruit"
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
    { value: 'elderberry', label: 'Elderberry' },
  ]}
  placeholder="E.g., Apple"
  onSelect={(value) => console.log('Selected:', value)}
/>
`;
};

export default comboBoxMarkup; 