const comboBoxMarkup = () => {
  const options = [
    { value: 'nextjs', label: 'Nextjs' },
    { value: 'react', label: 'React' },
    { value: 'reactnative', label: 'React Native' },
    { value: 'nodejs', label: 'Nodejs' },
    { value: 'typescript', label: 'Typescript' },
    { value: 'tailwindcss', label: 'Tailwindcss' },
  ];
  const placeholder = "Select a Technology...";
  const label = "Choose a Technology";

  let optionsHtml = options
    .map(
      (option) =>
        `  <li style="padding: 0.5rem 1rem; cursor: pointer; background-color: white;">${option.label}</li>`
    )
    .join('\n');

  return `
<div style="position: relative; width: 100%; max-width: 20rem;">
  ${label ? `<label style="display: block; font-size: 0.875rem; font-weight: 500; color: #374151; margin-bottom: 0.25rem;">${label}</label>` : ''}
  <div style="position: relative;">
    <input
      type="text"
      placeholder="${placeholder}"
      style="width: 100%; padding: 0.5rem 1rem; border: 2px solid black; border-radius: 0.25rem; background-color: white; color: black; box-shadow: 2px 2px 0px rgba(0,0,0,1); outline: none;"
      value=""
    />
    <button 
      style="position: absolute; top: 0; bottom: 0; right: 0; display: flex; align-items: center; padding-left: 0.75rem; padding-right: 0.75rem; color: #374151; border-left: 2px solid black; background-color: #F3F4F6;"
    >
      <svg style="width: 1rem; height: 1rem;" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
    </button>
  </div>
  <!-- Dropdown (conditionally displayed in a real component) -->
  <ul style="position: absolute; z-index: 10; width: 100%; margin-top: 0.25rem; background-color: white; border: 2px solid black; border-radius: 0.25rem; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); max-height: 15rem; overflow-y: auto; display: none; /* Initially hidden for static markup */">
${optionsHtml}
  </ul>
</div>
`;
};

export default comboBoxMarkup;
