export function getIndexImage(index: number): string {
  const pokeIndex = ("000" + (index + 1)).slice(-3);

  return pokeIndex;
}
