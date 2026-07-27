import type { itemLinks } from "../Types/ItemLinks";
import LinkCard from "./LinkCard";

type LinkCardListProps = {

    listItems: itemLinks[];
}
const LinkCardList: React.FC<LinkCardListProps> = ({ listItems }) => {
    return (
        <>
            {listItems.length > 0 ? (
                listItems.map((link) => (
                    <LinkCard key={link.id} {...link} />
                ))
            ) : (
                <p>No Links Saved</p>
            )}
        </>
    );
};

export default LinkCardList;