import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ButtonOne = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [copiedJSX, setCopiedJSX] = useState(false);

  const cardHTML = `
  <button class="px-5 py-3 bg-[#D2D4D7] text-black font-bold rounded">
    Ghost
 </button>

 <button class="px-5 py-3 bg-black text-white font-bold rounded">
    Black
 </button>

  <button class="px-5 py-3 bg-[#29323E] text-white font-bold rounded">
    Neutral
  </button>

  <button class="px-5 py-3 bg-[#4A00FF] text-white font-bold rounded">
    Primary
 </button>

  <button class="px-5 py-3 bg-[#00D7BF] text-black font-bold rounded">
    Accent
  </button>

 
 `;

  const cardJSX = `
  <button className="px-5 py-3 bg-[#D2D4D7] text-black font-bold rounded">
    Ghost
  </button>

 <button className="px-5 py-3 bg-black text-white font-bold rounded">
    Black
 </button>

  <button className="px-5 py-3 bg-[#29323E] text-white font-bold rounded">
    Neutral
  </button>

  <button className="px-5 py-3 bg-[#4A00FF] text-white font-bold rounded">
    Primary
 </button>

 <button className="px-5 py-3 bg-[#00D7BF] text-black font-bold rounded">
    Accent
 </button>


      `;

  const handleCopyHTML = () => {
    setCopiedHTML(true);
    setTimeout(() => setCopiedHTML(false), 2000);
  };

  const handleCopyJSX = () => {
    setCopiedJSX(true);
    setTimeout(() => setCopiedJSX(false), 2000);
  };

  return (
    <div>
      {/* Card Styles 1 */}
      <main className="pb-20">
        <div className="overflow-hidden rounded-xl border border-gray-100 bg-gray-50 p-1">
          {/* Tab 1*/}
          <ul className="flex items-center gap-2 text-sm font-medium justify-center">
            <li>
              <a
                onClick={() => setActiveTab(0)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                  activeTab === 0
                    ? "bg-orange-400 shadow text-white"
                    : "hover:bg-orange-500 hover:text-white hover:shadow"
                }`}
              >
                Preview
              </a>
            </li>
            <li>
              <a
                onClick={() => setActiveTab(1)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                  activeTab === 1
                    ? "bg-orange-400 shadow text-white"
                    : "hover:bg-orange-500 hover:text-white hover:shadow"
                }`}
              >
                HTML
              </a>
            </li>
            <li>
              <a
                onClick={() => setActiveTab(2)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 ${
                  activeTab === 2
                    ? "bg-orange-400 shadow text-white"
                    : "hover:bg-orange-500 hover:text-white hover:shadow"
                }`}
              >
                JSX
              </a>
            </li>
          </ul>
        </div>
        <div className="py-3 relative">
          {activeTab === 0 && (
            <div className="flex container mx-auto justify-center items-center py-10 gap-12">
              <button className="px-5 py-3 bg-[#D2D4D7] text-black font-bold rounded">
                Ghost
              </button>

              <button className="px-5 py-3 bg-black text-white font-bold rounded">
                Black
              </button>

              <button className="px-5 py-3 bg-[#29323E] text-white font-bold rounded">
                Neutral
              </button>

              <button className="px-5 py-3 bg-[#4A00FF] text-white font-bold rounded">
                Primary
              </button>
            </div>
          )}
          {(activeTab === 1 || activeTab === 2) && (
            <div className="rounded-md overflow-hidden">
              <div className="block">
                <SyntaxHighlighter
                  language={activeTab === 1 ? "html" : "jsx"}
                  style={atomDark}
                  customStyle={{ padding: "25px" }}
                >
                  {activeTab === 1 ? cardHTML : cardJSX}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {/* Copy Button  */}
          <div className="flex justify-end mr-5 mt-2 absolute top-4 -right-5">
            {activeTab === 1 && (
              <CopyToClipboard text={cardHTML} onCopy={handleCopyHTML}>
                <button className="bg-slate-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                  {copiedHTML ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            )}
            {activeTab === 2 && (
              <CopyToClipboard text={cardJSX} onCopy={handleCopyJSX}>
                <button className="bg-slate-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
                  {copiedJSX ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ButtonOne;
