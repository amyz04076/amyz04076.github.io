const vis1 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  data: {
    url: "videogames_wide.csv",
  },

  mark: "bar",

  encoding: {
    x: {
      field: "Platform",
      type: "nominal",
      title: "Platform",
    },

    y: {
      aggregate: "sum",
      field: "Global_Sales",
      type: "quantitative",
      title: "Total Global Sales (Millions)",
    },

    color: {
      field: "Genre",
      type: "nominal",
      title: "Genre",
    },
  },
};

vegaEmbed("#vis1", vis1);

const vis2 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  data: {
    url: "videogames_wide.csv",
  },

  mark: "bar",

  encoding: {
    x: {
      field: "Genre",
      type: "nominal",
      title: "Genre",
    },

    y: {
      aggregate: "sum",
      field: "Global_Sales",
      type: "quantitative",
      title: "Total Global Sales (Millions)",
    },
  },
};

vegaEmbed("#vis2", vis2);

const vis3 = {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",

  data: { url: "videogames_wide.csv" },

  mark: "rect",

  encoding: {
    x: { field: "Platform", type: "nominal" },
    y: { field: "Genre", type: "nominal" },

    color: {
      aggregate: "sum",
      field: "Global_Sales",
      type: "quantitative",
      title: "Total Global Sales",
    },
  },
};

vegaEmbed("#vis3", vis3);
