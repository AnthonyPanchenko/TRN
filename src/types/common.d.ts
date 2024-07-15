type DefaultRouteParams = { locale: LocaleCodes };

export type RouteParams<TParams = undefined> = TParams extends undefined
  ? DefaultRouteParams
  : TParams & DefaultRouteParams;

export interface AppPageProps<TParams = undefined, TSearchParams = undefined> {
  params: RouteParams<TParams>;
  searchParams?: TSearchParams;
}

export interface AppLayoutProps<TParams = undefined> {
  params: RouteParams<TParams>;
  children?: React.ReactNode;
  auth?: React.ReactNode;
}

export type ModalWindowBaseProps = {
  isOpen: boolean;
  onClose?: () => void;
};
