import request from "./request";

export function getReviews() {
  return request({ method: "get", url: "/reviews" });
}
