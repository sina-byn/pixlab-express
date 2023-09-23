// * data
import { filters_data, filter_names } from '../data/filters';

const readImage = (imageFile, onRead) => {
  const reader = new FileReader();

  reader.onload = e => {
    const ext = imageFile.name.slice(imageFile.name.lastIndexOf('.')) === 'png' ? 'png' : 'jpeg';
    const dataURL = e.target.result;
    const image = new Image();

    image.src = dataURL;
    image.onload = () => onRead(image, dataURL, ext);
  };

  reader.readAsDataURL(imageFile);
};

const drawImage = (canvas, image, imageProps) => {
  const context = canvas.getContext('2d');
  const { el, width, height } = image;
  const { rotate = 0, scale = { x: 1, y: 1 }, filters = {} } = imageProps;
  const radians = (rotate * Math.PI) / 180;

  if ((rotate / 90) % 2 === 0) {
    canvas.width = width;
    canvas.height = height;
  } else {
    canvas.width = height;
    canvas.height = width;
  }

  context.save();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.filter = joinFilters(filters);
  context.translate(canvas.width / 2, canvas.height / 2);
  context.scale(scale.x, scale.y);
  context.rotate(radians);
  context.drawImage(el, -width / 2, -height / 2);
  context.restore();
};

const sortFilters = filters => {
  return filters.sort((f1, f2) => filter_names.indexOf(f1) - filter_names.indexOf(f2));
};

const joinFilters = filters => {
  return Object.entries(filters).reduce((filtersString, [filter, value]) => {
    if (value.toString().trim() !== '') {
      console.log(filter);
      console.log(filters_data[filter]);
      const { unit } = filters_data[filter];
      filtersString += `${filter}(${value}${unit})`;
    }

    return filtersString;
  }, '');
};

export { readImage, drawImage, sortFilters, joinFilters };
