import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function FooterComponent() {
  return (
    <>
      <footer>
        <div className="mx-auto p-4 border-t">
          <div className="flex justify-between flex-row">
            <div>
              <a
                href="/#"
                className="sm:mb-0 rtl:space-x-reverse"
              >
                
                <span className="self-center text-xs whitespace-nowrap dark:text-white">
                2024年國際金波利 | 基督復臨安息日會 港澳區會
                </span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
            <a href="https://www.instagram.com/hkmcpfic/"><FaInstagram size={20} /></a>
            <a href="https://www.youtube.com/@hkmcyouth2774"><FaYoutube size={20} /></a>
            </div>
            
          </div>
        </div>
      </footer>
    </>
  );
}
