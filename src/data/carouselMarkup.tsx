const carouselMarkup = () => {
  return `
<div style="position: relative; width: 100%; max-width: 32rem; margin-left: auto; margin-right: auto; border: 2px solid black; box-shadow: 4px 4px 0px rgba(0,0,0,1);">
  <div style="overflow: hidden;">
    <div style="display: flex; transition: transform 0.5s ease-in-out; transform: translateX(-0%);">
      <div style="width: 100%; flex-shrink: 0; height: 16rem; background-color: #FECDD3; display: flex; align-items: center; justify-content: center;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #4B5563;">Slide 1</div>
      </div>
      <div style="width: 100%; flex-shrink: 0; height: 16rem; background-color: #FECDD3; display: flex; align-items: center; justify-content: center;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #4B5563;">Slide 2</div>
      </div>
      <div style="width: 100%; flex-shrink: 0; height: 16rem; background-color: #FECDD3; display: flex; align-items: center; justify-content: center;">
        <div style="font-size: 1.5rem; font-weight: bold; color: #4B5563;">Slide 3</div>
      </div>
    </div>
  </div>
  <button style="position: absolute; top: 50%; left: 0.5rem; transform: translateY(-50%); background-color: white; color: black; padding: 0.5rem; border-radius: 9999px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 2px solid black;">
    &#10094;
  </button>
  <button style="position: absolute; top: 50%; right: 0.5rem; transform: translateY(-50%); background-color: white; color: black; padding: 0.5rem; border-radius: 9999px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); border: 2px solid black;">
    &#10095;
  </button>
  <div style="position: absolute; bottom: 1rem; left: 50%; transform: translateX(-50%); display: flex; gap: 0.5rem;">
    <button style="width: 0.75rem; height: 0.75rem; border-radius: 9999px; border: 2px solid black; background-color: black;"></button>
    <button style="width: 0.75rem; height: 0.75rem; border-radius: 9999px; border: 2px solid black; background-color: white;"></button>
    <button style="width: 0.75rem; height: 0.75rem; border-radius: 9999px; border: 2px solid black; background-color: white;"></button>
  </div>
</div>
`;
};

export default carouselMarkup;

