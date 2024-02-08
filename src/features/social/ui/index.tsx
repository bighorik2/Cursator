import { ExternalLinks } from "shared/constants/externalLinks"
import { SocialLink } from "entities/social"
import facebook from './facebook.svg'
import ok from './ok.svg'
import skype from './skype.svg'
import telegram from './telegram.svg'
import twitter from './twitter.svg'
import viber from './viber.svg'
import vk from './vk.svg'
import whatsup from './whatsup.svg'

export const TelegramLink = () => {
  return (
    <SocialLink src={telegram} href={ExternalLinks.TelegrammUrl} color={"rgb(47, 137, 206)"} />
  )
};


export const FacebookLink = () => {
  return (
    <SocialLink src={facebook} href={ExternalLinks.FacebookUrl} color={" rgb(78, 98, 151)"} />
  )
};


export const WhatsupLink = () => {
  return (
    <SocialLink src={whatsup} href={ExternalLinks.WhatsupUrl} color={"rgb(72, 201, 95)"} />
  )
};


export const ViberLink = () => {
  return (
    <SocialLink src={viber} href={ExternalLinks.ViberUrl} color={"rgb(124, 80, 154)"} />
  )
};


export const OkLink = () => {
  return (
    <SocialLink src={ok} href={ExternalLinks.OkUrl} color={"rgb(247, 154, 56)"} />
  )
};


export const SkypeLink = () => {
  return (
    <SocialLink src={skype} href={ExternalLinks.SkypeUrl} color={"rgb(0, 169, 231)"} />
  )
};


export const VkLink = () => {
  return (
    <SocialLink src={vk} href={ExternalLinks.VkUrl} color={"rgb(114, 148, 199)"} />
  )
};


export const TwitterLink = () => {
  return (
    <SocialLink src={twitter} href={ExternalLinks.TwitterUrl} color={"rgb(85, 172, 227)"} />
  )
};
