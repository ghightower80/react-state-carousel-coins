import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

// smoke test render carousel component with sample props//
describe('Carousel Component', () => {
  const photos = [
    { src: 'https://example.com/image1.jpg', caption: 'Image 1' },
    { src: 'https://example.com/image2.jpg', caption: 'Image 2' },
    { src: 'https://example.com/image3.jpg', caption: 'Image 3' },
  ];

  test('renders without crashing', () => {
    render(<Carousel photos={photos} title="Test Carousel" />);
  });

  // snapshot test compares rendered output to previous//
  test('matches snapshot', () => {
    const { container } = render(<Carousel photos={photos} title="Test Carousel" />);
    expect(container).toMatchSnapshot();
  });
});


describe('Carousel Component', () => {
  const photos = [
    { src: 'https://example.com/image1.jpg', caption: 'Image 1' },
    { src: 'https://example.com/image2.jpg', caption: 'Image 2' },
    { src: 'https://example.com/image3.jpg', caption: 'Image 3' },
  ];

  test('clicking left arrow moves to previous image', () => {
    const { getByTestId } = render(<Carousel photos={photos} title="Test Carousel" />);

    // Move to the second image by clicking the right arrow
    fireEvent.click(getByTestId('right-arrow'));

    // Now, clicking the left arrow should move back to the first image
    fireEvent.click(getByTestId('left-arrow'));

    // Check if the first image is displayed
    expect(getByTestId('caption')).toHaveTextContent('Image 1');
  });
});


describe('Carousel Component', () => {
  const photos = [
    { src: 'https://example.com/image1.jpg', caption: 'Image 1' },
    { src: 'https://example.com/image2.jpg', caption: 'Image 2' },
    { src: 'https://example.com/image3.jpg', caption: 'Image 3' },
  ];

  test('clicking left arrow moves to previous image', () => {
    const { getByTestId } = render(<Carousel photos={photos} title="Test Carousel" />);

    // Move to the second image by clicking the right arrow
    fireEvent.click(getByTestId('right-arrow'));

    // clicking the left arrow should move back to the first image
    fireEvent.click(getByTestId('left-arrow'));

    // Check if the first image is displayed
    expect(getByTestId('caption')).toHaveTextContent('Image 1');
  });
});


// checks to see if left arrow is missing on first image//
describe('Carousel Component', () => {
  const photos = [
    { src: 'https://example.com/image1.jpg', caption: 'Image 1' },
    { src: 'https://example.com/image2.jpg', caption: 'Image 2' },
    { src: 'https://example.com/image3.jpg', caption: 'Image 3' },
  ];

  test('left arrow is missing on first image, right arrow is missing on last image', () => {
    const { getByTestId, rerender } = render(<Carousel photos={photos} title="Test Carousel" />);

    // Check if left arrow is missing on first image
    expect(() => getByTestId('left-arrow')).toThrow();

    // Check if right arrow is present on first image
    expect(getByTestId('right-arrow')).toBeInTheDocument();

    // Move to the last image
    rerender(<Carousel photos={photos} title="Test Carousel" />);
    fireEvent.click(getByTestId('right-arrow'));
    fireEvent.click(getByTestId('right-arrow'));

    // Check if left arrow is present on last image
    expect(getByTestId('left-arrow')).toBeInTheDocument();

    // Check if right arrow is missing on last image
    expect(() => getByTestId('right-arrow')).toThrow();
  });
});