import { FC } from "react";
import { ListItemProps } from "./ListItem";

export const Selected: FC<{
    item: ListItemProps;
    onClick: (b: ListItemProps) => void;
    onDelete: () => void;
  }> = ({ item, onClick, onDelete }) => {
    return (
        <div>
            <button role="button" onClick={() => onClick(item)}>
                {item.title}
            </button>
            <button onClick={onDelete}>Delete</button>
        </div>
    );
  };