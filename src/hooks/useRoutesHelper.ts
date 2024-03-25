import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function useRoutesHelper() {
  const [routeParams, setRouteParams] = useState<any>({});

  const [searchRouteParams] = useSearchParams();

  const currentUrlWithHostname = window.location.href
    .replace("http://", "")
    .replace("https://", "");

  const endOfHostName = currentUrlWithHostname.split("/");
  const currentUrl = endOfHostName.slice(1).join("/");

  useEffect(() => {
    // @ts-ignore
    const routeParams = Object.fromEntries([...searchRouteParams]);
    if (
      routeParams && // 👈 null and undefined check
      Object.keys(routeParams).length !== 0 &&
      Object.getPrototypeOf(routeParams) === Object.prototype
    ) {
      setRouteParams(routeParams);
    }
  }, [searchRouteParams]);

  return { routeParams, searchRouteParams, currentUrl };
}

export default useRoutesHelper;
