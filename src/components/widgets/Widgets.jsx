import "./widgets.scss";

import WidgetSingle from "./WidgetSingle";
const widgets = () => {
  return (
    <section className="widgets">
      <WidgetSingle />
      <WidgetSingle />
      <WidgetSingle />
      <WidgetSingle />
    </section>
  );
};

export default widgets;
