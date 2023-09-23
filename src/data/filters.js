const filters_data = {
  blur: {
    DEFAULT: 0,
    unit: 'px',
    max: 50,
  },
  brightness: {
    DEFAULT: 100,
    unit: '%',
    min: 0,
    max: 200,
  },
  contrast: {
    DEFAULT: 100,
    unit: '%',
    max: 200,
  },
  grayscale: {
    DEFAULT: 0,
    unit: '%',
    max: 100,
  },
  'hue-rotate': {
    DEFAULT: 0,
    unit: 'deg',
    max: 360,
  },
  invert: {
    DEFAULT: 0,
    unit: '%',
    max: 200,
  },
  opacity: {
    DEFAULT: 100,
    unit: '%',
    max: 100,
  },
  saturate: {
    DEFAULT: 100,
    unit: '%',
    max: 200,
  },
  sepia: {
    DEFAULT: 0,
    unit: '%',
    max: 100,
  },
};

const filter_names = Object.keys(filters_data);

export { filters_data, filter_names };
