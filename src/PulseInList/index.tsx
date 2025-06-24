import React, { useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  type ViewStyle, 
} from 'react-native';

type ListRenderItemInfo<T> = {
  item: T;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (
      select: 'leading' | 'trailing',
      newProps: Record<string, unknown>
    ) => void;
  };
};

type PulseInListProps<T> = {
  data: T[];
  renderItem: (info: ListRenderItemInfo<T>) => React.ReactElement;
  animationDelay?: number;
  isHorizontal:boolean;
  animationType:string;
};

function PulseInList<T>({
  data,
  renderItem,
  animationDelay = 100,
  isHorizontal,
  animationType
}: PulseInListProps<T>) {
  const ScaleAnims = data.map(() =>
    useRef(new Animated.Value(0.8)).current
  );

  useEffect(() => {
    ScaleAnims.forEach((anim, index) => {
      if(animationType === 'spring'){
      Animated.spring(anim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
        tension: 100,
        delay: index * animationDelay,
      }).start();}
      else{
      Animated.timing(anim, {
        toValue: 1,
        useNativeDriver: true, 
        delay: index * animationDelay,
      }).start();
      }
    });
  }, []);

  const AnimatedRenderItem = ({
    item,
    index,
  }: {
    item: T;
    index: number;
  }) => {
    return (
      <Animated.View
        style={{
          transform: [{ scale: ScaleAnims[index] }],
        } as Animated.WithAnimatedValue<ViewStyle>}
      >
        {renderItem({ item, index, separators: { highlight: () => {}, unhighlight: () => {}, updateProps: () => {} } })}
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal={isHorizontal}
      keyExtractor={(item, index) =>
        (item as any).key || index.toString()
      }
      renderItem={({ item, index }) => (
        <AnimatedRenderItem item={item} index={index} />
      )}
    />
  );
}

export default PulseInList;
