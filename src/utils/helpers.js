export const imageRenderer = (
  Component,
  imageData,
  startIndex,
  endIndex,
  Link,
  location,
  setIsModalVisible
) => {
  const imageDataSlice = imageData.slice(startIndex, endIndex);
  console.log(imageDataSlice);

  const modalState = () => {
    setIsModalVisible(true);
  };

  return imageDataSlice.map((image) => (
    <Link
      key={image.id}
      to={{
        pathname: `/gallery/img/${image.id}`,
        state: { background: location },
      }}
    >
      <Component
        src={image.url}
        alt={image.alt}
        setIsModalVisible={modalState}
      />
    </Link>
  ));
};
