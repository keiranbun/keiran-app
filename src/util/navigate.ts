export const navigateTo = (url: string) => {
  window.location.href = url;
};

export const navigateNewTab = (url: string) => {
  window.open(url, "_blank");
};
