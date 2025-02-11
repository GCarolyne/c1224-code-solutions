import './Image.css';

type Image = {
  src: string;
};

export function Image(props: Image) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={props.src} alt="space-image" />
      </div>
    </div>
  );
}
