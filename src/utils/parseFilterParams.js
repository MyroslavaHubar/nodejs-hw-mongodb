const parseContactType = (contactType) => {
  const isString = typeof contactType === 'string';
  if (!isString) return;
  const isType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isType(contactType)) return contactType;
};

const parseContactIsFavourite = (value) => {
  if (typeof value === 'boolean') {
    return value;
  }
  return undefined;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedContactIsFavourite = parseContactIsFavourite(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedContactIsFavourite,
  };
};
