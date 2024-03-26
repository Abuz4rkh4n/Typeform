import React, { useState } from "react";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <div className="flex fixed w-full z-10 lg:w-55% top-0 justify-between px-6 py-3">
        <a
          href="#"
          className="flex items-center justify-center font-lato text-sm text-my-heading my-xs:hidden my-sm:flex"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            class="bi bi-globe-europe-africa"
            viewBox="0 0 16 16"
            className="mr-2"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.81.81 0 0 1 1.034-.275.81.81 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34q.118.04.243.054c.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.33.33 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501" />
          </svg>
          {selectedLanguage === "english" ? "English" : "Español"}
          {isDropdownOpen && (
            <div
              className={`flex flex-col justify-center absolute w-24 h-28 left-4 top-12 mt-2 bg-white border rounded-md shadow-lg `}
            >
              <div
                className="px-4 py-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange("english")}
              >
                English
              </div>
              <div
                className="px-4 py-4 cursor-pointer hover:bg-gray-100"
                onClick={() => handleLanguageChange("spanish")}
              >
                Español
              </div>
            </div>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="currentColor"
            class="bi bi-chevron-down"
            viewBox="0 0 16 16"
            className="ml-1"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </a>
        <div className="flex items-center justify-center">
          <h4 className="font-lato text-my-black text-sm">
            Already have an acount?
          </h4>
          <button
            className="border border-my-black rounded-md font-lato
          text-xs px-4 py-1 ml-2"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
