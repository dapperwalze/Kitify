export const imageRenderer = (
  Component,
  IMAGES,
  startIndex,
  endIndex,
  Link,
  location,
  setIsModalVisible
) => {
  //const dataFromLocalStorage = JSON.parse(
  //window.localStorage.getItem("userGallery")
  //);

  const imageDataSlice = IMAGES.slice(startIndex, endIndex);

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
