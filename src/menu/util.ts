import {uuid} from '../utils/index';

export const itemsExtraProps = {
  getValue(target: { node: { children: any[]; }; }, fieldValue: any) {
    const map = target.node.children.map((child) => {
      const key = child.getPropValue('key') ? String(child.getPropValue('key')) : child.id;
      const result = {
        key,
        category: child.componentName,
      };
      ['children', 'items', 'title'].forEach((propKey) => {
        if (child.getPropValue(propKey)) {
          // @ts-ignore
          result[propKey] = child.getPropValue(propKey);
        }
      });
      return result;
    });
    return map.length === 0 ? fieldValue : map;
  },
  setValue(target: { node: any; }, value: any[]) {
    const { node } = target;
    const map = {};

    if (!Array.isArray(value)) {
      value = [];
    }
    value.forEach((item) => {
      const tabItem = Object.assign({}, item);
      // @ts-ignore
      map[item.key] = tabItem;
    });
    node.children.mergeChildren(
      (child: { getPropValue: (arg0: string) => any; componentName: string | any[]; setPropValue: (arg0: string, arg1: any) => void; }) => {
        const key = String(child.getPropValue('key'));

        if (
          Object.hasOwnProperty.call(map, key) &&
          // @ts-ignore
          child.componentName.includes(map[key].category)
        ) {
          // @ts-ignore
          if (map[key].category === 'Menu.Item') {
            // @ts-ignore
            child.setPropValue('children', map[key].children);
          } else {
            // @ts-ignore
            child.setPropValue('title', map[key].title || map[key].children);
          }
          // @ts-ignore
          delete map[key];
          return false;
        }
        return true;
      },
      () => {
        const items = [];
        for (const key in map) {
          // @ts-ignore
          const itemProps = map[key];

          if (Object.hasOwnProperty.call(map, key)) {
            if (itemProps.category === 'Menu.Item') {
              items.push({
                componentName: 'Menu.Item',
                props: {
                  key: itemProps.key,
                  children: itemProps.children,
                },
              });
            } else {
              items.push({
                componentName: 'Menu.SubMenu',
                props: {
                  key: itemProps.key,
                  title: itemProps.title || itemProps.children,
                  items:
                    itemProps.items && itemProps.items.length === 0
                      ? itemProps.items
                      : [
                        {
                          key: `item-${uuid()}`,
                          category: 'Menu.Item',
                          children: '子菜单名',
                        },
                      ],
                },
              });
            }
          }
        }
        return items;
      },
      (child1: { getPropValue: (arg0: string) => any; }, child2: { getPropValue: (arg0: string) => any; }) => {
        const a = value.findIndex(
          (item) => String(item.key) === String(child1.getPropValue('key')),
        );
        const b = value.findIndex(
          (item) => String(item.key) === String(child2.getPropValue('key')),
        );
        return a - b;
      },
    );
  },
};