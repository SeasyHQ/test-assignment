export class Routes {
  static MARINA_LIST = "/marina-list";
  static MARINA_DETAIL = "/marina-detail/:id";
  static ADD_MARINA = "/add-marina";

  static getTo = (route: string, args: { id?: string }) => {
    if (route === Routes.MARINA_DETAIL) {
      return `/marina-detail/${args.id}/`;
    }
    return route;
  };
}
