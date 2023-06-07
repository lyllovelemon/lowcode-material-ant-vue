// @ts-ignore
function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default {
  componentName: 'ACol',
  title: '栅格-列',
  props: [
    {
      name: 'span',
      title: { label: '占位格数', tip: '栅格占位格数' },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
          max: 24,
        },
      },
    },
    {
      name: 'order',
      title: { label: '栅格顺序', tip: '栅格顺序' },
      propType: 'number',
    },
    {
      name: 'pull',
      title: { label: '右侧偏移', tip: '栅格往右移动格数' },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
          max: 24,
        },
      },
    },
    {
      name: 'push',
      title: { label: '左侧偏移', tip: '栅格往左移动格数' },
      propType: 'number',
      setter: {
        componentName: 'NumberSetter',
        props: {
          min: 0,
          max: 24,
        },
      },
    },
  ],
  configure: {
    component: { isContainer: true, nestingRule: { parentWhitelist: ['ARow'] } },
    supports: { style: true },
    advanced: {
      getResizingHandlers: () => {
        return ['e'];
      },
      callbacks: {
        resizeStart: (e: any, currentNode: { parent: any; parentRect: any; beforeSpan: any; getPropValue: (arg0: string) => number; startRect: any; getRect: () => any; }) => {
          const parent = currentNode.parent;
          if (parent) {
            const parentNode = parent.getDOMNode();
            if (parentNode) {
              currentNode.parentRect = parentNode.getBoundingClientRect();
            }
          }
          currentNode.beforeSpan = currentNode.getPropValue('span') || 24;
          currentNode.startRect = currentNode.getRect();
        },
        resize: (e: { deltaX: any; }, currentNode: { startRect: { width: any; }; beforeSpan: number; parentRect: { width: number; }; moveAColumn: number; targetAColumn: number; getDOMNode: () => any; }) => {
          const { deltaX } = e;
          const startWidth = currentNode.startRect
            ? currentNode.startRect.width
            : currentNode.beforeSpan * (currentNode.parentRect.width / 24);
          let width = startWidth + deltaX;
          if (!currentNode.startRect) {
            currentNode.startRect = { width };
          }
          width = clamp(width, 0, currentNode.parentRect.width);
          const allowMoveX = Math.round(width - startWidth); // 实际被允许的x轴移动
          currentNode.moveAColumn = Math.round(allowMoveX / (currentNode.parentRect.width / 24)); // 计算移动距离所占的列
          if (allowMoveX > 0) {
            currentNode.moveAColumn++;
          } else {
            currentNode.moveAColumn--;
          }
          currentNode.targetAColumn = clamp(currentNode.beforeSpan + currentNode.moveAColumn, 1, 24);
          // currentNode.setPropValue('span', currentNode.targetAColumn);
          const dom = currentNode.getDOMNode();
          dom.style.width = `${Math.round(width)}px`;
          dom.style.flex = 'none';
          dom.style.maxWidth = '100%';
        },
        resizeEnd: (e: any, currentNode: { getDOMNode: () => { (): any; new(): any; style: { (): any; new(): any; cssText: string; }; }; targetAColumn: number; setPropValue: (arg0: string, arg1: any) => void; }) => {
          currentNode.getDOMNode().style.cssText = '';
          currentNode.targetAColumn = clamp(currentNode.targetAColumn, 1, 24);
          currentNode.setPropValue('span', currentNode.targetAColumn);
        },
      },
    },
  },
  snippets:[]
}
