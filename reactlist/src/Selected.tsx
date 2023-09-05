import { FC } from "react";
import { ListItemProps } from "./ListItem";

export const Selected: FC<{
    item: ListItemProps;
    onClick: (b: ListItemProps) => void;
    onDelete: () => void;
  }> = ({ item, onClick, onDelete }) => {
    return (
            <div className="row">
                <button className="col-lg-9 col-md-10 col-sm-10 mb-2" role="button" onClick={() => onClick(item)}>
                    {item.title}
                </button>
                <button className="col-lg-3 col-md-1 col-sm-2 mb-2" onClick={onDelete}>Delete</button>
            </div>
    );
  };