import addIcon from "../assets/add.svg";
import editIcon from "../assets/edit.svg";
import gearIcon from "../assets/gear.svg";
import Button from "../components/Button";
import Card from "../components/Card";
import Checkbox from "../components/Checkbox";
import Dialog from "../components/Dialog";
import DropDown from "../components/DropDown";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import ToggleSwitch from "../components/ToggleSwitch";
import ProgressBar from "../components/ProgressBar";
import Carousel from "../components/Carousel";
import Breadcrumb from "../components/Breadcrumb";
import ComboBox from "../components/ComboBox";
import IconButtonMarkup from "./iconButtonMarkup";
import buttonMarkup from "./buttonMarkup";
import cardMarkup from "./cardMarkup";
import checkboxMarkup from "./checkboxMarkup";
import dialogMarkup from "./dialogMarkup";
import dropdownMarkup from "./dropdownMarkup";
import inputMarkup from "./inputMarkup";
import toggleSwitchMarkup from "./toggleSwitchMarkup";
import progressBarMarkup from "./progressBarMarkup";
import carouselMarkup from "./carouselMarkup";
import breadcrumbMarkup from "./breadcrumbMarkup";
import comboBoxMarkup from "./comboBoxMarkup";
import SampleImage from "../assets/neo-brutalism-image1.webp";

export type componentsDataType = {
  name: string;
  path: string;
  component: React.ReactNode;
  markup: () => string;
  new?: boolean;
}[];

const componentsData: componentsDataType = [
  {
    name: "Card",
    path: "card",
    component: (
      <div className="w-80">
        <Card
          thumbnail={SampleImage}
          date="March 20th, 2025"
          title="Neo-ui-lib"
          description="Neo-ui-lib is an aesthetic characterized by high contrast
              elements, bright colors, and bold shapes. It is often used to make
              a statement, as it is meant to be eye-catching and stand out to
              the viewer. It is also used in user interface and web design, with
              features such as vibrant colors and bold shapes. Neo-ui-lib can
              also be used in print design, with an example being a bold shape
              with a vibrant color fill applied to it."
          callToActionText="Get Started"
          calllToActionLink="/overview"
        />
      </div>
    ),
    markup: cardMarkup,
  },
  {
    name: "Button",
    path: "button",
    component: (
      <div className="flex justify-evenly space-x-6">
        <Button buttonText="Button" />
        <Button buttonText="Button" rounded="md" />
        <Button buttonText="Button" rounded="full" />
      </div>
    ),
    markup: buttonMarkup,
  },
  {
    name: "IconButton",
    path: "iconButton",
    component: (
      <>
        <div className="grid grid-cols-3 gap-4">
          <IconButton icon={addIcon} color="pink" />
          <IconButton icon={addIcon} color="pink" rounded="md" />
          <IconButton icon={addIcon} color="pink" rounded="full" />

          <IconButton icon={editIcon} color="cyan" />
          <IconButton icon={editIcon} color="cyan" rounded="md" />
          <IconButton icon={editIcon} color="cyan" rounded="full" />

          <IconButton icon={gearIcon} color="lime" />
          <IconButton icon={gearIcon} color="lime" rounded="md" />
          <IconButton icon={gearIcon} color="lime" rounded="full" />
        </div>
      </>
    ),
    markup: IconButtonMarkup,
  },
  {
    name: "Input",
    path: "input",
    component: (
      <div className="md:w-96 flex flex-col space-y-6">
        <Input placeholder="yourname@example.com" />
        <Input placeholder="yourname@example.com" rounded="md" />
        <Input placeholder="yourname@example.com" rounded="full" />
      </div>
    ),
    markup: inputMarkup,
  },
  {
    name: "Dialog",
    path: "dialog",
    component: (
      <Dialog
        message="The message you want goes in here."
        actionButtonText="Enabled"
        cancelButtonText="Cancel"
      />
    ),
    markup: dialogMarkup,
  },
  {
    name: "Checkbox",
    path: "checkbox",
    component: <Checkbox />,
    markup: checkboxMarkup,
  },

  {
    name: "DropDown",
    path: "dropdown",
    component: (
      <DropDown
        title="Options"
        list={[
          { to: "#", name: "Account settings" },
          { to: "#", name: "Support" },
          { to: "#", name: "License" },
        ]}
      />
    ),
    markup: dropdownMarkup,
  },
  {
    name: "ToggleSwitch",
    path: "toggleSwitch",
    component: <ToggleSwitch text="Toggle me" />,
    markup: toggleSwitchMarkup,
  },
  {
    name: "ProgressBar",
    path: "progressBar",
    component: <ProgressBar currentValue={70} rounded="full" color="lime" />,
    markup: progressBarMarkup,
    new: true,
  },
  {
    name: "Carousel",
    path: "carousel",
    component: (
      <Carousel
        items={[
          <div key="1" className="text-2xl font-bold text-gray-700">
            Slide 1
          </div>,
          <div key="2" className="text-2xl font-bold text-gray-700">
            Slide 2
          </div>,
          <div key="3" className="text-2xl font-bold text-gray-700">
            Slide 3
          </div>,
        ]}
      />
    ),
    markup: carouselMarkup,
    new: true,
  },
  {
    name: "Breadcrumb",
    path: "breadcrumb",
    component: (
      <Breadcrumb
        items={[
          { label: "Home", to: "#" },
          { label: "Components", to: "#" },
          { label: "Breadcrumb", to: "#" },
        ]}
      />
    ),
    markup: breadcrumbMarkup,
    new: true,
  },
  {
    name: "ComboBox",
    path: "combobox",
    component: (
      <ComboBox
        label="Choose a Fruit"
        options={[
          { value: "apple", label: "Apple" },
          { value: "banana", label: "Banana" },
          { value: "cherry", label: "Cherry" },
          { value: "date", label: "Date" },
          { value: "elderberry", label: "Elderberry" },
          { value: "fig", label: "Fig" },
        ]}
        placeholder="Select a fruit..."
      />
    ),
    markup: comboBoxMarkup,
    new: true,
  },
];

export default componentsData;
