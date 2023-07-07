import {useComponent} from '@brushes/simulate-component';
import {useTestStore, jumpLink} from 'qj-bbc-mobile-store';

export const Test = () => {
  const {View} = useComponent();
  const {info} = useTestStore();

  return (
    <View>
      i am test page
      <View onClick={jumpLink}>{info}</View>
    </View>
  )
}

