export const trackEvent = (eventName, params = {}) => {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
    return;
  }

  if (typeof window.ga === "function") {
    window.ga("send", "event", {
      eventCategory: params.event_category || "engagement",
      eventAction: eventName,
      eventLabel: params.event_label || "",
    });
  }
};
