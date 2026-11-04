import "./Icons.css";
const imgHeaderMdiLightAccount = `${import.meta.env.BASE_URL}images/figma/imgHeaderMdiLightAccount.svg`;
const imgGroup = `${import.meta.env.BASE_URL}images/figma/imgGroup.svg`;
const imgHeaderBasilSearchOutline = `${import.meta.env.BASE_URL}images/figma/imgHeaderBasilSearchOutline.svg`;
export function HeaderMdiLightAccount({ className }) {
  return (
    <div className={className || "asset__layer-6"} data-node-id="69:316" data-name="header/mdi-light:account">
      <img alt="" className="asset__layer-7" src={imgHeaderMdiLightAccount} />
    </div>
  );
}

export function HeaderIconamoonShoppingBagThin({ className }) {
  return (
    <div className={className || "asset__layer-8"} data-node-id="69:315" data-name="header/iconamoon:shopping-bag-thin">
      <div className="asset__layer-9" data-node-id="69:298" data-name="Group">
        <div className="asset__layer-10">
          <img alt="" className="asset__layer-11" src={imgGroup} />
        </div>
      </div>
    </div>
  );
}

export function HeaderBasilSearchOutline({ className }) {
  return (
    <div className={className || "asset__layer-12"} data-node-id="69:314" data-name="header/basil:search-outline">
      <img alt="" className="asset__layer-13" src={imgHeaderBasilSearchOutline} />
    </div>
  );
}


