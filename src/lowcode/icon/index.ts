import 'ant-design-vue/es/icon/style';
import * as icons from '@ant-design/icons-vue';
import { defineComponent, h } from 'vue';

const createFromIconfontCN = icons.createFromIconfontCN;

export const AIcon = defineComponent({
  name: 'AIcon',
  props: {
    type: {
      type: String,
      required: true,
    },
    size: Number,
    color: String,
    rotate: Number,
    spin: Boolean,
    style: Object,
  },
  setup(props) {
    return () => {
      // eslint-disable-next-line vue/no-setup-props-destructure
      const { type = '', size, color, style, ...rest } = props;
      const IconComp = ((icons || {}) as any)[type];
      const cStyle = {
        ...style,
        fontSize: `${size}px`,
        color,
      } as any;
      if (!IconComp) {
        const IconFont = createFromIconfontCN();
        return h(IconFont, { style: cStyle, type, ...rest });
      }
      return h(IconComp, { style: cStyle, ...rest, twoToneColor: color });
    };
  },
});
