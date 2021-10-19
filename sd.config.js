module.exports = {
  source: ["./src/tokens/*.json"],
  fileHeader: {
    pyxisHeader: (defaultMessage) => {
      return [
        ...defaultMessage,
        "These tokens can only be used in foundations files. Don't use in component."
      ]
    }
  },
  platforms: {
    "scss": {
      transformGroup: "scss",
      buildPath: "./src/scss/tokens/",
      files: [
        {
          format: "scss/variables",
          destination: "colors.scss",
          filter: {
            attributes: {
              category: "color"
            }
          },
          options: {
            fileHeader: `pyxisHeader`,
          },
        }
      ],
    },
  },
};