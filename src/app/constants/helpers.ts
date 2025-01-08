export function objectToUrlParams(obj: Record<string, unknown>): string {
  const params = new URLSearchParams();
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      params.append(key, obj[key] as string);
    }
  }
  return params.toString();
}
