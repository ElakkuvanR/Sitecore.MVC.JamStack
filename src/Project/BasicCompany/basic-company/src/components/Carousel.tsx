import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';

type CarouselProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const Carousel = (props: CarouselProps): JSX.Element => (
  <div>
    <p>Carousel Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<CarouselProps>(Carousel);
