import { Icon } from "@iconify/react";
import { icons, type KnownIcon } from "~/utils";

interface IconPropsType {
  icon: KnownIcon;
  size: number;
  className?: string;
  fill?: string;
}

export default function CustomIcon({
  icon,
  size,
  className = "",
  fill = "#ddd",
}: IconPropsType) {
  return (
    <span className={className}>
      <Icon width={size} height={size} icon={icons[icon]} fill={fill} />
    </span>
  );
}
