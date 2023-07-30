import { Container } from 'typedi';
import { useContainer as routingUseContainer } from 'routing-controllers';

routingUseContainer(Container);

export default Container;