export const useLoadImages = async () => {
  const res = await fetch('/api/room');
  const data = await res.json();

  return data;
};
