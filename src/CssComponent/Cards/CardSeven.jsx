import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CardSeven = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [copiedJSX, setCopiedJSX] = useState(false);

  const cardHTML = `
  <div class="bg-[#4A00FF] shadow-xl rounded-xl w-96 p-5">
    <h2 class="font-bold text-xl text-white">Card title!</h2>
    <p class="my-3 text-white">
        If a dog chews shoes whose shoes does he choose?
    </p>
    <div class="flex justify-end">
        <button class="px-5 py-3 bg-white text-black font-bold rounded-xl">
        Buy Now
        </button>
    </div>
</div>
 `;

  const cardJSX = `
  <div className="bg-[#4A00FF] shadow-xl rounded-xl w-96 p-5">
    <h2 className="font-bold text-xl text-white">Card title!</h2>
    <p className="my-3 text-white">
        If a dog chews shoes whose shoes does he choose?
    </p>
    <div className="flex justify-end">
        <button className="px-5 py-3 bg-white text-black font-bold rounded-xl">
        Buy Now
        </button>
    </div>
</div>
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
      <main>
        <div className="overflow-hidden rounded-xl-xl border border-gray-100 bg-gray-50 p-1">
          {/* Tab 1*/}
          <ul className="flex items-center gap-2 text-sm font-medium justify-center">
            <li>
              <a
                onClick={() => setActiveTab(0)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl-lg px-3 py-2 ${
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
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl-lg px-3 py-2 ${
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
                className={`inline-flex cursor-pointer items-center gap-2 rounded-xl-lg px-3 py-2 ${
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
            <div className="flex justify-center bg-[#F9FAFB] py-10">
              <div className="bg-orange-400 shadow-xl rounded-xl w-96 p-5">
                <h2 className="font-bold text-xl text-white">Card title!</h2>
                <p className="my-3 text-white">
                  If a dog chews shoes whose shoes does he choose?
                </p>
                <div className="flex justify-end">
                  <button className="px-5 py-3 bg-white text-black font-bold rounded-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )}
          {(activeTab === 1 || activeTab === 2) && (
            <div className="rounded-xl-md overflow-hidden">
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
                <button className="bg-slate-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl">
                  {copiedHTML ? "Copied!" : "Copy"}
                </button>
              </CopyToClipboard>
            )}
            {activeTab === 2 && (
              <CopyToClipboard text={cardJSX} onCopy={handleCopyJSX}>
                <button className="bg-slate-800 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-xl">
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

export default CardSeven;
