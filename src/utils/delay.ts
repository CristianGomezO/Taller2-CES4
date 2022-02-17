export const delay = (duration: number, callback: any) => {
  setTimeout(() => {
    callback();
  }, duration);
};
