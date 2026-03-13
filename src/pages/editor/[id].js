import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PortfolioAllocation from '../../widgets/PortfolioAllocation';
import PowerPointWidget from '../../widgets/PowerPointWidget'

const EditorPage = () => {
  const router = useRouter();
  const { id } = router.query; // Access the dynamic route parameter (unique ID)
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Get the selected items from the URL query parameter
    if (router.isReady && router.query.selectedItems) {
      setSelectedItems(router.query.selectedItems.split(","));
    }
  }, [router.isReady, router.query.selectedItems]);

  return (
    // <PortfolioAllocation/>
    <PowerPointWidget />
  );
};

export default EditorPage;
