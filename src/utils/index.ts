import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const formatPhoneNumber = (value: string): string => {
  const cleaned = value.replace(/\D/g, '');

  if (cleaned.length <= 11) {
    return cleaned
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d)/g, '$1-$2');
  } else {
    return cleaned
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d{5})(\d{1,4})$/, '$1-$2');
  }
};

const removeMask = (value: string): string => {
  return value.replace(/\D/g, '');
};

const formatDate = (date: Date, dateFormat: string) => {
  return format(date, dateFormat, {locale: ptBR});
};

export {formatPhoneNumber, removeMask, formatDate};
