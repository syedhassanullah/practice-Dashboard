import { useContext } from "react";
import { OneThemeContext } from "../../Context/Theme Context/OneThemeContext";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Segmented } from "antd";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(OneThemeContext);

  const handleChange = (value) => {
    toggleTheme(value); // pass 'light' or 'dark'
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <Segmented
        size="medium"
        shape="round"
        value={theme} // control Segmented with current theme
        options={[
          { value: "light", icon: <SunOutlined /> },
          { value: "dark", icon: <MoonOutlined /> },
        ]}
        onChange={handleChange}
      />

      {/* <button
        onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
        style={{ padding: "8px 16px" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button> */}
    </div>
  );
};

export default ThemeToggle;
