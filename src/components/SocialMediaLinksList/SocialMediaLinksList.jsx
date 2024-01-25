import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

import {
  SocLink,
  SocLinkItem,
  SocLinkList,
} from "./SocialMediaLinksList.styled";

export const SocialMediaLinksList = () => {
  return (
    <SocLinkList>
      <SocLinkItem>
        <SocLink
          target="_blank"
          href="#"
          rel="noopener nofollow noreferrer"
          aria-label="Facebook"
        >
          <FiFacebook />
        </SocLink>
      </SocLinkItem>
      <SocLinkItem>
        <SocLink
          target="_blank"
          href="#"
          rel="noopener nofollow noreferrer"
          aria-label="Twitter"
        >
          <RiTwitterXFill />
        </SocLink>
      </SocLinkItem>
      <SocLinkItem>
        <SocLink
          target="_blank"
          href="#"
          rel="noopener nofollow noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocLink>
      </SocLinkItem>
    </SocLinkList>
  );
};
