import Symbol from '../images/simbol-02.svg';
import Logo from '../images/logo.svg';
import Email from '../images/email.svg';
import Location from '../images/lokacija.svg';
import Hours from '../images/radnovreme.svg';
import Phone from '../images/telefon.svg';

export const LANGUAGES = {
  en: { nativeName: 'English' },
  hr: { nativeName: 'Hrvatski' },
  it: { nativeName: 'Italiano' },
  fr: { nativeName: 'Français' },
  es: { nativeName: 'Español' },
  de: { nativeName: 'Deutsch' },
};

export const office = {
  id: '1',
  field_address: {
    locality: 'Novalja',
    postal_code: '53291',
    address_line1: 'Ulica Kralja Zvonimira',
    address_line2: '11',
    latitude: 44.55705012999859,
    longitude: 14.884329755824055,
    zoom: 15,
  },
};

export const symbol = Symbol;
export const backgroundImage = Logo;
export const email = Email;
export const location = Location;
export const hour = Hours;
export const phone = Phone;
