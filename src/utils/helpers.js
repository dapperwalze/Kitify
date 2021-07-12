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
  const modalState = () => {
    setIsModalVisible(true);
  };
  console.log(typeof setIsModalVisible);
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
