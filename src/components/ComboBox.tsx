import React, { useState, useRef, useEffect } from 'react';

interface ComboBoxOption {
  value: string;
  label: string;
}

interface ComboBoxProps {
  options: ComboBoxOption[];
  placeholder?: string;
  onSelect?: (value: string) => void;
  label?: string;
}

const ComboBox: React.FC<ComboBoxProps> = ({ options, placeholder = 'Select an option...', onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: ComboBoxOption) => {
    setSelectedValue(option.label);
    setSearchTerm(option.label);
    setIsOpen(false);
    if (onSelect) {
      onSelect(option.value);
    }
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % filteredOptions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + filteredOptions.length) % filteredOptions.length);
    } else if (e.key === 'Enter' && highlightedIndex >= 0) {
      handleSelect(filteredOptions[highlightedIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-full max-w-xs" ref={wrapperRef}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="w-full px-4 py-2 border-2 border-black rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] active:shadow-[1px_1px_0px_rgba(0,0,0,1)]"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setIsOpen(true);
            setSelectedValue(null); // Clear selected value when typing
            setHighlightedIndex(-1);
          }}
          onClick={() => setIsOpen(!isOpen)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-700 border-l-2 border-black bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
        >
          {isOpen ? (
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 15l7-7 7 7"></path></svg>
          ) : (
            <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7"></path></svg>
          )}
        </button>
      </div>
      {isOpen && filteredOptions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-white border-2 border-black rounded shadow-lg max-h-60 overflow-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer hover:bg-pink-100 ${index === highlightedIndex ? 'bg-pink-200' : ''}`}
              onClick={() => handleSelect(option)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {isOpen && filteredOptions.length === 0 && searchTerm && (
         <div className="absolute z-10 w-full mt-1 bg-white border-2 border-black rounded shadow-lg px-4 py-2 text-gray-500">
           No options found.
         </div>
      )}
    </div>
  );
};

export default ComboBox; 