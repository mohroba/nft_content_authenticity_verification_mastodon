import store from './store';

export function filteredItem(item, filterContext, currentAccountID) {
  const { filtered } = item;
  if (!filtered?.length) return true;
  const isSelf = currentAccountID && item.account?.id === currentAccountID;
  if (isSelf) return true;
  const appliedFilters = filtered.filter((f) => {
    const { filter } = f;
    const hasContext = filter.context.includes(filterContext);
    if (!hasContext) return false;
    if (!filter.expiresAt) return hasContext;
    return new Date(filter.expiresAt) > new Date();
  });
  if (!appliedFilters.length) return true;
  const isHidden = appliedFilters.some((f) => f.filter.filterAction === 'hide');
  console.log({ isHidden, filtered, appliedFilters, item });
  if (isHidden) return false;
  const isWarn = appliedFilters.some((f) => f.filter.filterAction === 'warn');
  if (isWarn) {
    const filterTitles = appliedFilters.map((f) => f.filter.title);
    item._filtered = {
      titles: filterTitles,
      titlesStr: filterTitles.join(' • '),
    };
  }
  return isWarn;
}
export function filteredItems(items, filterContext) {
  if (!items?.length) return [];
  if (!filterContext) return items;
  const currentAccountID = store.session.get('currentAccount');
  return items.filter((item) =>
    filteredItem(item, filterContext, currentAccountID),
  );
}
