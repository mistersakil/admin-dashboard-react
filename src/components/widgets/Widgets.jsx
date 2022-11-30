import "./widgets.scss";
import WidgetSingle from "./WidgetSingle";
import {
  ArrowDropUpOutlinedIcon,
  ArrowDropDownOutlinedIcon,
  PeopleOutlineOutlinedIcon,
  HomeWorkOutlinedIcon,
  RedeemOutlinedIcon,
  AttachMoneyOutlinedIcon,
} from "../../icons";
const widgets = () => {
  return (
    <section className="widgets">
      <WidgetSingle
        title="users"
        counter="500K"
        percentValue="+10"
        percentClass="green"
        arrowIcon={<ArrowDropUpOutlinedIcon className="icon" />}
        widgetIcon={<PeopleOutlineOutlinedIcon className="widgetIcon" />}
      />
      <WidgetSingle
        title="brands"
        counter="50"
        percentValue="+15"
        percentClass="green"
        arrowIcon={<ArrowDropUpOutlinedIcon className="icon" />}
        widgetIcon={<HomeWorkOutlinedIcon className="widgetIcon" />}
      />
      <WidgetSingle
        title="orders"
        counter="2.3K"
        percentValue="+20"
        percentClass="green"
        arrowIcon={<ArrowDropUpOutlinedIcon className="icon" />}
        widgetIcon={<RedeemOutlinedIcon className="widgetIcon" />}
      />
      <WidgetSingle
        title="profit"
        counter="Tk 250K"
        percentValue="-5"
        percentClass="red"
        arrowIcon={<ArrowDropDownOutlinedIcon className="icon" />}
        widgetIcon={<AttachMoneyOutlinedIcon className="widgetIcon" />}
      />
    </section>
  );
};

export default widgets;
