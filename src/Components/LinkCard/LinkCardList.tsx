import type { itemLinks } from "../../Types/ItemLinks";
import LinkCard from "./LinkCard";

type LinkCardListProps = {
    listItems: itemLinks[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}
const LinkCardList: React.FC<LinkCardListProps> = ({ listItems, onDelete, onEdit }) => {

    return (
        <>
            {listItems.length > 0 ? (
                listItems.map((link) => (
                    <LinkCard key={link.id} {...link}
                        onEdit={onEdit}
                        onDelete={onDelete} />
                ))
            ) : (
                <p>No Links Saved</p>
            )}
        </>
    );
};

export default LinkCardList;