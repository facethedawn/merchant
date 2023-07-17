export const extractLastChildList = (data: any): Array<{ classtreeCode: string, classtreeName: string }> => {
  const result = [];
  for (const item of data) {
    if (item.childList !== null) {
      result.push(...extractLastChildList(item.childList));
    } else {
      result.push({
        classtreeCode: item.classtreeCode,
        classtreeName: item.classtreeName,
      });
    }
  }
  return result;
}
