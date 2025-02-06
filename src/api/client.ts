const client = (apiKey: string) => ({
  fetch: async (
    path: string,
    params?: Record<string, string | number | boolean>
  ) => {
    const queryParams = new URLSearchParams([
      ...(params
        ? Object.entries(params).map(([key, value]) => [key, value.toString()])
        : []),
      ['key', apiKey],
    ]);
    return (
      await fetch(`${import.meta.env.API_URL}${path}?${queryParams.toString()}`)
    ).json();
  },
});

export default client(import.meta.env.API_KEY);
