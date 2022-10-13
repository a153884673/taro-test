import React, { useEffect } from "react";
import { View } from "@tarojs/components";
import Taro, {
  eventCenter,
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from "@tarojs/taro";

const Search = () => {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log("1");
  });

  // 对应 onReady
  useReady(() => {
    console.log("2");
  });

  // 对应 onShow
  useDidShow(() => {
    console.log("3");
  });

  // 对应 onHide
  useDidHide(() => {
    console.log("4");
  });

  usePullDownRefresh(() => {});

  return (
    <View
      className="search"
      onClick={() =>
        Taro.navigateTo({
          url: "../musicLibrary/index"
        })
      }
    >
      Search
    </View>
  );
};

export default Search;
