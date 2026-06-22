import { THEME_STORAGE_KEY } from "./resolve";

/**
 * Runs before hydration to set data-theme (no flash of the wrong theme) and arm
 * the reveal-on-scroll animations. Mirrors resolveDark() but inlined so it can
 * execute synchronously in <head>.
 */
export function ThemeScript() {
  const js = `(function(){try{
    var m=localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)})||"auto";
    var h=new Date().getHours();
    var dark=m==="dark"?true:m==="light"?false:(h>=19||h<7);
    var r=document.documentElement;
    r.setAttribute("data-theme",dark?"dark":"light");
    r.classList.add("reveal-ready");
  }catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: js }} />;
}
