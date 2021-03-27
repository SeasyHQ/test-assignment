export class Routes {
  static MARINA_LIST = "/marina-list";
  static MARINA_DETAIL = "/marina-detail/:id";

  static getTo = (route: string, args: { id?: string }) => {
    if (route === Routes.MARINA_LIST) {
      return Routes.MARINA_LIST;
    } else if (route === Routes.MARINA_DETAIL) {
      return `/marina-detail/${args.id}/`;
    }

    throw Error(`invalid route ${route}`);
  };
}
