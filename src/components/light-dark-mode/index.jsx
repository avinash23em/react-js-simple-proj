import Uselocalstorage from "./useloaclstorage";
import './theme.css'

export default function Lightdarkmode() {
  const [theme, settheme] = Uselocalstorage("theme", "dark");
  function handleToggletheme(){
    settheme(theme=='light' ? 'dark':'light');
  }
  console.log(theme);
  return (
    <div>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Hello world</p>
          <button onClick={handleToggletheme}>change Theme</button>
        </div>
      </div>
    </div>
  );
}
